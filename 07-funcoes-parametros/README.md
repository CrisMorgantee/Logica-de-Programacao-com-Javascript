
# Funções com Parâmetros

## Conceitos Fundamentais

Parâmetros são variáveis que permitem que funções recebam dados do exterior para processar. Em JavaScript, o sistema de parâmetros é muito flexível, permitindo desde funções sem parâmetros até funções com número variável de argumentos.

## Tipos de Parâmetros

### 1. Parâmetros Simples
```javascript
function funcao(parametro1, parametro2, parametro3) {
    // código usando os parâmetros
}

// Exemplos práticos
function saudar(nome, sobrenome) {
    return `Olá, ${nome} ${sobrenome}!`;
}

function calcularRectangulo(largura, altura) {
    const area = largura * altura;
    const perimetro = 2 * (largura + altura);
    
    return {
        area,
        perimetro,
        largura,
        altura
    };
}

console.log(saudar("Ana", "Silva")); // "Olá, Ana Silva!"
console.log(calcularRectangulo(5, 3)); // {area: 15, perimetro: 16, largura: 5, altura: 3}
```

### 2. Parâmetros Padrão (Default Parameters) - ES6+
```javascript
function funcao(parametro1, parametro2 = "valor padrão") {
    // se parametro2 não for fornecido, usa "valor padrão"
}

// Exemplos práticos
function criarUsuario(nome, idade = 18, ativo = true) {
    return {
        nome,
        idade,
        ativo,
        criadoEm: new Date()
    };
}

function configurarServidor(host = "localhost", porta = 3000, debug = false) {
    console.log(`Servidor rodando em ${host}:${porta}`);
    if (debug) {
        console.log("Modo debug ativado");
    }
}

// Diferentes formas de chamar
console.log(criarUsuario("João"));                    // usa padrões para idade e ativo
console.log(criarUsuario("Maria", 25));              // usa padrão para ativo
console.log(criarUsuario("Pedro", 30, false));       // todos os valores fornecidos

configurarServidor();                                 // usa todos os padrões
configurarServidor("192.168.1.1");                   // usa padrões para porta e debug
configurarServidor("0.0.0.0", 8080, true);          // todos fornecidos
```

#### Parâmetros Padrão Dinâmicos
```javascript
// Valores padrão podem ser expressões
function gerarId(prefixo = "user", timestamp = Date.now()) {
    return `${prefixo}_${timestamp}`;
}

// Parâmetros padrão podem usar outros parâmetros
function criarRetangulo(largura, altura = largura) { // quadrado por padrão
    return { largura, altura, area: largura * altura };
}

// Funções como valores padrão
function log(mensagem, timestamp = () => new Date().toISOString()) {
    console.log(`[${timestamp()}] ${mensagem}`);
}

// Valores padrão mais complexos
function processarDados(dados = [], opcoes = {}) {
    const configuracao = {
        ordenar: true,
        reverter: false,
        limite: 100,
        ...opcoes // sobrescreve padrões com valores fornecidos
    };
    
    let resultado = [...dados]; // cópia do array
    
    if (configuracao.ordenar) {
        resultado.sort();
    }
    
    if (configuracao.reverter) {
        resultado.reverse();
    }
    
    if (configuracao.limite) {
        resultado = resultado.slice(0, configuracao.limite);
    }
    
    return resultado;
}
```

### 3. Rest Parameters (...rest) - ES6+
```javascript
function funcao(primeiro, segundo, ...resto) {
    // resto é um array com todos os argumentos adicionais
}

// Exemplos práticos
function somar(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

function criarLista(titulo, ...itens) {
    console.log(`Lista: ${titulo}`);
    itens.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
}

function estatisticas(nome, ...notas) {
    const total = notas.length;
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    const media = total > 0 ? soma / total : 0;
    const maior = Math.max(...notas);
    const menor = Math.min(...notas);
    
    return {
        aluno: nome,
        totalNotas: total,
        media: Number(media.toFixed(2)),
        maiorNota: maior,
        menorNota: menor,
        situacao: media >= 7 ? "Aprovado" : "Reprovado"
    };
}

// Diferentes formas de chamar
console.log(somar(1, 2, 3, 4, 5));                   // 15
console.log(somar(10, 20));                          // 30
console.log(somar());                                 // 0

criarLista("Compras", "Leite", "Pão", "Ovos", "Frutas");

console.log(estatisticas("João", 8, 7, 9, 6, 8));    // objeto com estatísticas
```

#### Rest Parameters vs Arguments
```javascript
// Function tradicional com arguments (legado)
function exemploArguments() {
    console.log("arguments é array-like:", Array.isArray(arguments)); // false
    console.log("arguments length:", arguments.length);
    
    // Converter para array para usar métodos de array
    const argumentosArray = Array.from(arguments);
    const soma = argumentosArray.reduce((a, b) => a + b, 0);
    return soma;
}

// Função moderna com rest parameters
function exemploRest(...numeros) {
    console.log("rest é array:", Array.isArray(numeros)); // true
    console.log("rest length:", numeros.length);
    
    // Já é array, pode usar métodos diretamente
    return numeros.reduce((a, b) => a + b, 0);
}

console.log(exemploArguments(1, 2, 3, 4)); // 10
console.log(exemploRest(1, 2, 3, 4));      // 10
```

### 4. Destructuring (Desestruturação) - ES6+

#### Destructuring de Objetos
```javascript
function criarPerfil({nome, idade, email, cidade = "Não informado"}) {
    return `
        Nome: ${nome}
        Idade: ${idade}
        Email: ${email}
        Cidade: ${cidade}
    `;
}

// Uso
const usuario = {
    nome: "Ana",
    idade: 28,
    email: "ana@email.com"
};

console.log(criarPerfil(usuario));

// Também funciona diretamente
console.log(criarPerfil({
    nome: "João",
    idade: 35,
    email: "joao@email.com",
    cidade: "São Paulo"
}));
```

#### Destructuring de Arrays
```javascript
function analisarNotas([primeira, segunda, terceira, ...outras]) {
    console.log("Primeira nota:", primeira);
    console.log("Segunda nota:", segunda);
    console.log("Terceira nota:", terceira);
    console.log("Outras notas:", outras);
    
    if (primeira && segunda && terceira) {
        const media = (primeira + segunda + terceira) / 3;
        return `Média das 3 primeiras: ${media.toFixed(2)}`;
    }
    
    return "Notas insuficientes para calcular média";
}

console.log(analisarNotas([8, 7, 9, 6, 8, 7]));
console.log(analisarNotas([10, 9])); // terceira será undefined
```

#### Destructuring Aninhado
```javascript
function processarPedido({
    cliente: {nome, email},
    itens,
    entrega: {endereco, prazo = "5 dias úteis"} = {}
}) {
    console.log(`Cliente: ${nome} (${email})`);
    console.log(`Itens: ${itens.length}`);
    console.log(`Entrega: ${endereco || "Retirar na loja"}`);
    console.log(`Prazo: ${prazo}`);
}

const pedido = {
    cliente: {
        nome: "Maria Silva",
        email: "maria@email.com"
    },
    itens: ["Produto A", "Produto B"],
    entrega: {
        endereco: "Rua das Flores, 123"
    }
};

processarPedido(pedido);
```

#### Renomeação em Destructuring
```javascript
function calcularSalario({
    salarioBase: base,
    horasExtras: extras = 0,
    bonificacao: bonus = 0
}) {
    const valorHoraExtra = base / 160 * 1.5; // 50% a mais
    const totalExtras = extras * valorHoraExtra;
    const salarioTotal = base + totalExtras + bonus;
    
    return {
        salarioBase: base,
        horasExtras: extras,
        valorHorasExtras: Number(totalExtras.toFixed(2)),
        bonificacao: bonus,
        salarioTotal: Number(salarioTotal.toFixed(2))
    };
}

const dados = {
    salarioBase: 3000,
    horasExtras: 10,
    bonificacao: 500
};

console.log(calcularSalario(dados));
```

## Características Avançadas

### JavaScript e Validação de Parâmetros
```javascript
// JavaScript NÃO valida número de parâmetros automaticamente
function exemplo(a, b, c) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("c:", c);
}

exemplo();              // a: undefined, b: undefined, c: undefined
exemplo(1);             // a: 1, b: undefined, c: undefined
exemplo(1, 2);          // a: 1, b: 2, c: undefined
exemplo(1, 2, 3);       // a: 1, b: 2, c: 3
exemplo(1, 2, 3, 4, 5); // a: 1, b: 2, c: 3 (extras ignorados)
```

### Arguments Object (Funções Tradicionais)
```javascript
function exemploCompleto() {
    console.log("Número de argumentos:", arguments.length);
    
    // arguments é array-like, mas não é array
    console.log("É array?", Array.isArray(arguments)); // false
    
    // Acessar argumentos por índice
    for (let i = 0; i < arguments.length; i++) {
        console.log(`Argumento ${i}:`, arguments[i]);
    }
    
    // Converter para array
    const argsArray = Array.from(arguments);
    // ou: const argsArray = [...arguments];
    // ou: const argsArray = Array.prototype.slice.call(arguments);
    
    return argsArray.join(" - ");
}

console.log(exemploCompleto("a", "b", "c", "d"));

// Arrow functions NÃO têm arguments
const arrowFunction = () => {
    // console.log(arguments); // ReferenceError
    console.log("Arrow functions não têm 'arguments'");
};
```

### Spread Operator com Parâmetros
```javascript
function multiplicar(a, b, c) {
    return a * b * c;
}

const numeros = [2, 3, 4];

// Sem spread - passa array como primeiro argumento
console.log(multiplicar(numeros)); // NaN (array * undefined * undefined)

// Com spread - expande array em argumentos individuais
console.log(multiplicar(...numeros)); // 24 (2 * 3 * 4)

// Misturando parâmetros normais e spread
function criarMensagem(prefixo, ...palavras) {
    return `${prefixo}: ${palavras.join(" ")}`;
}

const palavrasArray = ["JavaScript", "é", "incrível"];
console.log(criarMensagem("Mensagem", ...palavrasArray)); // "Mensagem: JavaScript é incrível"
```

## Padrões Avançados

### Overloading Simulado
```javascript
function processar(...args) {
    if (args.length === 1 && typeof args[0] === 'string') {
        // Processar string
        return `Processando texto: ${args[0]}`;
    } else if (args.length === 2 && typeof args[0] === 'number') {
        // Processar dois números
        return `Soma: ${args[0] + args[1]}`;
    } else if (args.length === 1 && Array.isArray(args[0])) {
        // Processar array
        return `Array com ${args[0].length} elementos`;
    } else {
        return `Chamada não reconhecida`;
    }
}

console.log(processar("Olá"));         // "Processando texto: Olá"
console.log(processar(5, 3));          // "Soma: 8"
console.log(processar([1, 2, 3, 4])); // "Array com 4 elementos"
console.log(processar());              // "Chamada não reconhecida"
```

### Currying com Parâmetros
```javascript
// Currying manual
function multiplicarCurrying(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}

// Versão arrow
const multiplicarArrow = a => b => c => a * b * c;

// Uso
const multiplicarPor2 = multiplicarCurrying(2);
const multiplicarPor2e3 = multiplicarPor2(3);
console.log(multiplicarPor2e3(4)); // 24

// Currying automático
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    };
}

// Aplicação
const somar3Numeros = (a, b, c) => a + b + c;
const somarCurried = curry(somar3Numeros);

console.log(somarCurried(1)(2)(3)); // 6
console.log(somarCurried(1, 2)(3)); // 6
console.log(somarCurried(1)(2, 3)); // 6
```

### Partial Application
```javascript
function aplicacaoParcial(fn, ...argsFixos) {
    return function(...novosArgs) {
        return fn(...argsFixos, ...novosArgs);
    };
}

function criarURL(protocolo, dominio, caminho, query) {
    let url = `${protocolo}://${dominio}${caminho}`;
    if (query) {
        url += `?${query}`;
    }
    return url;
}

// Criar funções especializadas
const criarURLHTTPS = aplicacaoParcial(criarURL, "https");
const criarURLAPI = aplicacaoParcial(criarURL, "https", "api.exemplo.com");

console.log(criarURLHTTPS("meusite.com", "/pagina", "id=123"));
console.log(criarURLAPI("/users", "limit=10"));
```

## Validação e Tratamento de Parâmetros

### Validação Básica
```javascript
function dividir(a, b) {
    // Verificar tipos
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Ambos argumentos devem ser números');
    }
    
    // Verificar valores especiais
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Argumentos não podem ser NaN');
    }
    
    if (b === 0) {
        throw new Error('Divisão por zero não é permitida');
    }
    
    return a / b;
}
```

### Validação com Schema
```javascript
function validarParametros(schema, params) {
    for (let [nome, regras] of Object.entries(schema)) {
        const valor = params[nome];
        
        if (regras.obrigatorio && (valor === undefined || valor === null)) {
            throw new Error(`Parâmetro '${nome}' é obrigatório`);
        }
        
        if (valor !== undefined && regras.tipo && typeof valor !== regras.tipo) {
            throw new Error(`Parâmetro '${nome}' deve ser do tipo ${regras.tipo}`);
        }
        
        if (regras.min !== undefined && valor < regras.min) {
            throw new Error(`Parâmetro '${nome}' deve ser maior ou igual a ${regras.min}`);
        }
        
        if (regras.max !== undefined && valor > regras.max) {
            throw new Error(`Parâmetro '${nome}' deve ser menor ou igual a ${regras.max}`);
        }
    }
}

function criarProduto({nome, preco, categoria}) {
    const schema = {
        nome: { obrigatorio: true, tipo: 'string' },
        preco: { obrigatorio: true, tipo: 'number', min: 0 },
        categoria: { obrigatorio: true, tipo: 'string' }
    };
    
    validarParametros(schema, {nome, preco, categoria});
    
    return {
        id: Date.now(),
        nome,
        preco,
        categoria,
        criadoEm: new Date()
    };
}

// Uso
try {
    console.log(criarProduto({
        nome: "Notebook",
        preco: 2500,
        categoria: "Eletrônicos"
    }));
} catch (error) {
    console.error("Erro:", error.message);
}
```

## Performance e Otimização

### Evitar Modificação de arguments
```javascript
// ❌ Ruim - modificar arguments afeta performance
function ruim() {
    arguments[0] = "modificado"; // evite isso
    return Array.from(arguments);
}

// ✅ Bom - usar rest parameters
function bom(...args) {
    args[0] = "modificado"; // OK, é um array normal
    return args;
}
```

### Cache de Parâmetros Custosos
```javascript
function operacaoCustosa(dados, configuracao = {}) {
    // Cache configuração processada
    if (!operacaoCustosa._configCache) {
        operacaoCustosa._configCache = new Map();
    }
    
    const configKey = JSON.stringify(configuracao);
    let configProcessada = operacaoCustosa._configCache.get(configKey);
    
    if (!configProcessada) {
        configProcessada = processarConfiguracao(configuracao);
        operacaoCustosa._configCache.set(configKey, configProcessada);
    }
    
    return processar(dados, configProcessada);
}

function processarConfiguracao(config) {
    // Simula processamento custoso
    console.log("Processando configuração...");
    return { ...config, processada: true };
}

function processar(dados, config) {
    return `Processados ${dados.length} itens com configuração ${config.processada}`;
}
```

## Boas Práticas

### 1. Ordem dos Parâmetros
```javascript
// ✅ Parâmetros obrigatórios primeiro, opcionais depois
function criarPessoa(nome, idade, email = null, ativo = true) {
    return { nome, idade, email, ativo };
}

// ✅ Para muitos parâmetros, use objeto
function criarContrato({
    cliente,
    servico,
    valor,
    dataInicio,
    prazo = 30,
    renovacaoAutomatica = false,
    descricao = ""
}) {
    return {
        id: gerarId(),
        cliente,
        servico,
        valor,
        dataInicio,
        prazo,
        renovacaoAutomatica,
        descricao
    };
}
```

### 2. Validação Consistente
```javascript
function processarPedido(pedido) {
    // Validações no início da função
    if (!pedido) {
        throw new Error('Pedido é obrigatório');
    }
    
    if (!pedido.itens || pedido.itens.length === 0) {
        throw new Error('Pedido deve ter pelo menos um item');
    }
    
    // Restante da lógica
    return calcularTotal(pedido);
}
```

### 3. Documentação Clara
```javascript
/**
 * Calcula o valor final de um empréstimo
 * @param {number} principal - Valor principal do empréstimo
 * @param {number} taxa - Taxa de juros anual (decimal, ex: 0.05 para 5%)
 * @param {number} tempo - Tempo em anos
 * @param {string} [tipo='simples'] - Tipo de juros: 'simples' ou 'composto'
 * @returns {number} Valor final do empréstimo
 */
function calcularEmprestimo(principal, taxa, tempo, tipo = 'simples') {
    if (tipo === 'simples') {
        return principal * (1 + taxa * tempo);
    } else if (tipo === 'composto') {
        return principal * Math.pow(1 + taxa, tempo);
    } else {
        throw new Error('Tipo deve ser "simples" ou "composto"');
    }
}
```

### 4. Evitar Muitos Parâmetros
```javascript
// ❌ Muitos parâmetros - difícil de lembrar ordem
function criarUsuario(nome, sobrenome, email, idade, cidade, estado, cep, telefone, ativo, admin) {
    // ...
}

// ✅ Usar objeto para organizar
function criarUsuario({
    pessoal: { nome, sobrenome, idade },
    contato: { email, telefone },
    endereco: { cidade, estado, cep },
    permissoes: { ativo = true, admin = false } = {}
}) {
    // ...
}
```

## Resumo

**Tipos de parâmetros:**
- **Simples**: Para poucos valores obrigatórios
- **Padrão**: Para valores opcionais com fallback
- **Rest**: Para número variável de argumentos
- **Destructuring**: Para organizar muitos parâmetros

**Boas práticas:**
1. **Ordem lógica**: Obrigatórios primeiro, opcionais depois
2. **Validação**: Sempre valide parâmetros críticos
3. **Documentação**: JSDoc para funções complexas
4. **Objetos**: Para muitos parâmetros relacionados
5. **Consistência**: Padrões similares em funções similares

## Exemplos Práticos

Consulte o arquivo `exemplos.js` nesta pasta para ver demonstrações práticas de todos os tipos de parâmetros.
