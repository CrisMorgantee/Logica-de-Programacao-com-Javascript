
// Projeto Prático: Sistema de E-commerce com Funções de Retorno

console.log("=== SISTEMA DE E-COMMERCE ===");

// Base de dados de produtos
const produtos = [
    { id: 1, nome: "Notebook", preco: 2500, categoria: "Eletrônicos", estoque: 5 },
    { id: 2, nome: "Mouse", preco: 50, categoria: "Eletrônicos", estoque: 20 },
    { id: 3, nome: "Teclado", preco: 120, categoria: "Eletrônicos", estoque: 15 },
    { id: 4, nome: "Cadeira", preco: 300, categoria: "Móveis", estoque: 8 },
    { id: 5, nome: "Mesa", preco: 500, categoria: "Móveis", estoque: 3 }
];

// Função para buscar produto por ID
function buscarProduto(id) {
    // Validação
    if (typeof id !== 'number' || id <= 0) {
        return { sucesso: false, erro: "ID inválido", produto: null };
    }
    
    // Busca
    const produto = produtos.find(p => p.id === id);
    
    if (produto) {
        return { sucesso: true, erro: null, produto };
    } else {
        return { sucesso: false, erro: "Produto não encontrado", produto: null };
    }
}

// Função para calcular preço com desconto
function calcularPrecoComDesconto(preco, percentualDesconto = 0, ehPremium = false) {
    // Guard clauses
    if (typeof preco !== 'number' || preco <= 0) {
        return null;
    }
    
    if (percentualDesconto < 0 || percentualDesconto > 100) {
        return null;
    }
    
    let precoFinal = preco;
    let descontoAplicado = percentualDesconto;
    
    // Desconto adicional para usuários premium
    if (ehPremium) {
        descontoAplicado += 5; // 5% extra
    }
    
    const valorDesconto = preco * (descontoAplicado / 100);
    precoFinal = preco - valorDesconto;
    
    return {
        precoOriginal: preco,
        percentualDesconto: descontoAplicado,
        valorDesconto: valorDesconto,
        precoFinal: precoFinal,
        economizou: valorDesconto > 0
    };
}

// Função para validar disponibilidade
function verificarDisponibilidade(produtoId, quantidade) {
    const resultado = buscarProduto(produtoId);
    
    if (!resultado.sucesso) {
        return resultado; // Retorna o erro da busca
    }
    
    const produto = resultado.produto;
    const disponivel = produto.estoque >= quantidade;
    
    return {
        sucesso: true,
        disponivel,
        produto,
        quantidadeSolicitada: quantidade,
        quantidadeDisponivel: produto.estoque,
        mensagem: disponivel 
            ? `${quantidade} unidade(s) disponível(is)`
            : `Apenas ${produto.estoque} unidade(s) em estoque`
    };
}

// Função para criar item do carrinho
function adicionarAoCarrinho(produtoId, quantidade, cupomDesconto = null) {
    // Verificar disponibilidade
    const disponibilidade = verificarDisponibilidade(produtoId, quantidade);
    
    if (!disponibilidade.sucesso || !disponibilidade.disponivel) {
        return {
            sucesso: false,
            erro: disponibilidade.mensagem || "Produto indisponível",
            item: null
        };
    }
    
    const produto = disponibilidade.produto;
    let percentualDesconto = 0;
    
    // Aplicar cupom de desconto
    if (cupomDesconto) {
        percentualDesconto = validarCupom(cupomDesconto);
    }
    
    // Calcular preços
    const calculoPreco = calcularPrecoComDesconto(produto.preco, percentualDesconto);
    
    if (!calculoPreco) {
        return {
            sucesso: false,
            erro: "Erro no cálculo de preço",
            item: null
        };
    }
    
    const item = {
        produtoId: produto.id,
        nome: produto.nome,
        precoUnitario: produto.preco,
        quantidade,
        cupomDesconto,
        percentualDesconto: calculoPreco.percentualDesconto,
        precoUnitarioFinal: calculoPreco.precoFinal,
        subtotal: calculoPreco.precoFinal * quantidade,
        economizou: calculoPreco.valorDesconto * quantidade
    };
    
    return {
        sucesso: true,
        erro: null,
        item,
        mensagem: `${produto.nome} adicionado ao carrinho`
    };
}

// Função para validar cupom (simulada)
function validarCupom(cupom) {
    const cuponsValidos = {
        'DESCONTO10': 10,
        'DESCONTO20': 20,
        'PRIMEIRACOMPRA': 15,
        'BLACKFRIDAY': 30
    };
    
    return cuponsValidos[cupom.toUpperCase()] || 0;
}

// Função para calcular total do carrinho
function calcularTotalCarrinho(itens, frete = 0, ehPremium = false) {
    if (!Array.isArray(itens) || itens.length === 0) {
        return {
            itens: 0,
            subtotal: 0,
            frete: 0,
            freteGratis: false,
            total: 0,
            economia: 0
        };
    }
    
    let subtotal = 0;
    let economia = 0;
    let quantidadeItens = 0;
    
    for (let item of itens) {
        subtotal += item.subtotal;
        economia += item.economizou;
        quantidadeItens += item.quantidade;
    }
    
    // Frete grátis para premium ou compras acima de R$ 200
    const freteGratis = ehPremium || subtotal >= 200;
    const freteAplicado = freteGratis ? 0 : frete;
    
    const total = subtotal + freteAplicado;
    
    return {
        itens: quantidadeItens,
        subtotal,
        frete: freteAplicado,
        freteGratis,
        total,
        economia,
        detalhamento: `${quantidadeItens} item(s) - Subtotal: R$${subtotal.toFixed(2)} + Frete: R$${freteAplicado.toFixed(2)} = Total: R$${total.toFixed(2)}`
    };
}

// Função para finalizar pedido
function finalizarPedido(carrinho, dadosEntrega, formaPagamento) {
    // Validações básicas
    if (!carrinho || carrinho.itens === 0) {
        return { sucesso: false, erro: "Carrinho vazio" };
    }
    
    if (!dadosEntrega || !dadosEntrega.cep || !dadosEntrega.endereco) {
        return { sucesso: false, erro: "Dados de entrega incompletos" };
    }
    
    if (!formaPagamento) {
        return { sucesso: false, erro: "Forma de pagamento não informada" };
    }
    
    // Gerar número do pedido
    const numeroPedido = Math.floor(Math.random() * 1000000);
    
    // Calcular prazo de entrega
    const prazoEntrega = calcularPrazoEntrega(dadosEntrega.cep, carrinho.total);
    
    const pedido = {
        numero: numeroPedido,
        data: new Date().toISOString(),
        carrinho,
        dadosEntrega,
        formaPagamento,
        prazoEntrega,
        status: "Confirmado"
    };
    
    return {
        sucesso: true,
        pedido,
        mensagem: `Pedido #${numeroPedido} realizado com sucesso!`
    };
}

function calcularPrazoEntrega(cep, valorPedido) {
    // Simulação simples baseada no CEP
    const primeirosDigitos = cep.substring(0, 2);
    let dias = 5; // Padrão
    
    if (primeirosDigitos >= '01' && primeirosDigitos <= '05') {
        dias = 2; // Região metropolitana
    } else if (valorPedido > 500) {
        dias = 3; // Entrega expressa para pedidos altos
    }
    
    return {
        dias,
        descricao: `${dias} dia(s) úteis`
    };
}

// ===== SIMULAÇÃO DO SISTEMA =====

console.log("\n=== SIMULAÇÃO DE COMPRA ===");

// Criar carrinho
const carrinho = [];

// Adicionar produtos ao carrinho
const adicoes = [
    { id: 1, quantidade: 1, cupom: "DESCONTO10" },
    { id: 2, quantidade: 2 },
    { id: 4, quantidade: 1, cupom: "BLACKFRIDAY" }
];

adicoes.forEach(({ id, quantidade, cupom }) => {
    const resultado = adicionarAoCarrinho(id, quantidade, cupom);
    if (resultado.sucesso) {
        carrinho.push(resultado.item);
        console.log(`✅ ${resultado.mensagem}`);
        console.log(`   Preço: R$${resultado.item.precoUnitarioFinal.toFixed(2)} x${quantidade} = R$${resultado.item.subtotal.toFixed(2)}`);
    } else {
        console.log(`❌ Erro: ${resultado.erro}`);
    }
});

// Calcular total do carrinho
const totalCarrinho = calcularTotalCarrinho(carrinho, 25, false);
console.log("\n=== RESUMO DO CARRINHO ===");
console.log(totalCarrinho.detalhamento);
if (totalCarrinho.economia > 0) {
    console.log(`💰 Você economizou: R$${totalCarrinho.economia.toFixed(2)}`);
}
if (totalCarrinho.freteGratis) {
    console.log("🚚 Frete grátis aplicado!");
}

// Finalizar pedido
const dadosEntrega = {
    cep: "01310-100",
    endereco: "Av. Paulista, 1000",
    cidade: "São Paulo",
    estado: "SP"
};

const resultado = finalizarPedido(totalCarrinho, dadosEntrega, "Cartão de Crédito");

if (resultado.sucesso) {
    console.log("\n=== PEDIDO CONFIRMADO ===");
    console.log(`✅ ${resultado.mensagem}`);
    console.log(`📦 Prazo de entrega: ${resultado.pedido.prazoEntrega.descricao}`);
    console.log(`💳 Forma de pagamento: ${resultado.pedido.formaPagamento}`);
    console.log(`💰 Total: R$${resultado.pedido.carrinho.total.toFixed(2)}`);
} else {
    console.log("❌ Erro ao finalizar pedido:", resultado.erro);
}

// Testes de funções auxiliares
console.log("\n=== TESTES ADICIONAIS ===");

// Teste busca de produto inexistente
const buscaInvalida = buscarProduto(999);
console.log("Busca inválida:", buscaInvalida.erro);

// Teste cálculo com dados inválidos
const calculoInvalido = calcularPrecoComDesconto(-100, 10);
console.log("Cálculo inválido:", calculoInvalido);

// Teste cupom inválido
const cupomInvalido = validarCupom("INEXISTENTE");
console.log("Cupom inválido (desconto):", cupomInvalido);
