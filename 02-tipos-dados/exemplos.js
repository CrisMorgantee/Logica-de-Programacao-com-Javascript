
// =====================================
// EXEMPLOS DE TIPOS DE DADOS EM JAVASCRIPT
// =====================================

console.log("=== TIPOS PRIMITIVOS ===");

// 1. NUMBER - Números (inteiros e decimais)
console.log("\n🔢 TIPO NUMBER:");
let numeroInteiro = 42;
let numeroDecimal = 3.14159;
let numeroNegativo = -17;
let numeroGrande = 1.23e6; // Notação científica (1.230.000)
let numeroInfinito = Infinity;
let numeroNaoNumero = NaN; // Not a Number

console.log("Número inteiro:", numeroInteiro, "- Tipo:", typeof numeroInteiro);
console.log("Número decimal:", numeroDecimal, "- Tipo:", typeof numeroDecimal);
console.log("Número negativo:", numeroNegativo, "- Tipo:", typeof numeroNegativo);
console.log("Notação científica:", numeroGrande, "- Tipo:", typeof numeroGrande);
console.log("Infinito:", numeroInfinito, "- Tipo:", typeof numeroInfinito);
console.log("NaN:", numeroNaoNumero, "- Tipo:", typeof numeroNaoNumero);

// Verificações especiais com numbers
console.log("\nVerificações especiais:");
console.log("É número finito?", Number.isFinite(numeroDecimal)); // true
console.log("É número inteiro?", Number.isInteger(numeroInteiro)); // true
console.log("É NaN?", Number.isNaN(numeroNaoNumero)); // true

// 2. STRING - Texto
console.log("\n📝 TIPO STRING:");
let textoSimples = "Olá mundo!";
let textoComAspas = 'Ele disse: "Oi!"';
let textoMultilinhas = `Primeira linha
Segunda linha
Terceira linha`;
let templateString = `Nome: ${textoSimples}, Tamanho: ${textoSimples.length}`;
let textoVazio = "";

console.log("Texto simples:", textoSimples, "- Tipo:", typeof textoSimples);
console.log("Texto com aspas:", textoComAspas);
console.log("Template string:", templateString);
console.log("Texto vazio:", `"${textoVazio}"`, "- Comprimento:", textoVazio.length);
console.log("Texto multilinha:\n", textoMultilinhas);

// Métodos úteis de string
console.log("\nMétodos de string:");
console.log("Maiúscula:", textoSimples.toUpperCase());
console.log("Minúscula:", textoSimples.toLowerCase());
console.log("Tamanho:", textoSimples.length);
console.log("Contém 'mundo':", textoSimples.includes("mundo"));
console.log("Começa com 'Olá':", textoSimples.startsWith("Olá"));

// 3. BOOLEAN - Verdadeiro ou Falso
console.log("\n✅ TIPO BOOLEAN:");
let verdadeiro = true;
let falso = false;
let resultadoComparacao = 10 > 5;
let resultadoLogico = true && false;

console.log("Verdadeiro:", verdadeiro, "- Tipo:", typeof verdadeiro);
console.log("Falso:", falso, "- Tipo:", typeof falso);
console.log("Comparação (10 > 5):", resultadoComparacao);
console.log("Operação lógica (true && false):", resultadoLogico);

// Valores truthy e falsy
console.log("\nValores truthy e falsy:");
console.log("Boolean(''):", Boolean("")); // false
console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean(null):", Boolean(null)); // false
console.log("Boolean(undefined):", Boolean(undefined)); // false
console.log("Boolean('texto'):", Boolean("texto")); // true
console.log("Boolean(42):", Boolean(42)); // true

// 4. UNDEFINED - Não definido
console.log("\n❓ TIPO UNDEFINED:");
let variavelNaoDefinida;
let objetoComPropriedadeInexistente = {};

console.log("Variável não inicializada:", variavelNaoDefinida, "- Tipo:", typeof variavelNaoDefinida);
console.log("Propriedade inexistente:", objetoComPropriedadeInexistente.propriedadeInexistente);
console.log("Tipo de undefined:", typeof undefined);

// 5. NULL - Valor nulo intencional
console.log("\n🚫 TIPO NULL:");
let valorNulo = null;
let resetarVariavel = "valor";
resetarVariavel = null; // Resetando intencionalmente

console.log("Valor nulo:", valorNulo, "- Tipo:", typeof valorNulo); // Nota: typeof null é "object" (bug histórico)
console.log("Variável resetada:", resetarVariavel);
console.log("null === undefined:", null === undefined); // false
console.log("null == undefined:", null == undefined); // true

// 6. SYMBOL - Identificador único (ES6+)
console.log("\n🔑 TIPO SYMBOL:");
let simbolo1 = Symbol("id");
let simbolo2 = Symbol("id");
let simboloGlobal = Symbol.for("global");

console.log("Símbolo 1:", simbolo1, "- Tipo:", typeof simbolo1);
console.log("Símbolo 2:", simbolo2);
console.log("São iguais?", simbolo1 === simbolo2); // false - símbolos são únicos
console.log("Símbolo global:", simboloGlobal);
console.log("Descrição do símbolo:", simbolo1.description);

// 7. BIGINT - Números grandes (ES2020+)
console.log("\n🔢 TIPO BIGINT:");
let numeroGrandeBigInt = BigInt(123456789012345678901234567890);
let numeroGrandeLiteral = 123456789012345678901234567890n;

console.log("BigInt:", numeroGrandeBigInt, "- Tipo:", typeof numeroGrandeBigInt);
console.log("BigInt literal:", numeroGrandeLiteral);
console.log("São iguais?", numeroGrandeBigInt === numeroGrandeLiteral);

console.log("\n=== TIPOS NÃO-PRIMITIVOS (OBJETOS) ===");

// OBJECT - Objetos
console.log("\n📦 TIPO OBJECT:");
let objetoVazio = {};
let pessoa = {
    nome: "João",
    idade: 30,
    ativo: true,
    endereco: {
        rua: "Rua A",
        numero: 123
    }
};
let configuracoes = {
    tema: "escuro",
    idioma: "pt-BR",
    notificacoes: true
};

console.log("Objeto vazio:", objetoVazio, "- Tipo:", typeof objetoVazio);
console.log("Objeto pessoa:", pessoa);
console.log("Nome da pessoa:", pessoa.nome);
console.log("Endereço aninhado:", pessoa.endereco.rua);

// ARRAY - Arrays (são objetos especiais)
console.log("\n📚 ARRAYS:");
let arrayVazio = [];
let numeros = [1, 2, 3, 4, 5];
let misto = [1, "texto", true, null, {nome: "objeto"}];
let matriz = [[1, 2], [3, 4], [5, 6]];

console.log("Array vazio:", arrayVazio, "- Tipo:", typeof arrayVazio);
console.log("Array de números:", numeros);
console.log("Array misto:", misto);
console.log("Matriz:", matriz);
console.log("Terceiro elemento:", numeros[2]);
console.log("Array.isArray(numeros):", Array.isArray(numeros)); // true

// FUNCTION - Funções
console.log("\n⚡ FUNÇÕES:");
function funcaoNormal() {
    return "Sou uma função normal";
}

let funcaoAnonima = function() {
    return "Sou uma função anônima";
};

let funcaoArrow = () => {
    return "Sou uma arrow function";
};

console.log("Função normal:", typeof funcaoNormal);
console.log("Função anônima:", typeof funcaoAnonima);
console.log("Arrow function:", typeof funcaoArrow);
console.log("Executando função:", funcaoNormal());

// DATE - Datas
console.log("\n📅 DATAS:");
let agora = new Date();
let dataEspecifica = new Date("2024-12-25");
let dataComHora = new Date(2024, 11, 25, 14, 30, 0); // Mês é 0-indexado

console.log("Data atual:", agora, "- Tipo:", typeof agora);
console.log("Data específica:", dataEspecifica);
console.log("Data com hora:", dataComHora);
console.log("Timestamp:", agora.getTime());

console.log("\n=== CONVERSÕES ENTRE TIPOS ===");

// Conversão para String
console.log("\n➡️ CONVERSÃO PARA STRING:");
let numero = 42;
let booleano = true;

console.log("String(42):", String(numero), "- Tipo:", typeof String(numero));
console.log("(42).toString():", numero.toString());
console.log("42 + '':", numero + "");
console.log("String(true):", String(booleano));

// Conversão para Number
console.log("\n➡️ CONVERSÃO PARA NUMBER:");
let textoNumero = "123";
let textoDecimal = "45.67";
let textoInvalido = "abc";

console.log("Number('123'):", Number(textoNumero), "- Tipo:", typeof Number(textoNumero));
console.log("parseInt('45.67'):", parseInt(textoDecimal));
console.log("parseFloat('45.67'):", parseFloat(textoDecimal));
console.log("Number('abc'):", Number(textoInvalido)); // NaN
console.log("+'123':", +textoNumero); // Conversão unária

// Conversão para Boolean
console.log("\n➡️ CONVERSÃO PARA BOOLEAN:");
let valores = [0, "", null, undefined, NaN, 1, "texto", [], {}];

valores.forEach(valor => {
    console.log(`Boolean(${JSON.stringify(valor)}):`, Boolean(valor));
});

console.log("\n=== VERIFICAÇÃO DE TIPOS ===");

// typeof operator
console.log("\n🔍 USANDO TYPEOF:");
let variaveis = [42, "texto", true, null, undefined, {}, [], function(){}];

variaveis.forEach(variavel => {
    console.log(`typeof ${JSON.stringify(variavel)}:`, typeof variavel);
});

// instanceof operator
console.log("\n🔍 USANDO INSTANCEOF:");
console.log("[] instanceof Array:", [] instanceof Array);
console.log("{} instanceof Object:", {} instanceof Object);
console.log("new Date() instanceof Date:", new Date() instanceof Date);

// Métodos mais precisos
console.log("\n🔍 VERIFICAÇÕES PRECISAS:");
console.log("Array.isArray([]):", Array.isArray([]));
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));
console.log("Number.isInteger(42):", Number.isInteger(42));
console.log("Object.prototype.toString.call(null):", Object.prototype.toString.call(null));

console.log("\n=== CASOS ESPECIAIS E PEGADINHAS ===");

console.log("\n⚠️ PEGADINHAS COMUNS:");
console.log("typeof null:", typeof null); // "object" - bug histórico
console.log("typeof NaN:", typeof NaN); // "number"
console.log("NaN === NaN:", NaN === NaN); // false
console.log("0 === -0:", 0 === -0); // true
console.log("Object.is(0, -0):", Object.is(0, -0)); // false
console.log("undefined == null:", undefined == null); // true
console.log("undefined === null:", undefined === null); // false

console.log("\n✅ EXEMPLOS DE TIPOS DE DADOS CONCLUÍDOS!");
