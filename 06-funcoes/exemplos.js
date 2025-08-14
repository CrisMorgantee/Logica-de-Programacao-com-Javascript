
// Exemplos de Funções em JavaScript

console.log("=== DECLARAÇÃO DE FUNÇÕES ===");

// Function Declaration (içamento/hoisting funciona)
function saudar() {
    console.log("Olá! Esta é uma function declaration.");
}

// Function Expression (não tem hoisting)
const despedir = function() {
    console.log("Tchau! Esta é uma function expression.");
};

// Arrow Function
const cumprimentar = () => {
    console.log("Oi! Esta é uma arrow function.");
};

// Chamando as funções
saudar();
despedir();
cumprimentar();

console.log("\n=== FUNÇÕES COM DIFERENTES SINTAXES ===");

// Arrow function com uma linha (return implícito)
const dobrar = x => x * 2;
console.log("Dobro de 5:", dobrar(5));

// Arrow function com múltiplas linhas
const calcularArea = (largura, altura) => {
    const area = largura * altura;
    return area;
};
console.log("Área do retângulo 4x6:", calcularArea(4, 6));

// Função tradicional vs Arrow function
function somarTradicional(a, b) {
    return a + b;
}

const somarArrow = (a, b) => a + b;

console.log("Soma tradicional:", somarTradicional(3, 7));
console.log("Soma arrow:", somarArrow(3, 7));

console.log("\n=== ESCOPO DE VARIÁVEIS ===");

let variavelGlobal = "Sou global";

function exemploEscopo() {
    let variavelLocal = "Sou local";
    console.log("Dentro da função - Global:", variavelGlobal);
    console.log("Dentro da função - Local:", variavelLocal);
}

exemploEscopo();
console.log("Fora da função - Global:", variavelGlobal);
// console.log("Fora da função - Local:", variavelLocal); // Erro!

console.log("\n=== HOISTING ===");

// Isso funciona devido ao hoisting
console.log("Resultado do hoisting:", funcaoComHoisting());

function funcaoComHoisting() {
    return "Eu fui içada (hoisted)!";
}

// Isso NÃO funciona (function expression não tem hoisting)
try {
    console.log(funcaoSemHoisting()); // Erro!
} catch (error) {
    console.log("Erro esperado:", error.message);
}

const funcaoSemHoisting = function() {
    return "Eu não tenho hoisting!";
};

console.log("\n=== FUNÇÕES COMO OBJETOS ===");

// Funções são objetos de primeira classe
function minhaFuncao() {
    return "Sou uma função!";
}

// Podemos adicionar propriedades às funções
minhaFuncao.propriedade = "Valor da propriedade";
minhaFuncao.metodo = function() {
    return "Sou um método da função!";
};

console.log("Função:", minhaFuncao());
console.log("Propriedade da função:", minhaFuncao.propriedade);
console.log("Método da função:", minhaFuncao.metodo());

console.log("\n=== CALLBACK FUNCTIONS ===");

// Função que recebe outra função como parâmetro
function executarOperacao(a, b, callback) {
    console.log(`Executando operação com ${a} e ${b}`);
    return callback(a, b);
}

// Diferentes callbacks
const somar = (x, y) => x + y;
const multiplicar = (x, y) => x * y;
const subtrair = (x, y) => x - y;

console.log("Soma:", executarOperacao(5, 3, somar));
console.log("Multiplicação:", executarOperacao(5, 3, multiplicar));
console.log("Subtração:", executarOperacao(5, 3, subtrair));

console.log("\n=== IIFE (Immediately Invoked Function Expression) ===");

// IIFE - função que se executa imediatamente
(function() {
    console.log("Eu sou uma IIFE! Executei imediatamente.");
})();

// IIFE com arrow function
(() => {
    console.log("Eu também sou uma IIFE com arrow function!");
})();

// IIFE com retorno
const resultado = (function(a, b) {
    return a * b;
})(4, 5);

console.log("Resultado da IIFE:", resultado);

console.log("\n=== FUNÇÕES ANINHADAS ===");

function funcaoExterna() {
    console.log("Estou na função externa");
    
    function funcaoInterna() {
        console.log("Estou na função interna");
    }
    
    // A função interna só existe dentro da externa
    funcaoInterna();
}

funcaoExterna();
// funcaoInterna(); // Erro! Não existe fora da função externa

console.log("\n=== CLOSURES (Fechamentos) ===");

function criarContador() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

const contador1 = criarContador();
const contador2 = criarContador();

console.log("Contador 1:", contador1()); // 1
console.log("Contador 1:", contador1()); // 2
console.log("Contador 2:", contador2()); // 1 (independente)
console.log("Contador 1:", contador1()); // 3

console.log("\n=== RECURSÃO ===");

// Função recursiva para calcular fatorial
function fatorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}

console.log("Fatorial de 5:", fatorial(5));
console.log("Fatorial de 0:", fatorial(0));

// Função recursiva para sequência de Fibonacci
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci de 7:", fibonacci(7));
