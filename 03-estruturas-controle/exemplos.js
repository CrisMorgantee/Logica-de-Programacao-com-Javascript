
// Exemplos de Estruturas de Controle e Condicionais

console.log("=== IF...ELSE ===");

let idade = 20;

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

console.log("\n=== IF...ELSE IF...ELSE ===");

let nota = 85;

if (nota >= 90) {
    console.log("Nota A - Excelente!");
} else if (nota >= 80) {
    console.log("Nota B - Muito bom!");
} else if (nota >= 70) {
    console.log("Nota C - Bom");
} else if (nota >= 60) {
    console.log("Nota D - Regular");
} else {
    console.log("Nota F - Reprovado");
}

console.log("\n=== SWITCH...CASE ===");

let diaSemana = 3;
let nomeDia;

switch (diaSemana) {
    case 1:
        nomeDia = "Segunda-feira";
        break;
    case 2:
        nomeDia = "Terça-feira";
        break;
    case 3:
        nomeDia = "Quarta-feira";
        break;
    case 4:
        nomeDia = "Quinta-feira";
        break;
    case 5:
        nomeDia = "Sexta-feira";
        break;
    case 6:
        nomeDia = "Sábado";
        break;
    case 7:
        nomeDia = "Domingo";
        break;
    default:
        nomeDia = "Dia inválido";
}

console.log("Dia da semana:", nomeDia);

console.log("\n=== OPERADOR TERNÁRIO ===");

let temperatura = 25;
let clima = temperatura > 30 ? "Quente" : temperatura < 15 ? "Frio" : "Agradável";
console.log("Clima:", clima);

let usuario = "admin";
let permissao = usuario === "admin" ? "total" : "limitada";
console.log("Permissão:", permissao);

console.log("\n=== VALORES FALSY E TRUTHY ===");

let valores = [false, 0, "", null, undefined, NaN, "texto", 1, [], {}];

valores.forEach((valor, index) => {
    if (valor) {
        console.log(`Valor ${index} (${valor}) é TRUTHY`);
    } else {
        console.log(`Valor ${index} (${valor}) é FALSY`);
    }
});

console.log("\n=== CONDIÇÕES COMPOSTAS ===");

let nomeUsuario = "João";
let senhaUsuario = "123456";
let contaBloqueada = false;

if (nomeUsuario === "João" && senhaUsuario === "123456" && !contaBloqueada) {
    console.log("Login realizado com sucesso!");
} else if (contaBloqueada) {
    console.log("Conta bloqueada. Entre em contato com o suporte.");
} else {
    console.log("Usuário ou senha inválidos.");
}
