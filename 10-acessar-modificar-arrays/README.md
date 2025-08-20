
# 🔄 Acessar e Modificar Arrays

## Acessando Elementos de Arrays

### 1. Acesso por Índice
```javascript
const frutas = ["maçã", "banana", "laranja", "uva"];

// Acessar elementos específicos
console.log(frutas[0]); // "maçã" - primeiro elemento
console.log(frutas[2]); // "laranja" - terceiro elemento
console.log(frutas[frutas.length - 1]); // "uva" - último elemento

// Verificar se índice existe
if (frutas[10] !== undefined) {
    console.log(frutas[10]);
} else {
    console.log("Índice não existe"); // Será executado
}
```

### 2. Método at() - Acesso Moderno
```javascript
const numeros = [10, 20, 30, 40, 50];

// Índices positivos
console.log(numeros.at(0)); // 10
console.log(numeros.at(2)); // 30

// Índices negativos (conta do final)
console.log(numeros.at(-1)); // 50 (último)
console.log(numeros.at(-2)); // 40 (penúltimo)
console.log(numeros.at(-5)); // 10 (primeiro)

// Índice inexistente retorna undefined
console.log(numeros.at(10)); // undefined
```

### 3. Desestruturação de Arrays
```javascript
const cores = ["vermelho", "verde", "azul", "amarelo"];

// Desestruturação básica
const [primeira, segunda] = cores;
console.log(primeira); // "vermelho"
console.log(segunda);  // "verde"

// Pular elementos
const [, , terceira] = cores;
console.log(terceira); // "azul"

// Capturar resto dos elementos
const [cor1, ...outrasCores] = cores;
console.log(cor1); // "vermelho"
console.log(outrasCores); // ["verde", "azul", "amarelo"]

// Com valores padrão
const [a, b, c, d, e = "roxo"] = cores;
console.log(e); // "amarelo" (existe no array)

const [x, y, z, w, k = "roxo"] = ["a", "b", "c"];
console.log(k); // "roxo" (valor padrão)
```

## Modificando Elementos

### 1. Modificação Direta por Índice
```javascript
const animais = ["gato", "cachorro", "pássaro"];

// Modificar elemento existente
animais[1] = "hamster";
console.log(animais); // ["gato", "hamster", "pássaro"]

// Adicionar elemento em posição específica
animais[3] = "peixe";
console.log(animais); // ["gato", "hamster", "pássaro", "peixe"]

// Criar "buracos" no array
animais[10] = "cobra";
console.log(animais.length); // 11
console.log(animais[5]); // undefined
```

### 2. Modificação com Verificações
```javascript
function modificarElementoSeguro(array, indice, novoValor) {
    if (indice >= 0 && indice < array.length) {
        const valorAnterior = array[indice];
        array[indice] = novoValor;
        return {
            sucesso: true,
            valorAnterior,
            novoValor,
            indice
        };
    } else {
        return {
            sucesso: false,
            erro: "Índice inválido",
            indice
        };
    }
}

const numeros = [1, 2, 3, 4, 5];
const resultado = modificarElementoSeguro(numeros, 2, 99);
console.log(resultado); // { sucesso: true, valorAnterior: 3, novoValor: 99, indice: 2 }
```

## Métodos de Busca

### 1. indexOf() e lastIndexOf()
```javascript
const letras = ["a", "b", "c", "b", "d"];

console.log(letras.indexOf("b")); // 1 (primeira ocorrência)
console.log(letras.lastIndexOf("b")); // 3 (última ocorrência)
console.log(letras.indexOf("x")); // -1 (não encontrado)

// Com posição inicial
console.log(letras.indexOf("b", 2)); // 3 (busca a partir do índice 2)
```

### 2. includes() - Verificação de Existência
```javascript
const frutas = ["maçã", "banana", "laranja"];

console.log(frutas.includes("banana")); // true
console.log(frutas.includes("uva")); // false

// Case sensitive
console.log(frutas.includes("MAÇÃ")); // false

// Função auxiliar para busca case-insensitive
function incluiCaseInsensitive(array, valor) {
    return array.some(item => 
        typeof item === 'string' && 
        item.toLowerCase() === valor.toLowerCase()
    );
}

console.log(incluiCaseInsensitive(frutas, "MAÇÃ")); // true
```

### 3. find() e findIndex() - Busca com Condição
```javascript
const pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "Bruno", idade: 30 },
    { nome: "Carlos", idade: 35 }
];

// find() retorna o primeiro elemento que satisfaz a condição
const pessoaMaior30 = pessoas.find(pessoa => pessoa.idade > 30);
console.log(pessoaMaior30); // { nome: "Carlos", idade: 35 }

// findIndex() retorna o índice do primeiro elemento
const indiceMaior30 = pessoas.findIndex(pessoa => pessoa.idade > 30);
console.log(indiceMaior30); // 2

// findLast() e findLastIndex() (ES2023) - busca do final
const ultimaMaior25 = pessoas.findLast?.(pessoa => pessoa.idade > 25);
console.log(ultimaMaior25); // { nome: "Carlos", idade: 35 }
```

## Padrões de Acesso Avançados

### 1. Acesso Seguro com Optional Chaining
```javascript
const dados = [
    { usuario: { nome: "Ana", perfil: { tipo: "admin" } } },
    { usuario: { nome: "Bruno" } },
    null
];

// Acesso seguro sem erros
console.log(dados[0]?.usuario?.nome); // "Ana"
console.log(dados[1]?.usuario?.perfil?.tipo); // undefined
console.log(dados[2]?.usuario?.nome); // undefined
console.log(dados[10]?.usuario?.nome); // undefined
```

### 2. Proxy para Arrays - Acesso Personalizado
```javascript
function criarArraySeguro(arrayOriginal) {
    return new Proxy(arrayOriginal, {
        get(target, prop) {
            if (typeof prop === 'string' && !isNaN(prop)) {
                const index = Number(prop);
                if (index < 0 || index >= target.length) {
                    console.warn(`Acesso a índice inválido: ${index}`);
                    return undefined;
                }
            }
            return target[prop];
        },
        
        set(target, prop, value) {
            if (typeof prop === 'string' && !isNaN(prop)) {
                const index = Number(prop);
                if (index < 0) {
                    console.error(`Não é possível definir índice negativo: ${index}`);
                    return false;
                }
                if (index > target.length + 5) {
                    console.warn(`Criando array esparso. Índice: ${index}, Tamanho: ${target.length}`);
                }
            }
            target[prop] = value;
            return true;
        }
    });
}

const arraySeguro = criarArraySeguro([1, 2, 3]);
console.log(arraySeguro[10]); // Aviso sobre índice inválido
arraySeguro[-1] = "teste"; // Erro sobre índice negativo
```

## Técnicas de Modificação

### 1. Modificação em Lote
```javascript
const numeros = [1, 2, 3, 4, 5];

// Modificar múltiplos elementos
function modificarVarios(array, modificacoes) {
    modificacoes.forEach(({ indice, valor }) => {
        if (indice >= 0 && indice < array.length) {
            array[indice] = valor;
        }
    });
}

modificarVarios(numeros, [
    { indice: 0, valor: 10 },
    { indice: 2, valor: 30 },
    { indice: 4, valor: 50 }
]);

console.log(numeros); // [10, 2, 30, 4, 50]
```

### 2. Modificação Condicional
```javascript
const produtos = [
    { nome: "Notebook", preco: 2000, categoria: "eletrônicos" },
    { nome: "Camisa", preco: 50, categoria: "roupas" },
    { nome: "Smartphone", preco: 1000, categoria: "eletrônicos" }
];

// Aplicar desconto em categoria específica
function aplicarDesconto(produtos, categoria, percentual) {
    produtos.forEach(produto => {
        if (produto.categoria === categoria) {
            produto.precoOriginal = produto.preco;
            produto.preco = produto.preco * (1 - percentual / 100);
            produto.desconto = percentual;
        }
    });
}

aplicarDesconto(produtos, "eletrônicos", 10);
console.log(produtos);
```

### 3. Swapping (Troca) de Elementos
```javascript
const cores = ["vermelho", "verde", "azul", "amarelo"];

// Método tradicional
function trocarElementos(array, indice1, indice2) {
    if (indice1 >= 0 && indice1 < array.length && 
        indice2 >= 0 && indice2 < array.length) {
        const temp = array[indice1];
        array[indice1] = array[indice2];
        array[indice2] = temp;
    }
}

trocarElementos(cores, 0, 2);
console.log(cores); // ["azul", "verde", "vermelho", "amarelo"]

// Método moderno com desestruturação
function trocarModerno(array, i, j) {
    if (i >= 0 && i < array.length && j >= 0 && j < array.length) {
        [array[i], array[j]] = [array[j], array[i]];
    }
}
```

## Arrays Esparsos

### Entendendo Arrays com "Buracos"
```javascript
const esparso = [1, , , 4, , 6];
console.log(esparso.length); // 6
console.log(esparso[1]); // undefined
console.log(esparso[2]); // undefined

// Verificar se índice está realmente vazio
console.log(1 in esparso); // false - posição vazia
console.log(0 in esparso); // true - posição tem valor

// Iterar apenas pelos elementos existentes
for (let i in esparso) {
    console.log(`Índice ${i}: ${esparso[i]}`);
}
// Saída: Índice 0: 1, Índice 3: 4, Índice 5: 6
```

### Trabalhando com Arrays Esparsos
```javascript
function compactarArray(array) {
    const compactado = [];
    for (let i = 0; i < array.length; i++) {
        if (i in array) {
            compactado.push(array[i]);
        }
    }
    return compactado;
}

const original = [1, , 3, , 5];
const compactado = compactarArray(original);
console.log(compactado); // [1, 3, 5]

// Preencher buracos com valor padrão
function preencherBuracos(array, valorPadrao = null) {
    for (let i = 0; i < array.length; i++) {
        if (!(i in array)) {
            array[i] = valorPadrao;
        }
    }
    return array;
}
```

## Performance e Otimizações

### 1. Cache de Acessos Frequentes
```javascript
class ArrayComCache {
    constructor(dados) {
        this.dados = dados;
        this.cache = new Map();
    }
    
    get(indice) {
        if (this.cache.has(indice)) {
            return this.cache.get(indice);
        }
        
        const valor = this.dados[indice];
        this.cache.set(indice, valor);
        return valor;
    }
    
    set(indice, valor) {
        this.dados[indice] = valor;
        this.cache.delete(indice); // Invalidar cache
    }
    
    limparCache() {
        this.cache.clear();
    }
}
```

### 2. Batch Updates para Performance
```javascript
class ArrayOtimizado {
    constructor(dados = []) {
        this.dados = dados;
        this.mudancasPendentes = [];
        this.batchSize = 100;
    }
    
    setDeferred(indice, valor) {
        this.mudancasPendentes.push({ indice, valor });
        
        if (this.mudancasPendentes.length >= this.batchSize) {
            this.aplicarMudancas();
        }
    }
    
    aplicarMudancas() {
        this.mudancasPendentes.forEach(({ indice, valor }) => {
            this.dados[indice] = valor;
        });
        this.mudancasPendentes = [];
    }
    
    finalizarMudancas() {
        if (this.mudancasPendentes.length > 0) {
            this.aplicarMudancas();
        }
    }
}
```

## Boas Práticas

### 1. Validação de Índices
```javascript
function acessoSeguro(array, indice) {
    if (!Array.isArray(array)) {
        throw new Error('Primeiro argumento deve ser um array');
    }
    
    if (typeof indice !== 'number' || !Number.isInteger(indice)) {
        throw new Error('Índice deve ser um número inteiro');
    }
    
    if (indice < 0 || indice >= array.length) {
        return undefined; // ou throw new Error('Índice fora dos limites');
    }
    
    return array[indice];
}
```

### 2. Imutabilidade
```javascript
// ✅ Modificação imutável
function modificarImutavel(array, indice, novoValor) {
    return array.map((valor, i) => i === indice ? novoValor : valor);
}

// ✅ Para múltiplas modificações
function modificarMultiplosImutavel(array, modificacoes) {
    return array.map((valor, i) => {
        const modificacao = modificacoes.find(mod => mod.indice === i);
        return modificacao ? modificacao.valor : valor;
    });
}
```

### 3. Type Safety com TypeScript (conceitual)
```javascript
// Simulando tipagem em JavaScript puro
function criarArrayTipado(tipo) {
    return {
        dados: [],
        push(item) {
            if (typeof item !== tipo) {
                throw new Error(`Esperado ${tipo}, recebido ${typeof item}`);
            }
            this.dados.push(item);
        },
        get(indice) {
            return this.dados[indice];
        },
        set(indice, item) {
            if (typeof item !== tipo) {
                throw new Error(`Esperado ${tipo}, recebido ${typeof item}`);
            }
            this.dados[indice] = item;
        }
    };
}

const stringArray = criarArrayTipado('string');
stringArray.push("hello"); // OK
// stringArray.push(123); // Erro
```
