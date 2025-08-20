
# 🏗️ Objetos em JavaScript

## O que são Objetos?

Objetos são estruturas de dados fundamentais em JavaScript que permitem armazenar coleções de pares chave-valor. São a base da programação orientada a objetos e permitem modelar entidades do mundo real de forma organizada e eficiente.

## Características dos Objetos

### 1. Estrutura Chave-Valor
```javascript
const pessoa = {
    nome: "Ana Silva",      // string
    idade: 28,              // number
    ativa: true,            // boolean
    endereco: null,         // null
    hobbies: ["leitura", "cinema"], // array
    contato: {              // objeto aninhado
        email: "ana@email.com",
        telefone: "(11) 99999-9999"
    }
};
```

### 2. Referência vs Primitivos
```javascript
// Objetos são passados por referência
const original = { nome: "João" };
const referencia = original;
referencia.nome = "Pedro";
console.log(original.nome); // "Pedro" - Original também mudou!

// Primitivos são copiados por valor
let num1 = 10;
let num2 = num1;
num2 = 20;
console.log(num1); // 10 - Não mudou
```

### 3. Mutabilidade
```javascript
const obj = { valor: 10 };
obj.valor = 20; // ✅ Permitido - mudança de propriedade
obj.nova = "teste"; // ✅ Permitido - nova propriedade

// obj = {}; // ❌ Erro - reatribuição não permitida com const
```

## Formas de Criar Objetos

### 1. Object Literal (Mais Comum)
```javascript
const produto = {
    nome: "Notebook",
    preco: 2500.00,
    categoria: "Eletrônicos",
    especificacoes: {
        ram: "8GB",
        processador: "Intel i5",
        armazenamento: "256GB SSD"
    }
};
```

### 2. Construtor Object
```javascript
const pessoa = new Object();
pessoa.nome = "Maria";
pessoa.idade = 35;
pessoa.profissao = "Engenheira";

// Ou com propriedades iniciais
const config = new Object({
    tema: "escuro",
    linguagem: "pt-BR",
    notificacoes: true
});
```

### 3. Object.create()
```javascript
// Criar objeto com protótipo específico
const prototipoPessoa = {
    cumprimentar() {
        return `Olá, eu sou ${this.nome}!`;
    }
};

const joao = Object.create(prototipoPessoa);
joao.nome = "João";
console.log(joao.cumprimentar()); // "Olá, eu sou João!"

// Criar objeto sem protótipo (mais limpo)
const objetoLimpo = Object.create(null);
objetoLimpo.propriedade = "valor";
console.log(objetoLimpo.toString); // undefined - não herda de Object
```

### 4. Constructor Functions
```javascript
function Pessoa(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
    
    this.apresentar = function() {
        return `Sou ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.profissao}`;
    };
}

const pessoa1 = new Pessoa("Carlos", 30, "Developer");
const pessoa2 = new Pessoa("Ana", 25, "Designer");

console.log(pessoa1.apresentar());
```

### 5. Classes (ES6+)
```javascript
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    
    acelerar() {
        return `${this.marca} ${this.modelo} está acelerando...`;
    }
    
    static compararAno(veiculo1, veiculo2) {
        return veiculo1.ano - veiculo2.ano;
    }
}

const carro = new Veiculo("Toyota", "Corolla", 2023);
console.log(carro.acelerar());
```

## Acessando Propriedades

### 1. Notação de Ponto
```javascript
const usuario = {
    nome: "Pedro",
    email: "pedro@email.com",
    configuracoes: {
        tema: "escuro",
        idioma: "pt-BR"
    }
};

console.log(usuario.nome); // "Pedro"
console.log(usuario.configuracoes.tema); // "escuro"

// Acessar propriedades aninhadas com segurança
console.log(usuario.configuracoes?.notificacoes?.email); // undefined (sem erro)
```

### 2. Notação de Colchetes
```javascript
const obj = {
    "nome completo": "Ana Silva",
    "data-nascimento": "1995-05-15",
    123: "propriedade numérica",
    true: "propriedade boolean"
};

// Necessário usar colchetes para propriedades com espaços, hífens, etc.
console.log(obj["nome completo"]);
console.log(obj["data-nascimento"]);
console.log(obj[123]);
console.log(obj[true]);

// Acesso dinâmico
const propriedade = "nome completo";
console.log(obj[propriedade]);

// Propriedades computadas
const prefixo = "usuario";
const dados = {
    [prefixo + "Nome"]: "João",
    [prefixo + "Email"]: "joao@email.com",
    [`${prefixo}Idade`]: 30
};
console.log(dados.usuarioNome); // "João"
```

### 3. Desestruturação
```javascript
const pessoa = {
    nome: "Bruno",
    idade: 28,
    endereco: {
        cidade: "São Paulo",
        estado: "SP",
        cep: "01234-567"
    },
    hobbies: ["futebol", "leitura"]
};

// Desestruturação simples
const { nome, idade } = pessoa;
console.log(nome, idade); // "Bruno" 28

// Renomear variáveis
const { nome: nomeCompleto, idade: anos } = pessoa;
console.log(nomeCompleto, anos); // "Bruno" 28

// Valores padrão
const { telefone = "Não informado" } = pessoa;
console.log(telefone); // "Não informado"

// Desestruturação aninhada
const { endereco: { cidade, estado } } = pessoa;
console.log(cidade, estado); // "São Paulo" "SP"

// Rest operator
const { nome: n, ...outrosAtributos } = pessoa;
console.log(outrosAtributos); // Objeto sem a propriedade 'nome'
```

## Modificando Objetos

### 1. Adicionar/Modificar Propriedades
```javascript
const produto = {
    nome: "Smartphone",
    preco: 800
};

// Adicionar propriedade
produto.marca = "Samsung";
produto["cor"] = "Preto";

// Modificar existente
produto.preco = 750;

// Adicionar método
produto.desconto = function(percentual) {
    return this.preco * (1 - percentual / 100);
};

console.log(produto.desconto(10)); // 675
```

### 2. Propriedades Computadas
```javascript
function criarObjeto(chaves, valores) {
    const obj = {};
    
    for (let i = 0; i < chaves.length; i++) {
        obj[chaves[i]] = valores[i];
    }
    
    return obj;
}

const resultado = criarObjeto(['nome', 'idade', 'cidade'], ['Ana', 30, 'Rio']);
console.log(resultado); // { nome: 'Ana', idade: 30, cidade: 'Rio' }

// Com template literals
const tipo = "usuario";
const id = 123;

const objeto = {
    [`${tipo}_${id}`]: "dados do usuário",
    [`${tipo}_ativo`]: true
};
console.log(objeto); // { usuario_123: "dados do usuário", usuario_ativo: true }
```

### 3. Operações de Merge
```javascript
const base = { nome: "João", idade: 25 };
const extra = { profissao: "Developer", idade: 26 };

// Object.assign() (modifica o primeiro objeto)
const resultado1 = Object.assign(base, extra);
console.log(base); // { nome: "João", idade: 26, profissao: "Developer" } - modificado!

// Spread operator (imutável)
const base2 = { nome: "Maria", idade: 28 };
const resultado2 = { ...base2, ...extra };
console.log(base2); // { nome: "Maria", idade: 28 } - não modificado
console.log(resultado2); // { nome: "Maria", idade: 26, profissao: "Developer" }

// Merge profundo personalizado
function mergeRecursivo(obj1, obj2) {
    const resultado = { ...obj1 };
    
    for (const [chave, valor] of Object.entries(obj2)) {
        if (valor && typeof valor === 'object' && !Array.isArray(valor)) {
            resultado[chave] = mergeRecursivo(resultado[chave] || {}, valor);
        } else {
            resultado[chave] = valor;
        }
    }
    
    return resultado;
}
```

## Métodos de Objetos

### 1. Object.keys(), Object.values(), Object.entries()
```javascript
const pessoa = {
    nome: "Carlos",
    idade: 35,
    profissao: "Arquiteto"
};

// Obter chaves
const chaves = Object.keys(pessoa);
console.log(chaves); // ["nome", "idade", "profissao"]

// Obter valores
const valores = Object.values(pessoa);
console.log(valores); // ["Carlos", 35, "Arquiteto"]

// Obter pares chave-valor
const entradas = Object.entries(pessoa);
console.log(entradas); // [["nome", "Carlos"], ["idade", 35], ["profissao", "Arquiteto"]]

// Uso prático - contar propriedades por tipo
function analisarTipos(obj) {
    const tipos = {};
    
    Object.entries(obj).forEach(([chave, valor]) => {
        const tipo = typeof valor;
        tipos[tipo] = (tipos[tipo] || 0) + 1;
    });
    
    return tipos;
}

console.log(analisarTipos(pessoa)); // { string: 2, number: 1 }
```

### 2. Object.hasOwnProperty() e in
```javascript
const obj = { nome: "Ana", idade: 30 };

// Verificar propriedade própria
console.log(obj.hasOwnProperty('nome')); // true
console.log(obj.hasOwnProperty('toString')); // false (herdada)

// Operador in (inclui propriedades herdadas)
console.log('nome' in obj); // true
console.log('toString' in obj); // true (herdada de Object.prototype)

// Método moderno: Object.prototype.hasOwnProperty.call()
console.log(Object.prototype.hasOwnProperty.call(obj, 'nome')); // true

// Ou usando Object.hasOwn() (ES2022)
if (Object.hasOwn) {
    console.log(Object.hasOwn(obj, 'nome')); // true
}
```

### 3. Object.freeze(), Object.seal(), Object.preventExtensions()
```javascript
const obj = { nome: "Pedro", idade: 25 };

// Object.freeze() - totalmente imutável
const frozen = Object.freeze({ ...obj });
// frozen.nome = "João"; // Falha silenciosamente (strict mode: erro)
// frozen.nova = "teste"; // Falha silenciosamente

// Object.seal() - não pode adicionar/remover, mas pode modificar
const sealed = Object.seal({ ...obj });
sealed.nome = "João"; // ✅ Permitido
// sealed.nova = "teste"; // ❌ Falha

// Object.preventExtensions() - não pode adicionar, mas pode modificar/remover
const restricted = Object.preventExtensions({ ...obj });
restricted.nome = "João"; // ✅ Permitido
delete restricted.idade; // ✅ Permitido
// restricted.nova = "teste"; // ❌ Falha

// Verificar estados
console.log(Object.isFrozen(frozen)); // true
console.log(Object.isSealed(sealed)); // true
console.log(Object.isExtensible(restricted)); // false
```

## Objetos Avançados

### 1. Getters e Setters
```javascript
const pessoa = {
    _nome: "",
    _idade: 0,
    
    get nome() {
        return this._nome.toUpperCase();
    },
    
    set nome(valor) {
        if (typeof valor !== 'string' || valor.length === 0) {
            throw new Error('Nome deve ser uma string não vazia');
        }
        this._nome = valor;
    },
    
    get idade() {
        return this._idade;
    },
    
    set idade(valor) {
        if (typeof valor !== 'number' || valor < 0 || valor > 120) {
            throw new Error('Idade deve ser um número entre 0 e 120');
        }
        this._idade = valor;
    },
    
    get isAdulto() {
        return this._idade >= 18;
    }
};

pessoa.nome = "ana silva";
pessoa.idade = 25;
console.log(pessoa.nome); // "ANA SILVA"
console.log(pessoa.isAdulto); // true
```

### 2. Object Descriptors
```javascript
const obj = {};

// Definir propriedade com descritor
Object.defineProperty(obj, 'nome', {
    value: 'João',
    writable: false,    // Não pode ser modificada
    enumerable: true,   // Aparece em loops
    configurable: false // Não pode ser redefinida ou deletada
});

// obj.nome = "Pedro"; // Falha (writable: false)
// delete obj.nome; // Falha (configurable: false)

// Definir múltiplas propriedades
Object.defineProperties(obj, {
    idade: {
        value: 30,
        writable: true,
        enumerable: true,
        configurable: true
    },
    email: {
        get() {
            return this._email || 'não definido';
        },
        set(valor) {
            if (valor.includes('@')) {
                this._email = valor;
            } else {
                throw new Error('Email inválido');
            }
        },
        enumerable: true,
        configurable: true
    }
});

// Verificar descriptor
const descriptor = Object.getOwnPropertyDescriptor(obj, 'nome');
console.log(descriptor);
// { value: 'João', writable: false, enumerable: true, configurable: false }
```

### 3. Proxy - Interceptação de Operações
```javascript
const usuario = { nome: "Ana", idade: 28 };

const usuarioComLog = new Proxy(usuario, {
    get(target, propriedade) {
        console.log(`Acessando propriedade: ${propriedade}`);
        return target[propriedade];
    },
    
    set(target, propriedade, valor) {
        console.log(`Definindo ${propriedade} = ${valor}`);
        
        // Validações personalizadas
        if (propriedade === 'idade' && (valor < 0 || valor > 120)) {
            throw new Error('Idade inválida');
        }
        
        target[propriedade] = valor;
        return true;
    },
    
    has(target, propriedade) {
        console.log(`Verificando existência de: ${propriedade}`);
        return propriedade in target;
    },
    
    deleteProperty(target, propriedade) {
        console.log(`Deletando propriedade: ${propriedade}`);
        delete target[propriedade];
        return true;
    }
});

usuarioComLog.nome; // Log: "Acessando propriedade: nome"
usuarioComLog.idade = 30; // Log: "Definindo idade = 30"
'nome' in usuarioComLog; // Log: "Verificando existência de: nome"
```

## Padrões de Uso Comuns

### 1. Factory Functions
```javascript
function criarPessoa(nome, idade, profissao) {
    return {
        nome,
        idade,
        profissao,
        
        apresentar() {
            return `Olá, sou ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.profissao}`;
        },
        
        fazerAniversario() {
            this.idade++;
            console.log(`Parabéns! Agora ${this.nome} tem ${this.idade} anos`);
        },
        
        trocarProfissao(novaProfissao) {
            const profissaoAnterior = this.profissao;
            this.profissao = novaProfissao;
            console.log(`${this.nome} mudou de ${profissaoAnterior} para ${novaProfissao}`);
        }
    };
}

const pessoa1 = criarPessoa("Bruno", 30, "Designer");
const pessoa2 = criarPessoa("Clara", 26, "Desenvolvedora");
```

### 2. Namespace Objects
```javascript
const MathUtils = {
    constantes: {
        PI: Math.PI,
        E: Math.E,
        GOLDEN_RATIO: 1.618033988749895
    },
    
    geometria: {
        areaCirculo: (raio) => MathUtils.constantes.PI * raio * raio,
        areaRetangulo: (largura, altura) => largura * altura,
        areaTriangulo: (base, altura) => (base * altura) / 2
    },
    
    estatistica: {
        media: (numeros) => numeros.reduce((a, b) => a + b) / numeros.length,
        mediana: (numeros) => {
            const sorted = [...numeros].sort((a, b) => a - b);
            const meio = Math.floor(sorted.length / 2);
            return sorted.length % 2 === 0 
                ? (sorted[meio - 1] + sorted[meio]) / 2
                : sorted[meio];
        }
    }
};

console.log(MathUtils.geometria.areaCirculo(5));
console.log(MathUtils.estatistica.media([1, 2, 3, 4, 5]));
```

### 3. Configuration Objects
```javascript
function criarAPI(config = {}) {
    const configuracaoPadrao = {
        baseURL: 'https://api.exemplo.com',
        timeout: 5000,
        retries: 3,
        headers: {
            'Content-Type': 'application/json'
        },
        cache: true,
        debug: false
    };
    
    const configuracaoFinal = {
        ...configuracaoPadrao,
        ...config,
        headers: {
            ...configuracaoPadrao.headers,
            ...config.headers
        }
    };
    
    return {
        config: configuracaoFinal,
        
        get(endpoint) {
            if (this.config.debug) {
                console.log(`GET ${this.config.baseURL}${endpoint}`);
            }
            // Implementação da requisição...
        },
        
        post(endpoint, data) {
            if (this.config.debug) {
                console.log(`POST ${this.config.baseURL}${endpoint}`, data);
            }
            // Implementação da requisição...
        }
    };
}

const api = criarAPI({
    baseURL: 'https://minha-api.com',
    debug: true,
    headers: {
        'Authorization': 'Bearer token123'
    }
});
```

## Boas Práticas

### 1. Validação e Sanitização
```javascript
function criarUsuario(dados) {
    // Validar tipos
    if (typeof dados !== 'object' || dados === null) {
        throw new Error('Dados do usuário devem ser um objeto');
    }
    
    // Sanitizar entrada
    const dadosSanitizados = {
        nome: String(dados.nome || '').trim(),
        email: String(dados.email || '').toLowerCase().trim(),
        idade: Number(dados.idade) || 0
    };
    
    // Validar valores
    if (dadosSanitizados.nome.length === 0) {
        throw new Error('Nome é obrigatório');
    }
    
    if (!dadosSanitizados.email.includes('@')) {
        throw new Error('Email inválido');
    }
    
    return {
        ...dadosSanitizados,
        id: Math.random().toString(36).substr(2, 9),
        criadoEm: new Date(),
        ativo: true
    };
}
```

### 2. Imutabilidade
```javascript
// ✅ Funções que retornam novos objetos
function atualizarUsuario(usuario, atualizacoes) {
    return {
        ...usuario,
        ...atualizacoes,
        atualizadoEm: new Date()
    };
}

// ✅ Deep clone para objetos complexos
function clonarProfundo(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    
    if (Array.isArray(obj)) {
        return obj.map(item => clonarProfundo(item));
    }
    
    const clone = {};
    for (const [chave, valor] of Object.entries(obj)) {
        clone[chave] = clonarProfundo(valor);
    }
    
    return clone;
}
```

### 3. Performance
```javascript
// Cache de propriedades computadas
class UsuarioComCache {
    constructor(dados) {
        this._dados = dados;
        this._cache = new Map();
    }
    
    get nomeCompleto() {
        if (!this._cache.has('nomeCompleto')) {
            const nome = `${this._dados.nome} ${this._dados.sobrenome}`;
            this._cache.set('nomeCompleto', nome);
        }
        return this._cache.get('nomeCompleto');
    }
    
    limparCache() {
        this._cache.clear();
    }
    
    atualizarDados(novosDados) {
        this._dados = { ...this._dados, ...novosDados };
        this.limparCache(); // Invalidar cache
    }
}

// Object pooling para objetos temporários
class ObjectPool {
    constructor(createFn, resetFn) {
        this.createFn = createFn;
        this.resetFn = resetFn;
        this.pool = [];
    }
    
    acquire() {
        return this.pool.length > 0 ? this.pool.pop() : this.createFn();
    }
    
    release(obj) {
        this.resetFn(obj);
        this.pool.push(obj);
    }
}
```

## Próximos Passos

Após dominar objetos básicos, você pode explorar:
- Programação Orientada a Objetos (POO)
- Herança e protótipos
- Padrões de design (Observer, Factory, Singleton)
- Manipulação do DOM com objetos
- APIs assíncronas e Promises
- Frameworks que utilizam objetos extensivamente
