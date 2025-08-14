
// Exemplos de Operadores de Comparação e Lógicos

console.log("=== OPERADORES DE COMPARAÇÃO ===");

let a = 5;
let b = "5";
let c = 10;

console.log("a =", a, ", b =", b, ", c =", c);

// Igualdade (==) vs Igualdade Estrita (===)
console.log("a == b:", a == b);   // true (converte string para número)
console.log("a === b:", a === b); // false (tipos diferentes)

// Diferença (!=) vs Diferença Estrita (!==)
console.log("a != b:", a != b);   // false
console.log("a !== b:", a !== b); // true

// Comparações numéricas
console.log("a > c:", a > c);     // false
console.log("a < c:", a < c);     // true
console.log("a >= 5:", a >= 5);   // true
console.log("c <= 10:", c <= 10); // true

console.log("\n=== OPERADORES LÓGICOS ===");

let usuario = "admin";
let senha = "123456";
let contaAtiva = true;

// AND lógico (&&)
console.log("Login válido:", usuario === "admin" && senha === "123456" && contaAtiva);

// OR lógico (||)
let temPermissaoAdmin = usuario === "admin";
let temPermissaoModerador = usuario === "moderador";
console.log("Tem permissão:", temPermissaoAdmin || temPermissaoModerador);

// NOT lógico (!)
console.log("Conta inativa:", !contaAtiva);

console.log("\n=== SHORT-CIRCUIT EVALUATION ===");

// Com &&: se o primeiro for falso, não avalia o segundo
let nome = "";
let resultado1 = nome && nome.toUpperCase();
console.log("Nome em maiúsculo:", resultado1); // undefined (não executa toUpperCase)

// Com ||: se o primeiro for verdadeiro, não avalia o segundo
let nomeDefault = nome || "Usuário Anônimo";
console.log("Nome padrão:", nomeDefault);

console.log("\n=== OPERADORES DE ATRIBUIÇÃO ===");

let numero = 10;
console.log("Número inicial:", numero);

// Adição e atribuição
numero += 5;
console.log("Após +=5:", numero);

// Multiplicação e atribuição
numero *= 2;
console.log("Após *=2:", numero);

// Subtração e atribuição
numero -= 8;
console.log("Após -=8:", numero);

// Divisão e atribuição
numero /= 3;
console.log("Após /=3:", numero);

console.log("\n=== PRECEDÊNCIA DE OPERADORES ===");

let x = 2;
let y = 3;
let z = 4;

// Sem parênteses
let resultado2 = x + y * z;
console.log("2 + 3 * 4 =", resultado2); // 14 (multiplicação primeiro)

// Com parênteses
let resultado3 = (x + y) * z;
console.log("(2 + 3) * 4 =", resultado3); // 20

console.log("\n=== COMPARAÇÕES COMPLEXAS ===");

let idade = 25;
let temCNH = true;
let experiencia = 3;

// Condição complexa para alugar um carro
let podeAlugarCarro = (idade >= 21) && temCNH && (experiencia >= 2);
console.log("Pode alugar carro:", podeAlugarCarro);

// Condição para desconto especial
let temDescontoEspecial = (idade >= 60) || (idade <= 25 && experiencia >= 5);
console.log("Tem desconto especial:", temDescontoEspecial);

console.log("\n=== NULLISH COALESCING (??) ===");

let valorNull = null;
let valorUndefined = undefined;
let valorZero = 0;
let valorString = "teste";

console.log("null ?? 'padrão':", valorNull ?? "padrão");
console.log("undefined ?? 'padrão':", valorUndefined ?? "padrão");
console.log("0 ?? 'padrão':", valorZero ?? "padrão");
console.log("'teste' ?? 'padrão':", valorString ?? "padrão");
