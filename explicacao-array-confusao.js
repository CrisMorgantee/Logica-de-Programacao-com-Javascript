
console.log("=== PROBLEMA COM new Array() E NÚMEROS ÚNICOS ===");

// Quando passamos múltiplos valores, funciona como esperado
const array1 = new Array(1, 2, 3);
console.log("new Array(1, 2, 3):", array1); // [1, 2, 3]

// MAS quando passamos apenas UM número, ele interpreta como TAMANHO do array
const array2 = new Array(5);
console.log("new Array(5):", array2); // [ <5 empty items> ] - array com 5 posições vazias!
console.log("Length:", array2.length); // 5
console.log("Valor na posição 0:", array2[0]); // undefined

// Compare com o literal de array
const array3 = [5];
console.log("[5]:", array3); // [5] - array com um elemento: o número 5

// E com Array.of() que é sempre consistente
const array4 = Array.of(5);
console.log("Array.of(5):", array4); // [5] - sempre cria array com o elemento 5

console.log("\n=== CAPACIDADES ESPECIAIS DO Array.from() ===");

// 1. Converter string em array de caracteres
const deString = Array.from("JavaScript");
console.log("Array.from('JavaScript'):", deString); // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

// 2. Converter NodeList (elementos HTML) em array
// const elementos = Array.from(document.querySelectorAll('div'));

// 3. Criar array com tamanho específico E função de mapeamento
const quadrados = Array.from({length: 5}, (_, index) => index * index);
console.log("Quadrados com Array.from:", quadrados); // [0, 1, 4, 9, 16]

// 4. Converter array-like objects
const arrayLike = {0: 'a', 1: 'b', 2: 'c', length: 3};
const arrayReal = Array.from(arrayLike);
console.log("De objeto array-like:", arrayReal); // ['a', 'b', 'c']

// 5. Aplicar função durante a conversão
const numeros = [1, 2, 3, 4];
const dobrados = Array.from(numeros, x => x * 2);
console.log("Dobrados com Array.from:", dobrados); // [2, 4, 6, 8]

// 6. Criar sequência de números
const sequencia = Array.from({length: 10}, (_, i) => i + 1);
console.log("Sequência 1-10:", sequencia); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("\n=== COMPARAÇÃO PRÁTICA ===");

// Tentando criar um array com 3 elementos contendo o número 7
console.log("Objetivo: array com 3 elementos, cada um sendo o número 7");

// ❌ Confuso com new Array()
try {
    const confuso = new Array(7); // Cria array com 7 posições vazias, não 3 elementos com valor 7
    console.log("new Array(7):", confuso.length, "posições vazias");
} catch (e) {
    console.log("Erro:", e.message);
}

// ✅ Claro com Array.from()
const claro = Array.from({length: 3}, () => 7);
console.log("Array.from({length: 3}, () => 7):", claro); // [7, 7, 7]

// ✅ Alternativa com fill()
const alternativa = new Array(3).fill(7);
console.log("new Array(3).fill(7):", alternativa); // [7, 7, 7]

console.log("\n=== RESUMO ===");
console.log("• new Array(5) = array com 5 posições vazias");
console.log("• [5] = array com um elemento: 5");
console.log("• Array.of(5) = array com um elemento: 5");
console.log("• Array.from() = conversão flexível + mapeamento opcional");
