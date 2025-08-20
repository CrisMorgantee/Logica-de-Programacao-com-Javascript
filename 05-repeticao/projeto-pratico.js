// =====================================================================================
// PROJETO PRÁTICO: SISTEMA DE ANÁLISE DE VENDAS E RELATÓRIOS
// =====================================================================================
//
// 🎯 OBJETIVO: Criar um sistema completo que use todas as estruturas de repetição
// para processar dados de vendas, gerar relatórios e análises estatísticas.

console.log("🚀 SISTEMA DE ANÁLISE DE VENDAS");
console.log("=".repeat(60));

// =====================================================================================
// 1. DADOS DE VENDAS (SIMULAÇÃO)
// =====================================================================================

const vendas = [
    { id: 1, produto: "Notebook", categoria: "Eletrônicos", valor: 2500.00, vendedor: "Ana", mes: 1, regiao: "Sudeste" },
    { id: 2, produto: "Mouse", categoria: "Acessórios", valor: 50.00, vendedor: "João", mes: 1, regiao: "Norte" },
    { id: 3, produto: "Teclado", categoria: "Acessórios", valor: 150.00, vendedor: "Maria", mes: 1, regiao: "Sudeste" },
    { id: 4, produto: "Monitor", categoria: "Eletrônicos", valor: 800.00, vendedor: "Ana", mes: 2, regiao: "Sul" },
    { id: 5, produto: "Smartphone", categoria: "Eletrônicos", valor: 1200.00, vendedor: "Pedro", mes: 2, regiao: "Nordeste" },
    { id: 6, produto: "Headset", categoria: "Acessórios", valor: 200.00, vendedor: "João", mes: 2, regiao: "Norte" },
    { id: 7, produto: "Tablet", categoria: "Eletrônicos", valor: 900.00, vendedor: "Maria", mes: 3, regiao: "Centro-Oeste" },
    { id: 8, produto: "Webcam", categoria: "Acessórios", valor: 300.00, vendedor: "Ana", mes: 3, regiao: "Sudeste" },
    { id: 9, produto: "Impressora", categoria: "Equipamentos", valor: 600.00, vendedor: "Pedro", mes: 3, regiao: "Sul" },
    { id: 10, produto: "Scanner", categoria: "Equipamentos", valor: 400.00, vendedor: "Lucia", mes: 1, regiao: "Nordeste" },
    { id: 11, produto: "Projetor", categoria: "Equipamentos", valor: 1800.00, vendedor: "Carlos", mes: 2, regiao: "Sudeste" },
    { id: 12, produto: "Roteador", categoria: "Redes", valor: 250.00, vendedor: "Lucia", mes: 3, regiao: "Norte" }
];

const vendedores = [
    { nome: "Ana", meta: 5000, comissao: 0.05 },
    { nome: "João", meta: 3000, comissao: 0.04 },
    { nome: "Maria", meta: 4000, comissao: 0.045 },
    { nome: "Pedro", meta: 3500, comissao: 0.04 },
    { nome: "Lucia", meta: 2500, comissao: 0.035 },
    { nome: "Carlos", meta: 4500, comissao: 0.05 }
];

// =====================================================================================
// 2. ANÁLISES COM FOR TRADICIONAL
// =====================================================================================

console.log("\n📊 ANÁLISES COM FOR TRADICIONAL");
console.log("-".repeat(50));

function analisarVendasPorMes() {
    console.log("💰 VENDAS POR MÊS:");

    // Array para armazenar totais por mês
    const totaisMes = [0, 0, 0]; // índices 0, 1, 2 para meses 1, 2, 3
    const contagemMes = [0, 0, 0];

    // Loop tradicional para calcular totais
    for (let i = 0; i < vendas.length; i++) {
        const venda = vendas[i];
        const indiceMes = venda.mes - 1; // converter para índice do array

        totaisMes[indiceMes] += venda.valor;
        contagemMes[indiceMes]++;
    }

    // Exibir resultados
    const meses = ["Janeiro", "Fevereiro", "Março"];
    for (let i = 0; i < meses.length; i++) {
        const media = contagemMes[i] > 0 ? totaisMes[i] / contagemMes[i] : 0;
        console.log(`${meses[i]}:`);
        console.log(`  Total: R$ ${totaisMes[i].toFixed(2)}`);
        console.log(`  Vendas: ${contagemMes[i]}`);
        console.log(`  Média: R$ ${media.toFixed(2)}`);
    }

    return { totaisMes, contagemMes };
}

function encontrarTopProdutos(limite = 3) {
    console.log(`\n🏆 TOP ${limite} PRODUTOS (POR VALOR):`);

    // Criar cópia do array para ordenação
    const vendasOrdenadas = [];
    for (let i = 0; i < vendas.length; i++) {
        vendasOrdenadas[i] = vendas[i];
    }

    // Ordenação manual (bubble sort)
    for (let i = 0; i < vendasOrdenadas.length - 1; i++) {
        for (let j = 0; j < vendasOrdenadas.length - 1 - i; j++) {
            if (vendasOrdenadas[j].valor < vendasOrdenadas[j + 1].valor) {
                // Trocar posições
                const temp = vendasOrdenadas[j];
                vendasOrdenadas[j] = vendasOrdenadas[j + 1];
                vendasOrdenadas[j + 1] = temp;
            }
        }
    }

    // Exibir top produtos
    for (let i = 0; i < limite && i < vendasOrdenadas.length; i++) {
        const venda = vendasOrdenadas[i];
        console.log(`${i + 1}º. ${venda.produto} - R$ ${venda.valor.toFixed(2)} (${venda.vendedor})`);
    }

    return vendasOrdenadas.slice(0, limite);
}

// =====================================================================================
// 3. ANÁLISES COM WHILE
// =====================================================================================

console.log("\n📊 ANÁLISES COM WHILE");
console.log("-".repeat(50));

function processarMetasVendedores() {
    console.log("🎯 ANÁLISE DE METAS DOS VENDEDORES:");

    let indiceVendedor = 0;

    while (indiceVendedor < vendedores.length) {
        const vendedor = vendedores[indiceVendedor];
        let totalVendas = 0;
        let quantidadeVendas = 0;

        // Calcular total do vendedor
        let indiceVenda = 0;
        while (indiceVenda < vendas.length) {
            if (vendas[indiceVenda].vendedor === vendedor.nome) {
                totalVendas += vendas[indiceVenda].valor;
                quantidadeVendas++;
            }
            indiceVenda++;
        }

        const percentualMeta = (totalVendas / vendedor.meta) * 100;
        const comissaoGanha = totalVendas * vendedor.comissao;

        console.log(`\n👤 ${vendedor.nome}:`);
        console.log(`  Meta: R$ ${vendedor.meta.toFixed(2)}`);
        console.log(`  Vendido: R$ ${totalVendas.toFixed(2)}`);
        console.log(`  Cumprimento: ${percentualMeta.toFixed(1)}%`);
        console.log(`  Vendas: ${quantidadeVendas}`);
        console.log(`  Comissão: R$ ${comissaoGanha.toFixed(2)}`);
        console.log(`  Status: ${percentualMeta >= 100 ? "✅ Meta Atingida" : "⚠️ Abaixo da Meta"}`);

        indiceVendedor++;
    }
}

function buscarVendasPorFaixaValor(valorMin, valorMax) {
    console.log(`\n🔍 VENDAS ENTRE R$ ${valorMin} E R$ ${valorMax}:`);

    const vendasEncontradas = [];
    let indice = 0;

    while (indice < vendas.length) {
        const venda = vendas[indice];

        if (venda.valor >= valorMin && venda.valor <= valorMax) {
            vendasEncontradas.push(venda);
            console.log(`• ${venda.produto}: R$ ${venda.valor.toFixed(2)} (${venda.vendedor})`);
        }

        indice++;
    }

    console.log(`Total encontrado: ${vendasEncontradas.length} vendas`);
    return vendasEncontradas;
}

// =====================================================================================
// 4. ANÁLISES COM DO...WHILE
// =====================================================================================

console.log("\n📊 ANÁLISES COM DO...WHILE");
console.log("-".repeat(50));

function gerarRelatorioInterativo() {
    console.log("📋 RELATÓRIO INTERATIVO:");

    // Simular menu interativo
    const opcoes = [1, 2, 3, 0]; // simular escolhas do usuário
    let indiceOpcao = 0;
    let opcao;

    do {
        opcao = opcoes[indiceOpcao] || 0;

        console.log("\n=== MENU DE RELATÓRIOS ===");
        console.log("1. Vendas por Categoria");
        console.log("2. Vendas por Região");
        console.log("3. Resumo Executivo");
        console.log("0. Sair");
        console.log(`Opção selecionada: ${opcao}`);

        switch (opcao) {
            case 1:
                gerarRelatorioCategorias();
                break;
            case 2:
                gerarRelatorioRegioes();
                break;
            case 3:
                gerarResumoExecutivo();
                break;
            case 0:
                console.log("👋 Encerrando relatórios...");
                break;
            default:
                console.log("❌ Opção inválida");
        }

        indiceOpcao++;
    } while (opcao !== 0 && indiceOpcao < opcoes.length);
}

function gerarRelatorioCategorias() {
    console.log("\n📁 RELATÓRIO POR CATEGORIAS:");

    const categorias = {};
    let indice = 0;

    // Agrupar por categoria
    do {
        const venda = vendas[indice];

        if (!categorias[venda.categoria]) {
            categorias[venda.categoria] = {
                total: 0,
                quantidade: 0,
                produtos: []
            };
        }

        categorias[venda.categoria].total += venda.valor;
        categorias[venda.categoria].quantidade++;
        categorias[venda.categoria].produtos.push(venda.produto);

        indice++;
    } while (indice < vendas.length);

    // Exibir resultados
    for (let categoria in categorias) {
        const dados = categorias[categoria];
        const media = dados.total / dados.quantidade;

        console.log(`\n📦 ${categoria}:`);
        console.log(`  Total: R$ ${dados.total.toFixed(2)}`);
        console.log(`  Vendas: ${dados.quantidade}`);
        console.log(`  Média: R$ ${media.toFixed(2)}`);
        console.log(`  Produtos: ${dados.produtos.join(", ")}`);
    }
}

// =====================================================================================
// 5. ANÁLISES COM FOR...IN
// =====================================================================================

console.log("\n📊 ANÁLISES COM FOR...IN");
console.log("-".repeat(50));

function analisarDadosVendedores() {
    console.log("👥 ANÁLISE DETALHADA DOS VENDEDORES:");

    const estatisticasVendedores = {};

    // Inicializar estatísticas
    for (let i = 0; i < vendedores.length; i++) {
        const vendedor = vendedores[i];
        estatisticasVendedores[vendedor.nome] = {
            meta: vendedor.meta,
            comissao: vendedor.comissao,
            vendas: [],
            totalVendido: 0,
            categorias: {},
            regioes: {}
        };
    }

    // Processar vendas
    for (let i = 0; i < vendas.length; i++) {
        const venda = vendas[i];
        const nomeVendedor = venda.vendedor;

        if (estatisticasVendedores[nomeVendedor]) {
            estatisticasVendedores[nomeVendedor].vendas.push(venda);
            estatisticasVendedores[nomeVendedor].totalVendido += venda.valor;

            // Contar por categoria
            const cat = venda.categoria;
            estatisticasVendedores[nomeVendedor].categorias[cat] = 
                (estatisticasVendedores[nomeVendedor].categorias[cat] || 0) + 1;

            // Contar por região
            const reg = venda.regiao;
            estatisticasVendedores[nomeVendedor].regioes[reg] = 
                (estatisticasVendedores[nomeVendedor].regioes[reg] || 0) + 1;
        }
    }

    // Exibir estatísticas usando for...in
    for (let nomeVendedor in estatisticasVendedores) {
        const dados = estatisticasVendedores[nomeVendedor];

        console.log(`\n🧑‍💼 ${nomeVendedor}:`);
        console.log(`  Total vendido: R$ ${dados.totalVendido.toFixed(2)}`);
        console.log(`  Número de vendas: ${dados.vendas.length}`);

        console.log("  Categorias vendidas:");
        for (let categoria in dados.categorias) {
            console.log(`    ${categoria}: ${dados.categorias[categoria]} vendas`);
        }

        console.log("  Regiões atendidas:");
        for (let regiao in dados.regioes) {
            console.log(`    ${regiao}: ${dados.regioes[regiao]} vendas`);
        }

        // Calcular comissão
        const comissaoTotal = dados.totalVendido * dados.comissao;
        console.log(`  Comissão total: R$ ${comissaoTotal.toFixed(2)}`);
    }
}

// =====================================================================================
// 6. ANÁLISES COM FOR...OF
// =====================================================================================

console.log("\n📊 ANÁLISES COM FOR...OF");
console.log("-".repeat(50));

function gerarRelatorioRegioes() {
    console.log("🗺️ RELATÓRIO POR REGIÕES:");

    const dadosRegioes = new Map();

    // Processar vendas por região
    for (let venda of vendas) {
        if (!dadosRegioes.has(venda.regiao)) {
            dadosRegioes.set(venda.regiao, {
                vendas: [],
                total: 0,
                vendedores: new Set()
            });
        }

        const dadosRegiao = dadosRegioes.get(venda.regiao);
        dadosRegiao.vendas.push(venda);
        dadosRegiao.total += venda.valor;
        dadosRegiao.vendedores.add(venda.vendedor);
    }

    // Exibir dados das regiões
    for (let [regiao, dados] of dadosRegioes) {
        const media = dados.total / dados.vendas.length;

        console.log(`\n🌍 ${regiao}:`);
        console.log(`  Total: R$ ${dados.total.toFixed(2)}`);
        console.log(`  Vendas: ${dados.vendas.length}`);
        console.log(`  Média por venda: R$ ${media.toFixed(2)}`);
        console.log(`  Vendedores ativos: ${dados.vendedores.size}`);
        console.log(`  Vendedores: ${Array.from(dados.vendedores).join(", ")}`);
    }

    // Ranking de regiões
    const rankingRegioes = Array.from(dadosRegioes.entries())
        .sort((a, b) => b[1].total - a[1].total);

    console.log("\n🏆 RANKING DE REGIÕES POR FATURAMENTO:");
    for (let [posicao, [regiao, dados]] of rankingRegioes.entries()) {
        console.log(`${posicao + 1}º. ${regiao}: R$ ${dados.total.toFixed(2)}`);
    }
}

function analisarTendenciasProdutos() {
    console.log("\n📈 ANÁLISE DE TENDÊNCIAS DE PRODUTOS:");

    const produtosPorMes = new Map();

    // Agrupar vendas por produto e mês
    for (let venda of vendas) {
        const chave = venda.produto;

        if (!produtosPorMes.has(chave)) {
            produtosPorMes.set(chave, {
                vendas: [],
                vendasPorMes: [0, 0, 0],
                valorTotal: 0
            });
        }

        const dadosProduto = produtosPorMes.get(chave);
        dadosProduto.vendas.push(venda);
        dadosProduto.vendasPorMes[venda.mes - 1]++;
        dadosProduto.valorTotal += venda.valor;
    }

    // Analisar tendências
    for (let [produto, dados] of produtosPorMes) {
        const vendas = dados.vendasPorMes;
        let tendencia = "Estável";

        // Calcular tendência simples
        if (vendas[2] > vendas[1] && vendas[1] > vendas[0]) {
            tendencia = "📈 Crescendo";
        } else if (vendas[2] < vendas[1] && vendas[1] < vendas[0]) {
            tendencia = "📉 Declinando";
        }

        console.log(`\n📦 ${produto}:`);
        console.log(`  Vendas por mês: [${vendas.join(", ")}]`);
        console.log(`  Valor total: R$ ${dados.valorTotal.toFixed(2)}`);
        console.log(`  Tendência: ${tendencia}`);
    }
}

// =====================================================================================
// 7. ANÁLISES COM MÉTODOS DE ARRAY (forEach, map, filter, reduce)
// =====================================================================================

console.log("\n📊 ANÁLISES COM MÉTODOS DE ARRAY");
console.log("-".repeat(50));

function gerarResumoExecutivo() {
    console.log("📋 RESUMO EXECUTIVO:");

    // Total geral usando reduce
    const totalGeral = vendas.reduce((total, venda) => total + venda.valor, 0);
    console.log(`💰 Faturamento Total: R$ ${totalGeral.toFixed(2)}`);

    // Vendas por categoria usando filter e reduce
    const categorias = [...new Set(vendas.map(v => v.categoria))];
    console.log("\n📊 Faturamento por Categoria:");

    categorias.forEach(categoria => {
        const vendasCategoria = vendas.filter(v => v.categoria === categoria);
        const totalCategoria = vendasCategoria.reduce((total, v) => total + v.valor, 0);
        const percentual = (totalCategoria / totalGeral) * 100;

        console.log(`  ${categoria}: R$ ${totalCategoria.toFixed(2)} (${percentual.toFixed(1)}%)`);
    });

    // Top vendedores usando map e sort
    const vendedoresComTotal = vendedores.map(vendedor => {
        const vendasVendedor = vendas.filter(v => v.vendedor === vendedor.nome);
        const totalVendedor = vendasVendedor.reduce((total, v) => total + v.valor, 0);

        return {
            nome: vendedor.nome,
            total: totalVendedor,
            meta: vendedor.meta,
            percentualMeta: (totalVendedor / vendedor.meta) * 100
        };
    }).sort((a, b) => b.total - a.total);

    console.log("\n🏆 Ranking de Vendedores:");
    vendedoresComTotal.forEach((vendedor, index) => {
        const status = vendedor.percentualMeta >= 100 ? "✅" : "⚠️";
        console.log(`  ${index + 1}º. ${vendedor.nome}: R$ ${vendedor.total.toFixed(2)} ${status}`);
    });

    // Estatísticas gerais
    const valoresVendas = vendas.map(v => v.valor);
    const maiorVenda = Math.max(...valoresVendas);
    const menorVenda = Math.min(...valoresVendas);
    const mediaVenda = totalGeral / vendas.length;

    console.log("\n📈 Estatísticas Gerais:");
    console.log(`  Total de vendas: ${vendas.length}`);
    console.log(`  Valor médio por venda: R$ ${mediaVenda.toFixed(2)}`);
    console.log(`  Maior venda: R$ ${maiorVenda.toFixed(2)}`);
    console.log(`  Menor venda: R$ ${menorVenda.toFixed(2)}`);
}

// =====================================================================================
// 8. EXECUÇÃO DO SISTEMA
// =====================================================================================

console.log("\n🎯 EXECUTANDO ANÁLISES COMPLETAS");
console.log("=".repeat(60));

// Executar todas as análises
analisarVendasPorMes();
encontrarTopProdutos();
processarMetasVendedores();
buscarVendasPorFaixaValor(500, 1500);
gerarRelatorioInterativo();
analisarDadosVendedores();
gerarRelatorioRegioes();
analisarTendenciasProdutos();
gerarResumoExecutivo();

console.log("\n" + "=".repeat(60));
console.log("✅ SISTEMA DE ANÁLISE DE VENDAS CONCLUÍDO!");
console.log("\n🎓 Estruturas de repetição utilizadas:");
console.log("   • for tradicional: análises básicas e ordenação");
console.log("   • while: processamento de metas e buscas");
console.log("   • do...while: menu interativo");
console.log("   • for...in: processamento de objetos");
console.log("   • for...of: iteração de arrays e Maps");
console.log("   • forEach, map, filter, reduce: análises funcionais");
console.log("\n💼 Funcionalidades implementadas:");
console.log("   • Análise de vendas por período");
console.log("   • Ranking de produtos e vendedores");
console.log("   • Controle de metas");
console.log("   • Relatórios por categoria e região");
console.log("   • Análise de tendências");
console.log("   • Resumo executivo completo");