
// PASSO 4: CARRINHO DE COMPRAS (ARRAYS)
// =====================================
// Conceitos aplicados: arrays, métodos de array, estruturas de repetição

console.log("🛒 PASSO 4: CARRINHO DE COMPRAS");
console.log("=".repeat(50));

// 4.1 - PRODUTOS DISPONÍVEIS (reutilizando do passo anterior)
const produtos = [
    {
        id: 1,
        nome: "Smartphone Galaxy",
        preco: 1200.00,
        categoria: "Eletrônicos",
        estoque: 15
    },
    {
        id: 2,
        nome: "Notebook Pro",
        preco: 2500.00,
        categoria: "Eletrônicos",
        estoque: 8
    },
    {
        id: 3,
        nome: "Fone Bluetooth",
        preco: 299.99,
        categoria: "Eletrônicos",
        estoque: 25
    },
    {
        id: 4,
        nome: "Mouse Gamer",
        preco: 89.99,
        categoria: "Eletrônicos",
        estoque: 30
    }
];

// 4.2 - ESTRUTURA DO CARRINHO
let carrinho = [];

// 4.3 - FUNÇÃO PARA BUSCAR PRODUTO POR ID
function buscarProdutoPorId(id) {
    for (let produto of produtos) {
        if (produto.id === id) {
            return produto;
        }
    }
    return null;
}

// 4.4 - FUNÇÃO PARA ADICIONAR ITEM AO CARRINHO
function adicionarAoCarrinho(produtoId, quantidade = 1) {
    // Buscar o produto
    const produto = buscarProdutoPorId(produtoId);
    
    if (!produto) {
        console.log("❌ Produto não encontrado");
        return false;
    }
    
    // Verificar estoque
    if (produto.estoque < quantidade) {
        console.log(`❌ Estoque insuficiente. Disponível: ${produto.estoque}`);
        return false;
    }
    
    // Verificar se o produto já está no carrinho
    let itemExistente = null;
    for (let item of carrinho) {
        if (item.produto.id === produtoId) {
            itemExistente = item;
            break;
        }
    }
    
    if (itemExistente) {
        // Atualizar quantidade do item existente
        if (produto.estoque >= (itemExistente.quantidade + quantidade)) {
            itemExistente.quantidade += quantidade;
            console.log(`✅ Quantidade atualizada: ${produto.nome} (${itemExistente.quantidade})`);
        } else {
            console.log(`❌ Estoque insuficiente para adicionar mais ${quantidade} unidade(s)`);
            return false;
        }
    } else {
        // Adicionar novo item ao carrinho
        const novoItem = {
            produto: produto,
            quantidade: quantidade,
            subtotal: produto.preco * quantidade
        };
        carrinho.push(novoItem);
        console.log(`✅ Adicionado ao carrinho: ${produto.nome} (${quantidade}x)`);
    }
    
    return true;
}

// 4.5 - FUNÇÃO PARA REMOVER ITEM DO CARRINHO
function removerDoCarrinho(produtoId) {
    const indiceInicial = carrinho.length;
    
    // Usando filter para remover (método de array)
    carrinho = carrinho.filter(item => item.produto.id !== produtoId);
    
    if (carrinho.length < indiceInicial) {
        console.log("✅ Item removido do carrinho");
        return true;
    } else {
        console.log("❌ Item não encontrado no carrinho");
        return false;
    }
}

// 4.6 - FUNÇÃO PARA ATUALIZAR QUANTIDADE NO CARRINHO
function atualizarQuantidade(produtoId, novaQuantidade) {
    if (novaQuantidade <= 0) {
        return removerDoCarrinho(produtoId);
    }
    
    const produto = buscarProdutoPorId(produtoId);
    if (!produto) {
        console.log("❌ Produto não encontrado");
        return false;
    }
    
    if (novaQuantidade > produto.estoque) {
        console.log(`❌ Estoque insuficiente. Disponível: ${produto.estoque}`);
        return false;
    }
    
    // Buscar item no carrinho
    for (let item of carrinho) {
        if (item.produto.id === produtoId) {
            item.quantidade = novaQuantidade;
            item.subtotal = item.produto.preco * novaQuantidade;
            console.log(`✅ Quantidade atualizada: ${produto.nome} (${novaQuantidade}x)`);
            return true;
        }
    }
    
    console.log("❌ Item não encontrado no carrinho");
    return false;
}

// 4.7 - FUNÇÃO PARA CALCULAR TOTAL DO CARRINHO
function calcularTotal() {
    let total = 0;
    
    for (let item of carrinho) {
        total += item.subtotal;
    }
    
    return total;
}

// 4.8 - FUNÇÃO PARA EXIBIR CARRINHO
function exibirCarrinho() {
    if (carrinho.length === 0) {
        console.log("🛒 Carrinho vazio");
        return;
    }
    
    console.log("\n🛒 ITENS NO CARRINHO:");
    console.log("-".repeat(60));
    
    for (let i = 0; i < carrinho.length; i++) {
        const item = carrinho[i];
        console.log(`${i + 1}. ${item.produto.nome}`);
        console.log(`   Quantidade: ${item.quantidade}x`);
        console.log(`   Preço unitário: R$${item.produto.preco.toFixed(2)}`);
        console.log(`   Subtotal: R$${item.subtotal.toFixed(2)}`);
        console.log("");
    }
    
    const total = calcularTotal();
    console.log(`💰 TOTAL: R$${total.toFixed(2)}`);
}

// 4.9 - FUNÇÃO PARA LIMPAR CARRINHO
function limparCarrinho() {
    carrinho = [];
    console.log("🧹 Carrinho limpo");
}

// 4.10 - TESTANDO O SISTEMA DE CARRINHO
console.log("\n🛍️ SIMULAÇÃO DE COMPRAS:");

// Exibir produtos disponíveis
console.log("\n📱 PRODUTOS DISPONÍVEIS:");
for (let produto of produtos) {
    console.log(`${produto.id}. ${produto.nome} - R$${produto.preco.toFixed(2)} (Estoque: ${produto.estoque})`);
}

// Adicionar itens ao carrinho
console.log("\n➕ ADICIONANDO ITENS AO CARRINHO:");
adicionarAoCarrinho(1, 2); // 2x Smartphone
adicionarAoCarrinho(3, 1); // 1x Fone Bluetooth
adicionarAoCarrinho(4, 3); // 3x Mouse Gamer
adicionarAoCarrinho(1, 1); // +1 Smartphone (teste de item existente)

// Exibir carrinho atual
exibirCarrinho();

// Testar remoção
console.log("\n➖ REMOVENDO ITEM:");
removerDoCarrinho(4); // Remover Mouse Gamer
exibirCarrinho();

// Testar atualização de quantidade
console.log("\n🔄 ATUALIZANDO QUANTIDADE:");
atualizarQuantidade(1, 1); // Reduzir Smartphone para 1
exibirCarrinho();

// Testar tentativa de adicionar item com estoque insuficiente
console.log("\n⚠️ TESTANDO ESTOQUE INSUFICIENTE:");
adicionarAoCarrinho(2, 10); // Tentar adicionar 10 Notebooks (estoque: 8)

// 4.11 - ESTATÍSTICAS DO CARRINHO (usando métodos de array)
console.log("\n📊 ESTATÍSTICAS DO CARRINHO:");

if (carrinho.length > 0) {
    // Total de itens
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
    console.log(`Total de itens: ${totalItens}`);
    
    // Item mais caro
    const itemMaisCaro = carrinho.reduce((maior, item) => {
        return item.produto.preco > maior.produto.preco ? item : maior;
    });
    console.log(`Item mais caro: ${itemMaisCaro.produto.nome} - R$${itemMaisCaro.produto.preco.toFixed(2)}`);
    
    // Verificar se tem eletrônicos
    const temEletronicos = carrinho.some(item => item.produto.categoria === "Eletrônicos");
    console.log(`Contém eletrônicos: ${temEletronicos ? "Sim" : "Não"}`);
    
    // Todos os itens são eletrônicos?
    const todosEletronicos = carrinho.every(item => item.produto.categoria === "Eletrônicos");
    console.log(`Todos são eletrônicos: ${todosEletronicos ? "Sim" : "Não"}`);
    
    // Lista de nomes dos produtos
    const nomesProdutos = carrinho.map(item => item.produto.nome);
    console.log(`Produtos no carrinho: ${nomesProdutos.join(", ")}`);
}

console.log("\n✅ PASSO 4 CONCLUÍDO!");
console.log("Próximo: Criar funções de cálculo avançadas");
