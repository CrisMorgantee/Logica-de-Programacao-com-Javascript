// =====================================================================================
// EXEMPLOS COMPLETOS DE ESTRUTURAS DE CONTROLE EM JAVASCRIPT
// =====================================================================================

console.log("🚀 INICIANDO EXEMPLOS DE ESTRUTURAS DE CONTROLE");
console.log("=".repeat(60));

// =====================================================================================
// 1. ESTRUTURAS CONDICIONAIS BÁSICAS
// =====================================================================================

console.log("\n📋 1. ESTRUTURAS CONDICIONAIS BÁSICAS");
console.log("-".repeat(40));

// IF simples
let idade = 18;
if (idade >= 18) {
    console.log("✅ Maior de idade - pode votar");
}

// IF...ELSE
let temperatura = 22;
if (temperatura > 25) {
    console.log("🌡️ Está quente hoje");
} else {
    console.log("🌡️ Temperatura agradável");
}

// IF...ELSE IF...ELSE
let nota = 85;
let conceito;

if (nota >= 90) {
    conceito = "A - Excelente";
} else if (nota >= 80) {
    conceito = "B - Muito Bom";
} else if (nota >= 70) {
    conceito = "C - Bom";
} else if (nota >= 60) {
    conceito = "D - Regular";
} else {
    conceito = "F - Reprovado";
}

console.log(`Nota ${nota}: ${conceito}`);

// =====================================================================================
// 2. OPERADOR TERNÁRIO
// =====================================================================================

console.log("\n📋 2. OPERADOR TERNÁRIO");
console.log("-".repeat(40));

// Ternário simples
let saldo = 100;
let status = saldo >= 0 ? "Positivo" : "Negativo";
console.log(`Saldo: R$ ${saldo} - Status: ${status}`);

// Ternário aninhado
let pontuacao = 750;
let categoria = pontuacao >= 850 ? "Premium" : 
                pontuacao >= 700 ? "Gold" : 
                pontuacao >= 500 ? "Silver" : "Bronze";
console.log(`Pontuação: ${pontuacao} - Categoria: ${categoria}`);

// Ternário com expressões
let hora = 14;
let periodo = hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";
console.log(`${hora}h - ${periodo}`);

// =====================================================================================
// 3. SWITCH...CASE
// =====================================================================================

console.log("\n📋 3. SWITCH...CASE");
console.log("-".repeat(40));

// Switch básico
let diaSemana = 3;
let nomeDia;

switch (diaSemana) {
    case 1:
        nomeDia = "Domingo";
        break;
    case 2:
        nomeDia = "Segunda-feira";
        break;
    case 3:
        nomeDia = "Terça-feira";
        break;
    case 4:
        nomeDia = "Quarta-feira";
        break;
    case 5:
        nomeDia = "Quinta-feira";
        break;
    case 6:
        nomeDia = "Sexta-feira";
        break;
    case 7:
        nomeDia = "Sábado";
        break;
    default:
        nomeDia = "Dia inválido";
}

console.log(`Dia ${diaSemana}: ${nomeDia}`);

// Switch com múltiplos casos
let mes = 12;
let estacao;

switch (mes) {
    case 12:
    case 1:
    case 2:
        estacao = "Verão";
        break;
    case 3:
    case 4:
    case 5:
        estacao = "Outono";
        break;
    case 6:
    case 7:
    case 8:
        estacao = "Inverno";
        break;
    case 9:
    case 10:
    case 11:
        estacao = "Primavera";
        break;
    default:
        estacao = "Mês inválido";
}

console.log(`Mês ${mes}: ${estacao}`);

// Switch com fall-through intencional
let operacao = "admin";
let permissoes = [];

switch (operacao) {
    case "admin":
        permissoes.push("deletar");
        // fall through
    case "editor":
        permissoes.push("editar");
        // fall through
    case "viewer":
        permissoes.push("visualizar");
        break;
    default:
        permissoes.push("sem permissão");
}

console.log(`Operação ${operacao}: [${permissoes.join(", ")}]`);

// =====================================================================================
// 4. VALORES FALSY E TRUTHY
// =====================================================================================

console.log("\n📋 4. VALORES FALSY E TRUTHY");
console.log("-".repeat(40));

// Testando valores falsy
let valoresFalsy = [false, 0, -0, 0n, "", null, undefined, NaN];
console.log("Valores Falsy:");
valoresFalsy.forEach(valor => {
    if (!valor) {
        console.log(`  ❌ ${JSON.stringify(valor)} é falsy`);
    }
});

// Testando valores truthy
let valoresTruthy = [true, 1, -1, "0", "false", [], {}, function(){}];
console.log("\nValores Truthy:");
valoresTruthy.forEach(valor => {
    if (valor) {
        console.log(`  ✅ ${JSON.stringify(valor)} é truthy`);
    }
});

// Exemplos práticos com truthy/falsy
let nome = "";
if (nome) {
    console.log(`Bem-vindo, ${nome}!`);
} else {
    console.log("Por favor, informe seu nome");
}

let lista = [];
if (lista.length) {
    console.log(`Lista tem ${lista.length} itens`);
} else {
    console.log("Lista está vazia");
}

// =====================================================================================
// 5. OPERADORES LÓGICOS
// =====================================================================================

console.log("\n📋 5. OPERADORES LÓGICOS");
console.log("-".repeat(40));

// AND (&&)
let usuario = { nome: "João", ativo: true, admin: false };

if (usuario && usuario.ativo && usuario.nome) {
    console.log(`✅ Usuário ${usuario.nome} está ativo`);
}

// Short-circuit com &&
usuario && usuario.nome && console.log(`Olá, ${usuario.nome}!`);

// OR (||) para valores padrão
function saudar(nome) {
    nome = nome || "Visitante";
    console.log(`Olá, ${nome}!`);
}

saudar("Maria");
saudar("");
saudar();

// NOT (!)
let ativo = true;
console.log(`Usuário ${!ativo ? "inativo" : "ativo"}`);

// Dupla negação para conversão boolean
console.log("Conversões para boolean:");
console.log(`!!"hello": ${!!"hello"}`);
console.log(`!!0: ${!!0}`);
console.log(`!!null: ${!!null}`);

// =====================================================================================
// 6. OPERADORES DE COALESCÊNCIA (ES2020+)
// =====================================================================================

console.log("\n📋 6. OPERADORES DE COALESCÊNCIA");
console.log("-".repeat(40));

// Nullish Coalescing (??)
let config = {
    timeout: 0,
    retries: null,
    debug: false
};

// Diferença entre || e ??
console.log("Usando || (considera falsy):");
console.log(`timeout: ${config.timeout || 5000}`); // 5000 (0 é falsy)
console.log(`retries: ${config.retries || 3}`);    // 3 (null é falsy)
console.log(`debug: ${config.debug || true}`);     // true (false é falsy)

console.log("\nUsando ?? (apenas null/undefined):");
console.log(`timeout: ${config.timeout ?? 5000}`); // 0 (0 não é null/undefined)
console.log(`retries: ${config.retries ?? 3}`);    // 3 (null é null)
console.log(`debug: ${config.debug ?? true}`);     // false (false não é null/undefined)

// Optional Chaining (?.)
let pessoa = {
    nome: "Ana",
    endereco: {
        rua: "Rua A",
        numero: 123
    }
};

// Acesso seguro a propriedades aninhadas
console.log(`\nOptional Chaining:`);
console.log(`Rua: ${pessoa.endereco?.rua}`);           // "Rua A"
console.log(`CEP: ${pessoa.endereco?.cep ?? "N/A"}`);  // "N/A"
console.log(`Empresa: ${pessoa.empresa?.nome ?? "Não informado"}`); // "Não informado"

// =====================================================================================
// 7. ESTRUTURAS CONDICIONAIS COMPLEXAS
// =====================================================================================

console.log("\n📋 7. ESTRUTURAS CONDICIONAIS COMPLEXAS");
console.log("-".repeat(40));

// Guard clauses (cláusulas de guarda)
function processarPedido(pedido) {
    if (!pedido) {
        return "❌ Pedido é obrigatório";
    }

    if (!pedido.itens || pedido.itens.length === 0) {
        return "❌ Pedido deve ter pelo menos um item";
    }

    if (pedido.total <= 0) {
        return "❌ Total deve ser maior que zero";
    }

    return "✅ Pedido processado com sucesso";
}

// Testando guard clauses
console.log(processarPedido(null));
console.log(processarPedido({ itens: [] }));
console.log(processarPedido({ itens: ["item1"], total: 100 }));

// Condições múltiplas organizadas
function verificarAcesso(usuario) {
    const temIdade = usuario.idade >= 18;
    const estaAtivo = usuario.ativo === true;
    const temPermissao = usuario.role === "admin" || usuario.role === "user";
    const naoEstaBloquado = !usuario.bloqueado;

    if (temIdade && estaAtivo && temPermissao && naoEstaBloquado) {
        return "✅ Acesso liberado";
    }

    // Mensagens específicas para cada problema
    if (!temIdade) return "❌ Usuário menor de idade";
    if (!estaAtivo) return "❌ Conta inativa";
    if (!temPermissao) return "❌ Sem permissão";
    if (usuario.bloqueado) return "❌ Usuário bloqueado";

    return "❌ Acesso negado";
}

// Testando verificação de acesso
const usuario1 = { idade: 25, ativo: true, role: "user", bloqueado: false };
const usuario2 = { idade: 16, ativo: true, role: "user", bloqueado: false };
const usuario3 = { idade: 30, ativo: false, role: "admin", bloqueado: false };

console.log(`Usuário 1: ${verificarAcesso(usuario1)}`);
console.log(`Usuário 2: ${verificarAcesso(usuario2)}`);
console.log(`Usuário 3: ${verificarAcesso(usuario3)}`);

// =====================================================================================
// 8. PADRÕES AVANÇADOS
// =====================================================================================

console.log("\n📋 8. PADRÕES AVANÇADOS");
console.log("-".repeat(40));

// Evitando números mágicos
const STATUS_PEDIDO = {
    PENDENTE: 1,
    PROCESSANDO: 2,
    ENVIADO: 3,
    ENTREGUE: 4,
    CANCELADO: 5
};

function obterStatusTexto(status) {
    switch (status) {
        case STATUS_PEDIDO.PENDENTE:
            return "⏳ Pendente";
        case STATUS_PEDIDO.PROCESSANDO:
            return "🔄 Processando";
        case STATUS_PEDIDO.ENVIADO:
            return "📦 Enviado";
        case STATUS_PEDIDO.ENTREGUE:
            return "✅ Entregue";
        case STATUS_PEDIDO.CANCELADO:
            return "❌ Cancelado";
        default:
            return "❓ Status desconhecido";
    }
}

console.log(obterStatusTexto(STATUS_PEDIDO.PROCESSANDO));

// Validação de entrada com múltiplas checagens
function validarEmail(email) {
    // Checagens sequenciais com early return
    if (typeof email !== 'string') {
        return { valido: false, erro: "Email deve ser uma string" };
    }

    if (email.trim() === '') {
        return { valido: false, erro: "Email não pode estar vazio" };
    }

    if (!email.includes('@')) {
        return { valido: false, erro: "Email deve conter @" };
    }

    if (email.length < 5) {
        return { valido: false, erro: "Email muito curto" };
    }

    return { valido: true, erro: null };
}

// Testando validação
const emails = ["", "abc", "abc@", "test@email.com"];
emails.forEach(email => {
    const resultado = validarEmail(email);
    console.log(`Email "${email}": ${resultado.valido ? "✅ Válido" : "❌ " + resultado.erro}`);
});

console.log("\n✅ EXEMPLOS DE ESTRUTURAS DE CONTROLE CONCLUÍDOS!");
console.log("🎓 Conceitos demonstrados:");
console.log("   • Condicionais (if, else, else if)");
console.log("   • Operador ternário");
console.log("   • Switch...case");
console.log("   • Valores falsy e truthy");
console.log("   • Operadores lógicos (&&, ||, !)");
console.log("   • Nullish coalescing (??)");
console.log("   • Optional chaining (?.)");
console.log("   • Guard clauses");
console.log("   • Validação de entrada");
console.log("   • Padrões avançados");