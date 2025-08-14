
// Projeto Prático: Sistema de Vendas e Relatórios

console.log("=== SISTEMA DE VENDAS E RELATÓRIOS ===");

// Base de dados de vendas
const vendas = [
    { id: 1, produto: "Notebook", categoria: "Eletrônicos", preco: 2500, quantidade: 2, vendedor: "João" },
    { id: 2, produto: "Mouse", categoria: "Eletrônicos", preco: 50, quantidade: 10, vendedor: "Maria" },
    { id: 3, produto: "Teclado", categoria: "Eletrônicos", preco: 120, quantidade: 5, vendedor: "João" },
    { id: 4, produto: "Cadeira", categoria: "Móveis", preco: 300, quantidade: 3, vendedor: "Pedro" },
    { id: 5, produto: "Mesa", categoria: "Móveis", preco: 500, quantidade: 2, vendedor: "Maria" },
    { id: 6, produto: "Monitor", categoria: "Eletrônicos", preco: 800, quantidade: 4, vendedor: "João" },
    { id: 7, produto: "Sofá", categoria: "Móveis", preco: 1200, quantidade: 1, vendedor: "Pedro" }
];

console.log("=== RELATÓRIO DE VENDAS TOTAIS ===");

let vendaTotal = 0;
let quantidadeTotal = 0;

// Loop for para calcular totais
for (let i = 0; i < vendas.length; i++) {
    let valorVenda = vendas[i].preco * vendas[i].quantidade;
    vendaTotal += valorVenda;
    quantidadeTotal += vendas[i].quantidade;
    
    console.log(`Venda ${i + 1}: ${vendas[i].produto} - ${vendas[i].quantidade}x R$${vendas[i].preco} = R$${valorVenda}`);
}

console.log(`\n💰 Total em vendas: R$${vendaTotal}`);
console.log(`📦 Total de itens vendidos: ${quantidadeTotal}`);

console.log("\n=== RELATÓRIO POR CATEGORIA ===");

// Objeto para armazenar totais por categoria
let categorias = {};

// For...of para iterar sobre vendas
for (let venda of vendas) {
    if (!categorias[venda.categoria]) {
        categorias[venda.categoria] = {
            total: 0,
            quantidade: 0,
            produtos: []
        };
    }
    
    let valorVenda = venda.preco * venda.quantidade;
    categorias[venda.categoria].total += valorVenda;
    categorias[venda.categoria].quantidade += venda.quantidade;
    categorias[venda.categoria].produtos.push(venda.produto);
}

// For...in para mostrar relatório por categoria
for (let categoria in categorias) {
    console.log(`\n📁 Categoria: ${categoria}`);
    console.log(`   💰 Total: R$${categorias[categoria].total}`);
    console.log(`   📦 Quantidade: ${categorias[categoria].quantidade} itens`);
    console.log(`   📝 Produtos: ${categorias[categoria].produtos.join(", ")}`);
}

console.log("\n=== RANKING DE VENDEDORES ===");

let vendedores = {};

// Calcular vendas por vendedor
for (let venda of vendas) {
    if (!vendedores[venda.vendedor]) {
        vendedores[venda.vendedor] = {
            total: 0,
            quantidade: 0,
            vendas: 0
        };
    }
    
    let valorVenda = venda.preco * venda.quantidade;
    vendedores[venda.vendedor].total += valorVenda;
    vendedores[venda.vendedor].quantidade += venda.quantidade;
    vendedores[venda.vendedor].vendas++;
}

// Converter objeto em array para ordenar
let rankingVendedores = [];
for (let nome in vendedores) {
    rankingVendedores.push({
        nome: nome,
        total: vendedores[nome].total,
        quantidade: vendedores[nome].quantidade,
        vendas: vendedores[nome].vendas
    });
}

// Ordenar por total de vendas (método manual com loops)
for (let i = 0; i < rankingVendedores.length - 1; i++) {
    for (let j = 0; j < rankingVendedores.length - 1 - i; j++) {
        if (rankingVendedores[j].total < rankingVendedores[j + 1].total) {
            // Trocar posições
            let temp = rankingVendedores[j];
            rankingVendedores[j] = rankingVendedores[j + 1];
            rankingVendedores[j + 1] = temp;
        }
    }
}

console.log("🏆 Ranking de Vendedores:");
for (let i = 0; i < rankingVendedores.length; i++) {
    let vendedor = rankingVendedores[i];
    let posicao = i + 1;
    let emoji = posicao === 1 ? "🥇" : posicao === 2 ? "🥈" : posicao === 3 ? "🥉" : "📊";
    
    console.log(`${emoji} ${posicao}º lugar: ${vendedor.nome}`);
    console.log(`   💰 Total: R$${vendedor.total}`);
    console.log(`   📦 Itens vendidos: ${vendedor.quantidade}`);
    console.log(`   🛒 Número de vendas: ${vendedor.vendas}`);
}

console.log("\n=== PRODUTOS MAIS VENDIDOS ===");

// Simulação de busca de produtos com maior quantidade
let produtoMaisVendido = vendas[0];
let maiorQuantidade = vendas[0].quantidade;

for (let i = 1; i < vendas.length; i++) {
    if (vendas[i].quantidade > maiorQuantidade) {
        maiorQuantidade = vendas[i].quantidade;
        produtoMaisVendido = vendas[i];
    }
}

console.log("🎯 Produto mais vendido em quantidade:");
console.log(`   📝 Produto: ${produtoMaisVendido.produto}`);
console.log(`   📦 Quantidade: ${produtoMaisVendido.quantidade} unidades`);
console.log(`   👨‍💼 Vendedor: ${produtoMaisVendido.vendedor}`);

console.log("\n=== SIMULAÇÃO DE METAS ===");

const metaMensal = 8000;
let diasRestantes = 10;
let vendaAtual = vendaTotal;

console.log(`Meta mensal: R$${metaMensal}`);
console.log(`Vendido até agora: R$${vendaAtual}`);
console.log(`Dias restantes: ${diasRestantes}`);

if (vendaAtual >= metaMensal) {
    console.log("🎉 Meta já foi atingida!");
} else {
    let faltaVender = metaMensal - vendaAtual;
    let mediaDiaria = faltaVender / diasRestantes;
    
    console.log(`💪 Falta vender: R$${faltaVender}`);
    console.log(`📈 Média diária necessária: R$${mediaDiaria.toFixed(2)}`);
    
    // Simulação dos próximos dias
    console.log("\n📅 Simulação dos próximos dias:");
    let vendaSimulada = vendaAtual;
    
    for (let dia = 1; dia <= diasRestantes && vendaSimulada < metaMensal; dia++) {
        let vendaDia = Math.random() * mediaDiaria * 2; // Venda aleatória
        vendaSimulada += vendaDia;
        
        console.log(`Dia ${dia}: +R$${vendaDia.toFixed(2)} (Total: R$${vendaSimulada.toFixed(2)})`);
        
        if (vendaSimulada >= metaMensal) {
            console.log(`🎉 Meta atingida no dia ${dia}!`);
            break;
        }
    }
}
