
# Funções em JavaScript

## Conceitos Fundamentais

Funções são blocos de código reutilizáveis que executam uma tarefa específica. Em JavaScript, funções são **objetos de primeira classe** (first-class objects), o que significa que podem ser:
- Atribuídas a variáveis
- Passadas como argumentos
- Retornadas por outras funções
- Armazenadas em estruturas de dados

## Declaração de Funções

### 1. Function Declaration (Declaração de Função)
```javascript
function nomeFuncao(parametros) {
    // código da função
    return valor; // opcional
}

// Exemplo prático
function saudar(nome) {
    return `Olá, ${nome}!`;
}

console.log(saudar("Ana")); // "Olá, Ana!"
```

**Características importantes:**
- **Hoisting**: São "içadas" - podem ser chamadas antes da declaração
- **Nome obrigatório**: Sempre têm um nome
- **Criação em tempo de compilação**: Definidas quando o código é processado

```javascript
// Funciona devido ao hoisting
console.log(minhaFuncao()); // "Funcionou!"

function minhaFuncao() {
    return "Funcionou!";
}
```

### 2. Function Expression (Expressão de Função)
```javascript
const nomeFuncao = function(parametros) {
    // código da função
    return valor;
};

// Exemplo prático
const calcularArea = function(largura, altura) {
    return largura * altura;
};

console.log(calcularArea(5, 3)); // 15
```

**Características importantes:**
- **Sem hoisting**: Não podem ser chamadas antes da declaração
- **Nome opcional**: Podem ser anônimas
- **Criação em tempo de execução**: Definidas quando o código executa

```javascript
// console.log(minhaVar()); // Erro! Cannot access before initialization

const minhaVar = function() {
    return "Agora funciona!";
};

console.log(minhaVar()); // "Agora funciona!"
```

### 3. Arrow Functions (Funções Seta) - ES6+
```javascript
const nomeFuncao = (parametros) => {
    // código da função
    return valor;
};

// Sintaxe mais concisa
const nomeFuncao = parametros => valor; // return implícito

// Exemplos práticos
const somar = (a, b) => a + b;
const dobrar = x => x * 2;
const saudar = () => "Olá mundo!";

console.log(somar(2, 3)); // 5
console.log(dobrar(4));   // 8
console.log(saudar());    // "Olá mundo!"
```

**Características importantes:**
- **Sintaxe concisa**: Especialmente para funções simples
- **Return implícito**: Em uma linha, sem chaves
- **Sem `this` próprio**: Herdam o `this` do contexto
- **Sem `arguments`**: Não têm objeto arguments

### Comparação entre os Tipos
```javascript
// 1. Function Declaration
function declaracao(x) {
    return x * 2;
}

// 2. Function Expression
const expressao = function(x) {
    return x * 2;
};

// 3. Arrow Function
const arrow = x => x * 2;

// Todas fazem a mesma coisa:
console.log(declaracao(5)); // 10
console.log(expressao(5));  // 10
console.log(arrow(5));      // 10
```

## Características das Funções

### Hoisting (Içamento)
```javascript
// Function Declaration - sofre hoisting completo
console.log(funcaoDeclarada()); // "Funciona!"

function funcaoDeclarada() {
    return "Funciona!";
}

// Function Expression - hoisting apenas da variável
console.log(typeof funcaoExpressao); // "undefined"
// console.log(funcaoExpressao()); // Erro!

var funcaoExpressao = function() {
    return "Agora funciona!";
};

// Arrow Function com let/const - sem hoisting
// console.log(arrow()); // ReferenceError
const arrow = () => "Arrow function";
```

### Escopo (Scope)
```javascript
// Escopo global
var globalVar = "Sou global";

function exemploEscopo() {
    // Escopo de função
    var localVar = "Sou local";
    
    console.log(globalVar); // Acessível
    console.log(localVar);  // Acessível
    
    function funcaoInterna() {
        // Escopo aninhado
        var muitoLocal = "Muito local";
        
        console.log(globalVar); // Acessível
        console.log(localVar);  // Acessível
        console.log(muitoLocal); // Acessível
    }
    
    funcaoInterna();
    // console.log(muitoLocal); // Erro! Não acessível aqui
}

// console.log(localVar); // Erro! Não acessível aqui
```

### Closures (Fechamentos)
```javascript
// Closure: função interna tem acesso ao escopo da função externa
function criarContador() {
    let count = 0; // variável privada
    
    return function() {
        count++; // acessa variável do escopo externo
        return count;
    };
}

const contador = criarContador();
console.log(contador()); // 1
console.log(contador()); // 2
console.log(contador()); // 3

// Cada chamada de criarContador cria um novo closure
const outroContador = criarContador();
console.log(outroContador()); // 1 (independente do primeiro)
```

### First-Class Objects (Objetos de Primeira Classe)
```javascript
// 1. Atribuir a variáveis
const minhaFuncao = function() { return "Olá!"; };

// 2. Passar como argumentos
function executar(funcao) {
    return funcao();
}
console.log(executar(minhaFuncao)); // "Olá!"

// 3. Retornar de outras funções
function criarFuncao() {
    return function(nome) {
        return `Olá, ${nome}!`;
    };
}
const saudacao = criarFuncao();
console.log(saudacao("João")); // "Olá, João!"

// 4. Armazenar em estruturas de dados
const funcoes = [
    x => x * 2,
    x => x + 1,
    x => x * x
];

const resultado = funcoes[0](5); // 10

// 5. Ter propriedades como objetos
function exemploPropriedade() {
    return "Resultado";
}
exemploPropriedade.descricao = "Esta função tem propriedades";
console.log(exemploPropriedade.descricao);
```

## Tipos de Funções

### 1. Funções sem Parâmetros
```javascript
function semParametros() {
    console.log("Esta função não recebe parâmetros");
    return new Date().toLocaleString();
}

const horaAtual = () => new Date().toLocaleString();

console.log(semParametros());
console.log(horaAtual());
```

### 2. Funções com Parâmetros
```javascript
function comParametros(nome, idade, cidade) {
    return `${nome} tem ${idade} anos e mora em ${cidade}`;
}

const criarPessoa = (nome, idade = 0, cidade = "Não informada") => {
    return { nome, idade, cidade };
};

console.log(comParametros("Ana", 28, "São Paulo"));
console.log(criarPessoa("João")); // usa valores padrão
```

### 3. Funções com Retorno
```javascript
// Retorno explícito
function calcular(a, b, operacao) {
    switch(operacao) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : null;
        default: return null;
    }
}

// Retorno implícito (arrow function)
const multiplicar = (a, b) => a * b;

// Múltiplos pontos de retorno
function classificarIdade(idade) {
    if (idade < 0) return "Idade inválida";
    if (idade < 13) return "Criança";
    if (idade < 18) return "Adolescente";
    if (idade < 60) return "Adulto";
    return "Idoso";
}
```

### 4. Funções Anônimas
```javascript
// Em callbacks
const numeros = [1, 2, 3, 4, 5];

// Função anônima como callback
const pares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});

// Arrow function anônima
const dobrados = numeros.map(numero => numero * 2);

// Em event listeners (exemplo conceitual)
// button.addEventListener('click', function() {
//     console.log('Botão clicado!');
// });
```

### 5. IIFE (Immediately Invoked Function Expression)
```javascript
// IIFE com function expression
(function() {
    console.log("Executada imediatamente!");
})();

// IIFE com parâmetros
(function(nome) {
    console.log(`Olá, ${nome}!`);
})("Mundo");

// IIFE para criar escopo privado
const modulo = (function() {
    let varivelPrivada = "Não acessível externamente";
    
    return {
        metodoPublico: function() {
            return varivelPrivada;
        },
        alterar: function(novoValor) {
            varivelPrivada = novoValor;
        }
    };
})();

console.log(modulo.metodoPublico()); // "Não acessível externamente"
modulo.alterar("Novo valor");
console.log(modulo.metodoPublico()); // "Novo valor"
```

### 6. Higher-Order Functions (Funções de Ordem Superior)
```javascript
// Função que recebe outras funções como parâmetros
function operacao(a, b, funcao) {
    return funcao(a, b);
}

const somar = (x, y) => x + y;
const multiplicar = (x, y) => x * y;

console.log(operacao(5, 3, somar));      // 8
console.log(operacao(5, 3, multiplicar)); // 15

// Função que retorna outras funções
function criarOperacao(operador) {
    switch(operador) {
        case '+':
            return (a, b) => a + b;
        case '*':
            return (a, b) => a * b;
        case 'pow':
            return (base, exp) => Math.pow(base, exp);
        default:
            return () => null;
    }
}

const adicionar = criarOperacao('+');
const potencia = criarOperacao('pow');

console.log(adicionar(2, 3)); // 5
console.log(potencia(2, 3));  // 8
```

## Técnicas Avançadas

### Currying
```javascript
// Transformar função com múltiplos argumentos em sequência de funções
function somar(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

// Versão arrow function
const somarArrow = a => b => c => a + b + c;

console.log(somar(1)(2)(3)); // 6
console.log(somarArrow(1)(2)(3)); // 6

// Aplicação parcial
const somar5 = somar(5);
const somar5e3 = somar5(3);
console.log(somar5e3(2)); // 10
```

### Memoization
```javascript
function memoize(funcao) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (key in cache) {
            console.log('Cache hit!');
            return cache[key];
        }
        
        console.log('Calculando...');
        const result = funcao.apply(this, args);
        cache[key] = result;
        return result;
    };
}

// Função custosa
function fibonacci(n) {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Versão memoizada
const fibonacciMemo = memoize(fibonacci);

console.log(fibonacciMemo(40)); // Primeira vez: lento
console.log(fibonacciMemo(40)); // Segunda vez: instantâneo (cache)
```

### Debouncing e Throttling
```javascript
// Debounce: executa apenas após período de inatividade
function debounce(funcao, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => funcao.apply(this, args), delay);
    };
}

// Throttle: limita execuções por período
function throttle(funcao, delay) {
    let lastCall = 0;
    
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            return funcao.apply(this, args);
        }
    };
}

// Exemplos de uso
const buscarDebounced = debounce(function(termo) {
    console.log(`Buscando por: ${termo}`);
}, 300);

const scrollThrottled = throttle(function() {
    console.log('Scroll event');
}, 100);
```

## Contexto (this) em Funções

### Function Declaration/Expression
```javascript
const objeto = {
    nome: "Meu Objeto",
    metodo: function() {
        console.log(this.nome); // "Meu Objeto"
        
        // Função interna perde o contexto
        function interna() {
            console.log(this.nome); // undefined (ou global em modo não-strict)
        }
        interna();
        
        // Solução: salvar referência
        const self = this;
        function internaCorreta() {
            console.log(self.nome); // "Meu Objeto"
        }
        internaCorreta();
    }
};
```

### Arrow Functions
```javascript
const objeto2 = {
    nome: "Objeto Arrow",
    metodo: function() {
        console.log(this.nome); // "Objeto Arrow"
        
        // Arrow function mantém o contexto
        const interna = () => {
            console.log(this.nome); // "Objeto Arrow"
        };
        interna();
    }
};

// Cuidado: arrow function como método
const objeto3 = {
    nome: "Problema",
    metodo: () => {
        console.log(this.nome); // undefined (this não é o objeto)
    }
};
```

## Boas Práticas

### 1. Nomes Descritivos
```javascript
// ❌ Ruim
function calc(x, y) {
    return x * y;
}

// ✅ Bom
function calcularArea(largura, altura) {
    return largura * altura;
}
```

### 2. Single Responsibility Principle
```javascript
// ❌ Ruim - faz muitas coisas
function processarUsuario(usuario) {
    // Valida dados
    if (!usuario.email) throw new Error("Email obrigatório");
    
    // Formata dados
    usuario.nome = usuario.nome.toUpperCase();
    
    // Salva no banco
    database.save(usuario);
    
    // Envia email
    emailService.send(usuario.email, "Bem-vindo!");
}

// ✅ Bom - responsabilidades separadas
function validarUsuario(usuario) {
    if (!usuario.email) throw new Error("Email obrigatório");
}

function formatarUsuario(usuario) {
    return {
        ...usuario,
        nome: usuario.nome.toUpperCase()
    };
}

function salvarUsuario(usuario) {
    return database.save(usuario);
}

function enviarEmailBoasVindas(email) {
    return emailService.send(email, "Bem-vindo!");
}
```

### 3. Evitar Efeitos Colaterais
```javascript
// ❌ Ruim - modifica parâmetro
function dobrarNumeros(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2; // modifica array original
    }
    return array;
}

// ✅ Bom - função pura
function dobrarNumeros(array) {
    return array.map(num => num * 2); // retorna novo array
}
```

### 4. Use Arrow Functions Apropriadamente
```javascript
// ✅ Bom para funções simples
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(n => n % 2 === 0);

// ✅ Bom para callbacks
setTimeout(() => console.log("Executado!"), 1000);

// ❌ Evite como métodos de objeto
const obj = {
    nome: "Teste",
    metodo: () => console.log(this.nome) // this não será o objeto
};

// ✅ Use function para métodos
const obj2 = {
    nome: "Teste",
    metodo: function() { console.log(this.nome); } // this será o objeto
};
```

### 5. Validação de Parâmetros
```javascript
function dividir(a, b) {
    // Validações no início
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Ambos argumentos devem ser números');
    }
    
    if (b === 0) {
        throw new Error('Não é possível dividir por zero');
    }
    
    return a / b;
}
```

## Resumo

**Quando usar cada tipo:**
- **Function Declaration**: Para funções principais, que precisam de hoisting
- **Function Expression**: Para funções condicionais ou atribuídas a variáveis
- **Arrow Functions**: Para callbacks, funções simples, quando não precisa de `this` próprio
- **IIFE**: Para criar escopos privados, executar código imediatamente
- **Methods**: Use function expression em objetos para ter `this` correto

**Princípios importantes:**
1. **Uma função, uma responsabilidade**
2. **Nomes descritivos e verbos**
3. **Evitar efeitos colaterais**
4. **Validar parâmetros quando necessário**
5. **Retornar valores consistentes**
6. **Usar o tipo de função apropriado para cada situação**

## Exemplos Práticos

Consulte o arquivo `exemplos.js` nesta pasta para ver demonstrações práticas de todos os conceitos de funções.
