// =====================================================================================
// EXEMPLOS COMPLETOS DE ESTRUTURAS DE REPETIÇÃO EM JAVASCRIPT
// =====================================================================================

console.log("🚀 INICIANDO EXEMPLOS DE ESTRUTURAS DE REPETIÇÃO");
console.log("=".repeat(60));

// =====================================================================================
// 1. FOR LOOP TRADICIONAL
// =====================================================================================

console.log("\n🔄 1. FOR LOOP TRADICIONAL");
console.log("-".repeat(40));

// For básico
console.log("Contagem de 1 a 5:");
for (let i = 1; i <= 5; i++) {
    console.log(`Número: ${i}`);
}

// For decrescente
console.log("\nContagem regressiva de 5 a 1:");
for (let i = 5; i >= 1; i--) {
    console.log(`Countdown: ${i}`);
}

// For com incremento diferente
console.log("\nNúmeros pares de 0 a 10:");
for (let i = 0; i <= 10; i += 2) {
    console.log(`Par: ${i}`);
}

// For com múltiplas variáveis
console.log("\nDuplas variáveis:");
for (let i = 0, j = 10; i <= 5; i++, j--) {
    console.log(`i: ${i}, j: ${j}`);
}

// For aninhado (tabuada)
console.log("\nTabuada (2x2):");
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// =====================================================================================
// 2. WHILE LOOP
// =====================================================================================

console.log("\n🔄 2. WHILE LOOP");
console.log("-".repeat(40));

// While básico
console.log("While básico - contagem até 3:");
let contador = 1;
while (contador <= 3) {
    console.log(`Contador: ${contador}`);
    contador++;
}

// While com condição mais complexa
console.log("\nEncontrando número par:");
let numero = 1;
while (numero % 2 !== 0) {
    console.log(`${numero} é ímpar`);
    numero++;
}
console.log(`${numero} é par!`);

// While com entrada de dados simulada
console.log("\nSimulação de entrada de dados:");
let tentativas = 0;
let senhaCorreta = false;
let senhas = ["123", "456", "789"]; // senhas para testar

while (!senhaCorreta && tentativas < senhas.length) {
    let senha = senhas[tentativas];
    console.log(`Tentativa ${tentativas + 1}: testando senha "${senha}"`);

    if (senha === "789") {
        senhaCorreta = true;
        console.log("✅ Senha correta!");
    } else {
        console.log("❌ Senha incorreta");
    }
    tentativas++;
}

if (!senhaCorreta) {
    console.log("🔒 Acesso bloqueado após 3 tentativas");
}

// =====================================================================================
// 3. DO...WHILE LOOP
// =====================================================================================

console.log("\n🔄 3. DO...WHILE LOOP");
console.log("-".repeat(40));

// Do...while básico
console.log("Do...while - executa pelo menos uma vez:");
let x = 10;
do {
    console.log(`x = ${x} (condição x < 5 é falsa, mas executa uma vez)`);
    x++;
} while (x < 5);

// Comparação while vs do...while
console.log("\nComparação while vs do...while:");

console.log("While (não executa se condição for falsa):");
let a = 10;
while (a < 5) {
    console.log("Este código nunca executa");
    a++;
}

console.log("Do...while (executa pelo menos uma vez):");
let b = 10;
do {
    console.log("Este código executa uma vez, mesmo com condição falsa");
    b++;
} while (b < 5);

// Exemplo prático: menu de opções
console.log("\nSimulação de menu interativo:");
let opcao;
let opcoes = [1, 2, 0]; // simular escolhas do usuário
let indiceOpcao = 0;

do {
    opcao = opcoes[indiceOpcao];
    console.log("\n=== MENU ===");
    console.log("1. Ver produtos");
    console.log("2. Ver carrinho");
    console.log("0. Sair");
    console.log(`Opção escolhida: ${opcao}`);

    switch (opcao) {
        case 1:
            console.log("📦 Exibindo produtos...");
            break;
        case 2:
            console.log("🛒 Exibindo carrinho...");
            break;
        case 0:
            console.log("👋 Saindo...");
            break;
        default:
            console.log("❌ Opção inválida");
    }

    indiceOpcao++;
} while (opcao !== 0 && indiceOpcao < opcoes.length);

// =====================================================================================
// 4. FOR...IN LOOP
// =====================================================================================

console.log("\n🔄 4. FOR...IN LOOP");
console.log("-".repeat(40));

// For...in com objeto
console.log("For...in com objeto:");
const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
    profissao: "Desenvolvedor"
};

for (let propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
}

// For...in com array (não recomendado)
console.log("\nFor...in com array (índices):");
const cores = ["vermelho", "verde", "azul"];
for (let indice in cores) {
    console.log(`Índice ${indice}: ${cores[indice]}`);
}

// For...in com herança
console.log("\nFor...in com herança:");
function Animal(nome) {
    this.nome = nome;
}

Animal.prototype.tipo = "Mamífero";

const cachorro = new Animal("Rex");
cachorro.raca = "Labrador";

console.log("Propriedades próprias e herdadas:");
for (let prop in cachorro) {
    console.log(`${prop}: ${cachorro[prop]}`);
}

console.log("Apenas propriedades próprias:");
for (let prop in cachorro) {
    if (cachorro.hasOwnProperty(prop)) {
        console.log(`${prop}: ${cachorro[prop]}`);
    }
}

// =====================================================================================
// 5. FOR...OF LOOP
// =====================================================================================

console.log("\n🔄 5. FOR...OF LOOP");
console.log("-".repeat(40));

// For...of com array
console.log("For...of com array:");
const frutas = ["maçã", "banana", "laranja", "uva"];
for (let fruta of frutas) {
    console.log(`Fruta: ${fruta}`);
}

// For...of com string
console.log("\nFor...of com string:");
const palavra = "JavaScript";
for (let letra of palavra) {
    console.log(`Letra: ${letra}`);
}

// For...of com Map
console.log("\nFor...of com Map:");
const mapa = new Map([
    ["br", "Brasil"],
    ["us", "Estados Unidos"],
    ["ca", "Canadá"]
]);

for (let [codigo, pais] of mapa) {
    console.log(`${codigo}: ${pais}`);
}

// For...of com Set
console.log("\nFor...of com Set:");
const numeros = new Set([1, 2, 3, 4, 5]);
for (let numero of numeros) {
    console.log(`Número: ${numero}`);
}

// For...of com entries, keys, values
console.log("\nFor...of com entries:");
for (let [indice, fruta] of frutas.entries()) {
    console.log(`${indice}: ${fruta}`);
}

// =====================================================================================
// 6. FOREACH E MÉTODOS DE ARRAY
// =====================================================================================

console.log("\n🔄 6. FOREACH E MÉTODOS DE ARRAY");
console.log("-".repeat(40));

const numeros2 = [1, 2, 3, 4, 5];

// forEach
console.log("forEach:");
numeros2.forEach((numero, indice) => {
    console.log(`Índice ${indice}: ${numero}`);
});

// map
console.log("\nmap (transformação):");
const quadrados = numeros2.map(numero => numero ** 2);
console.log(`Originais: [${numeros2}]`);
console.log(`Quadrados: [${quadrados}]`);

// filter
console.log("\nfilter (filtro):");
const pares = numeros2.filter(numero => numero % 2 === 0);
console.log(`Números pares: [${pares}]`);

// find
console.log("\nfind (busca):");
const maiorQue3 = numeros2.find(numero => numero > 3);
console.log(`Primeiro número > 3: ${maiorQue3}`);

// reduce
console.log("\nreduce (redução):");
const soma = numeros2.reduce((acc, numero) => acc + numero, 0);
console.log(`Soma de todos: ${soma}`);

// =====================================================================================
// 7. CONTROLE DE FLUXO (BREAK E CONTINUE)
// =====================================================================================

console.log("\n🔄 7. CONTROLE DE FLUXO (BREAK E CONTINUE)");
console.log("-".repeat(40));

// Break em for
console.log("Break em for (para quando encontrar 3):");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log(`Encontrou ${i}, parando...`);
        break;
    }
    console.log(`Número: ${i}`);
}

// Continue em for
console.log("\nContinue em for (pula números pares):");
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        console.log(`Pulando ${i} (par)`);
        continue;
    }
    console.log(`Número ímpar: ${i}`);
}

// Break em while
console.log("\nBreak em while:");
let contador2 = 1;
while (true) {
    if (contador2 > 3) {
        console.log("Saindo do loop infinito");
        break;
    }
    console.log(`Contador: ${contador2}`);
    contador2++;
}

// Labels com break/continue
console.log("\nLabels com break:");
externo: for (let i = 1; i <= 3; i++) {
    console.log(`Loop externo: ${i}`);
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            console.log("Saindo de ambos os loops");
            break externo;
        }
        console.log(`  Loop interno: ${j}`);
    }
}

// =====================================================================================
// 8. LOOPS ANINHADOS E PADRÕES
// =====================================================================================

console.log("\n🔄 8. LOOPS ANINHADOS E PADRÕES");
console.log("-".repeat(40));

// Matriz (array bidimensional)
console.log("Percorrendo matriz 3x3:");
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
        console.log(`[${linha}][${coluna}] = ${matriz[linha][coluna]}`);
    }
}

// Padrão de asteriscos
console.log("\nPadrão de asteriscos:");
for (let i = 1; i <= 4; i++) {
    let linha = "";
    for (let j = 1; j <= i; j++) {
        linha += "* ";
    }
    console.log(linha);
}

// Busca em array aninhado
console.log("\nBusca em estrutura aninhada:");
const estudantes = [
    { nome: "Ana", notas: [8, 9, 7] },
    { nome: "João", notas: [6, 7, 8] },
    { nome: "Maria", notas: [9, 9, 10] }
];

for (let estudante of estudantes) {
    console.log(`\nEstudante: ${estudante.nome}`);
    for (let i = 0; i < estudante.notas.length; i++) {
        console.log(`  Nota ${i + 1}: ${estudante.notas[i]}`);
    }
}

// =====================================================================================
// 9. PERFORMANCE E BOAS PRÁTICAS
// =====================================================================================

console.log("\n🔄 9. PERFORMANCE E BOAS PRÁTICAS");
console.log("-".repeat(40));

// Evitar criar functions no loop
console.log("❌ Ruim - criando function no loop:");
const array1 = [1, 2, 3];
for (let i = 0; i < array1.length; i++) {
    // Cria nova function a cada iteração
    setTimeout(function() {
        // console.log(i); // Problema de closure
    }, 100);
}

console.log("✅ Bom - function externa:");
function processar(valor) {
    return valor * 2;
}

const array2 = [1, 2, 3];
for (let i = 0; i < array2.length; i++) {
    const resultado = processar(array2[i]);
    console.log(`Processado: ${resultado}`);
}

// Cache do length em arrays grandes
console.log("\n✅ Cache do length:");
const arrayGrande = new Array(1000).fill(0).map((_, i) => i);
const inicio = Date.now();

for (let i = 0, len = arrayGrande.length; i < len; i++) {
    // Processamento...
}

const fim = Date.now();
console.log(`Processamento com cache: ${fim - inicio}ms`);

// =====================================================================================
// 10. EXEMPLOS PRÁTICOS
// =====================================================================================

console.log("\n💼 10. EXEMPLOS PRÁTICOS");
console.log("-".repeat(40));

// Gerador de fibonacci
console.log("Sequência de Fibonacci (10 primeiros):");
function fibonacci(n) {
    const seq = [0, 1];
    for (let i = 2; i < n; i++) {
        seq[i] = seq[i - 1] + seq[i - 2];
    }
    return seq;
}

console.log(fibonacci(10).join(", "));

// Busca linear
function buscarLinear(array, valor) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valor) {
            return i;
        }
    }
    return -1;
}

const lista = [10, 25, 30, 45, 50];
console.log(`\nBusca linear por 30 em [${lista}]: posição ${buscarLinear(lista, 30)}`);

// Contador de caracteres
function contarCaracteres(texto) {
    const contador = {};
    for (let char of texto.toLowerCase()) {
        if (char !== ' ') {
            contador[char] = (contador[char] || 0) + 1;
        }
    }
    return contador;
}

const resultado = contarCaracteres("Hello World");
console.log("\nContador de caracteres em 'Hello World':");
for (let char in resultado) {
    console.log(`'${char}': ${resultado[char]}`);
}

// Validação de formulário
function validarFormulario(dados) {
    const erros = [];

    for (let campo in dados) {
        const valor = dados[campo];

        if (!valor || valor.trim() === '') {
            erros.push(`Campo '${campo}' é obrigatório`);
            continue;
        }

        if (campo === 'email' && !valor.includes('@')) {
            erros.push(`Campo '${campo}' deve ser um email válido`);
        }

        if (campo === 'idade' && (valor < 0 || valor > 120)) {
            erros.push(`Campo '${campo}' deve estar entre 0 e 120`);
        }
    }

    return erros;
}

const dadosFormulario = {
    nome: "João",
    email: "joao@email.com",
    idade: 25,
    cidade: ""
};

console.log("\nValidação de formulário:");
const erros = validarFormulario(dadosFormulario);
if (erros.length === 0) {
    console.log("✅ Formulário válido!");
} else {
    console.log("❌ Erros encontrados:");
    for (let erro of erros) {
        console.log(`  • ${erro}`);
    }
}

console.log("\n✅ EXEMPLOS DE ESTRUTURAS DE REPETIÇÃO CONCLUÍDOS!");
console.log("🎓 Estruturas demonstradas:");
console.log("   • for (tradicional)");
console.log("   • while");
console.log("   • do...while");
console.log("   • for...in (objetos)");
console.log("   • for...of (iteráveis)");
console.log("   • forEach e métodos de array");
console.log("   • break e continue");
console.log("   • Loops aninhados");
console.log("   • Boas práticas de performance");
console.log("   • Exemplos práticos");