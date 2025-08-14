
// Projeto Prático: Sistema de Gerenciamento de Biblioteca

console.log("=== SISTEMA DE BIBLIOTECA ===");

// Base de dados da biblioteca
const biblioteca = [];

// Estrutura de um livro
function criarLivro(id, titulo, autor, ano, categoria, disponivel = true) {
    return {
        id,
        titulo,
        autor,
        ano,
        categoria,
        disponivel,
        historico: [] // Array para rastrear empréstimos
    };
}

// Adicionando livros à biblioteca
const livrosIniciais = [
    [1, "1984", "George Orwell", 1949, "Ficção"],
    [2, "Dom Casmurro", "Machado de Assis", 1899, "Literatura"],
    [3, "O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943, "Infantil"],
    [4, "Clean Code", "Robert Martin", 2008, "Tecnologia"],
    [5, "JavaScript: The Good Parts", "Douglas Crockford", 2008, "Tecnologia"],
    [6, "Cem Anos de Solidão", "Gabriel García Márquez", 1967, "Literatura"],
    [7, "O Hobbit", "J.R.R. Tolkien", 1937, "Fantasia"]
];

// Popula a biblioteca
for (let livroData of livrosIniciais) {
    const [id, titulo, autor, ano, categoria] = livroData;
    const livro = criarLivro(id, titulo, autor, ano, categoria);
    biblioteca.push(livro);
}

console.log(`📚 Biblioteca iniciada com ${biblioteca.length} livros`);

// Função para exibir todos os livros
function exibirBiblioteca() {
    console.log("\n=== CATÁLOGO COMPLETO ===");
    
    if (biblioteca.length === 0) {
        console.log("Biblioteca vazia");
        return;
    }
    
    for (let i = 0; i < biblioteca.length; i++) {
        const livro = biblioteca[i];
        const status = livro.disponivel ? "✅ Disponível" : "❌ Emprestado";
        console.log(`${i + 1}. ${livro.titulo} - ${livro.autor} (${livro.ano}) [${livro.categoria}] - ${status}`);
    }
}

// Função para buscar livros por categoria
function buscarPorCategoria(categoria) {
    const livrosEncontrados = [];
    
    for (let livro of biblioteca) {
        if (livro.categoria.toLowerCase() === categoria.toLowerCase()) {
            livrosEncontrados.push(livro);
        }
    }
    
    return livrosEncontrados;
}

// Função para buscar por autor
function buscarPorAutor(autor) {
    const livrosEncontrados = [];
    
    for (let livro of biblioteca) {
        if (livro.autor.toLowerCase().includes(autor.toLowerCase())) {
            livrosEncontrados.push(livro);
        }
    }
    
    return livrosEncontrados;
}

// Função para emprestar livro
function emprestarLivro(id, usuario) {
    // Encontrar livro
    let livroEncontrado = null;
    let indice = -1;
    
    for (let i = 0; i < biblioteca.length; i++) {
        if (biblioteca[i].id === id) {
            livroEncontrado = biblioteca[i];
            indice = i;
            break;
        }
    }
    
    if (!livroEncontrado) {
        return { sucesso: false, mensagem: "Livro não encontrado" };
    }
    
    if (!livroEncontrado.disponivel) {
        return { sucesso: false, mensagem: "Livro já está emprestado" };
    }
    
    // Realizar empréstimo
    biblioteca[indice].disponivel = false;
    biblioteca[indice].historico.push({
        acao: "emprestimo",
        usuario: usuario,
        data: new Date().toISOString().split('T')[0]
    });
    
    return { 
        sucesso: true, 
        mensagem: `Livro "${livroEncontrado.titulo}" emprestado para ${usuario}`,
        livro: livroEncontrado
    };
}

// Função para devolver livro
function devolverLivro(id, usuario) {
    let livroEncontrado = null;
    let indice = -1;
    
    for (let i = 0; i < biblioteca.length; i++) {
        if (biblioteca[i].id === id) {
            livroEncontrado = biblioteca[i];
            indice = i;
            break;
        }
    }
    
    if (!livroEncontrado) {
        return { sucesso: false, mensagem: "Livro não encontrado" };
    }
    
    if (livroEncontrado.disponivel) {
        return { sucesso: false, mensagem: "Livro não está emprestado" };
    }
    
    // Verificar se o usuário é o mesmo que pegou emprestado
    const ultimoEmprestimo = livroEncontrado.historico[livroEncontrado.historico.length - 1];
    if (ultimoEmprestimo && ultimoEmprestimo.usuario !== usuario) {
        return { 
            sucesso: false, 
            mensagem: `Livro foi emprestado para ${ultimoEmprestimo.usuario}, não para ${usuario}` 
        };
    }
    
    // Realizar devolução
    biblioteca[indice].disponivel = true;
    biblioteca[indice].historico.push({
        acao: "devolucao",
        usuario: usuario,
        data: new Date().toISOString().split('T')[0]
    });
    
    return { 
        sucesso: true, 
        mensagem: `Livro "${livroEncontrado.titulo}" devolvido por ${usuario}`,
        livro: livroEncontrado
    };
}

// Função para gerar relatórios
function gerarRelatorio() {
    const relatorio = {
        total: biblioteca.length,
        disponiveis: 0,
        emprestados: 0,
        categorias: {},
        autores: {},
        livrosMaisEmprestados: []
    };
    
    // Analisar cada livro
    for (let livro of biblioteca) {
        // Contar disponibilidade
        if (livro.disponivel) {
            relatorio.disponiveis++;
        } else {
            relatorio.emprestados++;
        }
        
        // Contar por categoria
        if (relatorio.categorias[livro.categoria]) {
            relatorio.categorias[livro.categoria]++;
        } else {
            relatorio.categorias[livro.categoria] = 1;
        }
        
        // Contar por autor
        if (relatorio.autores[livro.autor]) {
            relatorio.autores[livro.autor]++;
        } else {
            relatorio.autores[livro.autor] = 1;
        }
        
        // Contar empréstimos no histórico
        let totalEmprestimos = 0;
        for (let registro of livro.historico) {
            if (registro.acao === "emprestimo") {
                totalEmprestimos++;
            }
        }
        
        if (totalEmprestimos > 0) {
            relatorio.livrosMaisEmprestados.push({
                titulo: livro.titulo,
                autor: livro.autor,
                emprestimos: totalEmprestimos
            });
        }
    }
    
    // Ordenar livros mais emprestados (ordenação manual)
    for (let i = 0; i < relatorio.livrosMaisEmprestados.length - 1; i++) {
        for (let j = 0; j < relatorio.livrosMaisEmprestados.length - 1 - i; j++) {
            if (relatorio.livrosMaisEmprestados[j].emprestimos < relatorio.livrosMaisEmprestados[j + 1].emprestimos) {
                // Trocar posições
                let temp = relatorio.livrosMaisEmprestados[j];
                relatorio.livrosMaisEmprestados[j] = relatorio.livrosMaisEmprestados[j + 1];
                relatorio.livrosMaisEmprestados[j + 1] = temp;
            }
        }
    }
    
    return relatorio;
}

// ===== SIMULAÇÃO DO SISTEMA =====

// Exibir catálogo inicial
exibirBiblioteca();

console.log("\n=== BUSCA POR CATEGORIA ===");
const livrosTecnologia = buscarPorCategoria("Tecnologia");
console.log("Livros de Tecnologia:");
for (let livro of livrosTecnologia) {
    console.log(`- ${livro.titulo} por ${livro.autor}`);
}

console.log("\n=== BUSCA POR AUTOR ===");
const livrosOrwell = buscarPorAutor("Orwell");
console.log("Livros de autores com 'Orwell' no nome:");
for (let livro of livrosOrwell) {
    console.log(`- ${livro.titulo} (${livro.ano})`);
}

console.log("\n=== SIMULAÇÃO DE EMPRÉSTIMOS ===");

// Simular empréstimos
const emprestimos = [
    [1, "João Silva"],
    [4, "Maria Santos"],
    [7, "Pedro Lima"],
    [1, "Ana Costa"], // Tentativa de emprestar livro já emprestado
    [2, "Carlos Ferreira"]
];

for (let [id, usuario] of emprestimos) {
    const resultado = emprestarLivro(id, usuario);
    if (resultado.sucesso) {
        console.log(`✅ ${resultado.mensagem}`);
    } else {
        console.log(`❌ ${resultado.mensagem}`);
    }
}

console.log("\n=== SIMULAÇÃO DE DEVOLUÇÕES ===");

// Simular devoluções
const devolucoes = [
    [1, "João Silva"],     // Devolução correta
    [4, "José Santos"],    // Usuário errado
    [4, "Maria Santos"],   // Devolução correta
    [3, "Qualquer Um"]     // Livro que não foi emprestado
];

for (let [id, usuario] of devolucoes) {
    const resultado = devolverLivro(id, usuario);
    if (resultado.sucesso) {
        console.log(`✅ ${resultado.mensagem}`);
    } else {
        console.log(`❌ ${resultado.mensagem}`);
    }
}

console.log("\n=== STATUS ATUAL DA BIBLIOTECA ===");
exibirBiblioteca();

console.log("\n=== RELATÓRIO COMPLETO ===");
const relatorio = gerarRelatorio();

console.log(`📊 Total de livros: ${relatorio.total}`);
console.log(`✅ Disponíveis: ${relatorio.disponiveis}`);
console.log(`❌ Emprestados: ${relatorio.emprestados}`);

console.log("\n📁 Livros por categoria:");
for (let categoria in relatorio.categorias) {
    console.log(`  ${categoria}: ${relatorio.categorias[categoria]} livros`);
}

console.log("\n👤 Livros por autor:");
for (let autor in relatorio.autores) {
    console.log(`  ${autor}: ${relatorio.autores[autor]} livros`);
}

if (relatorio.livrosMaisEmprestados.length > 0) {
    console.log("\n🔥 Livros mais emprestados:");
    for (let i = 0; i < Math.min(3, relatorio.livrosMaisEmprestados.length); i++) {
        const livro = relatorio.livrosMaisEmprestados[i];
        console.log(`  ${i + 1}. ${livro.titulo} - ${livro.emprestimos} empréstimo(s)`);
    }
}

console.log("\n=== HISTÓRICO DE UM LIVRO ESPECÍFICO ===");
const livroComHistorico = biblioteca.find(livro => livro.id === 1);
if (livroComHistorico && livroComHistorico.historico.length > 0) {
    console.log(`📖 Histórico do livro "${livroComHistorico.titulo}":`);
    for (let registro of livroComHistorico.historico) {
        const acao = registro.acao === "emprestimo" ? "Emprestado" : "Devolvido";
        console.log(`  ${acao} para ${registro.usuario} em ${registro.data}`);
    }
}

// Adicionar novo livro demonstrando flexibilidade do array
console.log("\n=== ADICIONANDO NOVO LIVRO ===");
const novoLivro = criarLivro(8, "Algoritmos", "Robert Sedgewick", 2011, "Tecnologia");
biblioteca.push(novoLivro);
console.log(`📚 "${novoLivro.titulo}" adicionado à biblioteca`);
console.log(`📊 Total de livros agora: ${biblioteca.length}`);
