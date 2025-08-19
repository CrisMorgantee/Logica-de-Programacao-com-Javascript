
// PASSO 5: FUNÇÕES DE CÁLCULO
// ============================
// Conceitos aplicados: funções com parâmetros, return, validação

console.log("🛒 PASSO 5: FUNÇÕES DE CÁLCULO");
console.log("=".repeat(50));

// 5.1 - FUNÇÃO PARA CALCULAR DESCONTO SIMPLES
function calcularDesconto(valor, percentual) {
    // Validação de parâmetros
    if (typeof valor !== "number" || typeof percentual !== "number") {
        console.log("❌ Erro: Parâmetros devem ser números");
        return 0;
    }
    
    if (valor < 0 || percentual < 0 || percentual > 100) {
        console.log("❌ Erro: Valores inválidos");
        return 0;
    }
    
    return valor * (percentual / 100);
}

// 5.2 - FUNÇÃO PARA CALCULAR FRETE
function calcularFrete(estado, peso, valorCompra) {
    // Validações
    if (typeof estado !== "string" || typeof peso !== "number" || typeof valorCompra !== "number") {
        console.log("❌ Erro: Parâmetros inválidos para frete");
        return 0;
    }
    
    // Frete grátis para compras acima de R$ 200
    if (valorCompra >= 200) {
        return 0;
    }
    
    // Tabela de frete por estado (simplificada)
    const tabelaFrete = {
        "SP": 10.00,
        "RJ": 12.00,
        "MG": 15.00,
        "RS": 20.00,
        "PR": 18.00,
        "SC": 18.00,
        "GO": 25.00,
        "DF": 22.00,
        "BA": 28.00,
        "PE": 30.00,
        "CE": 35.00,
        "AM": 45.00
    };
    
    const freteBase = tabelaFrete[estado.toUpperCase()] || 40.00; // Padrão para outros estados
    
    // Acréscimo por peso (R$ 2 por kg acima de 1kg)
    const acrescimoPeso = peso > 1 ? (peso - 1) * 2 : 0;
    
    return freteBase + acrescimoPeso;
}

// 5.3 - FUNÇÃO PARA CALCULAR IMPOSTO
function calcularImposto(valor, categoria) {
    if (typeof valor !== "number" || typeof categoria !== "string") {
        return 0;
    }
    
    // Tabela de impostos por categoria
    const impostos = {
        "Eletrônicos": 0.15,      // 15%
        "Roupas": 0.08,           // 8%
        "Casa": 0.10,             // 10%
        "Livros": 0.02,           // 2%
        "Alimentação": 0.05       // 5%
    };
    
    const percentualImposto = impostos[categoria] || 0.12; // 12% padrão
    return valor * percentualImposto;
}

// 5.4 - FUNÇÃO PARA CALCULAR PARCELAS
function calcularParcelas(valor, numeroParcelas, juros = 0) {
    // Validações
    if (typeof valor !== "number" || typeof numeroParcelas !== "number") {
        return null;
    }
    
    if (valor <= 0 || numeroParcelas <= 0 || numeroParcelas > 24) {
        return null;
    }
    
    if (numeroParcelas === 1) {
        return {
            parcelas: 1,
            valorParcela: valor,
            valorTotal: valor,
            juros: 0
        };
    }
    
    // Cálculo com juros compostos
    const valorComJuros = valor * Math.pow(1 + juros, numeroParcelas);
    const valorParcela = valorComJuros / numeroParcelas;
    const totalJuros = valorComJuros - valor;
    
    return {
        parcelas: numeroParcelas,
        valorParcela: valorParcela,
        valorTotal: valorComJuros,
        juros: totalJuros
    };
}

// 5.5 - FUNÇÃO PARA VALIDAR CEP
function validarCEP(cep) {
    if (typeof cep !== "string") {
        return false;
    }
    
    // Remove espaços e hífen
    const cepLimpo = cep.replace(/\D/g, "");
    
    // Verifica se tem 8 dígitos
    return cepLimpo.length === 8;
}

// 5.6 - FUNÇÃO PRINCIPAL PARA CALCULAR RESUMO DA COMPRA
function calcularResumoCompra(itens, usuario, enderecoEntrega, formaPagamento) {
    // Validações básicas
    if (!Array.isArray(itens) || itens.length === 0) {
        console.log("❌ Carrinho vazio");
        return null;
    }
    
    if (!usuario || !enderecoEntrega || !formaPagamento) {
        console.log("❌ Dados incompletos");
        return null;
    }
    
    // Calcular subtotal
    let subtotal = 0;
    let pesoTotal = 0;
    
    for (let item of itens) {
        subtotal += item.produto.preco * item.quantidade;
        // Peso estimado: eletrônicos = 0.5kg por item, outros = 0.2kg
        const pesoItem = item.produto.categoria === "Eletrônicos" ? 0.5 : 0.2;
        pesoTotal += pesoItem * item.quantidade;
    }
    
    // Calcular desconto do usuário
    const descontoUsuario = calcularDesconto(subtotal, usuario.descontoPercentual || 0);
    
    // Calcular desconto adicional para compras grandes
    let descontoVolume = 0;
    if (subtotal > 1000) {
        descontoVolume = calcularDesconto(subtotal, 5); // 5% para compras > R$ 1000
    } else if (subtotal > 500) {
        descontoVolume = calcularDesconto(subtotal, 2); // 2% para compras > R$ 500
    }
    
    const totalDescontos = descontoUsuario + descontoVolume;
    const valorComDesconto = subtotal - totalDescontos;
    
    // Calcular frete
    const frete = calcularFrete(enderecoEntrega.estado, pesoTotal, valorComDesconto);
    
    // Calcular impostos (sobre o valor com desconto)
    let totalImpostos = 0;
    for (let item of itens) {
        const valorItem = (item.produto.preco * item.quantidade) - 
                         (totalDescontos * (item.produto.preco * item.quantidade) / subtotal);
        totalImpostos += calcularImposto(valorItem, item.produto.categoria);
    }
    
    // Valor final
    const valorTotal = valorComDesconto + frete + totalImpostos;
    
    // Calcular parcelas se aplicável
    let parcelamento = null;
    if (formaPagamento.tipo === "cartao" && formaPagamento.parcelas > 1) {
        const juros = formaPagamento.parcelas <= 6 ? 0 : 0.02; // 2% ao mês após 6x
        parcelamento = calcularParcelas(valorTotal, formaPagamento.parcelas, juros);
    }
    
    return {
        subtotal: subtotal,
        descontos: {
            usuario: descontoUsuario,
            volume: descontoVolume,
            total: totalDescontos
        },
        frete: frete,
        impostos: totalImpostos,
        valorTotal: valorTotal,
        pesoTotal: pesoTotal,
        parcelamento: parcelamento
    };
}

// 5.7 - TESTANDO AS FUNÇÕES
console.log("\n💰 TESTANDO FUNÇÕES DE CÁLCULO:");

// Teste 1: Desconto simples
console.log("\n1. TESTE DE DESCONTO:");
const valorProduto = 100.00;
const desconto10 = calcularDesconto(valorProduto, 10);
console.log(`Valor: R$${valorProduto} | Desconto 10%: R$${desconto10.toFixed(2)}`);
console.log(`Valor final: R$${(valorProduto - desconto10).toFixed(2)}`);

// Teste 2: Cálculo de frete
console.log("\n2. TESTE DE FRETE:");
const freteRJ = calcularFrete("RJ", 2.5, 150); // 2.5kg, R$150
const freteSP = calcularFrete("SP", 1.0, 250); // 1kg, R$250 (frete grátis)
console.log(`Frete RJ (2.5kg, R$150): R$${freteRJ.toFixed(2)}`);
console.log(`Frete SP (1kg, R$250): R$${freteSP.toFixed(2)} (frete grátis)`);

// Teste 3: Imposto
console.log("\n3. TESTE DE IMPOSTO:");
const impostoEletronico = calcularImposto(1000, "Eletrônicos");
const impostoRoupa = calcularImposto(200, "Roupas");
console.log(`Imposto eletrônicos (R$1000): R$${impostoEletronico.toFixed(2)}`);
console.log(`Imposto roupas (R$200): R$${impostoRoupa.toFixed(2)}`);

// Teste 4: Parcelamento
console.log("\n4. TESTE DE PARCELAMENTO:");
const parcelas6x = calcularParcelas(600, 6, 0); // 6x sem juros
const parcelas12x = calcularParcelas(1200, 12, 0.02); // 12x com juros
console.log(`6x sem juros: ${parcelas6x.parcelas}x de R$${parcelas6x.valorParcela.toFixed(2)}`);
console.log(`12x com juros: ${parcelas12x.parcelas}x de R$${parcelas12x.valorParcela.toFixed(2)} (Total: R$${parcelas12x.valorTotal.toFixed(2)})`);

// Teste 5: Resumo completo da compra
console.log("\n5. TESTE DE RESUMO COMPLETO:");

const itensTeste = [
    { produto: { nome: "Smartphone", preco: 1200, categoria: "Eletrônicos" }, quantidade: 1 },
    { produto: { nome: "Fone", preco: 300, categoria: "Eletrônicos" }, quantidade: 2 }
];

const usuarioTeste = {
    nome: "João",
    descontoPercentual: 10 // 10% desconto
};

const enderecoTeste = {
    estado: "SP",
    cep: "01234-567"
};

const pagamentoTeste = {
    tipo: "cartao",
    parcelas: 10
};

const resumo = calcularResumoCompra(itensTeste, usuarioTeste, enderecoTeste, pagamentoTeste);

if (resumo) {
    console.log("RESUMO DA COMPRA:");
    console.log(`Subtotal: R$${resumo.subtotal.toFixed(2)}`);
    console.log(`Desconto usuário: -R$${resumo.descontos.usuario.toFixed(2)}`);
    console.log(`Desconto volume: -R$${resumo.descontos.volume.toFixed(2)}`);
    console.log(`Frete: R$${resumo.frete.toFixed(2)}`);
    console.log(`Impostos: R$${resumo.impostos.toFixed(2)}`);
    console.log(`TOTAL: R$${resumo.valorTotal.toFixed(2)}`);
    
    if (resumo.parcelamento) {
        console.log(`Parcelamento: ${resumo.parcelamento.parcelas}x de R$${resumo.parcelamento.valorParcela.toFixed(2)}`);
    }
}

console.log("\n✅ PASSO 5 CONCLUÍDO!");
console.log("Próximo: Sistema de descontos com estruturas de controle");
