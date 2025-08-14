
// Exemplos de Conceitos de Arrays

console.log("=== CRIAÇÃO DE ARRAYS ===");

// Literal de array (mais comum)
const frutas = ["maçã", "banana", "laranja"];
console.log("Frutas:", frutas);

// Array vazio
const arrayVazio = [];
console.log("Array vazio:", arrayVazio);

// Array com diferentes tipos de dados
const misto = [1, "texto", true, null, { nome: "João" }, [1, 2, 3]];
console.log("Array misto:", misto);

// Usando construtor Array
const numeros = new Array(1, 2, 3, 4, 5);
console.log("Números (construtor):", numeros);

// Array.of() - sempre cria array com elementos
const umElemento = Array.of(5);
console.log("Array.of(5):", umElemento); // [5]

// new Array(5) - cria array com 5 posições vazias
const cincoPosicoes = new Array(5);
console.log("new Array(5):", cincoPosicoes); // [ , , , , ]

// Array.from() - criar array de string
const letras = Array.from("JavaScript");
console.log("Array.from('JavaScript'):", letras);

// Array.from() com função
const quadrados = Array.from([1, 2, 3, 4], x => x * x);
console.log("Quadrados:", quadrados);

console.log("\n=== PROPRIEDADES BÁSICAS ===");

const cores = ["vermelho", "verde", "azul"];
console.log("Array cores:", cores);
console.log("Tamanho (length):", cores.length);
console.log("Tipo do array:", typeof cores);
console.log("É array?", Array.isArray(cores));

// length é dinâmico
cores[10] = "amarelo";
console.log("Após adicionar na posição 10:", cores);
console.log("Novo tamanho:", cores.length);

console.log("\n=== ARRAYS MULTIDIMENSIONAIS ===");

// Array de arrays (matriz)
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matriz 3x3:", matriz);
console.log("Elemento [1][2]:", matriz[1][2]); // 6

// Array de objetos
const pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "Bruno", idade: 30 },
    { nome: "Carla", idade: 28 }
];

console.log("Array de objetos:", pessoas);
console.log("Segunda pessoa:", pessoas[1]);

console.log("\n=== ARRAYS COMO OBJETOS ===");

const animais = ["gato", "cachorro", "pássaro"];

// Arrays são objetos, então podem ter propriedades
animais.propriedadeCustom = "Sou uma propriedade";
console.log("Array animais:", animais);
console.log("Propriedade custom:", animais.propriedadeCustom);

// Mas propriedades não contam no length
console.log("Length ainda é:", animais.length);

// Listando todas as propriedades (incluindo indices)
console.log("Propriedades do array:");
for (let prop in animais) {
    console.log(`${prop}: ${animais[prop]}`);
}

console.log("\n=== ARRAYS ESPARSOS ===");

// Arrays podem ter "buracos"
const esparso = [1, , 3, , 5];
console.log("Array esparso:", esparso);
console.log("Length:", esparso.length);
console.log("Posição 1:", esparso[1]); // undefined
console.log("Tem posição 1?", 1 in esparso); // false

// Iterando array esparso
console.log("Iterando array esparso:");
for (let i = 0; i < esparso.length; i++) {
    console.log(`Posição ${i}:`, esparso[i]);
}

console.log("\n=== COMPARAÇÃO E CÓPIA ===");

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = array1;

console.log("array1 === array2:", array1 === array2); // false (diferentes objetos)
console.log("array1 === array3:", array1 === array3); // true (mesmo objeto)

// Alterando array3 afeta array1
array3.push(4);
console.log("Após push em array3:");
console.log("array1:", array1); // [1, 2, 3, 4]
console.log("array3:", array3); // [1, 2, 3, 4]

// Cópia superficial
const copia = [...array1];
copia.push(5);
console.log("Original:", array1);
console.log("Cópia:", copia);

console.log("\n=== ARRAYS COMO PILHA E FILA ===");

// Como pilha (LIFO - Last In, First Out)
const pilha = [];
pilha.push(1); // Adiciona no final
pilha.push(2);
pilha.push(3);
console.log("Pilha após pushes:", pilha);

const ultimoElemento = pilha.pop(); // Remove do final
console.log("Elemento removido:", ultimoElemento);
console.log("Pilha após pop:", pilha);

// Como fila (FIFO - First In, First Out)
const fila = [];
fila.push(1); // Adiciona no final
fila.push(2);
fila.push(3);
console.log("Fila após pushes:", fila);

const primeiroElemento = fila.shift(); // Remove do início
console.log("Elemento removido:", primeiroElemento);
console.log("Fila após shift:", fila);

console.log("\n=== CARACTERÍSTICAS ESPECIAIS ===");

// Arrays podem ser estendidos
const extensivel = [1, 2, 3];
extensivel[100] = "longe";
console.log("Array extensível:", extensivel.length); // 101
console.log("Posição 50:", extensivel[50]); // undefined

// Delete cria buracos
const comDelete = [1, 2, 3, 4, 5];
delete comDelete[2];
console.log("Após delete:", comDelete); // [1, 2, , 4, 5]
console.log("Length:", comDelete.length); // 5 (não muda)

// Convertendo para string
const paraString = [1, 2, 3];
console.log("toString():", paraString.toString()); // "1,2,3"
console.log("join('-'):", paraString.join('-')); // "1-2-3"

console.log("\n=== VERIFICAÇÕES ÚTEIS ===");

const testeArray = [1, 2, , 4, 5];

console.log("Array.isArray():", Array.isArray(testeArray));
console.log("instanceof Array:", testeArray instanceof Array);
console.log("Constructor:", testeArray.constructor === Array);

// Verificar se posição existe
console.log("Posição 2 existe:", 2 in testeArray); // false (foi deletada)
console.log("Posição 3 existe:", 3 in testeArray); // true

// Verificar se array está vazio
function arrayVazio(arr) {
    return Array.isArray(arr) && arr.length === 0;
}

console.log("[] está vazio:", arrayVazio([]));
console.log("[1,2,3] está vazio:", arrayVazio([1,2,3]));
