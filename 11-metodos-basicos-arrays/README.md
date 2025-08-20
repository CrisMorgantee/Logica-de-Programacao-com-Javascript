
# 🛠️ Métodos Básicos de Arrays

## Métodos de Adição e Remoção

### 1. push() - Adicionar ao Final
```javascript
const frutas = ["maçã", "banana"];

// Adicionar um elemento
const novoTamanho = frutas.push("laranja");
console.log(frutas); // ["maçã", "banana", "laranja"]
console.log(novoTamanho); // 3

// Adicionar múltiplos elementos
frutas.push("uva", "manga", "abacaxi");
console.log(frutas); // ["maçã", "banana", "laranja", "uva", "manga", "abacaxi"]

// Performance: push é O(1) - muito eficiente
const tempos = [];
console.time("push-test");
for (let i = 0; i < 100000; i++) {
    tempos.push(i);
}
console.timeEnd("push-test");
```

### 2. pop() - Remover do Final
```javascript
const numeros = [1, 2, 3, 4, 5];

// Remover último elemento
const ultimoElemento = numeros.pop();
console.log(ultimoElemento); // 5
console.log(numeros); // [1, 2, 3, 4]

// Usar pop() em loop
while (numeros.length > 0) {
    const item = numeros.pop();
    console.log(`Removido: ${item}`);
}
console.log(numeros); // []

// Verificação antes de usar pop()
function popSeguro(array) {
    if (array.length === 0) {
        return { sucesso: false, valor: undefined, mensagem: "Array vazio" };
    }
    return { sucesso: true, valor: array.pop(), mensagem: "Elemento removido" };
}
```

### 3. unshift() - Adicionar ao Início
```javascript
const cores = ["verde", "azul"];

// Adicionar um elemento no início
const novoTamanho = cores.unshift("vermelho");
console.log(cores); // ["vermelho", "verde", "azul"]
console.log(novoTamanho); // 3

// Adicionar múltiplos elementos
cores.unshift("amarelo", "roxo");
console.log(cores); // ["amarelo", "roxo", "vermelho", "verde", "azul"]

// Performance: unshift é O(n) - menos eficiente que push
// Todos os elementos precisam ser deslocados
```

### 4. shift() - Remover do Início
```javascript
const animais = ["gato", "cachorro", "pássaro"];

// Remover primeiro elemento
const primeiroAnimal = animais.shift();
console.log(primeiroAnimal); // "gato"
console.log(animais); // ["cachorro", "pássaro"]

// Implementar fila (FIFO - First In, First Out)
class Fila {
    constructor() {
        this.items = [];
    }
    
    enqueue(item) {
        this.items.push(item); // Adicionar no final
    }
    
    dequeue() {
        if (this.items.length === 0) {
            return undefined;
        }
        return this.items.shift(); // Remover do início
    }
    
    size() {
        return this.items.length;
    }
    
    peek() {
        return this.items[0];
    }
}

const minhaFila = new Fila();
minhaFila.enqueue("primeiro");
minhaFila.enqueue("segundo");
console.log(minhaFila.dequeue()); // "primeiro"
```

## Métodos de Transformação

### 1. concat() - Concatenar Arrays
```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

// Concatenar dois arrays
const resultado1 = array1.concat(array2);
console.log(resultado1); // [1, 2, 3, 4, 5, 6]
console.log(array1); // [1, 2, 3] - original não modificado

// Concatenar múltiplos arrays
const resultado2 = array1.concat(array2, array3);
console.log(resultado2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Concatenar elementos individuais
const resultado3 = array1.concat(100, 200);
console.log(resultado3); // [1, 2, 3, 100, 200]

// Alternativa moderna com spread operator
const resultado4 = [...array1, ...array2, ...array3];
console.log(resultado4); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Concatenação condicional
function concatenarSeValido(arr1, arr2, condicao) {
    if (condicao) {
        return arr1.concat(arr2);
    }
    return arr1.slice(); // Retorna cópia do primeiro array
}
```

### 2. slice() - Extrair Porções
```javascript
const letras = ['a', 'b', 'c', 'd', 'e', 'f'];

// Extrair do índice 2 até o final
console.log(letras.slice(2)); // ['c', 'd', 'e', 'f']

// Extrair do índice 1 até 4 (não inclui 4)
console.log(letras.slice(1, 4)); // ['b', 'c', 'd']

// Usar índices negativos
console.log(letras.slice(-3)); // ['d', 'e', 'f'] - últimos 3
console.log(letras.slice(-4, -1)); // ['c', 'd', 'e']

// Copiar array completo
const copia = letras.slice();
console.log(copia); // ['a', 'b', 'c', 'd', 'e', 'f']

// Slice com validação
function sliceSeguro(array, inicio = 0, fim) {
    if (!Array.isArray(array)) {
        throw new Error('Primeiro argumento deve ser um array');
    }
    
    const tamanho = array.length;
    
    // Normalizar índices negativos
    if (inicio < 0) inicio = Math.max(0, tamanho + inicio);
    if (fim !== undefined && fim < 0) fim = Math.max(0, tamanho + fim);
    
    return array.slice(inicio, fim);
}
```

### 3. splice() - Modificar Array
```javascript
const frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];

// Remover elementos (início no índice 1, remove 2 elementos)
const removidos = frutas.splice(1, 2);
console.log(removidos); // ['banana', 'laranja']
console.log(frutas); // ['maçã', 'uva', 'manga']

// Adicionar elementos sem remover
frutas.splice(1, 0, 'pêra', 'kiwi');
console.log(frutas); // ['maçã', 'pêra', 'kiwi', 'uva', 'manga']

// Substituir elementos
frutas.splice(2, 1, 'abacaxi'); // Remove 1 elemento no índice 2 e adiciona 'abacaxi'
console.log(frutas); // ['maçã', 'pêra', 'abacaxi', 'uva', 'manga']

// Limpar array mantendo referência
frutas.splice(0, frutas.length);
console.log(frutas); // []

// Função utilitária para inserir em posição específica
function inserirNaPosicao(array, posicao, ...elementos) {
    if (posicao < 0) posicao = 0;
    if (posicao > array.length) posicao = array.length;
    
    array.splice(posicao, 0, ...elementos);
    return array;
}

const numeros = [1, 3, 5];
inserirNaPosicao(numeros, 1, 2, 2.5);
console.log(numeros); // [1, 2, 2.5, 3, 5]
```

## Métodos de Busca e Verificação

### 1. indexOf() e lastIndexOf()
```javascript
const cores = ['azul', 'verde', 'azul', 'vermelho', 'azul'];

// Encontrar primeira ocorrência
console.log(cores.indexOf('azul')); // 0
console.log(cores.indexOf('amarelo')); // -1 (não encontrado)

// Encontrar última ocorrência
console.log(cores.lastIndexOf('azul')); // 4

// Busca a partir de posição específica
console.log(cores.indexOf('azul', 1)); // 2 (busca a partir do índice 1)
console.log(cores.lastIndexOf('azul', 3)); // 2 (busca para trás a partir do índice 3)

// Função para encontrar todas as ocorrências
function encontrarTodas(array, elemento) {
    const indices = [];
    let indice = array.indexOf(elemento);
    
    while (indice !== -1) {
        indices.push(indice);
        indice = array.indexOf(elemento, indice + 1);
    }
    
    return indices;
}

console.log(encontrarTodas(cores, 'azul')); // [0, 2, 4]
```

### 2. includes() - Verificar Existência
```javascript
const numeros = [1, 2, 3, 4, 5];

// Verificar se elemento existe
console.log(numeros.includes(3)); // true
console.log(numeros.includes(10)); // false

// Com posição inicial
console.log(numeros.includes(2, 2)); // false (busca a partir do índice 2)

// Comparação com NaN
const valores = [1, NaN, 3];
console.log(valores.includes(NaN)); // true
console.log(valores.indexOf(NaN)); // -1 (indexOf não funciona com NaN)

// Função includes personalizada para objetos
function includesObjeto(array, objeto, propriedade) {
    return array.some(item => item[propriedade] === objeto[propriedade]);
}

const pessoas = [
    { nome: 'Ana', idade: 25 },
    { nome: 'Bruno', idade: 30 }
];

console.log(includesObjeto(pessoas, { nome: 'Ana' }, 'nome')); // true
```

## Métodos de Ordenação

### 1. sort() - Ordenar Array
```javascript
// Ordenação de strings (padrão)
const frutas = ['banana', 'abacaxi', 'maçã', 'uva'];
frutas.sort();
console.log(frutas); // ['abacaxi', 'banana', 'maçã', 'uva']

// Ordenação de números (ATENÇÃO: conversão para string!)
const numeros = [10, 5, 40, 25, 1000, 1];
numeros.sort();
console.log(numeros); // [1, 10, 1000, 25, 40, 5] - INCORRETO!

// Ordenação correta de números
numeros.sort((a, b) => a - b); // Crescente
console.log(numeros); // [1, 5, 10, 25, 40, 1000]

numeros.sort((a, b) => b - a); // Decrescente
console.log(numeros); // [1000, 40, 25, 10, 5, 1]

// Ordenação de objetos
const pessoas = [
    { nome: 'Bruno', idade: 30 },
    { nome: 'Ana', idade: 25 },
    { nome: 'Carlos', idade: 35 }
];

// Ordenar por idade
pessoas.sort((a, b) => a.idade - b.idade);
console.log(pessoas);

// Ordenar por nome (strings)
pessoas.sort((a, b) => a.nome.localeCompare(b.nome));
console.log(pessoas);

// Função de ordenação multi-critério
function ordenarMultiplo(array, criterios) {
    return array.sort((a, b) => {
        for (let criterio of criterios) {
            const { campo, ordem = 'asc' } = criterio;
            let resultado = 0;
            
            if (typeof a[campo] === 'string') {
                resultado = a[campo].localeCompare(b[campo]);
            } else {
                resultado = a[campo] - b[campo];
            }
            
            if (resultado !== 0) {
                return ordem === 'asc' ? resultado : -resultado;
            }
        }
        return 0;
    });
}

const produtos = [
    { nome: 'Notebook', preco: 2000, categoria: 'eletrônicos' },
    { nome: 'Mouse', preco: 50, categoria: 'eletrônicos' },
    { nome: 'Camisa', preco: 80, categoria: 'roupas' }
];

ordenarMultiplo(produtos, [
    { campo: 'categoria', ordem: 'asc' },
    { campo: 'preco', ordem: 'desc' }
]);
```

### 2. reverse() - Inverter Array
```javascript
const letras = ['a', 'b', 'c', 'd'];

// Inverter o array
letras.reverse();
console.log(letras); // ['d', 'c', 'b', 'a']

// Inverter sem modificar original
function reverseImutavel(array) {
    return array.slice().reverse();
}

const original = [1, 2, 3, 4];
const invertido = reverseImutavel(original);
console.log(original); // [1, 2, 3, 4] - não modificado
console.log(invertido); // [4, 3, 2, 1]
```

## Métodos de Conversão

### 1. join() - Array para String
```javascript
const palavras = ['JavaScript', 'é', 'incrível'];

// Join padrão (vírgula)
console.log(palavras.join()); // "JavaScript,é,incrível"

// Join com separador personalizado
console.log(palavras.join(' ')); // "JavaScript é incrível"
console.log(palavras.join(' - ')); // "JavaScript - é - incrível"
console.log(palavras.join('')); // "JavaScriptéincrível"

// Join com números
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.join(' + ')); // "1 + 2 + 3 + 4 + 5"

// Função para criar lista HTML
function criarListaHTML(items, tipo = 'ul') {
    const listItems = items.map(item => `<li>${item}</li>`).join('');
    return `<${tipo}>${listItems}</${tipo}>`;
}

console.log(criarListaHTML(['Item 1', 'Item 2', 'Item 3']));
```

### 2. toString() - Conversão para String
```javascript
const array = [1, 2, 3, [4, 5], 6];

console.log(array.toString()); // "1,2,3,4,5,6"
console.log(String(array)); // "1,2,3,4,5,6"

// Para arrays complexos
const objetos = [{nome: 'Ana'}, {nome: 'Bruno'}];
console.log(objetos.toString()); // "[object Object],[object Object]"

// Melhor: usar JSON.stringify para objetos
console.log(JSON.stringify(objetos)); // '[{"nome":"Ana"},{"nome":"Bruno"}]'
```

## Padrões Comuns de Uso

### 1. Implementar Pilha (Stack)
```javascript
class Pilha {
    constructor() {
        this.items = [];
    }
    
    push(item) {
        this.items.push(item);
    }
    
    pop() {
        if (this.isEmpty()) {
            throw new Error('Pilha vazia');
        }
        return this.items.pop();
    }
    
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
    
    clear() {
        this.items.splice(0, this.items.length);
    }
}

const pilha = new Pilha();
pilha.push('primeiro');
pilha.push('segundo');
console.log(pilha.pop()); // 'segundo'
console.log(pilha.peek()); // 'primeiro'
```

### 2. Rotação de Array
```javascript
function rotacionarEsquerda(array, posicoes) {
    if (array.length === 0) return array;
    
    posicoes = posicoes % array.length; // Normalizar posições
    return array.slice(posicoes).concat(array.slice(0, posicoes));
}

function rotacionarDireita(array, posicoes) {
    if (array.length === 0) return array;
    
    posicoes = posicoes % array.length;
    return array.slice(-posicoes).concat(array.slice(0, -posicoes));
}

const original = [1, 2, 3, 4, 5];
console.log(rotacionarEsquerda(original, 2)); // [3, 4, 5, 1, 2]
console.log(rotacionarDireita(original, 2)); // [4, 5, 1, 2, 3]
```

### 3. Remover Duplicatas
```javascript
// Usando Set (método mais eficiente)
function removerDuplicatas(array) {
    return [...new Set(array)];
}

// Usando filter + indexOf (mantém primeira ocorrência)
function removerDuplicatasFilter(array) {
    return array.filter((item, indice) => array.indexOf(item) === indice);
}

// Para objetos (por propriedade específica)
function removerDuplicatasObjetos(array, propriedade) {
    const vistos = new Set();
    return array.filter(item => {
        if (vistos.has(item[propriedade])) {
            return false;
        }
        vistos.add(item[propriedade]);
        return true;
    });
}

const numeros = [1, 2, 2, 3, 3, 3, 4];
console.log(removerDuplicatas(numeros)); // [1, 2, 3, 4]

const pessoas = [
    { nome: 'Ana', idade: 25 },
    { nome: 'Bruno', idade: 30 },
    { nome: 'Ana', idade: 28 }
];
console.log(removerDuplicatasObjetos(pessoas, 'nome')); // Mantém apenas primeira 'Ana'
```

## Performance e Considerações

### Complexidade dos Métodos
```javascript
// O(1) - Constante
// push(), pop()

// O(n) - Linear
// shift(), unshift(), indexOf(), includes(), slice(), concat()

// O(n log n) - Logarítmica linear
// sort()

// O(n²) - Quadrática (no pior caso)
// splice() em alguns cenários

// Exemplo de benchmarking
function benchmark(fn, array, iterations = 1000) {
    const start = performance.now();
    
    for (let i = 0; i < iterations; i++) {
        fn([...array]); // Cópia para não afetar medições
    }
    
    const end = performance.now();
    return end - start;
}

const bigArray = Array.from({ length: 10000 }, (_, i) => i);

console.log('Push:', benchmark(arr => arr.push(1), bigArray));
console.log('Unshift:', benchmark(arr => arr.unshift(1), bigArray));
console.log('Sort:', benchmark(arr => arr.sort(), bigArray));
```
