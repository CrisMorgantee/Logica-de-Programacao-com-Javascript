
// Exemplos de Tipos de Dados em JavaScript

console.log("=== TIPOS PRIMITIVOS ===");

// Number
let numeroInteiro = 42;
let numeroDecimal = 3.14;
let numeroNegativo = -100;
console.log("Inteiro:", numeroInteiro, "- Tipo:", typeof numeroInteiro);
console.log("Decimal:", numeroDecimal, "- Tipo:", typeof numeroDecimal);

// String
let textoSimples = "Olá, mundo!";
let textoComAspas = 'JavaScript é "incrível"';
let templateString = `Meu número favorito é ${numeroInteiro}`;
console.log("Texto simples:", textoSimples, "- Tipo:", typeof textoSimples);
console.log("Template string:", templateString);

// Boolean
let verdadeiro = true;
let falso = false;
console.log("Verdadeiro:", verdadeiro, "- Tipo:", typeof verdadeiro);
console.log("Falso:", falso, "- Tipo:", typeof falso);

// Undefined
let indefinido;
console.log("Indefinido:", indefinido, "- Tipo:", typeof indefinido);

// Null
let vazio = null;
console.log("Vazio:", vazio, "- Tipo:", typeof vazio); // Bug histórico: retorna "object"

console.log("\n=== TIPOS DE REFERÊNCIA ===");

// Object
let pessoa = {
    nome: "Carlos",
    idade: 30
};
console.log("Objeto:", pessoa, "- Tipo:", typeof pessoa);

// Array
let numeros = [1, 2, 3, 4, 5];
console.log("Array:", numeros, "- Tipo:", typeof numeros); // Também retorna "object"
console.log("É array?", Array.isArray(numeros));

// Function
function minhaFuncao() {
    return "Hello!";
}
console.log("Função:", minhaFuncao, "- Tipo:", typeof minhaFuncao);

console.log("\n=== CONVERSÃO DE TIPOS ===");

// String para Number
let textoNumero = "123";
let numeroConvertido = Number(textoNumero);
console.log("Texto:", textoNumero, "→ Número:", numeroConvertido);

// Number para String
let numero = 456;
let textoConvertido = String(numero);
console.log("Número:", numero, "→ Texto:", textoConvertido);

// Boolean
console.log("Boolean de 0:", Boolean(0)); // false
console.log("Boolean de 1:", Boolean(1)); // true
console.log("Boolean de '':", Boolean("")); // false
console.log("Boolean de 'texto':", Boolean("texto")); // true
