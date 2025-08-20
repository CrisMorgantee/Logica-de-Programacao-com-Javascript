
# Tipos de Dados em JavaScript

## Conceitos Fundamentais

JavaScript é uma linguagem **dinamicamente tipada**, o que significa que o tipo de uma variável é determinado em tempo de execução e pode mudar durante a execução do programa.

## Tipos Primitivos

### 1. Number
- Representa tanto inteiros quanto decimais
- Inclui valores especiais: `Infinity`, `-Infinity`, `NaN`

```javascript
let inteiro = 42;
let decimal = 3.14159;
let cientifico = 2.5e6; // 2.500.000
let infinito = Infinity;
let naoNumero = NaN;

// Verificações úteis
Number.isInteger(42); // true
Number.isNaN(NaN); // true
Number.isFinite(100); // true
```

### 2. String
- Sequência de caracteres
- Três formas de declaração: aspas simples, duplas ou template literals

```javascript
let simples = 'Olá mundo';
let duplas = "JavaScript é incrível";
let template = `Meu nome é ${nome} e tenho ${idade} anos`;

// Métodos úteis
"Hello".length; // 5
"Hello".toUpperCase(); // "HELLO"
"Hello".charAt(0); // "H"
"Hello".includes("ell"); // true
```

### 3. Boolean
- Representa verdadeiro ou falso
- Usado em controle de fluxo

```javascript
let verdadeiro = true;
let falso = false;

// Conversão para boolean
Boolean(1); // true
Boolean(0); // false
Boolean(""); // false
Boolean("texto"); // true
```

### 4. Undefined
- Valor padrão de variáveis não inicializadas
- Retorno de funções sem return explícito

```javascript
let naoDefinida;
console.log(naoDefinida); // undefined

function semRetorno() {
    // não retorna nada
}
console.log(semRetorno()); // undefined
```

### 5. Null
- Representa ausência intencional de valor
- Deve ser atribuído explicitamente

```javascript
let valorNulo = null;
console.log(valorNulo); // null

// Curiosidade: typeof null retorna "object" (bug histórico)
typeof null; // "object"
```

### 6. Symbol (ES6+)
- Identificador único e imutável
- Usado principalmente como chaves de propriedades de objetos

```javascript
let simbolo1 = Symbol("id");
let simbolo2 = Symbol("id");
console.log(simbolo1 === simbolo2); // false (são únicos)

// Uso em objetos
let obj = {};
obj[simbolo1] = "valor único";
```

### 7. BigInt (ES2020+)
- Para números maiores que Number.MAX_SAFE_INTEGER
- Adicione 'n' ao final ou use BigInt()

```javascript
let numeroGrande = 1234567890123456789012345678901234567890n;
let outroBigInt = BigInt("98765432109876543210");

// Operações
let soma = 100n + 200n; // 300n
// let erro = 100n + 200; // TypeError: não pode misturar BigInt e Number
```

## Tipos de Referência

### 1. Object
- Estrutura de dados chave-valor
- Base para arrays, funções, datas, etc.

```javascript
let pessoa = {
    nome: "Ana",
    idade: 28,
    ativa: true,
    endereco: {
        cidade: "São Paulo",
        cep: "01234-567"
    }
};

// Acessando propriedades
pessoa.nome; // "Ana"
pessoa["idade"]; // 28
pessoa.endereco.cidade; // "São Paulo"
```

### 2. Array
- Lista ordenada de elementos
- Pode conter qualquer tipo de dados

```javascript
let numeros = [1, 2, 3, 4, 5];
let misto = [1, "texto", true, null, {nome: "João"}];
let matriz = [[1, 2], [3, 4], [5, 6]];

// Propriedades e métodos úteis
numeros.length; // 5
numeros.push(6); // adiciona ao final
numeros.pop(); // remove do final
```

### 3. Function
- Bloco de código reutilizável
- São objetos de primeira classe (podem ser atribuídas a variáveis)

```javascript
function tradicional() {
    return "Função tradicional";
}

let expresssao = function() {
    return "Função expressão";
};

let arrow = () => "Arrow function";

// Funções são objetos
console.log(typeof tradicional); // "function"
tradicional.propriedade = "Posso adicionar propriedades";
```

## Verificação de Tipos

### typeof Operator
```javascript
typeof 42; // "number"
typeof "texto"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" (bug histórico)
typeof {}; // "object"
typeof []; // "object"
typeof function(){}; // "function"
typeof Symbol(); // "symbol"
typeof 123n; // "bigint"
```

### Verificações Mais Precisas
```javascript
// Para arrays
Array.isArray([1, 2, 3]); // true
Array.isArray("não array"); // false

// Para null
valor === null; // verificação exata

// Para objetos (excluindo null e arrays)
function isObject(valor) {
    return valor !== null && typeof valor === "object" && !Array.isArray(valor);
}

// Para números válidos
Number.isNaN(NaN); // true
Number.isFinite(100); // true
Number.isInteger(42); // true
```

## Dynamic Typing (Tipagem Dinâmica)

JavaScript determina o tipo em tempo de execução e permite mudanças:

```javascript
let variavel = 42;        // number
variavel = "agora string"; // string
variavel = true;          // boolean
variavel = [1, 2, 3];     // object (array)

// Isso é poderoso mas pode causar bugs
function somar(a, b) {
    return a + b;
}

somar(2, 3);      // 5 (número)
somar("2", "3");  // "23" (string concatenada)
somar(2, "3");    // "23" (coerção de tipo)
```

## Coerção de Tipos

JavaScript automaticamente converte tipos quando necessário:

```javascript
// Coerção implícita
"5" + 3;      // "53" (number vira string)
"5" - 3;      // 2 (string vira number)
"5" * "2";    // 10 (ambas viram number)
true + 1;     // 2 (boolean vira number)

// Coerção explícita
Number("123");     // 123
String(456);       // "456"
Boolean(0);        // false
parseInt("123px"); // 123
parseFloat("12.34px"); // 12.34
```

## Valores Falsy e Truthy

### Falsy (considerados false)
- `false`
- `0`
- `-0`
- `0n` (BigInt zero)
- `""` (string vazia)
- `null`
- `undefined`
- `NaN`

### Truthy (considerados true)
- Qualquer valor que não seja falsy
- `"0"` (string com zero)
- `"false"` (string com false)
- `[]` (array vazio)
- `{}` (objeto vazio)
- `function(){}` (função)

```javascript
// Exemplos práticos
if ("") {
    // Nunca executa (falsy)
}

if ("0") {
    // Sempre executa (truthy)
}

if ([]) {
    // Sempre executa (array vazio é truthy)
}
```

## Comparação de Tipos

### Igualdade Solta (==) vs Estrita (===)

```javascript
// Igualdade solta (faz coerção)
5 == "5";     // true
true == 1;    // true
null == undefined; // true

// Igualdade estrita (não faz coerção)
5 === "5";    // false
true === 1;   // false
null === undefined; // false

// Recomendação: sempre use ===
```

## Casos Especiais e Curiosidades

```javascript
// NaN é único
NaN === NaN; // false!
Number.isNaN(NaN); // true (forma correta de verificar)

// Infinity
1 / 0; // Infinity
-1 / 0; // -Infinity
Infinity === Infinity; // true

// Arrays e objetos são comparados por referência
[1, 2, 3] === [1, 2, 3]; // false (referências diferentes)
{a: 1} === {a: 1}; // false (referências diferentes)

// Mas referência igual
let arr = [1, 2, 3];
let mesmoArr = arr;
arr === mesmoArr; // true (mesma referência)
```

## Boas Práticas

1. **Use `typeof` para tipos primitivos**
2. **Use `Array.isArray()` para arrays**
3. **Use `=== null` para verificar null**
4. **Evite coerção implícita quando possível**
5. **Sempre use `===` e `!==` para comparações**
6. **Valide tipos quando necessário**
7. **Entenda a diferença entre `null` e `undefined`**

## Exemplos Práticos

Consulte os arquivos de exemplo desta pasta:
- `exemplos.js` - Demonstrações de todos os tipos
- `projeto-pratico.js` - Projeto usando diferentes tipos de dados
