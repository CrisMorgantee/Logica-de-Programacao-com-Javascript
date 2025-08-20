
// =============================================
// TAREFA: EXERCÍCIOS PRÁTICOS COM TIPOS DE DADOS
// =============================================

console.log("📝 INICIANDO EXERCÍCIOS DE TIPOS DE DADOS");
console.log("=" .repeat(45));

// ===== EXERCÍCIO 1: IDENTIFICAÇÃO DE TIPOS =====
console.log("\n🎯 EXERCÍCIO 1: Identificando tipos de dados");

// TODO: Declare variáveis com diferentes tipos e identifique cada um
let exemploString = "JavaScript é incrível";
let exemploNumber = 42.5;
let exemploBoolean = true;
let exemploUndefined;
let exemploNull = null;
let exemploSymbol = Symbol("id");
let exemploBigInt = 123456789012345678901234567890n;
let exemploObject = { nome: "João", idade: 25 };
let exemploArray = [1, 2, 3, 4, 5];
let exemploFunction = function() { return "Olá!" };

console.log("📊 Tipos identificados:");
console.log(`String: "${exemploString}" → ${typeof exemploString}`);
console.log(`Number: ${exemploNumber} → ${typeof exemploNumber}`);
console.log(`Boolean: ${exemploBoolean} → ${typeof exemploBoolean}`);
console.log(`Undefined: ${exemploUndefined} → ${typeof exemploUndefined}`);
console.log(`Null: ${exemploNull} → ${typeof exemploNull}`); // Note: retorna "object"
console.log(`Symbol: ${exemploSymbol.toString()} → ${typeof exemploSymbol}`);
console.log(`BigInt: ${exemploBigInt} → ${typeof exemploBigInt}`);
console.log(`Object: ${JSON.stringify(exemploObject)} → ${typeof exemploObject}`);
console.log(`Array: ${exemploArray} → ${typeof exemploArray}`); // Note: retorna "object"
console.log(`Function: ${exemploFunction} → ${typeof exemploFunction}`);

// ===== EXERCÍCIO 2: TRABALHANDO COM NUMBERS =====
console.log("\n🎯 EXERCÍCIO 2: Explorando o tipo Number");

let numeroInteiro = 100;
let numeroDecimal = 99.99;
let numeroNegativo = -50;
let numeroGrande = 1e6;
let valorInfinito = Infinity;
let naoNumero = NaN;

console.log("🔢 Operações com números:");
console.log(`Soma: ${numeroInteiro} + ${numeroDecimal} = ${numeroInteiro + numeroDecimal}`);
console.log(`Multiplicação: ${numeroInteiro} * 2 = ${numeroInteiro * 2}`);
console.log(`Divisão: ${numeroInteiro} / 3 = ${numeroInteiro / 3}`);
console.log(`Módulo: ${numeroInteiro} % 7 = ${numeroInteiro % 7}`);

console.log("\n🔍 Verificações especiais:");
console.log(`${numeroInteiro} é inteiro? ${Number.isInteger(numeroInteiro)}`);
console.log(`${numeroDecimal} é inteiro? ${Number.isInteger(numeroDecimal)}`);
console.log(`${valorInfinito} é finito? ${Number.isFinite(valorInfinito)}`);
console.log(`${naoNumero} é NaN? ${Number.isNaN(naoNumero)}`);

// Formatação de números
console.log("\n💰 Formatando números:");
let preco = 1299.90;
console.log(`Preço original: ${preco}`);
console.log(`Com 2 casas decimais: ${preco.toFixed(2)}`);
console.log(`Em reais: R$ ${preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
console.log(`Notação científica: ${preco.toExponential()}`);

// ===== EXERCÍCIO 3: MANIPULANDO STRINGS =====
console.log("\n🎯 EXERCÍCIO 3: Explorando o tipo String");

let frase = "  Aprendendo JavaScript com diversão!  ";
let nome = "Ana";
let sobrenome = "Silva";
let idade = 28;

console.log("📝 Manipulações de string:");
console.log(`Frase original: "${frase}"`);
console.log(`Sem espaços: "${frase.trim()}"`);
console.log(`Maiúscula: "${frase.toUpperCase()}"`);
console.log(`Minúscula: "${frase.toLowerCase()}"`);
console.log(`Tamanho: ${frase.length} caracteres`);

console.log("\n🔍 Buscas na string:");
console.log(`Contém 'JavaScript'? ${frase.includes('JavaScript')}`);
console.log(`Começa com 'Aprendendo'? ${frase.trim().startsWith('Aprendendo')}`);
console.log(`Termina com '!'? ${frase.trim().endsWith('!')}`);
console.log(`Posição de 'JavaScript': ${frase.indexOf('JavaScript')}`);

console.log("\n🔧 Construindo strings:");
let nomeCompleto = nome + " " + sobrenome;
let apresentacao = `Olá! Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos.`;
let multiplicacao = frase.repeat(2);

console.log(`Concatenação: ${nomeCompleto}`);
console.log(`Template string: ${apresentacao}`);
console.log(`String repetida: ${multiplicacao.trim()}`);

// ===== EXERCÍCIO 4: TRABALHANDO COM BOOLEANS =====
console.log("\n🎯 EXERCÍCIO 4: Explorando o tipo Boolean");

let temCarteira = true;
let maiorIdade = true;
let temVeiculo = false;
let temExperiencia = false;

console.log("✅ Valores boolean:");
console.log(`Tem carteira: ${temCarteira}`);
console.log(`É maior de idade: ${maiorIdade}`);
console.log(`Tem veículo: ${temVeiculo}`);
console.log(`Tem experiência: ${temExperiencia}`);

console.log("\n🔄 Operações lógicas:");
console.log(`Pode dirigir (carteira AND maior idade): ${temCarteira && maiorIdade}`);
console.log(`Pode emprestar carro (tem veículo OR tem experiência): ${temVeiculo || temExperiencia}`);
console.log(`NÃO tem carteira: ${!temCarteira}`);

console.log("\n🎯 Valores truthy e falsy:");
let valoresTeste = [0, "", false, null, undefined, NaN, "texto", 1, [], {}];

valoresTeste.forEach(valor => {
    let eTruthy = Boolean(valor);
    console.log(`${JSON.stringify(valor)} é ${eTruthy ? 'truthy' : 'falsy'}`);
});

// ===== EXERCÍCIO 5: DIFERENÇAS ENTRE NULL E UNDEFINED =====
console.log("\n🎯 EXERCÍCIO 5: Null vs Undefined");

let variavelNaoInicializada;
let variavelNula = null;
let objeto = { propriedade: "valor" };

console.log("❓ Comparando null e undefined:");
console.log(`Undefined: ${variavelNaoInicializada} (${typeof variavelNaoInicializada})`);
console.log(`Null: ${variavelNula} (${typeof variavelNula})`);
console.log(`Propriedade inexistente: ${objeto.propriedadeInexistente} (${typeof objeto.propriedadeInexistente})`);

console.log("\n⚖️ Comparações:");
console.log(`null == undefined: ${null == undefined}`);
console.log(`null === undefined: ${null === undefined}`);
console.log(`null == 0: ${null == 0}`);
console.log(`undefined == 0: ${undefined == 0}`);

// ===== EXERCÍCIO 6: CONVERSÕES ENTRE TIPOS =====
console.log("\n🎯 EXERCÍCIO 6: Convertendo entre tipos");

// Conversões para String
console.log("\n➡️ Convertendo para String:");
let numeroParaString = 42;
let booleanParaString = true;
let arrayParaString = [1, 2, 3];

console.log(`Number para String: ${numeroParaString} → "${String(numeroParaString)}"`);
console.log(`Boolean para String: ${booleanParaString} → "${String(booleanParaString)}"`);
console.log(`Array para String: [${arrayParaString}] → "${String(arrayParaString)}"`);

// Conversões para Number
console.log("\n➡️ Convertendo para Number:");
let stringParaNumber = "123";
let stringFloatParaNumber = "45.67";
let booleanParaNumber = true;
let stringInvalidaParaNumber = "abc";

console.log(`String para Number: "${stringParaNumber}" → ${Number(stringParaNumber)}`);
console.log(`String Float para Number: "${stringFloatParaNumber}" → ${Number(stringFloatParaNumber)}`);
console.log(`Boolean para Number: ${booleanParaNumber} → ${Number(booleanParaNumber)}`);
console.log(`String inválida para Number: "${stringInvalidaParaNumber}" → ${Number(stringInvalidaParaNumber)}`);

// parseInt vs parseFloat
console.log("\n🔧 parseInt vs parseFloat:");
let stringMista = "123.45px";
console.log(`parseInt("${stringMista}"): ${parseInt(stringMista)}`);
console.log(`parseFloat("${stringMista}"): ${parseFloat(stringMista)}`);

// ===== EXERCÍCIO 7: TRABALHANDO COM ARRAYS =====
console.log("\n🎯 EXERCÍCIO 7: Arrays como tipo especial de objeto");

let frutas = ["maçã", "banana", "laranja"];
let numeros = [10, 20, 30, 40, 50];
let misto = [1, "texto", true, null, {id: 1}];

console.log("📚 Informações dos arrays:");
console.log(`Frutas: ${frutas} (tipo: ${typeof frutas})`);
console.log(`É array? ${Array.isArray(frutas)}`);
console.log(`Tamanho: ${frutas.length} elementos`);

console.log(`\nArray misto: ${JSON.stringify(misto)}`);
console.log("Tipos dos elementos:");
misto.forEach((elemento, index) => {
    console.log(`  [${index}]: ${JSON.stringify(elemento)} (${typeof elemento})`);
});

// ===== EXERCÍCIO 8: TRABALHANDO COM OBJETOS =====
console.log("\n🎯 EXERCÍCIO 8: Objetos como coleção de propriedades");

let pessoa = {
    nome: "Carlos",
    idade: 35,
    ativo: true,
    endereco: {
        rua: "Rua A",
        numero: 123
    },
    hobbies: ["leitura", "natação"],
    cumprimentar: function() {
        return `Olá, eu sou ${this.nome}!`;
    }
};

console.log("👤 Informações do objeto pessoa:");
console.log(`Nome: ${pessoa.nome} (${typeof pessoa.nome})`);
console.log(`Idade: ${pessoa.idade} (${typeof pessoa.idade})`);
console.log(`Ativo: ${pessoa.ativo} (${typeof pessoa.ativo})`);
console.log(`Endereço: ${JSON.stringify(pessoa.endereco)} (${typeof pessoa.endereco})`);
console.log(`Hobbies: ${pessoa.hobbies} (${typeof pessoa.hobbies})`);
console.log(`Método cumprimentar: ${typeof pessoa.cumprimentar}`);
console.log(`Executando método: ${pessoa.cumprimentar()}`);

console.log("\n🔍 Explorando o objeto:");
console.log(`Propriedades: ${Object.keys(pessoa)}`);
console.log(`Valores: ${Object.values(pessoa).map(v => typeof v === 'function' ? '[function]' : JSON.stringify(v))}`);
console.log(`Tem propriedade 'nome'? ${'nome' in pessoa}`);
console.log(`Tem propriedade 'salario'? ${'salario' in pessoa}`);

// ===== EXERCÍCIO 9: VERIFICAÇÕES AVANÇADAS =====
console.log("\n🎯 EXERCÍCIO 9: Verificações avançadas de tipos");

function analisarTipo(valor, nome) {
    console.log(`\n🔍 Análise de "${nome}":`);
    console.log(`  Valor: ${JSON.stringify(valor)}`);
    console.log(`  typeof: ${typeof valor}`);
    console.log(`  É array: ${Array.isArray(valor)}`);
    console.log(`  É null: ${valor === null}`);
    console.log(`  É undefined: ${valor === undefined}`);
    console.log(`  É number finito: ${Number.isFinite(valor)}`);
    console.log(`  É integer: ${Number.isInteger(valor)}`);
    console.log(`  É NaN: ${Number.isNaN(valor)}`);
    console.log(`  toString: ${Object.prototype.toString.call(valor)}`);
}

// Analisar diferentes valores
analisarTipo(42, "número inteiro");
analisarTipo(3.14, "número decimal");
analisarTipo("hello", "string");
analisarTipo(true, "boolean");
analisarTipo(null, "null");
analisarTipo(undefined, "undefined");
analisarTipo([], "array vazio");
analisarTipo({}, "objeto vazio");
analisarTipo(function(){}, "função");
analisarTipo(NaN, "NaN");

// ===== EXERCÍCIO 10: PROJETO MINI - VALIDADOR DE DADOS =====
console.log("\n🎯 EXERCÍCIO 10: Mini projeto - Validador de dados");

function validarDados(dados) {
    const erros = [];
    const avisos = [];
    
    // Validar nome (deve ser string não-vazia)
    if (typeof dados.nome !== 'string' || dados.nome.trim() === '') {
        erros.push("Nome deve ser uma string não-vazia");
    }
    
    // Validar idade (deve ser number inteiro positivo)
    if (!Number.isInteger(dados.idade) || dados.idade < 0 || dados.idade > 150) {
        erros.push("Idade deve ser um número inteiro entre 0 e 150");
    }
    
    // Validar email (deve conter @ e .)
    if (typeof dados.email !== 'string' || !dados.email.includes('@') || !dados.email.includes('.')) {
        erros.push("Email deve ser uma string válida com @ e .");
    }
    
    // Validar ativo (deve ser boolean)
    if (typeof dados.ativo !== 'boolean') {
        erros.push("Status ativo deve ser um boolean");
    }
    
    // Avisos para campos opcionais
    if (dados.telefone === undefined) {
        avisos.push("Telefone não informado");
    }
    
    if (dados.endereco === null) {
        avisos.push("Endereço não informado");
    }
    
    return {
        valido: erros.length === 0,
        erros: erros,
        avisos: avisos
    };
}

// Testando o validador
console.log("\n📋 Testando validador com dados corretos:");
const dadosCorretos = {
    nome: "João Silva",
    idade: 30,
    email: "joao@email.com",
    ativo: true,
    telefone: undefined,
    endereco: null
};

const resultadoCorreto = validarDados(dadosCorretos);
console.log(`Válido: ${resultadoCorreto.valido}`);
console.log(`Erros: ${resultadoCorreto.erros.length > 0 ? resultadoCorreto.erros : "Nenhum"}`);
console.log(`Avisos: ${resultadoCorreto.avisos.length > 0 ? resultadoCorreto.avisos : "Nenhum"}`);

console.log("\n📋 Testando validador com dados incorretos:");
const dadosIncorretos = {
    nome: "",
    idade: "30",
    email: "email-invalido",
    ativo: "sim"
};

const resultadoIncorreto = validarDados(dadosIncorretos);
console.log(`Válido: ${resultadoIncorreto.valido}`);
console.log(`Erros:`);
resultadoIncorreto.erros.forEach((erro, index) => {
    console.log(`  ${index + 1}. ${erro}`);
});

// ===== RESUMO FINAL =====
console.log("\n📊 RESUMO DOS EXERCÍCIOS REALIZADOS");
console.log("=" .repeat(50));

console.log("✅ Exercícios completados:");
console.log("1. ✓ Identificação de tipos de dados");
console.log("2. ✓ Operações com números");
console.log("3. ✓ Manipulação de strings");
console.log("4. ✓ Trabalho com booleans");
console.log("5. ✓ Diferenças entre null e undefined");
console.log("6. ✓ Conversões entre tipos");
console.log("7. ✓ Arrays como tipo especial");
console.log("8. ✓ Objetos e suas propriedades");
console.log("9. ✓ Verificações avançadas de tipos");
console.log("10. ✓ Mini projeto validador");

console.log("\n🎓 Conceitos praticados:");
console.log("• Tipos primitivos vs não-primitivos");
console.log("• Operator typeof e suas pegadinhas");
console.log("• Conversões implícitas e explícitas");
console.log("• Métodos específicos de cada tipo");
console.log("• Validação e verificação de tipos");
console.log("• Valores truthy e falsy");
console.log("• Diferenças entre == e ===");

console.log("\n🏆 TAREFA DE TIPOS DE DADOS CONCLUÍDA!");
