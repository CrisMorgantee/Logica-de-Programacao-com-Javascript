// =====================================================================================
// EXEMPLOS COMPLETOS DE OPERADORES EM JAVASCRIPT
// =====================================================================================

console.log("🚀 INICIANDO EXEMPLOS DE OPERADORES");
console.log("=".repeat(60));

// =====================================================================================
// 1. OPERADORES ARITMÉTICOS
// =====================================================================================

console.log("\n🔢 1. OPERADORES ARITMÉTICOS");
console.log("-".repeat(40));

let a = 10;
let b = 3;

console.log(`a = ${a}, b = ${b}`);
console.log(`a + b = ${a + b}`);    // Adição: 13
console.log(`a - b = ${a - b}`);    // Subtração: 7
console.log(`a * b = ${a * b}`);    // Multiplicação: 30
console.log(`a / b = ${a / b}`);    // Divisão: 3.333...
console.log(`a % b = ${a % b}`);    // Módulo (resto): 1
console.log(`a ** b = ${a ** b}`);  // Exponenciação: 1000

// Casos especiais
console.log("\nCasos especiais:");
console.log(`10 / 0 = ${10 / 0}`);           // Infinity
console.log(`-10 / 0 = ${-10 / 0}`);         // -Infinity
console.log(`0 / 0 = ${0 / 0}`);             // NaN
console.log(`"10" + 5 = ${"10" + 5}`);       // "105" (concatenação)
console.log(`"10" - 5 = ${"10" - 5}`);       // 5 (conversão para número)
console.log(`"10" * 2 = ${"10" * 2}`);       // 20 (conversão para número)

// =====================================================================================
// 2. OPERADORES DE ATRIBUIÇÃO
// =====================================================================================

console.log("\n📝 2. OPERADORES DE ATRIBUIÇÃO");
console.log("-".repeat(40));

let x = 10;
console.log(`Valor inicial x = ${x}`);

x += 5;   // x = x + 5
console.log(`x += 5  → x = ${x}`);

x -= 3;   // x = x - 3
console.log(`x -= 3  → x = ${x}`);

x *= 2;   // x = x * 2
console.log(`x *= 2  → x = ${x}`);

x /= 4;   // x = x / 4
console.log(`x /= 4  → x = ${x}`);

x %= 3;   // x = x % 3
console.log(`x %= 3  → x = ${x}`);

x **= 2;  // x = x ** 2
console.log(`x **= 2 → x = ${x}`);

// Operadores com strings
let texto = "Olá";
texto += " mundo!";
console.log(`\nConcatenação com +=: "${texto}"`);

// =====================================================================================
// 3. OPERADORES DE INCREMENTO E DECREMENTO
// =====================================================================================

console.log("\n📊 3. OPERADORES DE INCREMENTO E DECREMENTO");
console.log("-".repeat(40));

let i = 5;
console.log(`Valor inicial i = ${i}`);

// Pré-incremento vs Pós-incremento
console.log(`++i (pré-incremento): ${++i}`);    // incrementa primeiro, depois retorna
console.log(`i++ (pós-incremento): ${i++}`);   // retorna primeiro, depois incrementa
console.log(`Valor de i após i++: ${i}`);

// Pré-decremento vs Pós-decremento
console.log(`--i (pré-decremento): ${--i}`);   // decrementa primeiro, depois retorna
console.log(`i-- (pós-decremento): ${i--}`);   // retorna primeiro, depois decrementa
console.log(`Valor de i após i--: ${i}`);

// Demonstração prática da diferença
let contador1 = 0;
let contador2 = 0;
console.log(`\nDemonstração prática:`);
console.log(`valor1 = ++contador1: ${++contador1}, contador1 = ${contador1}`);
console.log(`valor2 = contador2++: ${contador2++}, contador2 = ${contador2}`);

// =====================================================================================
// 4. OPERADORES DE COMPARAÇÃO
// =====================================================================================

console.log("\n⚖️ 4. OPERADORES DE COMPARAÇÃO");
console.log("-".repeat(40));

let num1 = 5;
let num2 = "5";
let num3 = 10;

console.log(`num1 = ${num1} (${typeof num1})`);
console.log(`num2 = ${num2} (${typeof num2})`);
console.log(`num3 = ${num3} (${typeof num3})`);

// Igualdade solta (==) vs estrita (===)
console.log(`\nIgualdade:`);
console.log(`num1 == num2: ${num1 == num2}`);   // true (conversão de tipo)
console.log(`num1 === num2: ${num1 === num2}`); // false (sem conversão)

// Desigualdade
console.log(`\nDesigualdade:`);
console.log(`num1 != num2: ${num1 != num2}`);   // false
console.log(`num1 !== num2: ${num1 !== num2}`); // true

// Comparações numéricas
console.log(`\nComparações numéricas:`);
console.log(`num1 > num3: ${num1 > num3}`);     // false
console.log(`num1 < num3: ${num1 < num3}`);     // true
console.log(`num1 >= num2: ${num1 >= num2}`);   // true
console.log(`num1 <= num3: ${num1 <= num3}`);   // true

// Comparações com strings
console.log(`\nComparações com strings:`);
console.log(`"10" > "5": ${"10" > "5"}`);       // false (comparação lexicográfica)
console.log(`"10" > 5: ${"10" > 5}`);           // true (conversão numérica)
console.log(`"a" > "b": ${"a" > "b"}`);         // false
console.log(`"A" > "a": ${"A" > "a"}`);         // false (ASCII)

// =====================================================================================
// 5. OPERADORES LÓGICOS
// =====================================================================================

console.log("\n🧠 5. OPERADORES LÓGICOS");
console.log("-".repeat(40));

let verdadeiro = true;
let falso = false;

// AND (&&)
console.log(`AND (&&):`);
console.log(`true && true: ${true && true}`);     // true
console.log(`true && false: ${true && false}`);   // false
console.log(`false && true: ${false && true}`);   // false
console.log(`false && false: ${false && false}`); // false

// OR (||)
console.log(`\nOR (||):`);
console.log(`true || true: ${true || true}`);     // true
console.log(`true || false: ${true || false}`);   // true
console.log(`false || true: ${false || true}`);   // true
console.log(`false || false: ${false || false}`); // false

// NOT (!)
console.log(`\nNOT (!):`);
console.log(`!true: ${!true}`);     // false
console.log(`!false: ${!false}`);   // true
console.log(`!!true: ${!!true}`);   // true (conversão para boolean)

// Short-circuit evaluation
console.log(`\nShort-circuit evaluation:`);
let obj = { nome: "João" };
console.log(`obj && obj.nome: ${obj && obj.nome}`);
console.log(`null && obj.nome: ${null && obj.nome}`);

let nome = null;
console.log(`nome || "Padrão": ${nome || "Padrão"}`);

// =====================================================================================
// 6. OPERADORES BITWISE (BITWISE)
// =====================================================================================

console.log("\n🔢 6. OPERADORES BITWISE");
console.log("-".repeat(40));

let bit1 = 5;  // 101 em binário
let bit2 = 3;  // 011 em binário

console.log(`bit1 = ${bit1} (${bit1.toString(2).padStart(3, '0')} em binário)`);
console.log(`bit2 = ${bit2} (${bit2.toString(2).padStart(3, '0')} em binário)`);

console.log(`\nOperações bitwise:`);
console.log(`bit1 & bit2 (AND): ${bit1 & bit2} (${(bit1 & bit2).toString(2)})`);
console.log(`bit1 | bit2 (OR): ${bit1 | bit2} (${(bit1 | bit2).toString(2)})`);
console.log(`bit1 ^ bit2 (XOR): ${bit1 ^ bit2} (${(bit1 ^ bit2).toString(2)})`);
console.log(`~bit1 (NOT): ${~bit1}`);

console.log(`\nDeslocamento de bits:`);
console.log(`bit1 << 1 (esquerda): ${bit1 << 1} (${(bit1 << 1).toString(2)})`);
console.log(`bit1 >> 1 (direita): ${bit1 >> 1} (${(bit1 >> 1).toString(2)})`);

// =====================================================================================
// 7. OPERADORES ESPECIAIS
// =====================================================================================

console.log("\n✨ 7. OPERADORES ESPECIAIS");
console.log("-".repeat(40));

// typeof
console.log(`typeof "texto": ${typeof "texto"}`);
console.log(`typeof 42: ${typeof 42}`);
console.log(`typeof true: ${typeof true}`);
console.log(`typeof undefined: ${typeof undefined}`);
console.log(`typeof null: ${typeof null}`);         // "object" (bug histórico)
console.log(`typeof {}: ${typeof {}}`);
console.log(`typeof []: ${typeof []}`);
console.log(`typeof function(){}: ${typeof function(){}}`);

// instanceof
class Pessoa {}
let pessoa = new Pessoa();
let array = [1, 2, 3];

console.log(`\ninstanceof:`);
console.log(`pessoa instanceof Pessoa: ${pessoa instanceof Pessoa}`);
console.log(`array instanceof Array: ${array instanceof Array}`);
console.log(`"texto" instanceof String: ${"texto" instanceof String}`);
console.log(`new String("texto") instanceof String: ${new String("texto") instanceof String}`);

// in
let objeto = { nome: "João", idade: 30 };
console.log(`\nOperador 'in':`);
console.log(`"nome" in objeto: ${"nome" in objeto}`);
console.log(`"endereco" in objeto: ${"endereco" in objeto}`);
console.log(`"toString" in objeto: ${"toString" in objeto}`); // herança

// delete
console.log(`\nOperador 'delete':`);
console.log(`Objeto antes: ${JSON.stringify(objeto)}`);
delete objeto.idade;
console.log(`Após delete objeto.idade: ${JSON.stringify(objeto)}`);

// =====================================================================================
// 8. OPERADORES ES6+ (MODERNOS)
// =====================================================================================

console.log("\n🆕 8. OPERADORES MODERNOS (ES6+)");
console.log("-".repeat(40));

// Nullish Coalescing (??)
let valor1 = null;
let valor2 = undefined;
let valor3 = 0;
let valor4 = "";
let valor5 = "valor válido";

console.log(`Nullish Coalescing (??):`);
console.log(`null ?? "padrão": ${null ?? "padrão"}`);
console.log(`undefined ?? "padrão": ${undefined ?? "padrão"}`);
console.log(`0 ?? "padrão": ${0 ?? "padrão"}`);
console.log(`"" ?? "padrão": ${"" ?? "padrão"}`);

// Comparação com ||
console.log(`\nComparação || vs ??:`);
console.log(`0 || "padrão": ${0 || "padrão"}`);
console.log(`0 ?? "padrão": ${0 ?? "padrão"}`);
console.log(`"" || "padrão": ${"" || "padrão"}`);
console.log(`"" ?? "padrão": ${"" ?? "padrão"}`);

// Optional Chaining (?.)
let usuario = {
    nome: "Maria",
    endereco: {
        rua: "Rua A",
        numero: 123
    }
};

console.log(`\nOptional Chaining (?.):`);
console.log(`usuario.nome: ${usuario.nome}`);
console.log(`usuario.endereco?.rua: ${usuario.endereco?.rua}`);
console.log(`usuario.telefone?.numero: ${usuario.telefone?.numero}`);
console.log(`usuario.contatos?.[0]: ${usuario.contatos?.[0]}`);

// Spread Operator (...)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];

console.log(`\nSpread Operator (...):`);
console.log(`arr1: [${arr1}]`);
console.log(`arr2: [${arr2}]`);
console.log(`[...arr1, ...arr2]: [${arr3}]`);

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let obj3 = { ...obj1, ...obj2 };

console.log(`obj1: ${JSON.stringify(obj1)}`);
console.log(`obj2: ${JSON.stringify(obj2)}`);
console.log(`{...obj1, ...obj2}: ${JSON.stringify(obj3)}`);

// =====================================================================================
// 9. PRECEDÊNCIA DE OPERADORES
// =====================================================================================

console.log("\n📋 9. PRECEDÊNCIA DE OPERADORES");
console.log("-".repeat(40));

console.log("Exemplos de precedência:");
console.log(`2 + 3 * 4 = ${2 + 3 * 4}`);         // 14 (multiplicação primeiro)
console.log(`(2 + 3) * 4 = ${(2 + 3) * 4}`);     // 20 (parênteses primeiro)
console.log(`10 > 5 && 3 < 7 = ${10 > 5 && 3 < 7}`); // true
console.log(`false || true && false = ${false || true && false}`); // false (&&)

// Associatividade
let resultado = 2 ** 3 ** 2; // da direita para esquerda
console.log(`2 ** 3 ** 2 = ${resultado}`); // 512 (não 64)

// =====================================================================================
// 10. EXEMPLOS PRÁTICOS
// =====================================================================================

console.log("\n💼 10. EXEMPLOS PRÁTICOS");
console.log("-".repeat(40));

// Calculadora simples
function calculadora(a, b, operador) {
    switch (operador) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : "Erro: Divisão por zero";
        case '%':
            return b !== 0 ? a % b : "Erro: Divisão por zero";
        case '**':
            return a ** b;
        default:
            return "Operador inválido";
    }
}

console.log("Calculadora:");
console.log(`10 + 5 = ${calculadora(10, 5, '+')}`);
console.log(`10 - 5 = ${calculadora(10, 5, '-')}`);
console.log(`10 * 5 = ${calculadora(10, 5, '*')}`);
console.log(`10 / 5 = ${calculadora(10, 5, '/')}`);
console.log(`10 / 0 = ${calculadora(10, 0, '/')}`);

// Validador de entrada
function validarIdade(idade) {
    return typeof idade === 'number' &&
           !isNaN(idade) &&
           idade >= 0 &&
           idade <= 150;
}

console.log("\nValidador de idade:");
console.log(`validarIdade(25): ${validarIdade(25)}`);
console.log(`validarIdade("25"): ${validarIdade("25")}`);
console.log(`validarIdade(-5): ${validarIdade(-5)}`);

// Sistema de pontuação com operadores
function calcularPontuacao(acertos, tentativas, dificuldade = 1) {
    const percentual = tentativas > 0 ? (acertos / tentativas) * 100 : 0;
    const bonus = percentual >= 90 ? 50 : percentual >= 80 ? 30 : 10;
    return Math.round(percentual * dificuldade + bonus);
}

console.log("\nSistema de pontuação:");
console.log(`15 acertos em 20 tentativas: ${calcularPontuacao(15, 20)} pontos`);
console.log(`18 acertos em 20 tentativas: ${calcularPontuacao(18, 20)} pontos`);
console.log(`19 acertos em 20 tentativas (dif. 2): ${calcularPontuacao(19, 20, 2)} pontos`);

console.log("\n✅ EXEMPLOS DE OPERADORES CONCLUÍDOS!");
console.log("🎓 Operadores demonstrados:");
console.log("   • Aritméticos (+, -, *, /, %, **)");
console.log("   • Atribuição (=, +=, -=, *=, /=, %=, **=)");
console.log("   • Incremento/Decremento (++, --)");
console.log("   • Comparação (==, ===, !=, !==, >, <, >=, <=)");
console.log("   • Lógicos (&&, ||, !)");
console.log("   • Bitwise (&, |, ^, ~, <<, >>)");
console.log("   • Especiais (typeof, instanceof, in, delete)");
console.log("   • Modernos (??, ?., ...)");
console.log("   • Precedência e associatividade");