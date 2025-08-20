
// ===================================
// EXEMPLOS DE VARIÁVEIS EM JAVASCRIPT
// ===================================

console.log("=== DECLARAÇÃO DE VARIÁVEIS ===");

// 1. VAR - Escopo de função (evitar usar)
var nomeCompleto = "João Silva";
var idade = 25;
console.log("Nome:", nomeCompleto);
console.log("Idade:", idade);

// Problema do var - redeclaração permitida
var nomeCompleto = "Maria Santos"; // Redeclaração sem erro
console.log("Nome redeclarado:", nomeCompleto);

// 2. LET - Escopo de bloco (recomendado para variáveis)
let profissao = "Desenvolvedor";
let salario = 5000;
console.log("Profissão:", profissao);
console.log("Salário:", salario);

// Let não permite redeclaração no mesmo escopo
// let profissao = "Designer"; // Erro!

// 3. CONST - Para valores constantes (recomendado)
const PI = 3.14159;
const EMPRESA = "Tech Solutions";
const LIMITE_USUARIOS = 100;

console.log("PI:", PI);
console.log("Empresa:", EMPRESA);
console.log("Limite de usuários:", LIMITE_USUARIOS);

// const PI = 3.14; // Erro! Não pode redeclarar
// PI = 3.15; // Erro! Não pode reatribuir

console.log("\n=== ESCOPO DE VARIÁVEIS ===");

function exemploEscopo() {
    var varVariavel = "Escopo de função";
    let letVariavel = "Escopo de bloco";
    const constVariavel = "Escopo de bloco";
    
    if (true) {
        var varDentroBloco = "Acessível fora do bloco";
        let letDentroBloco = "Apenas dentro do bloco";
        const constDentroBloco = "Apenas dentro do bloco";
        
        console.log("Dentro do bloco:");
        console.log("- var:", varDentroBloco);
        console.log("- let:", letDentroBloco);
        console.log("- const:", constDentroBloco);
    }
    
    console.log("Fora do bloco:");
    console.log("- var:", varDentroBloco); // Funciona
    // console.log("- let:", letDentroBloco); // Erro!
    // console.log("- const:", constDentroBloco); // Erro!
}

exemploEscopo();

console.log("\n=== HOISTING (IÇAMENTO) ===");

// Var é içada (hoisted) mas inicializada como undefined
console.log("Variável antes da declaração:", varIcada); // undefined
var varIcada = "Agora tem valor";
console.log("Variável após atribuição:", varIcada);

// Let e const são içadas mas ficam em "temporal dead zone"
// console.log(letIcada); // Erro!
let letIcada = "Let não é acessível antes da declaração";

console.log("\n=== TIPOS DE DADOS NAS VARIÁVEIS ===");

// Números
let numeroInteiro = 42;
let numeroDecimal = 3.14159;
let numeroNegativo = -10;
let numeroGrande = 1e6; // 1 milhão

console.log("Números:");
console.log("- Inteiro:", numeroInteiro);
console.log("- Decimal:", numeroDecimal);
console.log("- Negativo:", numeroNegativo);
console.log("- Notação científica:", numeroGrande);

// Strings
let textoSimples = "Olá mundo";
let textoComAspas = 'Texto com "aspas duplas" dentro';
let templateString = `Nome: ${nomeCompleto}, Idade: ${idade}`;

console.log("\nStrings:");
console.log("- Simples:", textoSimples);
console.log("- Com aspas:", textoComAspas);
console.log("- Template:", templateString);

// Booleanos
let verdadeiro = true;
let falso = false;
let comparacao = idade > 18;

console.log("\nBooleanos:");
console.log("- Verdadeiro:", verdadeiro);
console.log("- Falso:", falso);
console.log("- Comparação:", comparacao);

// Undefined e null
let naoDefinido;
let valorNulo = null;

console.log("\nValores especiais:");
console.log("- Undefined:", naoDefinido);
console.log("- Null:", valorNulo);

console.log("\n=== CONVENÇÕES DE NOMENCLATURA ===");

// camelCase (recomendado para variáveis e funções)
let nomeUsuario = "João";
let idadeDoUsuario = 25;
let calcularIdadeEmMeses = () => idadeDoUsuario * 12;

// PascalCase (para classes e construtores)
const MinhaClasse = class {};
const Usuario = function(nome) { this.nome = nome; };

// UPPER_SNAKE_CASE (para constantes globais)
const URL_BASE_API = "https://api.exemplo.com";
const TIMEOUT_REQUISICAO = 5000;
const STATUS_CODES = {
    SUCESSO: 200,
    NAO_ENCONTRADO: 404,
    ERRO_SERVIDOR: 500
};

console.log("Convenções aplicadas:");
console.log("- camelCase:", nomeUsuario);
console.log("- Constante:", URL_BASE_API);
console.log("- Status codes:", STATUS_CODES.SUCESSO);

console.log("\n=== BOAS PRÁTICAS ===");

// 1. Use const por padrão
const configuracao = {
    tema: "escuro",
    idioma: "pt-BR"
};

// 2. Use let apenas quando precisar reatribuir
let contador = 0;
contador++; // Precisa reatribuir

// 3. Evite var
// var obsoleta = "Não use var em código novo";

// 4. Nomes descritivos
const usuario = {
    nome: "Ana",
    email: "ana@email.com",
    estaAtivo: true
};

// Em vez de: let u, n, e
let nomeDoUsuario = usuario.nome;
let emailDoUsuario = usuario.email;
let usuarioEstaAtivo = usuario.estaAtivo;

console.log("Variáveis com nomes descritivos:");
console.log(`Usuário: ${nomeDoUsuario} (${emailDoUsuario})`);
console.log(`Status: ${usuarioEstaAtivo ? "Ativo" : "Inativo"}`);

console.log("\n=== MUTABILIDADE DE OBJETOS E ARRAYS ===");

// const não impede mutação de objetos
const pessoa = {
    nome: "Carlos",
    idade: 30
};

pessoa.idade = 31; // Permitido! Está mutando o objeto, não reatribuindo
pessoa.profissao = "Engenheiro"; // Permitido!

console.log("Objeto mutado:", pessoa);

// const não impede mutação de arrays
const frutas = ["maçã", "banana"];
frutas.push("laranja"); // Permitido!
frutas[0] = "pêra"; // Permitido!

console.log("Array mutado:", frutas);

// Para tornar imutável, use Object.freeze()
const pessoaImutavel = Object.freeze({
    nome: "Diana",
    idade: 28
});

// pessoaImutavel.idade = 29; // Ignorado em modo não-strict, erro em strict mode
console.log("Pessoa imutável:", pessoaImutavel);

console.log("\n=== COMPARAÇÃO ENTRE VAR, LET E CONST ===");

console.log("| Característica | var | let | const |");
console.log("|---------------|-----|-----|-------|");
console.log("| Escopo        | Função | Bloco | Bloco |");
console.log("| Hoisting      | Sim | Sim* | Sim* |");
console.log("| Redeclaração  | Sim | Não | Não |");
console.log("| Reatribuição  | Sim | Sim | Não |");
console.log("| TDZ**         | Não | Sim | Sim |");
console.log("\n* Hoisted mas inacessível até declaração");
console.log("** TDZ = Temporal Dead Zone");

console.log("\n✅ Exemplos de variáveis concluídos!");
