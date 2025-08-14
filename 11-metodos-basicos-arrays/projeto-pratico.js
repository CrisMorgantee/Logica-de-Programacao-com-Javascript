
// Projeto Prático: Sistema de Gerenciamento de Tarefas

console.log("=== SISTEMA DE GERENCIAMENTO DE TAREFAS ===");

// Base de dados das tarefas
let tarefas = [
    { id: 1, titulo: "Estudar JavaScript", categoria: "estudo", prioridade: "alta", concluida: false },
    { id: 2, titulo: "Fazer compras", categoria: "pessoal", prioridade: "media", concluida: false },
    { id: 3, titulo: "Reunião de equipe", categoria: "trabalho", prioridade: "alta", concluida: true },
    { id: 4, titulo: "Exercitar-se", categoria: "saude", prioridade: "media", concluida: false },
    { id: 5, titulo: "Ler livro", categoria: "lazer", prioridade: "baixa", concluida: false },
    { id: 6, titulo: "Projeto final", categoria: "trabalho", prioridade: "alta", concluida: false }
];

console.log("Tarefas iniciais:", tarefas.length);

// Função para adicionar nova tarefa
function adicionarTarefa(titulo, categoria, prioridade) {
    const novaTarefa = {
        id: tarefas.length + 1,
        titulo,
        categoria,
        prioridade,
        concluida: false
    };
    
    tarefas.push(novaTarefa);
    console.log(`✅ Tarefa "${titulo}" adicionada com sucesso!`);
    return novaTarefa;
}

// Função para remover tarefa por ID
function removerTarefa(id) {
    const indice = tarefas.findIndex(tarefa => tarefa.id === id);
    
    if (indice > -1) {
        const tarefaRemovida = tarefas.splice(indice, 1)[0];
        console.log(`🗑️ Tarefa "${tarefaRemovida.titulo}" removida`);
        return tarefaRemovida;
    } else {
        console.log(`❌ Tarefa com ID ${id} não encontrada`);
        return null;
    }
}

// Função para marcar tarefa como concluída
function concluirTarefa(id) {
    const tarefa = tarefas.find(t => t.id === id);
    
    if (tarefa) {
        tarefa.concluida = true;
        console.log(`✔️ Tarefa "${tarefa.titulo}" marcada como concluída!`);
        return tarefa;
    } else {
        console.log(`❌ Tarefa com ID ${id} não encontrada`);
        return null;
    }
}

// Função para buscar tarefas por categoria
function buscarPorCategoria(categoria) {
    return tarefas.filter(tarefa => tarefa.categoria === categoria);
}

// Função para buscar tarefas por prioridade
function buscarPorPrioridade(prioridade) {
    return tarefas.filter(tarefa => tarefa.prioridade === prioridade);
}

// Função para listar tarefas pendentes
function listarPendentes() {
    return tarefas.filter(tarefa => !tarefa.concluida);
}

// Função para listar tarefas concluídas
function listarConcluidas() {
    return tarefas.filter(tarefa => tarefa.concluida);
}

// Função para ordenar tarefas por prioridade
function ordenarPorPrioridade() {
    const prioridades = { "alta": 3, "media": 2, "baixa": 1 };
    
    return [...tarefas].sort((a, b) => {
        return prioridades[b.prioridade] - prioridades[a.prioridade];
    });
}

// Função para gerar relatório
function gerarRelatorio() {
    const total = tarefas.length;
    const concluidas = tarefas.filter(t => t.concluida).length;
    const pendentes = total - concluidas;
    
    // Contagem por categoria
    const categorias = {};
    tarefas.forEach(tarefa => {
        categorias[tarefa.categoria] = (categorias[tarefa.categoria] || 0) + 1;
    });
    
    // Contagem por prioridade
    const prioridades = {};
    tarefas.forEach(tarefa => {
        prioridades[tarefa.prioridade] = (prioridades[tarefa.prioridade] || 0) + 1;
    });
    
    console.log("\n📊 RELATÓRIO DE TAREFAS");
    console.log("========================");
    console.log(`Total de tarefas: ${total}`);
    console.log(`Concluídas: ${concluidas}`);
    console.log(`Pendentes: ${pendentes}`);
    console.log(`Progresso: ${((concluidas / total) * 100).toFixed(1)}%`);
    
    console.log("\nPor categoria:");
    Object.entries(categorias).forEach(([categoria, quantidade]) => {
        console.log(`- ${categoria}: ${quantidade}`);
    });
    
    console.log("\nPor prioridade:");
    Object.entries(prioridades).forEach(([prioridade, quantidade]) => {
        console.log(`- ${prioridade}: ${quantidade}`);
    });
}

// Função para exibir tarefas formatadas
function exibirTarefas(listaTarefas, titulo = "TAREFAS") {
    console.log(`\n📋 ${titulo}`);
    console.log("=".repeat(titulo.length + 4));
    
    if (listaTarefas.length === 0) {
        console.log("Nenhuma tarefa encontrada.");
        return;
    }
    
    listaTarefas.forEach((tarefa, index) => {
        const status = tarefa.concluida ? "✅" : "⏳";
        const prioridadeIcon = {
            "alta": "🔴",
            "media": "🟡", 
            "baixa": "🟢"
        };
        
        console.log(`${index + 1}. ${status} ${tarefa.titulo}`);
        console.log(`   ${prioridadeIcon[tarefa.prioridade]} ${tarefa.prioridade} | 📁 ${tarefa.categoria} | ID: ${tarefa.id}`);
    });
}

// DEMONSTRAÇÃO DO SISTEMA
console.log("\n=== DEMONSTRAÇÃO DO SISTEMA ===");

// Exibir tarefas iniciais
exibirTarefas(tarefas, "TODAS AS TAREFAS");

// Adicionar novas tarefas
console.log("\n➕ ADICIONANDO NOVAS TAREFAS");
adicionarTarefa("Preparar apresentação", "trabalho", "alta");
adicionarTarefa("Limpar a casa", "pessoal", "media");

// Concluir algumas tarefas
console.log("\n✅ MARCANDO TAREFAS COMO CONCLUÍDAS");
concluirTarefa(2); // Fazer compras
concluirTarefa(4); // Exercitar-se
concluirTarefa(7); // Preparar apresentação

// Remover uma tarefa
console.log("\n🗑️ REMOVENDO TAREFA");
removerTarefa(5); // Ler livro

// Buscar por categoria
console.log("\n🔍 BUSCAS E FILTROS");
const tarefasTrabalho = buscarPorCategoria("trabalho");
exibirTarefas(tarefasTrabalho, "TAREFAS DE TRABALHO");

const tarefasAltaPrioridade = buscarPorPrioridade("alta");
exibirTarefas(tarefasAltaPrioridade, "TAREFAS DE ALTA PRIORIDADE");

// Listar pendentes e concluídas
const pendentes = listarPendentes();
exibirTarefas(pendentes, "TAREFAS PENDENTES");

const concluidas = listarConcluidas();
exibirTarefas(concluidas, "TAREFAS CONCLUÍDAS");

// Ordenar por prioridade
console.log("\n📊 ORDENAÇÃO POR PRIORIDADE");
const tarefasOrdenadas = ordenarPorPrioridade();
exibirTarefas(tarefasOrdenadas, "TAREFAS ORDENADAS POR PRIORIDADE");

// Gerar relatório final
gerarRelatorio();

// Demonstrar encadeamento de métodos
console.log("\n🔗 EXEMPLO DE ENCADEAMENTO DE MÉTODOS");

// Buscar tarefas pendentes de alta prioridade e ordenar por categoria
const tarefasCriticas = tarefas
    .filter(t => !t.concluida)
    .filter(t => t.prioridade === "alta")
    .sort((a, b) => a.categoria.localeCompare(b.categoria))
    .map(t => `${t.titulo} (${t.categoria})`);

console.log("Tarefas críticas (pendentes + alta prioridade):");
tarefasCriticas.forEach((titulo, index) => {
    console.log(`${index + 1}. ${titulo}`);
});

// Estatísticas usando métodos de array
console.log("\n📈 ESTATÍSTICAS AVANÇADAS");

const totalTarefas = tarefas.length;
const temTarefasPendentes = tarefas.some(t => !t.concluida);
const todasAltaPrioridade = tarefas.every(t => t.prioridade === "alta");
const titulosTarefas = tarefas.map(t => t.titulo).join(" | ");

console.log(`Existem tarefas pendentes: ${temTarefasPendentes ? "Sim" : "Não"}`);
console.log(`Todas são alta prioridade: ${todasAltaPrioridade ? "Sim" : "Não"}`);
console.log(`Títulos das tarefas: ${titulosTarefas}`);

// Backup das tarefas (cópia)
const backupTarefas = tarefas.slice();
console.log(`\n💾 Backup criado com ${backupTarefas.length} tarefas`);

console.log("\n=== PROJETO CONCLUÍDO! ===");
console.log("✅ Sistema de tarefas implementado");
console.log("✅ Operações CRUD funcionando");
console.log("✅ Filtros e buscas implementados");
console.log("✅ Relatórios gerados");
console.log("✅ Métodos de array aplicados na prática");
