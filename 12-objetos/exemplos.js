
// Exemplos de Objetos em JavaScript

console.log("=== CRIAÇÃO DE OBJETOS ===");

// Literal de objeto (forma mais comum)
const pessoa = {
    nome: "João Silva",
    idade: 30,
    email: "joao@email.com",
    ativo: true
};

console.log("Objeto pessoa:", pessoa);

// Objeto vazio
const objetoVazio = {};
console.log("Objeto vazio:", objetoVazio);

// Objeto com diferentes tipos de valores
const produto = {
    id: 1,
    nome: "Notebook",
    preco: 2500.99,
    disponivel: true,
    categorias: ["eletrônicos", "informática"],
    especificacoes: {
        marca: "Dell",
        modelo: "Inspiron",
        cor: "Prata"
    }
};

console.log("Produto:", produto);

console.log("\n=== ACESSANDO PROPRIEDADES ===");

// Notação de ponto
console.log("Nome da pessoa:", pessoa.nome);
console.log("Idade:", pessoa.idade);

// Notação de colchetes
console.log("Email:", pessoa["email"]);
console.log("Status ativo:", pessoa["ativo"]);

// Acessando propriedades aninhadas
console.log("Marca do produto:", produto.especificacoes.marca);
console.log("Primeira categoria:", produto.categorias[0]);

// Propriedade que não existe
console.log("Propriedade inexistente:", pessoa.telefone); // undefined

console.log("\n=== ADICIONANDO E MODIFICANDO PROPRIEDADES ===");

// Adicionar nova propriedade
pessoa.telefone = "(11) 99999-9999";
pessoa["cidade"] = "São Paulo";

console.log("Pessoa com novas propriedades:", pessoa);

// Modificar propriedade existente
pessoa.idade = 31;
produto.preco = 2300.00;

console.log("Idade atualizada:", pessoa.idade);
console.log("Preço atualizado:", produto.preco);

// Propriedades computadas
const chave = "profissao";
pessoa[chave] = "Desenvolvedor";

console.log("Profissão adicionada:", pessoa.profissao);

console.log("\n=== REMOVENDO PROPRIEDADES ===");

// Delete operator
delete pessoa.email;
console.log("Pessoa após remover email:", pessoa);

// Verificar se propriedade existe
console.log("Tem email?", "email" in pessoa); // false
console.log("Tem nome?", "nome" in pessoa); // true

console.log("\n=== MÉTODOS EM OBJETOS ===");

const calculadora = {
    marca: "Casio",
    modelo: "FX-991",
    
    // Método tradicional
    somar: function(a, b) {
        return a + b;
    },
    
    // Método simplificado (ES6+)
    subtrair(a, b) {
        return a - b;
    },
    
    // Arrow function como método
    multiplicar: (a, b) => a * b,
    
    // Método que usa 'this'
    apresentar: function() {
        return `Calculadora ${this.marca} ${this.modelo}`;
    },
    
    // Arrow function NÃO tem 'this' próprio
    apresentarArrow: () => {
        // 'this' aqui se refere ao contexto global, não ao objeto
        return `Arrow function não acessa this do objeto`;
    }
};

console.log("Soma:", calculadora.somar(5, 3));
console.log("Subtração:", calculadora.subtrair(10, 4));
console.log("Multiplicação:", calculadora.multiplicar(6, 7));
console.log("Apresentação:", calculadora.apresentar());
console.log("Arrow function:", calculadora.apresentarArrow());

console.log("\n=== THIS CONTEXT ===");

const usuario = {
    nome: "Maria",
    idade: 25,
    
    // Método com 'this'
    saudar: function() {
        return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos`;
    },
    
    // Método aninhado com problema de 'this'
    configurar: function() {
        console.log("This no método principal:", this.nome);
        
        // Função tradicional dentro do método
        function funcaoInterna() {
            console.log("This na função interna:", this.nome); // undefined!
        }
        funcaoInterna();
        
        // Arrow function mantém o 'this' do contexto pai
        const arrowInterna = () => {
            console.log("This na arrow function:", this.nome); // Funciona!
        };
        arrowInterna();
    }
};

console.log(usuario.saudar());
usuario.configurar();

console.log("\n=== OBJECT.KEYS, VALUES E ENTRIES ===");

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Branco"
};

// Object.keys - array de chaves
const chaves = Object.keys(carro);
console.log("Chaves:", chaves);

// Object.values - array de valores
const valores = Object.values(carro);
console.log("Valores:", valores);

// Object.entries - array de pares [chave, valor]
const entradas = Object.entries(carro);
console.log("Entradas:", entradas);

// Iterando com Object.entries
console.log("Iterando sobre o carro:");
Object.entries(carro).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

console.log("\n=== OBJECT.ASSIGN ===");

const dados1 = { nome: "Pedro", idade: 28 };
const dados2 = { email: "pedro@email.com", cidade: "Rio de Janeiro" };
const dados3 = { idade: 29, telefone: "(21) 88888-8888" }; // idade será sobrescrita

// Object.assign - copia propriedades (shallow copy)
const dadosCompletos = Object.assign({}, dados1, dados2, dados3);
console.log("Dados mesclados:", dadosCompletos);

// Spread operator (alternativa mais moderna)
const dadosSpread = { ...dados1, ...dados2, ...dados3 };
console.log("Com spread operator:", dadosSpread);

console.log("\n=== OBJECT.FREEZE E OBJECT.SEAL ===");

const objetoMutavel = { valor: 10, nome: "teste" };

// Object.freeze - torna imutável
const objetoCongelado = Object.freeze({ ...objetoMutavel });

try {
    objetoCongelado.valor = 20; // Não funciona em strict mode
    objetoCongelado.novaPropriedade = "nova"; // Não funciona
    console.log("Objeto congelado:", objetoCongelado); // Permanece igual
} catch (error) {
    console.log("Erro ao modificar objeto congelado:", error.message);
}

// Object.seal - permite modificar valores, mas não estrutura
const objetoSelado = Object.seal({ valor: 30, nome: "selado" });

objetoSelado.valor = 40; // Funciona
objetoSelado.novaPropriedade = "nova"; // Não funciona
console.log("Objeto selado:", objetoSelado);

console.log("\n=== VERIFICAÇÕES DE OBJETO ===");

const teste = { a: 1, b: 2, c: 3 };

// Verificar se é objeto
console.log("É objeto:", typeof teste === "object" && teste !== null);

// Verificar se propriedade existe
console.log("Tem propriedade 'a':", "a" in teste);
console.log("Tem propriedade 'd':", "d" in teste);

// hasOwnProperty (verifica apenas propriedades próprias)
console.log("hasOwnProperty 'a':", teste.hasOwnProperty("a"));

// Object.hasOwn (ES2022 - alternativa mais segura)
console.log("Object.hasOwn 'a':", Object.hasOwn(teste, "a"));

// Verificar se objeto está vazio
const objetoVazio2 = {};
console.log("Objeto vazio?", Object.keys(objetoVazio2).length === 0);

console.log("\n=== GETTERS E SETTERS ===");

const temperatura = {
    _celsius: 0,
    
    // Getter
    get fahrenheit() {
        return (this._celsius * 9/5) + 32;
    },
    
    // Setter
    set fahrenheit(valor) {
        this._celsius = (valor - 32) * 5/9;
    },
    
    get celsius() {
        return this._celsius;
    },
    
    set celsius(valor) {
        this._celsius = valor;
    }
};

temperatura.celsius = 25;
console.log("25°C em Fahrenheit:", temperatura.fahrenheit);

temperatura.fahrenheit = 68;
console.log("68°F em Celsius:", temperatura.celsius);

console.log("\n=== OBJECT.CREATE ===");

// Criando objeto com protótipo específico
const veiculo = {
    tipo: "veículo genérico",
    acelerar: function() {
        return `${this.tipo} está acelerando`;
    }
};

// Criar objeto baseado no protótipo
const moto = Object.create(veiculo);
moto.tipo = "motocicleta";
moto.cilindradas = 600;

console.log("Moto:", moto.acelerar());
console.log("Cilindradas:", moto.cilindradas);

console.log("\n=== DESTRUCTURING DE OBJETOS ===");

const funcionario = {
    nome: "Ana Silva",
    cargo: "Desenvolvedora",
    salario: 8000,
    endereco: {
        cidade: "São Paulo",
        estado: "SP"
    }
};

// Destructuring básico
const { nome, cargo } = funcionario;
console.log("Nome:", nome);
console.log("Cargo:", cargo);

// Destructuring com renomeação
const { nome: nomeFuncionario, salario: remuneracao } = funcionario;
console.log("Nome do funcionário:", nomeFuncionario);
console.log("Remuneração:", remuneracao);

// Destructuring aninhado
const { endereco: { cidade, estado } } = funcionario;
console.log("Localização:", cidade, estado);

// Com valores padrão
const { bonus = 1000, departamento = "TI" } = funcionario;
console.log("Bonus:", bonus);
console.log("Departamento:", departamento);

console.log("\n=== CLONAGEM DE OBJETOS ===");

const original = {
    id: 1,
    dados: {
        nome: "Teste",
        valores: [1, 2, 3]
    }
};

// Shallow copy (cópia rasa)
const shallowCopy = { ...original };
shallowCopy.dados.nome = "Modificado"; // Afeta o original também!

console.log("Original após shallow copy:", original.dados.nome); // "Modificado"

// Deep copy (cópia profunda) - método simples para objetos JSON
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.dados.nome = "Deep Copy";

console.log("Original após deep copy:", original.dados.nome); // "Modificado" (não mudou)
console.log("Deep copy:", deepCopy.dados.nome); // "Deep Copy"

console.log("\n=== FACTORY FUNCTIONS ===");

// Função que cria objetos
function criarPessoa(nome, idade, email) {
    return {
        nome,
        idade, 
        email,
        ativo: true,
        criadoEm: new Date(),
        
        apresentar() {
            return `${this.nome}, ${this.idade} anos, ${this.email}`;
        },
        
        desativar() {
            this.ativo = false;
            return this;
        }
    };
}

const pessoa1 = criarPessoa("Carlos", 35, "carlos@email.com");
const pessoa2 = criarPessoa("Lucia", 28, "lucia@email.com");

console.log("Pessoa 1:", pessoa1.apresentar());
console.log("Pessoa 2:", pessoa2.apresentar());

pessoa1.desativar();
console.log("Pessoa 1 ativa?", pessoa1.ativo);

console.log("\n=== COMPARAÇÃO DE OBJETOS ===");

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
const obj3 = obj1;

console.log("obj1 === obj2:", obj1 === obj2); // false (referências diferentes)
console.log("obj1 === obj3:", obj1 === obj3); // true (mesma referência)

// Função para comparação profunda (simplificada)
function objetosIguais(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log("Objetos são iguais:", objetosIguais(obj1, obj2)); // true

console.log("\n=== OPERAÇÕES AVANÇADAS ===");

const vendas = [
    { produto: "Notebook", valor: 2500, vendedor: "João" },
    { produto: "Mouse", valor: 50, vendedor: "Maria" },
    { produto: "Teclado", valor: 150, vendedor: "João" },
    { produto: "Monitor", valor: 800, vendedor: "Pedro" }
];

// Agrupar vendas por vendedor usando reduce
const vendasPorVendedor = vendas.reduce((acc, venda) => {
    if (!acc[venda.vendedor]) {
        acc[venda.vendedor] = [];
    }
    acc[venda.vendedor].push(venda);
    return acc;
}, {});

console.log("Vendas agrupadas por vendedor:");
Object.entries(vendasPorVendedor).forEach(([vendedor, vendas]) => {
    const total = vendas.reduce((sum, venda) => sum + venda.valor, 0);
    console.log(`${vendedor}: ${vendas.length} vendas, total R$${total}`);
});

// Criar índice de objetos
const indiceVendas = vendas.reduce((acc, venda, index) => {
    acc[venda.produto] = { ...venda, index };
    return acc;
}, {});

console.log("Índice de vendas por produto:", indiceVendas);
