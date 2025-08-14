
// Projeto Prático: Sistema de Biblioteca Digital

console.log("=== SISTEMA DE BIBLIOTECA DIGITAL ===");

// Classe Book usando factory function
function criarLivro(isbn, titulo, autor, genero, ano, paginas) {
    return {
        isbn,
        titulo,
        autor,
        genero,
        ano,
        paginas,
        disponivel: true,
        emprestimos: [],
        avaliacoes: [],
        
        // Métodos do livro
        emprestar(usuario, dataEmprestimo = new Date()) {
            if (!this.disponivel) {
                return { sucesso: false, mensagem: "Livro não disponível" };
            }
            
            const emprestimo = {
                usuario,
                dataEmprestimo,
                dataDevolucao: null,
                ativo: true
            };
            
            this.emprestimos.push(emprestimo);
            this.disponivel = false;
            
            return { 
                sucesso: true, 
                mensagem: `Livro emprestado para ${usuario.nome}`,
                emprestimo 
            };
        },
        
        devolver(dataDevolucao = new Date()) {
            const emprestimoAtivo = this.emprestimos.find(e => e.ativo);
            
            if (!emprestimoAtivo) {
                return { sucesso: false, mensagem: "Livro não está emprestado" };
            }
            
            emprestimoAtivo.dataDevolucao = dataDevolucao;
            emprestimoAtivo.ativo = false;
            this.disponivel = true;
            
            return { 
                sucesso: true, 
                mensagem: `Livro devolvido por ${emprestimoAtivo.usuario.nome}` 
            };
        },
        
        avaliar(usuario, nota, comentario = "") {
            if (nota < 1 || nota > 5) {
                return { sucesso: false, mensagem: "Nota deve estar entre 1 e 5" };
            }
            
            const avaliacao = {
                usuario,
                nota,
                comentario,
                data: new Date()
            };
            
            this.avaliacoes.push(avaliacao);
            
            return { 
                sucesso: true, 
                mensagem: "Avaliação adicionada com sucesso",
                avaliacao 
            };
        },
        
        get mediaAvaliacoes() {
            if (this.avaliacoes.length === 0) return 0;
            
            const soma = this.avaliacoes.reduce((total, av) => total + av.nota, 0);
            return (soma / this.avaliacoes.length).toFixed(1);
        },
        
        get informacoes() {
            return {
                identificacao: `${this.titulo} - ${this.autor}`,
                detalhes: `${this.ano} | ${this.paginas} páginas | Gênero: ${this.genero}`,
                status: this.disponivel ? "Disponível" : "Emprestado",
                avaliacaoMedia: this.mediaAvaliacoes,
                totalEmprestimos: this.emprestimos.length,
                totalAvaliacoes: this.avaliacoes.length
            };
        }
    };
}

// Factory function para usuários
function criarUsuario(id, nome, email, tipo = "comum") {
    return {
        id,
        nome,
        email,
        tipo,
        ativo: true,
        dataRegistro: new Date(),
        historicoEmprestimos: [],
        
        get estatisticas() {
            return {
                totalEmprestimos: this.historicoEmprestimos.length,
                emprestimosAtivos: this.historicoEmprestimos.filter(e => e.ativo).length,
                livrosDevolvidos: this.historicoEmprestimos.filter(e => !e.ativo).length
            };
        }
    };
}

// Sistema de biblioteca
const biblioteca = {
    nome: "Biblioteca Digital Tech",
    livros: [],
    usuarios: [],
    nextUserId: 1,
    
    // Gerenciamento de livros
    adicionarLivro(isbn, titulo, autor, genero, ano, paginas) {
        // Verificar se ISBN já existe
        if (this.livros.find(livro => livro.isbn === isbn)) {
            return { sucesso: false, mensagem: "ISBN já existe na biblioteca" };
        }
        
        const novoLivro = criarLivro(isbn, titulo, autor, genero, ano, paginas);
        this.livros.push(novoLivro);
        
        return { 
            sucesso: true, 
            mensagem: `Livro "${titulo}" adicionado à biblioteca`,
            livro: novoLivro 
        };
    },
    
    buscarLivro(criterio, valor) {
        const livroEncontrado = this.livros.find(livro => {
            if (criterio === "isbn") return livro.isbn === valor;
            if (criterio === "titulo") return livro.titulo.toLowerCase().includes(valor.toLowerCase());
            if (criterio === "autor") return livro.autor.toLowerCase().includes(valor.toLowerCase());
            return false;
        });
        
        return livroEncontrado || null;
    },
    
    listarLivros(filtro = "todos") {
        switch (filtro) {
            case "disponiveis":
                return this.livros.filter(livro => livro.disponivel);
            case "emprestados":
                return this.livros.filter(livro => !livro.disponivel);
            case "genero":
                return (genero) => this.livros.filter(livro => 
                    livro.genero.toLowerCase() === genero.toLowerCase()
                );
            default:
                return this.livros;
        }
    },
    
    // Gerenciamento de usuários
    cadastrarUsuario(nome, email, tipo = "comum") {
        // Verificar se email já existe
        if (this.usuarios.find(usuario => usuario.email === email)) {
            return { sucesso: false, mensagem: "Email já cadastrado" };
        }
        
        const novoUsuario = criarUsuario(this.nextUserId++, nome, email, tipo);
        this.usuarios.push(novoUsuario);
        
        return { 
            sucesso: true, 
            mensagem: `Usuário ${nome} cadastrado com sucesso`,
            usuario: novoUsuario 
        };
    },
    
    buscarUsuario(criterio, valor) {
        const usuarioEncontrado = this.usuarios.find(usuario => {
            if (criterio === "id") return usuario.id === valor;
            if (criterio === "email") return usuario.email === valor;
            if (criterio === "nome") return usuario.nome.toLowerCase().includes(valor.toLowerCase());
            return false;
        });
        
        return usuarioEncontrado || null;
    },
    
    // Operações de empréstimo
    emprestarLivro(isbnLivro, idUsuario) {
        const livro = this.buscarLivro("isbn", isbnLivro);
        const usuario = this.buscarUsuario("id", idUsuario);
        
        if (!livro) return { sucesso: false, mensagem: "Livro não encontrado" };
        if (!usuario) return { sucesso: false, mensagem: "Usuário não encontrado" };
        if (!usuario.ativo) return { sucesso: false, mensagem: "Usuário inativo" };
        
        const resultado = livro.emprestar(usuario);
        
        if (resultado.sucesso) {
            usuario.historicoEmprestimos.push(resultado.emprestimo);
        }
        
        return resultado;
    },
    
    devolverLivro(isbnLivro) {
        const livro = this.buscarLivro("isbn", isbnLivro);
        
        if (!livro) return { sucesso: false, mensagem: "Livro não encontrado" };
        
        return livro.devolver();
    },
    
    // Relatórios e estatísticas
    get estatisticas() {
        const totalLivros = this.livros.length;
        const livrosDisponiveis = this.livros.filter(l => l.disponivel).length;
        const livrosEmprestados = totalLivros - livrosDisponiveis;
        const totalUsuarios = this.usuarios.length;
        const usuariosAtivos = this.usuarios.filter(u => u.ativo).length;
        
        // Estatísticas por gênero
        const generos = {};
        this.livros.forEach(livro => {
            generos[livro.genero] = (generos[livro.genero] || 0) + 1;
        });
        
        // Top 5 livros mais emprestados
        const topLivros = this.livros
            .sort((a, b) => b.emprestimos.length - a.emprestimos.length)
            .slice(0, 5)
            .map(livro => ({
                titulo: livro.titulo,
                emprestimos: livro.emprestimos.length,
                avaliacao: livro.mediaAvaliacoes
            }));
        
        return {
            geral: {
                totalLivros,
                livrosDisponiveis,
                livrosEmprestados,
                totalUsuarios,
                usuariosAtivos
            },
            generos,
            topLivros
        };
    },
    
    gerarRelatorio() {
        const stats = this.estatisticas;
        
        console.log(`\n📊 RELATÓRIO - ${this.nome}`);
        console.log("=".repeat(50));
        
        console.log("\n📚 ESTATÍSTICAS GERAIS");
        console.log(`Total de livros: ${stats.geral.totalLivros}`);
        console.log(`Disponíveis: ${stats.geral.livrosDisponiveis}`);
        console.log(`Emprestados: ${stats.geral.livrosEmprestados}`);
        console.log(`Total de usuários: ${stats.geral.totalUsuarios}`);
        console.log(`Usuários ativos: ${stats.geral.usuariosAtivos}`);
        
        console.log("\n📖 LIVROS POR GÊNERO");
        Object.entries(stats.generos).forEach(([genero, quantidade]) => {
            console.log(`${genero}: ${quantidade}`);
        });
        
        console.log("\n🏆 TOP 5 LIVROS MAIS EMPRESTADOS");
        stats.topLivros.forEach((livro, index) => {
            console.log(`${index + 1}. ${livro.titulo} (${livro.emprestimos} empréstimos, ⭐ ${livro.avaliacao})`);
        });
    }
};

// DEMONSTRAÇÃO DO SISTEMA
console.log("\n=== CONFIGURAÇÃO INICIAL ===");

// Adicionar livros à biblioteca
const livrosParaAdicionar = [
    ["978-0134685991", "Effective Java", "Joshua Bloch", "Programação", 2017, 416],
    ["978-0596517748", "JavaScript: The Good Parts", "Douglas Crockford", "Programação", 2008, 176],
    ["978-0135166307", "Clean Code", "Robert Martin", "Programação", 2008, 464],
    ["978-0321125217", "Domain-Driven Design", "Eric Evans", "Arquitetura", 2003, 560],
    ["978-0201633610", "Design Patterns", "Gang of Four", "Programação", 1994, 395],
    ["978-1449331818", "Learning React", "Alex Banks", "Programação", 2020, 310]
];

console.log("📚 Adicionando livros...");
livrosParaAdicionar.forEach(([isbn, titulo, autor, genero, ano, paginas]) => {
    const resultado = biblioteca.adicionarLivro(isbn, titulo, autor, genero, ano, paginas);
    if (resultado.sucesso) {
        console.log(`✅ ${resultado.mensagem}`);
    }
});

// Cadastrar usuários
const usuariosParaCadastrar = [
    ["João Silva", "joao@email.com", "administrador"],
    ["Maria Santos", "maria@email.com", "comum"],
    ["Pedro Lima", "pedro@email.com", "comum"],
    ["Ana Costa", "ana@email.com", "comum"],
    ["Carlos Ferreira", "carlos@email.com", "comum"]
];

console.log("\n👥 Cadastrando usuários...");
usuariosParaCadastrar.forEach(([nome, email, tipo]) => {
    const resultado = biblioteca.cadastrarUsuario(nome, email, tipo);
    if (resultado.sucesso) {
        console.log(`✅ ${resultado.mensagem}`);
    }
});

console.log("\n=== OPERAÇÕES DE EMPRÉSTIMO ===");

// Realizar empréstimos
const emprestimos = [
    ["978-0134685991", 2], // Effective Java para Maria
    ["978-0596517748", 3], // JavaScript para Pedro
    ["978-0201633610", 4], // Design Patterns para Ana
    ["978-1449331818", 5]  // Learning React para Carlos
];

emprestimos.forEach(([isbn, usuarioId]) => {
    const resultado = biblioteca.emprestarLivro(isbn, usuarioId);
    if (resultado.sucesso) {
        console.log(`📖 ${resultado.mensagem}`);
    }
});

console.log("\n=== AVALIAÇÕES ===");

// Adicionar avaliações aos livros
const avaliacoes = [
    ["978-0134685991", 2, 5, "Excelente livro para aprender Java!"],
    ["978-0596517748", 3, 4, "Muito bom para entender JavaScript"],
    ["978-0201633610", 4, 5, "Referência essencial em design patterns"],
    ["978-1449331818", 5, 4, "Ótima introdução ao React"]
];

avaliacoes.forEach(([isbn, usuarioId, nota, comentario]) => {
    const livro = biblioteca.buscarLivro("isbn", isbn);
    const usuario = biblioteca.buscarUsuario("id", usuarioId);
    
    if (livro && usuario) {
        const resultado = livro.avaliar(usuario, nota, comentario);
        if (resultado.sucesso) {
            console.log(`⭐ ${usuario.nome} avaliou "${livro.titulo}" com ${nota} estrelas`);
        }
    }
});

console.log("\n=== DEVOLUÇÕES ===");

// Devolver alguns livros
const devolucoes = ["978-0596517748", "978-1449331818"];

devolucoes.forEach(isbn => {
    const resultado = biblioteca.devolverLivro(isbn);
    if (resultado.sucesso) {
        console.log(`📥 ${resultado.mensagem}`);
    }
});

console.log("\n=== BUSCAS E CONSULTAS ===");

// Buscar livros
console.log("\n🔍 BUSCA POR AUTOR");
const livrosJava = biblioteca.buscarLivro("autor", "Bloch");
if (livrosJava) {
    console.log("Livro encontrado:", livrosJava.informacoes);
}

// Listar livros disponíveis
console.log("\n📋 LIVROS DISPONÍVEIS");
const disponiveis = biblioteca.listarLivros("disponiveis");
disponiveis.forEach((livro, index) => {
    console.log(`${index + 1}. ${livro.titulo} - ${livro.autor} (⭐ ${livro.mediaAvaliacoes})`);
});

// Listar livros emprestados
console.log("\n📋 LIVROS EMPRESTADOS");
const emprestados = biblioteca.listarLivros("emprestados");
emprestados.forEach((livro, index) => {
    const emprestimoAtivo = livro.emprestimos.find(e => e.ativo);
    console.log(`${index + 1}. ${livro.titulo} - Emprestado para: ${emprestimoAtivo.usuario.nome}`);
});

// Estatísticas de usuários
console.log("\n👤 ESTATÍSTICAS DOS USUÁRIOS");
biblioteca.usuarios.forEach(usuario => {
    const stats = usuario.estatisticas;
    console.log(`${usuario.nome}: ${stats.totalEmprestimos} empréstimos (${stats.emprestimosAtivos} ativos)`);
});

// Relatório final
biblioteca.gerarRelatorio();

console.log("\n=== DEMONSTRAÇÃO DE CONCEITOS AVANÇADOS ===");

// Clonagem e manipulação de objetos
console.log("\n🔄 CLONAGEM DE LIVROS");
const livroOriginal = biblioteca.buscarLivro("titulo", "Clean Code");
const livroClone = { ...livroOriginal, isbn: "978-9999999999", titulo: "Clean Code - Edição Especial" };

console.log("Original:", livroOriginal.titulo);
console.log("Clone:", livroClone.titulo);

// Destructuring para extração de dados
console.log("\n📊 DESTRUCTURING DE DADOS");
const { geral, generos } = biblioteca.estatisticas;
const { totalLivros, livrosDisponiveis, livrosEmprestados } = geral;

console.log(`De ${totalLivros} livros: ${livrosDisponiveis} disponíveis, ${livrosEmprestados} emprestados`);

// Transformação de dados usando Object.entries
console.log("\n📈 ANÁLISE POR GÊNERO");
const analiseGeneros = Object.entries(generos)
    .map(([genero, quantidade]) => ({ genero, quantidade, percentual: (quantidade / totalLivros * 100).toFixed(1) }))
    .sort((a, b) => b.quantidade - a.quantidade);

analiseGeneros.forEach(({ genero, quantidade, percentual }) => {
    console.log(`${genero}: ${quantidade} livros (${percentual}%)`);
});

console.log("\n=== PROJETO CONCLUÍDO! ===");
console.log("✅ Sistema de biblioteca implementado");
console.log("✅ Factory functions utilizadas");
console.log("✅ Métodos e getters implementados");
console.log("✅ Operações CRUD funcionando");
console.log("✅ Relatórios e estatísticas gerados");
console.log("✅ Conceitos avançados de objetos aplicados");
