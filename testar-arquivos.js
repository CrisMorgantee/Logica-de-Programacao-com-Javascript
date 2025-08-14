
// Script para testar todos os arquivos do projeto

const readline = require('readline');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Lista de todos os arquivos JavaScript organizados por tópico
const arquivos = {
    "01 - Variáveis": [
        "01-variaveis/exemplos.js",
        "01-variaveis/projeto-pratico.js",
        "01-variaveis/tarefa.js"
    ],
    "02 - Tipos de Dados": [
        "02-tipos-dados/exemplos.js",
        "02-tipos-dados/projeto-pratico.js"
    ],
    "03 - Estruturas de Controle": [
        "03-estruturas-controle/exemplos.js",
        "03-estruturas-controle/projeto-pratico.js"
    ],
    "04 - Operadores": [
        "04-operadores/exemplos.js"
    ],
    "05 - Estruturas de Repetição": [
        "05-repeticao/exemplos.js",
        "05-repeticao/projeto-pratico.js"
    ],
    "06 - Funções": [
        "06-funcoes/exemplos.js"
    ],
    "07 - Funções com Parâmetros": [
        "07-funcoes-parametros/exemplos.js"
    ],
    "08 - Funções com Retorno": [
        "08-funcoes-retorno/exemplos.js",
        "08-funcoes-retorno/projeto-pratico.js"
    ],
    "09 - Arrays": [
        "09-arrays/exemplos.js",
        "09-arrays/projeto-pratico.js",
        "09-arrays/tarefa.js"
    ],
    "10 - Acessar e Modificar Arrays": [
        "10-acessar-modificar-arrays/exemplos.js",
        "10-acessar-modificar-arrays/projeto-pratico.js"
    ],
    "11 - Métodos Básicos de Arrays": [
        "11-metodos-basicos-arrays/exemplos.js",
        "11-metodos-basicos-arrays/projeto-pratico.js"
    ],
    "12 - Objetos": [
        "12-objetos/exemplos.js",
        "12-objetos/projeto-pratico.js"
    ]
};

function mostrarMenu() {
    console.clear();
    console.log("=".repeat(60));
    console.log("🚀 TESTADOR DE ARQUIVOS JAVASCRIPT");
    console.log("=".repeat(60));
    
    let contador = 1;
    const opcoes = [];
    
    Object.entries(arquivos).forEach(([topico, arquivosDoTopico]) => {
        console.log(`\n📚 ${topico}`);
        arquivosDoTopico.forEach(arquivo => {
            console.log(`  ${contador}. ${path.basename(arquivo)}`);
            opcoes.push(arquivo);
            contador++;
        });
    });
    
    console.log(`\n  ${contador}. 🔍 Testar arquivo específico (digite o caminho)`);
    console.log(`  ${contador + 1}. 🔄 Testar todos os arquivos`);
    console.log(`  ${contador + 2}. ❌ Sair`);
    console.log("\n" + "=".repeat(60));
    
    return opcoes;
}

function executarArquivo(caminhoArquivo) {
    return new Promise((resolve, reject) => {
        console.log(`\n▶️  Executando: ${caminhoArquivo}`);
        console.log("-".repeat(50));
        
        // Verificar se o arquivo existe
        if (!fs.existsSync(caminhoArquivo)) {
            console.log(`❌ Arquivo não encontrado: ${caminhoArquivo}`);
            resolve();
            return;
        }
        
        const processo = exec(`node "${caminhoArquivo}"`, (error, stdout, stderr) => {
            if (error) {
                console.log(`❌ Erro ao executar: ${error.message}`);
                resolve();
                return;
            }
            
            if (stderr) {
                console.log(`⚠️  Warning: ${stderr}`);
            }
            
            if (stdout) {
                console.log(stdout);
            }
            
            console.log("-".repeat(50));
            console.log(`✅ Execução concluída: ${path.basename(caminhoArquivo)}`);
            resolve();
        });
    });
}

async function testarTodosArquivos() {
    console.log("\n🔄 Testando todos os arquivos...\n");
    
    for (const [topico, arquivosDoTopico] of Object.entries(arquivos)) {
        console.log(`\n📚 TESTANDO: ${topico}`);
        console.log("=".repeat(50));
        
        for (const arquivo of arquivosDoTopico) {
            await executarArquivo(arquivo);
            
            // Pausa entre execuções para melhor visualização
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    
    console.log("\n✅ Todos os arquivos foram testados!");
}

async function iniciarMenu() {
    while (true) {
        const opcoes = mostrarMenu();
        
        const resposta = await new Promise(resolve => {
            rl.question("Digite o número da opção desejada: ", resolve);
        });
        
        const opcaoNum = parseInt(resposta);
        
        if (opcaoNum >= 1 && opcaoNum <= opcoes.length) {
            await executarArquivo(opcoes[opcaoNum - 1]);
            
            await new Promise(resolve => {
                rl.question("\nPressione ENTER para continuar...", resolve);
            });
        }
        else if (opcaoNum === opcoes.length + 1) {
            // Testar arquivo específico
            const caminhoArquivo = await new Promise(resolve => {
                rl.question("Digite o caminho do arquivo: ", resolve);
            });
            
            await executarArquivo(caminhoArquivo);
            
            await new Promise(resolve => {
                rl.question("\nPressione ENTER para continuar...", resolve);
            });
        }
        else if (opcaoNum === opcoes.length + 2) {
            // Testar todos os arquivos
            await testarTodosArquivos();
            
            await new Promise(resolve => {
                rl.question("\nPressione ENTER para continuar...", resolve);
            });
        }
        else if (opcaoNum === opcoes.length + 3) {
            // Sair
            console.log("\n👋 Até logo!");
            break;
        }
        else {
            console.log("\n❌ Opção inválida! Pressione ENTER para tentar novamente...");
            await new Promise(resolve => {
                rl.question("", resolve);
            });
        }
    }
    
    rl.close();
}

// Função para listar todos os arquivos disponíveis
function listarArquivos() {
    console.log("\n📋 LISTA DE ARQUIVOS DISPONÍVEIS:");
    console.log("=".repeat(50));
    
    Object.entries(arquivos).forEach(([topico, arquivosDoTopico]) => {
        console.log(`\n📚 ${topico}`);
        arquivosDoTopico.forEach(arquivo => {
            const existe = fs.existsSync(arquivo) ? "✅" : "❌";
            console.log(`  ${existe} ${arquivo}`);
        });
    });
}

// Verificar argumentos da linha de comando
const args = process.argv.slice(2);

if (args.length > 0) {
    if (args[0] === "--list" || args[0] === "-l") {
        listarArquivos();
    } else if (args[0] === "--all" || args[0] === "-a") {
        testarTodosArquivos().then(() => process.exit(0));
    } else {
        // Testar arquivo específico
        executarArquivo(args[0]).then(() => process.exit(0));
    }
} else {
    // Iniciar menu interativo
    iniciarMenu();
}
