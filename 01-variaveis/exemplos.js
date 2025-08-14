
// Exemplo de Variáveis em JavaScript

console.log("=== DECLARAÇÃO DE VARIÁVEIS ===");

// var (evite usar)
var nome = "João";
console.log("Nome (var):", nome);

// let (recomendado para valores que mudam)
let idade = 25;
console.log("Idade (let):", idade);
idade = 26; // pode ser alterado
console.log("Idade atualizada:", idade);

// const (recomendado para valores fixos)
const PI = 3.14159;
console.log("PI (const):", PI);
// PI = 3.14; // Erro! Não pode ser alterado

console.log("\n=== ESCOPO DE VARIÁVEIS ===");

function exemploEscopo() {
    let variavelLocal = "Só existe dentro da função";
    console.log("Variável local:", variavelLocal);
}

exemploEscopo();
// console.log(variavelLocal); // Erro! Variável não existe fora da função

console.log("\n=== NOMENCLATURA ===");

let nomeCompleto = "Maria Silva"; // camelCase (recomendado)
let _privada = "variável privada";
let $especial = "variável com $";
let numero1 = 100;

console.log("Nome completo:", nomeCompleto);
console.log("Privada:", _privada);
console.log("Especial:", $especial);
console.log("Número:", numero1);
