
# Variáveis em JavaScript

## Conceitos Básicos

Em JavaScript, existem três formas principais de declarar variáveis:

- `var`: Escopo global ou de função (evite usar)
- `let`: Escopo de bloco (recomendado)
- `const`: Constante, escopo de bloco (recomendado para valores que não mudam)

## Diferenças entre var, let e const

### var (Legacy - Evitar)
```javascript
var nome = "João";
var nome = "Maria"; // Redeclaração permitida
// Escopo de função ou global
// Hoisting (içamento)
```

### let (Recomendado para variáveis)
```javascript
let idade = 25;
idade = 26; // Reatribuição permitida
// let idade = 30; // Erro: não pode redeclarar
// Escopo de bloco
```

### const (Recomendado para constantes)
```javascript
const PI = 3.14159;
// PI = 3.14; // Erro: não pode reatribuir
// Escopo de bloco
// Deve ser inicializada na declaração
```

## Regras de Nomenclatura

- Iniciar com letra, $ ou _
- Pode conter números após o primeiro caractere
- Case-sensitive (maiúsculas/minúsculas importam)
- Não pode usar palavras reservadas (if, for, function, etc.)
- Use camelCase para múltiplas palavras

### Boas Práticas de Nomenclatura
```javascript
// ✅ Bom
let nomeUsuario = "João";
let idadeUsuario = 25;
let isAtivo = true;

// ❌ Evitar
let n = "João";
let x = 25;
let flag = true;
```

## Hoisting (Içamento)

O hoisting é um comportamento do JavaScript onde declarações de variáveis e funções são "movidas" para o topo do escopo.

```javascript
// var é içada
console.log(minhaVar); // undefined (não erro)
var minhaVar = "Olá";

// let e const não são acessíveis antes da declaração
console.log(minhaLet); // ReferenceError
let minhaLet = "Mundo";
```

## Escopo (Scope)

### Escopo Global
```javascript
var global = "Sou global";
let globalLet = "Também sou global";

function teste() {
    console.log(global); // Acessível
    console.log(globalLet); // Acessível
}
```

### Escopo de Função
```javascript
function exemploFuncao() {
    var funcaoVar = "Escopo de função";
    let funcaoLet = "Também escopo de função";
    
    if (true) {
        console.log(funcaoVar); // Acessível
        console.log(funcaoLet); // Acessível
    }
}
```

### Escopo de Bloco
```javascript
if (true) {
    var blocoVar = "var ignora escopo de bloco";
    let blocoLet = "let respeita escopo de bloco";
    const blocoCon = "const também respeita";
}

console.log(blocoVar); // Acessível (problemático!)
// console.log(blocoLet); // Erro!
// console.log(blocoCon); // Erro!
```

## Temporal Dead Zone

A zona morta temporal é o período entre o início do escopo e a declaração da variável let/const.

```javascript
console.log(typeof minhaVar); // undefined
console.log(typeof minhaLet); // ReferenceError

var minhaVar = 1;
let minhaLet = 2;
```

## Mutabilidade

```javascript
// Primitivos são imutáveis
let numero = 5;
numero = 10; // Novo valor, não mutação

// Objetos são mutáveis
const pessoa = { nome: "João" };
pessoa.nome = "Maria"; // Permitido! Muta o objeto
pessoa.idade = 30; // Também permitido

// Para tornar objeto imutável
const pessoaImutavel = Object.freeze({ nome: "Pedro" });
// pessoaImutavel.nome = "Paulo"; // Ignorado em modo normal, erro em strict mode
```

## Exemplos Práticos

Veja os arquivos de exemplo nesta pasta para entender melhor o uso de variáveis:
- `exemplos.js` - Demonstrações práticas
- `projeto-pratico.js` - Projeto real usando variáveis
- `tarefa.js` - Exercícios para praticar

## Resumo de Boas Práticas

1. **Use `const` por padrão** - Para valores que não mudam
2. **Use `let` quando precisar reatribuir** - Para variáveis que mudam
3. **Evite `var`** - Comportamento inconsistente
4. **Nomes descritivos** - O código deve ser auto-explicativo
5. **Escopo mínimo** - Declare variáveis no menor escopo possível
