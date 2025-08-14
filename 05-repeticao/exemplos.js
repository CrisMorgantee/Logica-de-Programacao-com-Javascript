
// Exemplos de Estruturas de Repetição

console.log("=== LOOP FOR ===");

// Contagem simples
for (let i = 1; i <= 5; i++) {
    console.log("Contagem:", i);
}

// Contagem regressiva
console.log("\nContagem regressiva:");
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("🚀 Lançamento!");

// Loop com incremento diferente
console.log("\nNúmeros pares:");
for (let i = 2; i <= 10; i += 2) {
    console.log("Par:", i);
}

console.log("\n=== LOOP WHILE ===");

let contador = 1;
console.log("Usando while:");
while (contador <= 3) {
    console.log("Contador while:", contador);
    contador++;
}

// Exemplo prático: adivinhar número
let numeroSecreto = 7;
let tentativa = 1;
let chute = 0;

console.log("\nJogo de adivinhação (simulado):");
while (chute !== numeroSecreto) {
    chute = Math.floor(Math.random() * 10) + 1; // Simula chute aleatório
    console.log(`Tentativa ${tentativa}: chute = ${chute}`);
    
    if (chute === numeroSecreto) {
        console.log(`🎉 Acertou em ${tentativa} tentativas!`);
    } else if (chute < numeroSecreto) {
        console.log("📈 Muito baixo!");
    } else {
        console.log("📉 Muito alto!");
    }
    
    tentativa++;
    
    // Proteção contra loop infinito no exemplo
    if (tentativa > 10) break;
}

console.log("\n=== LOOP DO...WHILE ===");

let opcao;
let menu = 1;

console.log("Menu (simulado com do...while):");
do {
    console.log(`Exibindo menu - tentativa ${menu}`);
    console.log("1 - Opção 1");
    console.log("2 - Opção 2");
    console.log("0 - Sair");
    
    // Simula escolha do usuário
    opcao = menu >= 3 ? 0 : menu;
    console.log(`Usuário escolheu: ${opcao}`);
    
    menu++;
} while (opcao !== 0);

console.log("Saindo do menu...");

console.log("\n=== FOR...IN (Objetos) ===");

let pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
    profissao: "Desenvolvedor"
};

console.log("Propriedades do objeto pessoa:");
for (let propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
}

console.log("\n=== FOR...OF (Arrays) ===");

let frutas = ["maçã", "banana", "laranja", "uva"];

console.log("Frutas:");
for (let fruta of frutas) {
    console.log("🍎", fruta);
}

// Com índice usando entries()
console.log("\nFrutas com índice:");
for (let [indice, fruta] of frutas.entries()) {
    console.log(`${indice + 1}. ${fruta}`);
}

console.log("\n=== BREAK E CONTINUE ===");

console.log("Números de 1 a 10, pulando 5 e parando em 8:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Pulando o 5...");
        continue; // Pula para próxima iteração
    }
    
    if (i === 8) {
        console.log("Parando no 8!");
        break; // Sai do loop
    }
    
    console.log("Número:", i);
}

console.log("\n=== LOOPS ANINHADOS ===");

console.log("Tabuada (primeiras 3 tabelas):");
for (let i = 1; i <= 3; i++) {
    console.log(`\nTabuada do ${i}:`);
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

console.log("\n=== PADRÕES COM LOOPS ===");

// Padrão de estrelas
console.log("Triângulo de estrelas:");
for (let i = 1; i <= 5; i++) {
    let linha = "";
    for (let j = 1; j <= i; j++) {
        linha += "⭐";
    }
    console.log(linha);
}
