
# 📚 Arrays em JavaScript

## O que são Arrays?

Arrays são estruturas de dados que permitem armazenar múltiplos valores em uma única variável. Em JavaScript, arrays são objetos especiais que podem conter diferentes tipos de dados e têm tamanho dinâmico.

## Características dos Arrays em JavaScript

### 1. Índices Baseados em Zero
```javascript
const frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]); // "maçã" (primeiro elemento)
console.log(frutas[2]); // "laranja" (terceiro elemento)
```

### 2. Tamanho Dinâmico
```javascript
const numeros = [1, 2, 3];
console.log(numeros.length); // 3

numeros.push(4, 5);
console.log(numeros.length); // 5
```

### 3. Tipos Mistos
```javascript
const misto = [1, "texto", true, null, {nome: "João"}, [1, 2, 3]];
console.log(misto); // Aceita qualquer tipo de dado
```

## Formas de Criar Arrays

### 1. Literal de Array (Mais Comum)
```javascript
const vazio = [];
const numeros = [1, 2, 3, 4, 5];
const nomes = ["Ana", "Bruno", "Carlos"];
```

### 2. Construtor Array
```javascript
const arr1 = new Array(); // Array vazio
const arr2 = new Array(5); // Array com 5 elementos undefined
const arr3 = new Array(1, 2, 3); // Array com elementos [1, 2, 3]
```

### 3. Array.of() e Array.from()
```javascript
// Array.of() - cria array com os argumentos passados
const numeros = Array.of(1, 2, 3, 4);

// Array.from() - cria array a partir de objeto iterável
const letras = Array.from("JavaScript"); // ["J", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
const numeros = Array.from({length: 5}, (_, i) => i + 1); // [1, 2, 3, 4, 5]
```

## Propriedades Importantes

### Length (Comprimento)
```javascript
const cores = ["azul", "verde", "vermelho"];
console.log(cores.length); // 3

// Modificar length afeta o array
cores.length = 2;
console.log(cores); // ["azul", "verde"]

cores.length = 4;
console.log(cores); // ["azul", "verde", undefined, undefined]
```

## Acessando Elementos

### 1. Índice Positivo
```javascript
const animais = ["gato", "cachorro", "pássaro"];
console.log(animais[0]); // "gato"
console.log(animais[1]); // "cachorro"
```

### 2. Índice Negativo (Usando at())
```javascript
const numeros = [10, 20, 30, 40, 50];
console.log(numeros.at(-1)); // 50 (último elemento)
console.log(numeros.at(-2)); // 40 (penúltimo elemento)
```

### 3. Desestruturação
```javascript
const pontos = [10, 25, 30];
const [primeiro, segundo, terceiro] = pontos;
console.log(primeiro); // 10
console.log(segundo);  // 25
```

## Arrays Multidimensionais

### Array Bidimensional (Matriz)
```javascript
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[0][1]); // 2
console.log(matriz[2][0]); // 7

// Percorrendo matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`Posição [${i}][${j}]: ${matriz[i][j]}`);
    }
}
```

### Array Tridimensional
```javascript
const cubo = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];

console.log(cubo[1][0][1]); // 6
```

## Verificações com Arrays

### 1. Verificar se é Array
```javascript
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("texto")); // false
console.log(Array.isArray(null)); // false
```

### 2. Verificar se está Vazio
```javascript
function arrayVazio(arr) {
    return Array.isArray(arr) && arr.length === 0;
}

console.log(arrayVazio([])); // true
console.log(arrayVazio([1])); // false
```

### 3. Verificar se Contém Elemento
```javascript
const frutas = ["maçã", "banana", "laranja"];
console.log(frutas.includes("banana")); // true
console.log(frutas.indexOf("laranja")); // 2 (encontrou no índice 2)
console.log(frutas.indexOf("uva")); // -1 (não encontrou)
```

## Padrões Comuns de Uso

### 1. Lista de Tarefas
```javascript
const tarefas = [
    { id: 1, texto: "Estudar JavaScript", concluida: false },
    { id: 2, texto: "Fazer exercícios", concluida: true },
    { id: 3, texto: "Revisar código", concluida: false }
];
```

### 2. Dados Tabulares
```javascript
const vendas = [
    ["Janeiro", 1000, 800],
    ["Fevereiro", 1200, 900],
    ["Março", 1100, 750]
];
```

### 3. Cache de Dados
```javascript
const cache = [];

function adicionarAoCache(dado) {
    if (cache.length >= 10) {
        cache.shift(); // Remove o mais antigo
    }
    cache.push(dado);
}
```

## Performance e Boas Práticas

### 1. Pré-alocar quando Possível
```javascript
// ✅ Melhor para arrays de tamanho conhecido
const numeros = new Array(1000);
for (let i = 0; i < 1000; i++) {
    numeros[i] = i * 2;
}
```

### 2. Evitar Elementos Vazios
```javascript
// ❌ Evitar
const arr = [1, , , 4]; // Elementos vazios podem causar problemas

// ✅ Melhor
const arr = [1, undefined, undefined, 4];
```

### 3. Usar const para Arrays que Não Serão Reatribuídos
```javascript
// ✅ Boa prática
const numeros = [1, 2, 3];
numeros.push(4); // OK - modifica conteúdo

// ❌ Evitar
let numeros = [1, 2, 3];
numeros = [1, 2, 3, 4]; // Reatribuição desnecessária
```

## Casos de Uso Avançados

### 1. Array como Pilha (Stack)
```javascript
const pilha = [];
pilha.push(1); // Adicionar ao topo
pilha.push(2);
const topo = pilha.pop(); // Remover do topo
console.log(topo); // 2
```

### 2. Array como Fila (Queue)
```javascript
const fila = [];
fila.push(1); // Adicionar ao final
fila.push(2);
const primeiro = fila.shift(); // Remover do início
console.log(primeiro); // 1
```

### 3. Buffer Circular
```javascript
class BufferCircular {
    constructor(tamanho) {
        this.buffer = new Array(tamanho);
        this.tamanho = tamanho;
        this.indice = 0;
        this.count = 0;
    }
    
    adicionar(item) {
        this.buffer[this.indice] = item;
        this.indice = (this.indice + 1) % this.tamanho;
        if (this.count < this.tamanho) this.count++;
    }
    
    obterTodos() {
        return this.buffer.slice(0, this.count);
    }
}
```

## Armadilhas Comuns

### 1. Referência vs Cópia
```javascript
const original = [1, 2, 3];
const referencia = original; // Mesma referência!
referencia.push(4);
console.log(original); // [1, 2, 3, 4] - Original também mudou!

// Para cópia superficial
const copia = [...original];
// ou
const copia2 = Array.from(original);
```

### 2. Modificação Durante Iteração
```javascript
const numeros = [1, 2, 3, 4, 5];

// ❌ Problemático - modifica durante iteração
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        numeros.splice(i, 1); // Remove elemento
        i--; // Ajustar índice
    }
}

// ✅ Melhor - iterar de trás para frente
for (let i = numeros.length - 1; i >= 0; i--) {
    if (numeros[i] % 2 === 0) {
        numeros.splice(i, 1);
    }
}
```

## Próximos Passos

Após dominar os conceitos básicos de arrays, você está pronto para:
- Aprender métodos de manipulação de arrays (push, pop, shift, unshift)
- Explorar métodos funcionais (map, filter, reduce)
- Trabalhar com arrays de objetos
- Implementar algoritmos de ordenação e busca
