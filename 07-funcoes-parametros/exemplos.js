
// Exemplos de Funções com Parâmetros

console.log("=== PARÂMETROS SIMPLES ===");

function saudar(nome, sobrenome) {
    return `Olá, ${nome} ${sobrenome}!`;
}

console.log(saudar("João", "Silva"));
console.log(saudar("Maria")); // sobrenome será undefined
console.log(saudar("Pedro", "Santos", "Extra")); // "Extra" será ignorado

console.log("\n=== PARÂMETROS PADRÃO ===");

function apresentar(nome, idade = 18, cidade = "São Paulo") {
    return `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`;
}

console.log(apresentar("Ana"));
console.log(apresentar("Carlos", 25));
console.log(apresentar("Lucia", 30, "Rio de Janeiro"));

// Parâmetros padrão com expressões
function criarUsuario(nome, id = Math.floor(Math.random() * 1000)) {
    return { nome, id };
}

console.log("Usuário 1:", criarUsuario("João"));
console.log("Usuário 2:", criarUsuario("Maria"));
console.log("Usuário 3:", criarUsuario("Pedro", 123));

console.log("\n=== REST PARAMETERS ===");

function somarTodos(primeiro, ...numeros) {
    console.log("Primeiro número:", primeiro);
    console.log("Outros números:", numeros);
    
    let soma = primeiro;
    for (let numero of numeros) {
        soma += numero;
    }
    return soma;
}

console.log("Soma:", somarTodos(1, 2, 3, 4, 5));
console.log("Soma:", somarTodos(10));
console.log("Soma:", somarTodos(5, 15, 25));

// Rest parameters com arrow functions
const multiplicarTodos = (fator, ...valores) => {
    return valores.map(valor => valor * fator);
};

console.log("Multiplicação:", multiplicarTodos(2, 3, 4, 5));

console.log("\n=== DESTRUCTURING DE OBJETOS ===");

function configurarUsuario({ nome, email, idade = 18, admin = false }) {
    return {
        nome,
        email,
        idade,
        admin,
        criadoEm: new Date()
    };
}

const novoUsuario = configurarUsuario({
    nome: "Ana",
    email: "ana@email.com",
    admin: true
});

console.log("Usuário criado:", novoUsuario);

// Com propriedades renomeadas
function processarPedido({ id: pedidoId, valor: valorTotal, desconto = 0 }) {
    const valorFinal = valorTotal - (valorTotal * desconto / 100);
    return `Pedido ${pedidoId}: R$${valorTotal} - ${desconto}% = R$${valorFinal.toFixed(2)}`;
}

console.log(processarPedido({ id: 123, valor: 100, desconto: 10 }));
console.log(processarPedido({ id: 456, valor: 200 }));

console.log("\n=== DESTRUCTURING DE ARRAYS ===");

function analisarNotas([primeira, segunda, terceira, ...outras]) {
    console.log("Primeira nota:", primeira);
    console.log("Segunda nota:", segunda);
    console.log("Terceira nota:", terceira);
    console.log("Outras notas:", outras);
    
    const media = (primeira + segunda + terceira) / 3;
    return `Média das 3 primeiras: ${media.toFixed(2)}`;
}

console.log(analisarNotas([8, 7, 9, 6, 8, 7]));
console.log(analisarNotas([10, 9])); // terceira será undefined

console.log("\n=== ARGUMENTS OBJECT (Função Tradicional) ===");

function exemploArguments() {
    console.log("Número de argumentos:", arguments.length);
    console.log("Todos os argumentos:", Array.from(arguments));
    
    let soma = 0;
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}

console.log("Soma com arguments:", exemploArguments(1, 2, 3, 4));

// Arrow functions NÃO têm arguments
const semArguments = () => {
    // console.log(arguments); // Erro!
    console.log("Arrow functions não têm arguments");
};

semArguments();

console.log("\n=== VALIDAÇÃO DE PARÂMETROS ===");

function dividir(dividendo, divisor) {
    // Validação de tipos
    if (typeof dividendo !== 'number' || typeof divisor !== 'number') {
        throw new Error('Ambos os parâmetros devem ser números');
    }
    
    // Validação de valor
    if (divisor === 0) {
        throw new Error('Divisão por zero não é permitida');
    }
    
    return dividendo / divisor;
}

try {
    console.log("10 ÷ 2 =", dividir(10, 2));
    console.log("15 ÷ 3 =", dividir(15, 3));
    console.log("10 ÷ 0 =", dividir(10, 0)); // Erro
} catch (error) {
    console.log("Erro:", error.message);
}

console.log("\n=== FUNÇÕES COM OBJETOS COMO PARÂMETROS ===");

function calcularSalario({ salarioBase, horasExtras = 0, valorHoraExtra = 50, descontos = 0 }) {
    const valorExtras = horasExtras * valorHoraExtra;
    const salarioBruto = salarioBase + valorExtras;
    const salarioLiquido = salarioBruto - descontos;
    
    return {
        salarioBase,
        horasExtras,
        valorExtras,
        salarioBruto,
        descontos,
        salarioLiquido,
        detalhamento: `Base: R$${salarioBase} + Extras: R$${valorExtras} - Descontos: R$${descontos} = Líquido: R$${salarioLiquido}`
    };
}

const funcionario1 = calcularSalario({
    salarioBase: 3000,
    horasExtras: 10,
    descontos: 500
});

console.log("Cálculo de salário:", funcionario1.detalhamento);

const funcionario2 = calcularSalario({
    salarioBase: 4000,
    horasExtras: 5,
    valorHoraExtra: 75,
    descontos: 800
});

console.log("Cálculo de salário 2:", funcionario2.detalhamento);

console.log("\n=== CURRY (Funções Parciais) ===");

// Função que retorna outra função
function multiplicadorPor(fator) {
    return function(numero) {
        return numero * fator;
    };
}

const dobrar = multiplicadorPor(2);
const triplicar = multiplicadorPor(3);

console.log("Dobrar 5:", dobrar(5));
console.log("Triplicar 4:", triplicar(4));

// Versão com arrow functions
const potenciaPor = expoente => base => Math.pow(base, expoente);

const quadrado = potenciaPor(2);
const cubo = potenciaPor(3);

console.log("5²:", quadrado(5));
console.log("3³:", cubo(3));
