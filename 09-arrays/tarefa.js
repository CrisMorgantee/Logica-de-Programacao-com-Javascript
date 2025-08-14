
// TAREFA: Sistema de Notas de Alunos

console.log("=== TAREFA: SISTEMA DE NOTAS ===");

// TODO: Crie um array para armazenar alunos
// Cada aluno deve ser um objeto com: nome, idade, notas (array de números)
let alunos = [];

// TODO: Adicione pelo menos 5 alunos ao array
// Exemplo de estrutura: { nome: "João", idade: 20, notas: [8.5, 7.0, 9.2, 6.8] }

alunos.push({ nome: "João Silva", idade: 20, notas: [8.5, 7.0, 9.2, 6.8] });
alunos.push({ nome: "Maria Santos", idade: 19, notas: [9.0, 8.5, 9.5, 10.0] });
alunos.push({ nome: "Pedro Lima", idade: 21, notas: [6.0, 7.5, 8.0, 7.2] });
alunos.push({ nome: "Ana Costa", idade: 18, notas: [9.8, 9.2, 8.8, 9.5] });
alunos.push({ nome: "Carlos Ferreira", idade: 22, notas: [5.5, 6.0, 7.0, 6.5] });

console.log("Alunos cadastrados:", alunos.length);

// TODO: Crie uma função que calcule a média de um aluno
function calcularMediaAluno(aluno) {
    // Sua implementação aqui
    if (!aluno || !aluno.notas || aluno.notas.length === 0) {
        return 0;
    }
    
    let soma = 0;
    for (let nota of aluno.notas) {
        soma += nota;
    }
    
    return soma / aluno.notas.length;
}

// TODO: Teste a função de média
console.log("\n=== TESTANDO CÁLCULO DE MÉDIA ===");
for (let aluno of alunos) {
    const media = calcularMediaAluno(aluno);
    console.log(`${aluno.nome}: média ${media.toFixed(2)}`);
}

// TODO: Crie uma função que determine o status do aluno
// Média >= 7.0 = "Aprovado"
// Média >= 5.0 e < 7.0 = "Recuperação"
// Média < 5.0 = "Reprovado"
function determinarStatus(media) {
    // Sua implementação aqui
    if (media >= 7.0) {
        return "Aprovado";
    } else if (media >= 5.0) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

// TODO: Crie um relatório completo de todos os alunos
function gerarRelatorioCompleto() {
    console.log("\n=== RELATÓRIO COMPLETO DA TURMA ===");
    
    // Variáveis para estatísticas
    let totalAprovados = 0;
    let totalRecuperacao = 0;
    let totalReprovados = 0;
    let somaTodasMedias = 0;
    let maiorMedia = 0;
    let menorMedia = 10;
    let alunoMelhorNota = null;
    let alunoPiorNota = null;
    
    // Processar cada aluno
    for (let i = 0; i < alunos.length; i++) {
        const aluno = alunos[i];
        const media = calcularMediaAluno(aluno);
        const status = determinarStatus(media);
        
        // Exibir info do aluno
        console.log(`\n${i + 1}. ${aluno.nome} (${aluno.idade} anos)`);
        console.log(`   Notas: [${aluno.notas.join(', ')}]`);
        console.log(`   Média: ${media.toFixed(2)}`);
        console.log(`   Status: ${status}`);
        
        // Atualizar contadores
        if (status === "Aprovado") {
            totalAprovados++;
        } else if (status === "Recuperação") {
            totalRecuperacao++;
        } else {
            totalReprovados++;
        }
        
        // Atualizar estatísticas
        somaTodasMedias += media;
        
        if (media > maiorMedia) {
            maiorMedia = media;
            alunoMelhorNota = aluno;
        }
        
        if (media < menorMedia) {
            menorMedia = media;
            alunoPiorNota = aluno;
        }
    }
    
    // Calcular média da turma
    const mediaDaTurma = somaTodasMedias / alunos.length;
    
    // Exibir estatísticas
    console.log("\n=== ESTATÍSTICAS DA TURMA ===");
    console.log(`📊 Total de alunos: ${alunos.length}`);
    console.log(`✅ Aprovados: ${totalAprovados}`);
    console.log(`⚠️ Recuperação: ${totalRecuperacao}`);
    console.log(`❌ Reprovados: ${totalReprovados}`);
    console.log(`📈 Média da turma: ${mediaDaTurma.toFixed(2)}`);
    console.log(`🏆 Maior média: ${maiorMedia.toFixed(2)} (${alunoMelhorNota.nome})`);
    console.log(`📉 Menor média: ${menorMedia.toFixed(2)} (${alunoPiorNota.nome})`);
}

// TODO: Execute o relatório
gerarRelatorioCompleto();

// TODO: Crie uma função para buscar alunos por status
function buscarPorStatus(statusProcurado) {
    const alunosEncontrados = [];
    
    for (let aluno of alunos) {
        const media = calcularMediaAluno(aluno);
        const status = determinarStatus(media);
        
        if (status === statusProcurado) {
            alunosEncontrados.push({
                nome: aluno.nome,
                media: media,
                status: status
            });
        }
    }
    
    return alunosEncontrados;
}

// TODO: Teste a busca por status
console.log("\n=== BUSCA POR STATUS ===");

const aprovados = buscarPorStatus("Aprovado");
console.log(`\nAlunos Aprovados (${aprovados.length}):`);
for (let aluno of aprovados) {
    console.log(`- ${aluno.nome} (média: ${aluno.media.toFixed(2)})`);
}

const recuperacao = buscarPorStatus("Recuperação");
console.log(`\nAlunos em Recuperação (${recuperacao.length}):`);
for (let aluno of recuperacao) {
    console.log(`- ${aluno.nome} (média: ${aluno.media.toFixed(2)})`);
}

const reprovados = buscarPorStatus("Reprovado");
console.log(`\nAlunos Reprovados (${reprovados.length}):`);
for (let aluno of reprovados) {
    console.log(`- ${aluno.nome} (média: ${aluno.media.toFixed(2)})`);
}

// TODO: DESAFIO EXTRA - Crie uma função para adicionar uma nova nota a um aluno específico
function adicionarNota(nomeAluno, novaNota) {
    // Encontrar o aluno
    let alunoEncontrado = null;
    
    for (let aluno of alunos) {
        if (aluno.nome.toLowerCase() === nomeAluno.toLowerCase()) {
            alunoEncontrado = aluno;
            break;
        }
    }
    
    if (!alunoEncontrado) {
        return { sucesso: false, mensagem: "Aluno não encontrado" };
    }
    
    if (typeof novaNota !== 'number' || novaNota < 0 || novaNota > 10) {
        return { sucesso: false, mensagem: "Nota inválida (deve ser entre 0 e 10)" };
    }
    
    // Adicionar nota
    alunoEncontrado.notas.push(novaNota);
    
    return { 
        sucesso: true, 
        mensagem: `Nota ${novaNota} adicionada para ${alunoEncontrado.nome}`,
        novaMedia: calcularMediaAluno(alunoEncontrado)
    };
}

// TODO: Teste adicionar nova nota
console.log("\n=== DESAFIO EXTRA: ADICIONANDO NOVAS NOTAS ===");

const resultados = [
    adicionarNota("João Silva", 8.0),
    adicionarNota("Maria Santos", 9.5),
    adicionarNota("Aluno Inexistente", 7.0),
    adicionarNota("Pedro Lima", 15) // Nota inválida
];

for (let resultado of resultados) {
    if (resultado.sucesso) {
        console.log(`✅ ${resultado.mensagem} - Nova média: ${resultado.novaMedia.toFixed(2)}`);
    } else {
        console.log(`❌ ${resultado.mensagem}`);
    }
}

// TODO: DESAFIO EXTRA 2 - Crie um ranking dos alunos
function criarRanking() {
    console.log("\n=== RANKING DA TURMA ===");
    
    // Criar array com alunos e suas médias
    const ranking = [];
    
    for (let aluno of alunos) {
        const media = calcularMediaAluno(aluno);
        ranking.push({
            nome: aluno.nome,
            idade: aluno.idade,
            media: media,
            status: determinarStatus(media)
        });
    }
    
    // Ordenar por média (bubble sort manual)
    for (let i = 0; i < ranking.length - 1; i++) {
        for (let j = 0; j < ranking.length - 1 - i; j++) {
            if (ranking[j].media < ranking[j + 1].media) {
                // Trocar posições
                let temp = ranking[j];
                ranking[j] = ranking[j + 1];
                ranking[j + 1] = temp;
            }
        }
    }
    
    // Exibir ranking
    for (let i = 0; i < ranking.length; i++) {
        const aluno = ranking[i];
        const posicao = i + 1;
        const emoji = posicao === 1 ? "🥇" : posicao === 2 ? "🥈" : posicao === 3 ? "🥉" : "📊";
        
        console.log(`${emoji} ${posicao}º - ${aluno.nome} - Média: ${aluno.media.toFixed(2)} (${aluno.status})`);
    }
}

criarRanking();

console.log("\n=== TAREFA CONCLUÍDA! ===");
console.log("✅ Array de alunos criado");
console.log("✅ Função de cálculo de média implementada");
console.log("✅ Sistema de status implementado");
console.log("✅ Relatório completo gerado");
console.log("✅ Busca por status implementada");
console.log("✅ Desafios extras concluídos");
console.log("\nParabéns! Você dominou os conceitos básicos de Arrays!");
