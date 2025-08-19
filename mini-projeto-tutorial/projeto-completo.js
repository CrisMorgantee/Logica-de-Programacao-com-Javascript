
// PROJETO COMPLETO: SISTEMA DE E-COMMERCE
// =======================================
// Este arquivo integra TODOS os conceitos dos passos anteriores
// em um sistema funcional completo

console.log("🛒 SISTEMA DE E-COMMERCE COMPLETO");
console.log("=".repeat(60));

// =============================================================================
// 1. CONFIGURAÇÕES GLOBAIS E VARIÁVEIS (Passo 1)
// =============================================================================

const NOME_LOJA = "TechStore Plus";
const VERSAO_SISTEMA = "2.0.0";
const MOEDA = "R$";
const FRETE_GRATIS_VALOR_MINIMO = 200.00;

let sistemaAtivo = true;
let totalVendasDia = 0;
let numeroVendasDia = 0;

// =============================================================================
// 2. BANCO DE DADOS DE PRODUTOS (Passo 2)
// =============================================================================

// FACTORY FUNCTION PARA CRIAR PRODUTOS
function criarProduto(id, nome, preco, categoria, estoque, descricao, peso, avaliacoes = 5.0) {
    return {
        id,
        nome,
        preco,
        categoria,
        estoque,
        descricao,
        peso,
        ativo: true,
        avaliacoes,
        dataCadastro: new Date(),
        
        // Método para calcular preço com desconto
        calcularPrecoComDesconto(percentual) {
            if (percentual < 0 || percentual > 100) {
                console.log("⚠️ Percentual de desconto deve estar entre 0 e 100");
                return this.preco;
            }
            return this.preco * (1 - percentual / 100);
        },
        
        // Método para verificar disponibilidade
        verificarDisponibilidade(quantidade = 1) {
            return this.ativo && this.estoque >= quantidade;
        },
        
        // Método para reduzir estoque
        reduzirEstoque(quantidade) {
            if (this.verificarDisponibilidade(quantidade)) {
                this.estoque -= quantidade;
                return true;
            }
            return false;
        },
        
        // Método para adicionar estoque
        adicionarEstoque(quantidade) {
            if (quantidade > 0) {
                this.estoque += quantidade;
                return true;
            }
            return false;
        },
        
        // Método para ativar/desativar produto
        alterarStatus(novoStatus) {
            this.ativo = novoStatus;
            return this.ativo;
        },
        
        // Método para obter informações resumidas
        obterResumo() {
            const status = this.ativo ? "Ativo" : "Inativo";
            const disponibilidade = this.estoque > 0 ? "Disponível" : "Esgotado";
            return `${this.nome} - ${this.categoria} - ${MOEDA}${this.preco.toFixed(2)} - ${status} - ${disponibilidade}`;
        },
        
        // Método para calcular valor total do estoque
        calcularValorEstoque() {
            return this.preco * this.estoque;
        }
    };
}

// FUNÇÃO PARA INICIALIZAR O BANCO DE DADOS DE PRODUTOS
function inicializarBancoDadosProdutos() {
    const dadosIniciais = [
        {
            id: 1,
            nome: "iPhone 15 Pro",
            preco: 8999.00,
            categoria: "Smartphones",
            estoque: 12,
            descricao: "iPhone 15 Pro 256GB Titânio Natural",
            peso: 0.187,
            avaliacoes: 4.8
        },
        {
            id: 2,
            nome: "MacBook Pro M3",
            preco: 15999.00,
            categoria: "Notebooks",
            estoque: 8,
            descricao: "MacBook Pro 14 M3 512GB Space Gray",
            peso: 1.6,
            avaliacoes: 4.9
        },
        {
            id: 3,
            nome: "AirPods Pro 2",
            preco: 2199.00,
            categoria: "Acessórios",
            estoque: 25,
            descricao: "AirPods Pro 2ª geração com cancelamento de ruído",
            peso: 0.056,
            avaliacoes: 4.7
        },
        {
            id: 4,
            nome: "Apple Watch Series 9",
            preco: 3999.00,
            categoria: "Wearables",
            estoque: 15,
            descricao: "Apple Watch Series 9 45mm GPS Meia-noite",
            peso: 0.038,
            avaliacoes: 4.6
        },
        {
            id: 5,
            nome: "iPad Air M2",
            preco: 5499.00,
            categoria: "Tablets",
            estoque: 18,
            descricao: "iPad Air 11 M2 Wi-Fi 256GB Azul",
            peso: 0.462,
            avaliacoes: 4.8
        }
    ];
    
    return dadosIniciais.map(produto => 
        criarProduto(
            produto.id,
            produto.nome,
            produto.preco,
            produto.categoria,
            produto.estoque,
            produto.descricao,
            produto.peso,
            produto.avaliacoes
        )
    );
}

// INICIALIZANDO O BANCO DE DADOS
const produtos = inicializarBancoDadosProdutos();

// FUNÇÃO PARA ADICIONAR NOVO PRODUTO AO BANCO
function adicionarProdutoAoBanco(nome, preco, categoria, estoque, descricao, peso, avaliacoes) {
    // Gerar novo ID baseado no maior ID existente
    const maiorId = produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) : 0;
    const novoId = maiorId + 1;
    
    // Validações básicas
    if (!nome || nome.length < 2) {
        return { sucesso: false, erro: "Nome deve ter pelo menos 2 caracteres" };
    }
    
    if (!preco || preco <= 0) {
        return { sucesso: false, erro: "Preço deve ser maior que zero" };
    }
    
    if (!categoria || categoria.length < 2) {
        return { sucesso: false, erro: "Categoria deve ter pelo menos 2 caracteres" };
    }
    
    if (estoque < 0) {
        return { sucesso: false, erro: "Estoque não pode ser negativo" };
    }
    
    // Verificar se produto já existe pelo nome
    const produtoExistente = produtos.find(p => 
        p.nome.toLowerCase() === nome.toLowerCase()
    );
    
    if (produtoExistente) {
        return { sucesso: false, erro: "Produto com este nome já existe" };
    }
    
    // Criar e adicionar produto
    const novoProduto = criarProduto(
        novoId,
        nome,
        preco,
        categoria,
        estoque || 0,
        descricao || "",
        peso || 0,
        avaliacoes || 5.0
    );
    
    produtos.push(novoProduto);
    
    return { 
        sucesso: true, 
        produto: novoProduto,
        mensagem: `Produto "${nome}" adicionado com sucesso!`
    };
}

// FUNÇÃO PARA BUSCAR PRODUTO POR ID
function buscarProdutoPorId(id) {
    return produtos.find(produto => produto.id === id && produto.ativo) || null;
}

// FUNÇÃO PARA LISTAR PRODUTOS POR CATEGORIA
function listarProdutosPorCategoria(categoria) {
    return produtos.filter(produto => 
        produto.categoria.toLowerCase() === categoria.toLowerCase() && produto.ativo
    );
}

// =============================================================================
// 3. SISTEMA DE USUÁRIOS (Passo 3)
// =============================================================================

const usuarios = [];

function criarUsuario(nome, email, idade, endereco) {
    // Validações
    if (!nome || nome.length < 2) {
        return { sucesso: false, erro: "Nome deve ter pelo menos 2 caracteres" };
    }
    
    if (!email || !email.includes("@") || !email.includes(".")) {
        return { sucesso: false, erro: "Email inválido" };
    }
    
    if (!idade || idade < 16 || idade > 120) {
        return { sucesso: false, erro: "Idade deve estar entre 16 e 120 anos" };
    }
    
    // Verificar se email já existe
    const emailExiste = usuarios.some(u => u.email === email);
    if (emailExiste) {
        return { sucesso: false, erro: "Email já cadastrado" };
    }
    
    // Determinar categoria e benefícios
    let categoria, desconto, limiteCreditoBonus;
    
    if (idade < 25) {
        categoria = "Jovem";
        desconto = 5;
        limiteCreditoBonus = 1000;
    } else if (idade >= 60) {
        categoria = "Senior";
        desconto = 15;
        limiteCreditoBonus = 5000;
    } else {
        categoria = "Adulto";
        desconto = 0;
        limiteCreditoBonus = 2000;
    }
    
    const novoUsuario = {
        id: Date.now() + Math.random(),
        nome,
        email,
        idade,
        endereco,
        categoria,
        desconto,
        limiteCreditoBonus,
        ativo: true,
        dataCadastro: new Date(),
        totalCompras: 0,
        numeroCompras: 0,
        historicoCompras: [],
        carrinho: [],
        
        // Métodos do usuário
        adicionarCompra(valor, itens) {
            this.totalCompras += valor;
            this.numeroCompras++;
            this.historicoCompras.push({
                data: new Date(),
                valor,
                itens: [...itens]
            });
        },
        
        calcularDesconto(valor) {
            if (this.desconto > 0) {
                return valor * (this.desconto / 100);
            }
            return 0;
        },
        
        podeComprar(valor) {
            return valor <= this.limiteCreditoBonus || this.totalCompras > 1000;
        },
        
        obterResumo() {
            return {
                nome: this.nome,
                categoria: this.categoria,
                totalCompras: this.totalCompras,
                numeroCompras: this.numeroCompras,
                desconto: this.desconto
            };
        }
    };
    
    usuarios.push(novoUsuario);
    return { 
        sucesso: true, 
        usuario: novoUsuario,
        mensagem: `Usuário ${nome} cadastrado com sucesso!`
    };
}

function buscarUsuarioPorEmail(email) {
    return usuarios.find(u => u.email === email && u.ativo) || null;
}

// =============================================================================
// 4. SISTEMA DE CARRINHO (Passo 4)
// =============================================================================

function adicionarAoCarrinho(usuario, produtoId, quantidade = 1) {
    const produto = produtos.find(p => p.id === produtoId);
    
    if (!produto) {
        return { sucesso: false, erro: "Produto não encontrado" };
    }
    
    if (!produto.verificarDisponibilidade(quantidade)) {
        return { 
            sucesso: false, 
            erro: `Estoque insuficiente. Disponível: ${produto.estoque}` 
        };
    }
    
    // Verificar se produto já está no carrinho
    const itemExistente = usuario.carrinho.find(item => item.produto.id === produtoId);
    
    if (itemExistente) {
        const novaQuantidade = itemExistente.quantidade + quantidade;
        if (!produto.verificarDisponibilidade(novaQuantidade)) {
            return { 
                sucesso: false, 
                erro: "Estoque insuficiente para quantidade total" 
            };
        }
        itemExistente.quantidade = novaQuantidade;
        itemExistente.subtotal = produto.preco * novaQuantidade;
    } else {
        usuario.carrinho.push({
            produto,
            quantidade,
            subtotal: produto.preco * quantidade,
            dataAdicao: new Date()
        });
    }
    
    return { 
        sucesso: true, 
        mensagem: `${produto.nome} adicionado ao carrinho` 
    };
}

function removerDoCarrinho(usuario, produtoId) {
    const indiceInicial = usuario.carrinho.length;
    usuario.carrinho = usuario.carrinho.filter(item => item.produto.id !== produtoId);
    
    if (usuario.carrinho.length < indiceInicial) {
        return { sucesso: true, mensagem: "Item removido do carrinho" };
    }
    
    return { sucesso: false, erro: "Item não encontrado no carrinho" };
}

function limparCarrinho(usuario) {
    usuario.carrinho = [];
    return { sucesso: true, mensagem: "Carrinho limpo" };
}

// =============================================================================
// 5. FUNÇÕES DE CÁLCULO (Passo 5)
// =============================================================================

function calcularFrete(estado, pesoTotal, valorCompra) {
    // Frete grátis para compras acima do valor mínimo
    if (valorCompra >= FRETE_GRATIS_VALOR_MINIMO) {
        return { valor: 0, gratuito: true, motivo: "Compra acima de R$ 200" };
    }
    
    const tabelaFrete = {
        "SP": 12.00, "RJ": 15.00, "MG": 18.00, "RS": 22.00,
        "PR": 20.00, "SC": 20.00, "GO": 25.00, "DF": 22.00,
        "BA": 28.00, "PE": 30.00, "CE": 32.00, "AM": 45.00
    };
    
    const freteBase = tabelaFrete[estado.toUpperCase()] || 35.00;
    const acrescimoPeso = pesoTotal > 1 ? (pesoTotal - 1) * 3 : 0;
    
    return { 
        valor: freteBase + acrescimoPeso, 
        gratuito: false,
        detalhes: { base: freteBase, peso: acrescimoPeso }
    };
}

function calcularImpostos(valor, categoria) {
    const tabelaImpostos = {
        "Smartphones": 0.20,
        "Notebooks": 0.18,
        "Tablets": 0.16,
        "Acessórios": 0.12,
        "Wearables": 0.15
    };
    
    const aliquota = tabelaImpostos[categoria] || 0.15;
    return valor * aliquota;
}

function calcularParcelamento(valor, parcelas) {
    if (parcelas === 1) {
        return {
            parcelas: 1,
            valorParcela: valor,
            valorTotal: valor,
            juros: 0,
            temJuros: false
        };
    }
    
    let juros = 0;
    let temJuros = false;
    
    if (parcelas > 6) {
        juros = 0.0299; // 2.99% ao mês
        temJuros = true;
    } else if (parcelas > 3) {
        juros = 0.0199; // 1.99% ao mês
        temJuros = true;
    }
    
    if (temJuros) {
        const valorComJuros = valor * Math.pow(1 + juros, parcelas);
        return {
            parcelas,
            valorParcela: valorComJuros / parcelas,
            valorTotal: valorComJuros,
            juros: valorComJuros - valor,
            temJuros: true,
            taxaJuros: juros * 100
        };
    }
    
    return {
        parcelas,
        valorParcela: valor / parcelas,
        valorTotal: valor,
        juros: 0,
        temJuros: false
    };
}

function calcularResumoCompra(usuario) {
    if (!usuario.carrinho || usuario.carrinho.length === 0) {
        return { sucesso: false, erro: "Carrinho vazio" };
    }
    
    // Cálculos básicos
    let subtotal = 0;
    let pesoTotal = 0;
    let impostoTotal = 0;
    
    usuario.carrinho.forEach(item => {
        subtotal += item.subtotal;
        pesoTotal += item.produto.peso * item.quantidade;
        impostoTotal += calcularImpostos(item.subtotal, item.produto.categoria);
    });
    
    // Desconto do usuário
    const descontoUsuario = usuario.calcularDesconto(subtotal);
    
    // Desconto por volume de compra
    let descontoVolume = 0;
    if (subtotal > 5000) {
        descontoVolume = subtotal * 0.08; // 8%
    } else if (subtotal > 2000) {
        descontoVolume = subtotal * 0.05; // 5%
    } else if (subtotal > 1000) {
        descontoVolume = subtotal * 0.03; // 3%
    }
    
    const totalDescontos = descontoUsuario + descontoVolume;
    const valorComDesconto = subtotal - totalDescontos;
    
    // Frete
    const frete = calcularFrete(
        usuario.endereco?.estado || "SP", 
        pesoTotal, 
        valorComDesconto
    );
    
    // Total final
    const valorFinal = valorComDesconto + frete.valor + impostoTotal;
    
    return {
        sucesso: true,
        resumo: {
            subtotal,
            descontos: {
                usuario: descontoUsuario,
                volume: descontoVolume,
                total: totalDescontos
            },
            impostos: impostoTotal,
            frete: frete,
            valorFinal,
            pesoTotal,
            economia: totalDescontos,
            itens: usuario.carrinho.length,
            quantidadeTotal: usuario.carrinho.reduce((total, item) => total + item.quantidade, 0)
        }
    };
}

// =============================================================================
// 6. SISTEMA DE CHECKOUT
// =============================================================================

function finalizarCompra(usuario, formaPagamento, parcelas = 1) {
    const resumo = calcularResumoCompra(usuario);
    
    if (!resumo.sucesso) {
        return resumo;
    }
    
    // Verificar se usuário pode comprar
    if (!usuario.podeComprar(resumo.resumo.valorFinal)) {
        return { 
            sucesso: false, 
            erro: "Limite de crédito insuficiente para esta compra" 
        };
    }
    
    // Verificar disponibilidade de todos os produtos
    for (let item of usuario.carrinho) {
        if (!item.produto.verificarDisponibilidade(item.quantidade)) {
            return { 
                sucesso: false, 
                erro: `Produto ${item.produto.nome} não tem estoque suficiente` 
            };
        }
    }
    
    // Reduzir estoque dos produtos
    usuario.carrinho.forEach(item => {
        item.produto.reduzirEstoque(item.quantidade);
    });
    
    // Calcular parcelamento se necessário
    let dadosParcelamento = null;
    if (formaPagamento === "cartao" && parcelas > 1) {
        dadosParcelamento = calcularParcelamento(resumo.resumo.valorFinal, parcelas);
    }
    
    // Criar pedido
    const pedido = {
        id: `PED${Date.now()}`,
        usuario: usuario.obterResumo(),
        itens: [...usuario.carrinho],
        resumo: resumo.resumo,
        formaPagamento,
        parcelamento: dadosParcelamento,
        status: "confirmado",
        dataCompra: new Date(),
        previsaoEntrega: new Date(Date.now() + (7 * 24 * 60 * 60 * 1000)) // 7 dias
    };
    
    // Registrar compra no histórico do usuário
    usuario.adicionarCompra(resumo.resumo.valorFinal, usuario.carrinho);
    
    // Atualizar estatísticas globais
    totalVendasDia += resumo.resumo.valorFinal;
    numeroVendasDia++;
    
    // Limpar carrinho
    limparCarrinho(usuario);
    
    return {
        sucesso: true,
        pedido,
        mensagem: `Compra realizada com sucesso! Pedido ${pedido.id}`
    };
}

// =============================================================================
// 7. FUNÇÕES DE RELATÓRIO E UTILIDADES
// =============================================================================

function exibirCatalogo() {
    console.log("\n📱 CATÁLOGO DE PRODUTOS");
    console.log("=".repeat(50));
    
    produtos.forEach(produto => {
        if (produto.ativo) {
            const disponibilidade = produto.estoque > 0 ? "✅ Disponível" : "❌ Esgotado";
            console.log(`${produto.id}. ${produto.nome}`);
            console.log(`   Preço: ${MOEDA}${produto.preco.toFixed(2)}`);
            console.log(`   Categoria: ${produto.categoria}`);
            console.log(`   Estoque: ${produto.estoque} | ${disponibilidade}`);
            console.log(`   Avaliação: ⭐${produto.avaliacoes}/5.0`);
            console.log(`   ${produto.descricao}`);
            console.log("-".repeat(50));
        }
    });
}

function exibirCarrinho(usuario) {
    if (!usuario.carrinho || usuario.carrinho.length === 0) {
        console.log("🛒 Carrinho vazio");
        return;
    }
    
    console.log(`\n🛒 CARRINHO DE ${usuario.nome.toUpperCase()}`);
    console.log("=".repeat(50));
    
    usuario.carrinho.forEach((item, index) => {
        console.log(`${index + 1}. ${item.produto.nome}`);
        console.log(`   Quantidade: ${item.quantidade}x`);
        console.log(`   Preço unitário: ${MOEDA}${item.produto.preco.toFixed(2)}`);
        console.log(`   Subtotal: ${MOEDA}${item.subtotal.toFixed(2)}`);
        console.log("-".repeat(30));
    });
    
    const resumo = calcularResumoCompra(usuario);
    if (resumo.sucesso) {
        console.log(`💰 VALOR TOTAL: ${MOEDA}${resumo.resumo.valorFinal.toFixed(2)}`);
        if (resumo.resumo.economia > 0) {
            console.log(`💸 Economia: ${MOEDA}${resumo.resumo.economia.toFixed(2)}`);
        }
    }
}

function gerarRelatorioVendas() {
    console.log("\n📊 RELATÓRIO DE VENDAS DO DIA");
    console.log("=".repeat(50));
    console.log(`Número de vendas: ${numeroVendasDia}`);
    console.log(`Total vendido: ${MOEDA}${totalVendasDia.toFixed(2)}`);
    console.log(`Ticket médio: ${MOEDA}${numeroVendasDia > 0 ? (totalVendasDia / numeroVendasDia).toFixed(2) : "0.00"}`);
    
    // Produtos com baixo estoque
    console.log("\n⚠️ PRODUTOS COM BAIXO ESTOQUE:");
    produtos
        .filter(p => p.estoque < 5 && p.ativo)
        .forEach(p => {
            console.log(`- ${p.nome}: ${p.estoque} unidades`);
        });
}

// =============================================================================
// 8. SIMULAÇÃO COMPLETA DO SISTEMA
// =============================================================================

function executarSimulacao() {
    console.log("\n🚀 INICIANDO SIMULAÇÃO COMPLETA");
    console.log("=".repeat(60));
    
    // 1. Cadastrar usuários
    console.log("\n👥 CADASTRANDO USUÁRIOS...");
    
    const usuario1 = criarUsuario(
        "João Silva", 
        "joao@email.com", 
        28, 
        { rua: "Rua A, 123", cidade: "São Paulo", estado: "SP", cep: "01234-567" }
    );
    
    const usuario2 = criarUsuario(
        "Maria Santos", 
        "maria@email.com", 
        65, 
        { rua: "Av. B, 456", cidade: "Rio de Janeiro", estado: "RJ", cep: "20123-456" }
    );
    
    const usuario3 = criarUsuario(
        "Pedro Lima", 
        "pedro@email.com", 
        22, 
        { rua: "Rua C, 789", cidade: "Belo Horizonte", estado: "MG", cep: "30123-789" }
    );
    
    if (usuario1.sucesso) console.log(`✅ ${usuario1.mensagem}`);
    if (usuario2.sucesso) console.log(`✅ ${usuario2.mensagem}`);
    if (usuario3.sucesso) console.log(`✅ ${usuario3.mensagem}`);
    
    // 2. Exibir catálogo
    exibirCatalogo();
    
    // 3. Simular compras
    console.log("\n🛍️ SIMULANDO COMPRAS...");
    
    // Compra do João
    const joao = usuario1.usuario;
    console.log(`\n--- COMPRA DO ${joao.nome.toUpperCase()} ---`);
    
    adicionarAoCarrinho(joao, 1, 1); // iPhone
    adicionarAoCarrinho(joao, 3, 2); // 2x AirPods
    
    exibirCarrinho(joao);
    
    const resumoJoao = calcularResumoCompra(joao);
    if (resumoJoao.sucesso) {
        console.log("\n💳 RESUMO DA COMPRA:");
        const r = resumoJoao.resumo;
        console.log(`Subtotal: ${MOEDA}${r.subtotal.toFixed(2)}`);
        console.log(`Desconto usuário: -${MOEDA}${r.descontos.usuario.toFixed(2)}`);
        console.log(`Desconto volume: -${MOEDA}${r.descontos.volume.toFixed(2)}`);
        console.log(`Impostos: ${MOEDA}${r.impostos.toFixed(2)}`);
        console.log(`Frete: ${MOEDA}${r.frete.valor.toFixed(2)} ${r.frete.gratuito ? "(GRÁTIS)" : ""}`);
        console.log(`TOTAL: ${MOEDA}${r.valorFinal.toFixed(2)}`);
    }
    
    const pedidoJoao = finalizarCompra(joao, "cartao", 3);
    if (pedidoJoao.sucesso) {
        console.log(`✅ ${pedidoJoao.mensagem}`);
        if (pedidoJoao.pedido.parcelamento) {
            const p = pedidoJoao.pedido.parcelamento;
            console.log(`💳 Parcelamento: ${p.parcelas}x de ${MOEDA}${p.valorParcela.toFixed(2)}`);
        }
    }
    
    // Compra da Maria (usuária senior com desconto)
    const maria = usuario2.usuario;
    console.log(`\n--- COMPRA DA ${maria.nome.toUpperCase()} ---`);
    
    adicionarAoCarrinho(maria, 2, 1); // MacBook
    adicionarAoCarrinho(maria, 4, 1); // Apple Watch
    
    exibirCarrinho(maria);
    
    const pedidoMaria = finalizarCompra(maria, "pix");
    if (pedidoMaria.sucesso) {
        console.log(`✅ ${pedidoMaria.mensagem}`);
    }
    
    // Compra do Pedro (usuário jovem)
    const pedro = usuario3.usuario;
    console.log(`\n--- COMPRA DO ${pedro.nome.toUpperCase()} ---`);
    
    adicionarAoCarrinho(pedro, 5, 1); // iPad
    adicionarAoCarrinho(pedro, 3, 1); // AirPods
    
    exibirCarrinho(pedro);
    
    const pedidoPedro = finalizarCompra(pedro, "debito");
    if (pedidoPedro.sucesso) {
        console.log(`✅ ${pedidoPedro.mensagem}`);
    }
    
    // 4. Relatórios finais
    gerarRelatorioVendas();
    
    console.log("\n👥 RESUMO DOS USUÁRIOS:");
    usuarios.forEach(user => {
        const resumo = user.obterResumo();
        console.log(`- ${resumo.nome} (${resumo.categoria}): ${resumo.numeroCompras} compras, ${MOEDA}${resumo.totalCompras.toFixed(2)} total`);
    });
    
    console.log("\n✅ SIMULAÇÃO COMPLETA FINALIZADA!");
    console.log("=".repeat(60));
}

// =============================================================================
// 9. EXECUÇÃO DA SIMULAÇÃO
// =============================================================================

executarSimulacao();

console.log("\n🎯 CONCEITOS APLICADOS NESTE PROJETO:");
console.log("✅ Variáveis (const, let)");
console.log("✅ Tipos de dados (string, number, boolean, object, array)");
console.log("✅ Objetos e métodos");
console.log("✅ Arrays e manipulação");
console.log("✅ Funções com parâmetros e retorno");
console.log("✅ Factory Functions (criarProduto, criarUsuario)");
console.log("✅ Estruturas de controle (if/else, switch)");
console.log("✅ Estruturas de repetição (for, forEach)");
console.log("✅ Validação de dados");
console.log("✅ Sistema CRUD completo");
console.log("✅ Cálculos financeiros");
console.log("✅ Manipulação de estado");
console.log("✅ Tratamento de erros");
console.log("✅ Modularização de código");

console.log("\n💡 PRÓXIMOS PASSOS PARA EXPANDIR:");
console.log("• Adicionar persistência de dados");
console.log("• Implementar interface web");
console.log("• Adicionar sistema de avaliações");
console.log("• Criar dashboard administrativo");
console.log("• Implementar sistema de cupons");
console.log("• Adicionar integração com APIs de pagamento");
