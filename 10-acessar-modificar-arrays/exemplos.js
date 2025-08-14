
// Exemplos de Acesso e Modificação de Arrays

console.log("=== ACESSANDO ELEMENTOS ===");

const frutas = ["maçã", "banana", "laranja", "manga", "uva"];
console.log("Array original:", frutas);

// Acesso por índice
console.log("Primeira fruta:", frutas[0]);
console.log("Segunda fruta:", frutas[1]);
console.log("Última fruta:", frutas[frutas.length - 1]);

// Acesso a índice inexistente
console.log("Índice 10:", frutas[10]); // undefined

// Verificando se índice existe
console.log("Índice 2 existe:", 2 in frutas); // true
console.log("Índice 10 existe:", 10 in frutas); // false

console.log("\n=== MODIFICANDO ELEMENTOS EXISTENTES ===");

// Alteração direta
frutas[1] = "pêra";
console.log("Após alterar índice 1:", frutas);

// Modificação de múltiplos elementos
frutas[0] = "abacaxi";
frutas[2] = "kiwi";
console.log("Após múltiplas alterações:", frutas);

console.log("\n=== ADICIONANDO ELEMENTOS ===");

// push() - adiciona no final
frutas.push("morango");
console.log("Após push:", frutas);

// unshift() - adiciona no início
frutas.unshift("coco");
console.log("Após unshift:", frutas);

// Adicionando múltiplos elementos
frutas.push("limão", "melão");
console.log("Após push múltiplo:", frutas);

// Adicionando em posição específica com splice
frutas.splice(3, 0, "goiaba"); // posição 3, remove 0, adiciona "goiaba"
console.log("Após splice para adicionar:", frutas);

console.log("\n=== REMOVENDO ELEMENTOS ===");

// pop() - remove do final
const frutaRemovida = frutas.pop();
console.log("Fruta removida com pop:", frutaRemovida);
console.log("Array após pop:", frutas);

// shift() - remove do início
const primeiraRemovida = frutas.shift();
console.log("Primeira fruta removida:", primeiraRemovida);
console.log("Array após shift:", frutas);

// splice() - remove de posição específica
const removidas = frutas.splice(2, 1); // remove 1 elemento da posição 2
console.log("Elementos removidos com splice:", removidas);
console.log("Array após splice:", frutas);

// delete - cria "buraco" (não recomendado)
const arrayComDelete = ["a", "b", "c", "d"];
delete arrayComDelete[1];
console.log("Array com delete:", arrayComDelete); // ["a", , "c", "d"]
console.log("Length após delete:", arrayComDelete.length); // 4

console.log("\n=== MÉTODOS DE BUSCA ===");

const numeros = [10, 20, 30, 20, 40];

// indexOf() - primeiro índice encontrado
console.log("Índice do 20:", numeros.indexOf(20)); // 1
console.log("Índice do 50:", numeros.indexOf(50)); // -1 (não encontrado)

// lastIndexOf() - último índice encontrado
console.log("Último índice do 20:", numeros.lastIndexOf(20)); // 3

// includes() - verifica existência
console.log("Contém 30:", numeros.includes(30)); // true
console.log("Contém 50:", numeros.includes(50)); // false

// find() - primeiro elemento que satisfaz condição
const maior25 = numeros.find(num => num > 25);
console.log("Primeiro número > 25:", maior25); // 30

// findIndex() - índice do primeiro elemento que satisfaz condição
const indiceMaior25 = numeros.findIndex(num => num > 25);
console.log("Índice do primeiro > 25:", indiceMaior25); // 2

console.log("\n=== CRIANDO SUBARRAYS ===");

const alfabeto = ["a", "b", "c", "d", "e", "f", "g"];

// slice() - cria novo array (não modifica original)
const parte1 = alfabeto.slice(1, 4); // do índice 1 até 4 (não inclui 4)
console.log("Slice(1,4):", parte1); // ["b", "c", "d"]
console.log("Original:", alfabeto); // não mudou

// slice sem parâmetros - copia todo array
const copia = alfabeto.slice();
console.log("Cópia completa:", copia);

// slice com índices negativos
const ultimos3 = alfabeto.slice(-3);
console.log("Últimos 3:", ultimos3); // ["e", "f", "g"]

console.log("\n=== CONCATENAÇÃO ===");

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

// concat() - une arrays (não modifica originais)
const unido = array1.concat(array2, array3);
console.log("Arrays unidos:", unido);
console.log("Array1 original:", array1); // não mudou

// Spread operator - alternativa moderna
const unidoSpread = [...array1, ...array2, ...array3];
console.log("Unidos com spread:", unidoSpread);

console.log("\n=== REVERSÃO E ORDENAÇÃO ===");

const letras = ["d", "a", "c", "b"];
console.log("Original:", letras);

// reverse() - modifica o array original
const revertido = letras.reverse();
console.log("Revertido:", revertido);
console.log("Original após reverse:", letras); // foi modificado

// sort() - modifica o array original
const numerosDesordenados = [30, 5, 100, 2, 50];
console.log("Números desordenados:", numerosDesordenados);

// Sort padrão (converte para string)
numerosDesordenados.sort();
console.log("Sort padrão:", numerosDesordenados); // [100, 2, 30, 5, 50] - ordem alfabética!

// Sort numérico correto
const numerosParaSort = [30, 5, 100, 2, 50];
numerosParaSort.sort((a, b) => a - b);
console.log("Sort numérico:", numerosParaSort); // [2, 5, 30, 50, 100]

console.log("\n=== PREENCHIMENTO ===");

// fill() - preenche com valor
const arrayPreencher = new Array(5);
arrayPreencher.fill(0);
console.log("Array preenchido com 0:", arrayPreencher);

// fill com range
const arrayRange = [1, 2, 3, 4, 5];
arrayRange.fill("x", 1, 4); // do índice 1 até 4 (não inclui 4)
console.log("Fill com range:", arrayRange); // [1, "x", "x", "x", 5]

console.log("\n=== CONVERSÃO PARA STRING ===");

const cores = ["vermelho", "verde", "azul"];

// toString()
console.log("toString():", cores.toString()); // "vermelho,verde,azul"

// join() - com separador customizado
console.log("join(' - '):", cores.join(" - ")); // "vermelho - verde - azul"
console.log("join(''):", cores.join("")); // "vermelhoverde azul"

console.log("\n=== OPERAÇÕES AVANÇADAS ===");

// Removendo duplicatas
const comDuplicatas = [1, 2, 2, 3, 3, 3, 4];
const semDuplicatas = [];

for (let item of comDuplicatas) {
    if (!semDuplicatas.includes(item)) {
        semDuplicatas.push(item);
    }
}

console.log("Original com duplicatas:", comDuplicatas);
console.log("Sem duplicatas:", semDuplicatas);

// Inserindo em posição específica mantendo ordem
function inserirOrdenado(array, valor) {
    let inserido = false;
    for (let i = 0; i < array.length; i++) {
        if (valor < array[i]) {
            array.splice(i, 0, valor);
            inserido = true;
            break;
        }
    }
    if (!inserido) {
        array.push(valor);
    }
    return array;
}

const ordenado = [1, 3, 5, 7, 9];
console.log("Array ordenado:", ordenado);
inserirOrdenado(ordenado, 4);
console.log("Após inserir 4:", ordenado);
inserirOrdenado(ordenado, 10);
console.log("Após inserir 10:", ordenado);

console.log("\n=== TRATAMENTO DE ERROS ===");

function acessoSeguro(array, indice) {
    if (!Array.isArray(array)) {
        return { erro: "Não é um array", valor: null };
    }
    
    if (indice < 0 || indice >= array.length) {
        return { erro: "Índice fora dos limites", valor: null };
    }
    
    return { erro: null, valor: array[indice] };
}

const testeArray = ["a", "b", "c"];
console.log("Acesso seguro [1]:", acessoSeguro(testeArray, 1));
console.log("Acesso seguro [10]:", acessoSeguro(testeArray, 10));
console.log("Acesso seguro em não-array:", acessoSeguro("não é array", 0));
