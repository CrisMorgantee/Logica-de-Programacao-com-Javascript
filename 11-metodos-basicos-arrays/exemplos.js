
// Exemplos de Métodos Básicos de Arrays

console.log("=== MÉTODOS DE ADIÇÃO ===");

let frutas = ["maçã", "banana"];
console.log("Array inicial:", frutas);

// push() - adiciona no final
let novoTamanho = frutas.push("laranja");
console.log("Após push('laranja'):", frutas);
console.log("Novo tamanho:", novoTamanho);

// Múltiplos elementos com push
frutas.push("manga", "uva");
console.log("Após push múltiplo:", frutas);

// unshift() - adiciona no início
novoTamanho = frutas.unshift("abacaxi");
console.log("Após unshift('abacaxi'):", frutas);
console.log("Novo tamanho:", novoTamanho);

// splice() para adicionar
frutas.splice(2, 0, "kiwi", "pêra"); // posição 2, remove 0, adiciona 2 elementos
console.log("Após splice para adicionar:", frutas);

console.log("\n=== MÉTODOS DE REMOÇÃO ===");

// pop() - remove do final
let elementoRemovido = frutas.pop();
console.log("Elemento removido com pop:", elementoRemovido);
console.log("Array após pop:", frutas);

// shift() - remove do início
elementoRemovido = frutas.shift();
console.log("Elemento removido com shift:", elementoRemovido);
console.log("Array após shift:", frutas);

// splice() para remover
let removidos = frutas.splice(1, 2); // remove 2 elementos a partir da posição 1
console.log("Elementos removidos com splice:", removidos);
console.log("Array após splice:", frutas);

console.log("\n=== MÉTODOS DE BUSCA ===");

const numeros = [10, 20, 30, 20, 40, 50];
console.log("Array de números:", numeros);

// indexOf() - primeiro índice
console.log("indexOf(20):", numeros.indexOf(20)); // 1
console.log("indexOf(99):", numeros.indexOf(99)); // -1 (não encontrado)

// lastIndexOf() - último índice
console.log("lastIndexOf(20):", numeros.lastIndexOf(20)); // 3

// includes() - verifica existência
console.log("includes(30):", numeros.includes(30)); // true
console.log("includes(99):", numeros.includes(99)); // false

// find() - primeiro elemento que satisfaz condição
const maiorQue25 = numeros.find(num => num > 25);
console.log("Primeiro número > 25:", maiorQue25); // 30

const numeroImpar = numeros.find(num => num % 2 === 1);
console.log("Primeiro número ímpar:", numeroImpar); // undefined

// findIndex() - índice do primeiro elemento que satisfaz condição
const indiceMaiorQue25 = numeros.findIndex(num => num > 25);
console.log("Índice do primeiro > 25:", indiceMaiorQue25); // 2

console.log("\n=== MÉTODOS DE TRANSFORMAÇÃO ===");

const letras = ["a", "b", "c", "d", "e"];
console.log("Array original:", letras);

// slice() - não modifica original
const subArray = letras.slice(1, 4);
console.log("slice(1, 4):", subArray); // ["b", "c", "d"]
console.log("Original após slice:", letras); // não mudou

// slice com índices negativos
const ultimas2 = letras.slice(-2);
console.log("slice(-2):", ultimas2); // ["d", "e"]

// concat() - não modifica originais
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];

const concatenado = array1.concat(array2, array3);
console.log("Concatenação:", concatenado); // [1, 2, 3, 4, 5, 6]
console.log("Array1 original:", array1); // não mudou

// join() - converte para string
const palavras = ["JavaScript", "é", "incrível"];
console.log("join(' '):", palavras.join(" ")); // "JavaScript é incrível"
console.log("join('-'):", palavras.join("-")); // "JavaScript-é-incrível"
console.log("join(''):", palavras.join("")); // "JavaScriptéincrível"

console.log("\n=== MÉTODOS QUE MODIFICAM O ORIGINAL ===");

// reverse() - inverte a ordem
const numerosParaReverter = [1, 2, 3, 4, 5];
console.log("Antes do reverse:", numerosParaReverter);

const revertido = numerosParaReverter.reverse();
console.log("Após reverse:", numerosParaReverter); // foi modificado
console.log("Valor retornado:", revertido); // mesmo array

// sort() - ordena elementos
const frutasDesordenadas = ["banana", "abacaxi", "laranja", "maçã"];
console.log("Antes do sort:", frutasDesordenadas);

frutasDesordenadas.sort();
console.log("Após sort:", frutasDesordenadas); // ordem alfabética

// sort com função de comparação
const numerosDesordenados = [100, 30, 5, 2, 50];
console.log("Números desordenados:", numerosDesordenados);

// Sort padrão (ordem alfabética - incorreto para números)
const copiaAlfabetica = [...numerosDesordenados].sort();
console.log("Sort alfabético:", copiaAlfabetica); // [100, 2, 30, 5, 50]

// Sort numérico correto
numerosDesordenados.sort((a, b) => a - b);
console.log("Sort numérico crescente:", numerosDesordenados); // [2, 5, 30, 50, 100]

// Sort decrescente
const decrescente = [...numerosDesordenados].sort((a, b) => b - a);
console.log("Sort numérico decrescente:", decrescente); // [100, 50, 30, 5, 2]

console.log("\n=== MÉTODOS DE VERIFICAÇÃO ===");

const arrayTeste = [2, 4, 6, 8, 10];
const arrayMisto = [1, 2, 3, 4, 5];

// every() - todos passam no teste
const todosPares = arrayTeste.every(num => num % 2 === 0);
console.log("Todos são pares:", todosPares); // true

const todosPositivos = arrayMisto.every(num => num > 0);
console.log("Todos são positivos:", todosPositivos); // true

const todosMaioresQue5 = arrayMisto.every(num => num > 5);
console.log("Todos são maiores que 5:", todosMaioresQue5); // false

// some() - algum passa no teste
const algumPar = arrayMisto.some(num => num % 2 === 0);
console.log("Algum é par:", algumPar); // true

const algumMaiorQue10 = arrayMisto.some(num => num > 10);
console.log("Algum é maior que 10:", algumMaiorQue10); // false

// Array.isArray() - verifica se é array
console.log("Array é array:", Array.isArray(arrayTeste)); // true
console.log("String é array:", Array.isArray("não é array")); // false
console.log("Object é array:", Array.isArray({a: 1})); // false

console.log("\n=== ENCADEAMENTO DE MÉTODOS ===");

const dados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Encadeamento simples
const resultado1 = dados.slice(2, 8).reverse().join("-");
console.log("Slice + reverse + join:", resultado1); // "8-7-6-5-4-3"

// Encadeamento mais complexo
const texto = dados
    .slice(0, 5)              // [1, 2, 3, 4, 5]
    .concat([11, 12])         // [1, 2, 3, 4, 5, 11, 12]
    .reverse()                // [12, 11, 5, 4, 3, 2, 1]
    .join(" -> ");            // "12 -> 11 -> 5 -> 4 -> 3 -> 2 -> 1"

console.log("Encadeamento complexo:", texto);

console.log("\n=== MÉTODOS COM OBJETOS ===");

const pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "Bruno", idade: 30 },
    { nome: "Carla", idade: 28 },
    { nome: "Daniel", idade: 22 }
];

// find com objetos
const pessoaMaiorQue25 = pessoas.find(pessoa => pessoa.idade > 25);
console.log("Primeira pessoa > 25 anos:", pessoaMaiorQue25);

// findIndex com objetos
const indiceBruno = pessoas.findIndex(pessoa => pessoa.nome === "Bruno");
console.log("Índice do Bruno:", indiceBruno);

// includes não funciona bem com objetos (compara referência)
const ana = { nome: "Ana", idade: 25 };
console.log("Includes Ana (novo objeto):", pessoas.includes(ana)); // false

// Para verificar existência de objeto, use find
const anaExiste = pessoas.find(pessoa => pessoa.nome === "Ana" && pessoa.idade === 25);
console.log("Ana existe:", anaExiste !== undefined);

console.log("\n=== COPIANDO ARRAYS ===");

const original = [1, 2, 3, { a: 4 }];

// Cópia com slice (shallow copy)
const copia1 = original.slice();
copia1[0] = 99;
copia1[3].a = 999; // Modifica o objeto no original também!

console.log("Original após modificar cópia:", original); // [1, 2, 3, { a: 999 }]
console.log("Cópia 1:", copia1); // [99, 2, 3, { a: 999 }]

// Cópia com spread operator (também shallow copy)
const original2 = [1, 2, 3];
const copia2 = [...original2];
copia2.push(4);

console.log("Original2:", original2); // [1, 2, 3]
console.log("Cópia2:", copia2); // [1, 2, 3, 4]

// Cópia com concat (shallow copy)
const copia3 = [].concat(original2);
console.log("Cópia3 com concat:", copia3);

console.log("\n=== REMOVENDO ELEMENTOS ESPECÍFICOS ===");

function removerElemento(array, elemento) {
    const indice = array.indexOf(elemento);
    if (indice > -1) {
        return array.splice(indice, 1)[0];
    }
    return null;
}

function removerTodosElementos(array, elemento) {
    const removidos = [];
    let indice = array.indexOf(elemento);
    
    while (indice > -1) {
        removidos.push(array.splice(indice, 1)[0]);
        indice = array.indexOf(elemento);
    }
    
    return removidos;
}

const numComDuplicatas = [1, 2, 3, 2, 4, 2, 5];
console.log("Array original:", numComDuplicatas);

const removido = removerElemento(numComDuplicatas, 2);
console.log("Elemento removido:", removido);
console.log("Array após remover um 2:", numComDuplicatas);

const numerosComMais2 = [1, 2, 3, 2, 4, 2, 5];
const todosRemovidosOs2 = removerTodosElementos(numerosComMais2, 2);
console.log("Todos os 2 removidos:", todosRemovidosOs2);
console.log("Array final:", numerosComMais2);

console.log("\n=== ORDENAÇÃO PERSONALIZADA ===");

const estudantes = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 7.2 },
    { nome: "Carla", nota: 9.1 },
    { nome: "Daniel", nota: 6.8 }
];

// Ordenar por nota (crescente)
const porNotaCrescente = [...estudantes].sort((a, b) => a.nota - b.nota);
console.log("Ordenado por nota (crescente):");
porNotaCrescente.forEach(est => console.log(`${est.nome}: ${est.nota}`));

// Ordenar por nome (alfabética)
const porNome = [...estudantes].sort((a, b) => a.nome.localeCompare(b.nome));
console.log("\nOrdenado por nome:");
porNome.forEach(est => console.log(`${est.nome}: ${est.nota}`));

// Ordenação mais complexa (por nota decrescente, depois por nome)
const ordenacaoCompleta = [...estudantes].sort((a, b) => {
    if (b.nota !== a.nota) {
        return b.nota - a.nota; // Por nota decrescente
    }
    return a.nome.localeCompare(b.nome); // Por nome crescente se notas iguais
});

console.log("\nOrdenação complexa (nota desc, nome asc):");
ordenacaoCompleta.forEach(est => console.log(`${est.nome}: ${est.nota}`));

console.log("\n=== MÉTODOS ÚTEIS PARA VALIDAÇÃO ===");

function validarArray(array, validador) {
    if (!Array.isArray(array)) {
        return { valido: false, erro: "Não é um array" };
    }
    
    if (array.length === 0) {
        return { valido: false, erro: "Array vazio" };
    }
    
    const elementoInvalido = array.find(elemento => !validador(elemento));
    
    if (elementoInvalido !== undefined) {
        return { 
            valido: false, 
            erro: `Elemento inválido encontrado: ${elementoInvalido}` 
        };
    }
    
    return { valido: true, erro: null };
}

// Validar array de números positivos
const validacao1 = validarArray([1, 2, 3, 4], num => typeof num === 'number' && num > 0);
console.log("Validação números positivos:", validacao1);

const validacao2 = validarArray([1, -2, 3], num => typeof num === 'number' && num > 0);
console.log("Validação com número negativo:", validacao2);

const validacao3 = validarArray([], num => true);
console.log("Validação array vazio:", validacao3);
