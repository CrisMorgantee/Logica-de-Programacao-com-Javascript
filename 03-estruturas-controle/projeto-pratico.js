// =====================================================================================
// PROJETO PRÁTICO: SISTEMA DE AVALIAÇÃO E CLASSIFICAÇÃO DE ESTUDANTES
// =====================================================================================
//
// 🎯 OBJETIVO: Criar um sistema completo que use todas as estruturas de controle
// para avaliar estudantes, classificar desempenho e gerar relatórios.

console.log("🚀 SISTEMA DE AVALIAÇÃO DE ESTUDANTES");
console.log("=".repeat(60));

// =====================================================================================
// 1. DADOS DOS ESTUDANTES
// =====================================================================================

const estudantes = [
    {
        id: 1,
        nome: "Ana Silva",
        idade: 20,
        curso: "Engenharia",
        semestre: 6,
        notas: [8.5, 9.0, 7.5, 8.0],
        frequencia: 95,
        ativo: true,
        bolsista: true
    },
    {
        id: 2,
        nome: "João Santos",
        idade: 19,
        curso: "Medicina",
        semestre: 2,
        notas: [6.0, 7.0, 5.5, 6.5],
        frequencia: 85,
        ativo: true,
        bolsista: false
    },
    {
        id: 3,
        nome: "Maria Costa",
        idade: 22,
        curso: "Direito",
        semestre: 8,
        notas: [9.5, 9.8, 9.2, 9.7],
        frequencia: 98,
        ativo: true,
        bolsista: true
    },
    {
        id: 4,
        nome: "Pedro Oliveira",
        idade: 17,
        curso: "Engenharia",
        semestre: 1,
        notas: [4.0, 5.0, 3.5, 4.5],
        frequencia: 70,
        ativo: false,
        bolsista: false
    },
    {
        id: 5,
        nome: "Lucia Ferreira",
        idade: 21,
        curso: "Psicologia",
        semestre: 4,
        notas: [7.8, 8.2, 7.9, 8.1],
        frequencia: 92,
        ativo: true,
        bolsista: true
    }
];

// =====================================================================================
// 2. FUNÇÕES DE CÁLCULO E CLASSIFICAÇÃO
// =====================================================================================

function calcularMedia(notas) {
    if (!notas || notas.length === 0) {
        return 0;
    }

    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}

function classificarDesempenho(media) {
    if (media >= 9.0) {
        return { conceito: "A", status: "Excelente", emoji: "🌟" };
    } else if (media >= 8.0) {
        return { conceito: "B", status: "Muito Bom", emoji: "🎯" };
    } else if (media >= 7.0) {
        return { conceito: "C", status: "Bom", emoji: "👍" };
    } else if (media >= 6.0) {
        return { conceito: "D", status: "Regular", emoji: "⚠️" };
    } else {
        return { conceito: "F", status: "Reprovado", emoji: "❌" };
    }
}

function verificarSituacao(estudante) {
    // Guard clauses para validação
    if (!estudante) {
        return { situacao: "Erro", motivo: "Estudante não encontrado" };
    }

    if (!estudante.ativo) {
        return { situacao: "Inativo", motivo: "Matrícula cancelada" };
    }

    const media = calcularMedia(estudante.notas);
    const frequenciaMinima = 75;

    // Verificações múltiplas com operadores lógicos
    const aprovadoPorNota = media >= 6.0;
    const aprovadoPorFrequencia = estudante.frequencia >= frequenciaMinima;

    if (aprovadoPorNota && aprovadoPorFrequencia) {
        return { situacao: "Aprovado", motivo: "Atende todos os critérios" };
    } else if (!aprovadoPorNota && !aprovadoPorFrequencia) {
        return { situacao: "Reprovado", motivo: "Média e frequência insuficientes" };
    } else if (!aprovadoPorNota) {
        return { situacao: "Reprovado", motivo: "Média insuficiente" };
    } else {
        return { situacao: "Reprovado", motivo: "Frequência insuficiente" };
    }
}

function determinarCategoria(estudante) {
    const media = calcularMedia(estudante.notas);
    const { frequencia, semestre, bolsista, idade } = estudante;

    // Usando switch para determinar categoria por semestre
    let nivelEstudante;
    switch (true) {
        case semestre <= 2:
            nivelEstudante = "Iniciante";
            break;
        case semestre <= 4:
            nivelEstudante = "Intermediário";
            break;
        case semestre <= 6:
            nivelEstudante = "Avançado";
            break;
        default:
            nivelEstudante = "Formando";
    }

    // Usando operadores ternários para classificações especiais
    const ehDestaque = media >= 8.5 && frequencia >= 90;
    const ehAtencao = media < 6.0 || frequencia < 75;
    const ehVeterano = idade >= 21 && semestre >= 5;

    return {
        nivel: nivelEstudante,
        destaque: ehDestaque ? "🏆 Estudante Destaque" : null,
        atencao: ehAtencao ? "⚠️ Necessita Atenção" : null,
        veterano: ehVeterano ? "🎓 Veterano" : null,
        bolsista: bolsista ? "💰 Bolsista" : null
    };
}

// =====================================================================================
// 3. SISTEMA DE RELATÓRIOS
// =====================================================================================

function gerarRelatorioIndividual(estudante) {
    console.log(`\n📊 RELATÓRIO INDIVIDUAL`);
    console.log(`Nome: ${estudante.nome}`);
    console.log(`Curso: ${estudante.curso} - ${estudante.semestre}º semestre`);
    console.log(`Idade: ${estudante.idade} anos`);

    const media = calcularMedia(estudante.notas);
    const classificacao = classificarDesempenho(media);
    const situacao = verificarSituacao(estudante);
    const categoria = determinarCategoria(estudante);

    console.log(`\n📈 DESEMPENHO ACADÊMICO:`);
    console.log(`Notas: [${estudante.notas.join(", ")}]`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Conceito: ${classificacao.conceito} - ${classificacao.status} ${classificacao.emoji}`);
    console.log(`Frequência: ${estudante.frequencia}%`);
    console.log(`Situação: ${situacao.situacao} (${situacao.motivo})`);

    console.log(`\n🏷️ CLASSIFICAÇÕES:`);
    console.log(`Nível: ${categoria.nivel}`);

    // Usando optional chaining e nullish coalescing
    categoria.destaque && console.log(`${categoria.destaque}`);
    categoria.atencao && console.log(`${categoria.atencao}`);
    categoria.veterano && console.log(`${categoria.veterano}`);
    categoria.bolsista && console.log(`${categoria.bolsista}`);

    return {
        estudante: estudante.nome,
        media,
        situacao: situacao.situacao,
        categoria
    };
}

function gerarEstatisticasGerais() {
    console.log(`\n📊 ESTATÍSTICAS GERAIS DA TURMA`);
    console.log("=".repeat(40));

    const estudantesAtivos = estudantes.filter(e => e.ativo);
    const totalAtivos = estudantesAtivos.length;

    // Cálculos usando estruturas condicionais
    let aprovados = 0;
    let reprovados = 0;
    let somaMedias = 0;
    let destaquesCount = 0;
    let atencaoCount = 0;

    estudantesAtivos.forEach(estudante => {
        const media = calcularMedia(estudante.notas);
        const situacao = verificarSituacao(estudante);
        const categoria = determinarCategoria(estudante);

        somaMedias += media;

        // Usando operador ternário para contagem
        situacao.situacao === "Aprovado" ? aprovados++ : reprovados++;
        categoria.destaque ? destaquesCount++ : null;
        categoria.atencao ? atencaoCount++ : null;
    });

    const mediaGeral = totalAtivos > 0 ? somaMedias / totalAtivos : 0;
    const percentualAprovacao = totalAtivos > 0 ? (aprovados / totalAtivos) * 100 : 0;

    console.log(`Total de estudantes ativos: ${totalAtivos}`);
    console.log(`Aprovados: ${aprovados} (${percentualAprovacao.toFixed(1)}%)`);
    console.log(`Reprovados: ${reprovados}`);
    console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`);
    console.log(`Estudantes destaque: ${destaquesCount}`);
    console.log(`Estudantes em atenção: ${atencaoCount}`);

    // Classificação da turma usando switch
    let classificacaoTurma;
    switch (true) {
        case mediaGeral >= 8.5:
            classificacaoTurma = "🌟 Turma Excelente";
            break;
        case mediaGeral >= 7.5:
            classificacaoTurma = "🎯 Turma Muito Boa";
            break;
        case mediaGeral >= 6.5:
            classificacaoTurma = "👍 Turma Boa";
            break;
        case mediaGeral >= 5.5:
            classificacaoTurma = "⚠️ Turma Regular";
            break;
        default:
            classificacaoTurma = "❌ Turma com Dificuldades";
    }

    console.log(`Classificação: ${classificacaoTurma}`);
}

function gerarRelatorioPorCurso() {
    console.log(`\n📚 RELATÓRIO POR CURSO`);
    console.log("=".repeat(40));

    // Agrupar por curso
    const cursos = {};

    estudantes.forEach(estudante => {
        if (!estudante.ativo) return; // Guard clause

        const curso = estudante.curso;
        if (!cursos[curso]) {
            cursos[curso] = {
                estudantes: [],
                medias: [],
                aprovados: 0,
                total: 0
            };
        }

        const media = calcularMedia(estudante.notas);
        const situacao = verificarSituacao(estudante);

        cursos[curso].estudantes.push(estudante.nome);
        cursos[curso].medias.push(media);
        cursos[curso].total++;

        if (situacao.situacao === "Aprovado") {
            cursos[curso].aprovados++;
        }
    });

    // Exibir relatório de cada curso
    Object.keys(cursos).forEach(nomeCurso => {
        const curso = cursos[nomeCurso];
        const mediaGeral = curso.medias.reduce((a, b) => a + b, 0) / curso.medias.length;
        const percentualAprovacao = (curso.aprovados / curso.total) * 100;

        console.log(`\n🎓 ${nomeCurso}:`);
        console.log(`  Estudantes: ${curso.total}`);
        console.log(`  Média do curso: ${mediaGeral.toFixed(2)}`);
        console.log(`  Aprovação: ${percentualAprovacao.toFixed(1)}%`);
        console.log(`  Estudantes: ${curso.estudantes.join(", ")}`);
    });
}

// =====================================================================================
// 4. SISTEMA INTERATIVO DE CONSULTAS
// =====================================================================================

function buscarEstudante(criterio, valor) {
    // Usando switch para diferentes tipos de busca
    switch (criterio) {
        case "id":
            return estudantes.find(e => e.id === valor);
        case "nome":
            return estudantes.find(e =>
                e.nome.toLowerCase().includes(valor.toLowerCase())
            );
        case "curso":
            return estudantes.filter(e =>
                e.curso.toLowerCase() === valor.toLowerCase()
            );
        default:
            return null;
    }
}

function filtrarEstudantes(filtros) {
    return estudantes.filter(estudante => {
        // Aplicar filtros usando operadores lógicos
        let passaFiltro = true;

        // Filtro por ativo
        if (filtros.ativo !== undefined) {
            passaFiltro = passaFiltro && (estudante.ativo === filtros.ativo);
        }

        // Filtro por média mínima
        if (filtros.mediaMinima !== undefined) {
            const media = calcularMedia(estudante.notas);
            passaFiltro = passaFiltro && (media >= filtros.mediaMinima);
        }

        // Filtro por frequência mínima
        if (filtros.frequenciaMinima !== undefined) {
            passaFiltro = passaFiltro && (estudante.frequencia >= filtros.frequenciaMinima);
        }

        // Filtro por curso
        if (filtros.curso) {
            passaFiltro = passaFiltro && (estudante.curso === filtros.curso);
        }

        // Filtro por bolsista
        if (filtros.bolsista !== undefined) {
            passaFiltro = passaFiltro && (estudante.bolsista === filtros.bolsista);
        }

        return passaFiltro;
    });
}

// =====================================================================================
// 5. EXECUÇÃO DO SISTEMA
// =====================================================================================

console.log("\n📋 PROCESSANDO RELATÓRIOS INDIVIDUAIS...");
const relatorios = estudantes
    .filter(e => e.ativo)
    .map(estudante => gerarRelatorioIndividual(estudante));

console.log("\n" + "=".repeat(60));
gerarEstatisticasGerais();

console.log("\n" + "=".repeat(60));
gerarRelatorioPorCurso();

console.log("\n" + "=".repeat(60));
console.log("🔍 EXEMPLOS DE BUSCA E FILTROS");

// Busca por ID
const estudanteId2 = buscarEstudante("id", 2);
console.log(`\nBusca por ID 2: ${estudanteId2?.nome ?? "Não encontrado"}`);

// Busca por nome
const estudanteAna = buscarEstudante("nome", "Ana");
console.log(`Busca por nome "Ana": ${estudanteAna?.nome ?? "Não encontrado"}`);

// Filtros combinados
console.log("\n📊 FILTROS APLICADOS:");

const estudantesDestaque = filtrarEstudantes({
    ativo: true,
    mediaMinima: 8.0,
    frequenciaMinima: 90
});
console.log(`Estudantes destaque (média ≥ 8.0 e freq ≥ 90%): ${estudantesDestaque.length}`);
estudantesDestaque.forEach(e => console.log(`  • ${e.nome}`));

const bolsistasAprovados = filtrarEstudantes({
    ativo: true,
    bolsista: true,
    mediaMinima: 6.0
});
console.log(`\nBolsistas aprovados: ${bolsistasAprovados.length}`);
bolsistasAprovados.forEach(e => console.log(`  • ${e.nome}`));

console.log("\n" + "=".repeat(60));
console.log("✅ SISTEMA DE AVALIAÇÃO CONCLUÍDO!");
console.log("\n🎓 Funcionalidades implementadas:");
console.log("   • Cálculo de médias e classificação");
console.log("   • Verificação de situação acadêmica");
console.log("   • Sistema de categorização");
console.log("   • Relatórios individuais e gerais");
console.log("   • Estatísticas por curso");
console.log("   • Sistema de busca e filtros");
console.log("\n💡 Estruturas de controle utilizadas:");
console.log("   • if/else/else if para validações");
console.log("   • switch/case para classificações");
console.log("   • Operadores ternários para atribuições");
console.log("   • Guard clauses para validação");
console.log("   • Operadores lógicos (&&, ||, !)");
console.log("   • Optional chaining (?.)");
console.log("   • Nullish coalescing (??)");