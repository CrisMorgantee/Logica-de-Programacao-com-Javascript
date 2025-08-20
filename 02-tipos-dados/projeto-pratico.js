// ==============================================
// PROJETO PRÁTICO: SISTEMA DE VALIDAÇÃO DE DADOS
// ==============================================

console.log("🎯 SISTEMA DE VALIDAÇÃO DE DADOS EM JAVASCRIPT");
console.log("=" .repeat(50));

// ===== CONFIGURAÇÕES DO SISTEMA =====
const SISTEMA = {
    NOME: "DataValidator Pro",
    VERSAO: "1.2.0",
    AUTOR: "Equipe DevJS",
    MAX_TENTATIVAS: 3,
    TIMEOUT_SESSAO: 1800000 // 30 minutos em milissegundos
};

console.log(`🚀 Iniciando ${SISTEMA.NOME} v${SISTEMA.VERSAO}`);
console.log(`👨‍💻 Desenvolvido por: ${SISTEMA.AUTOR}`);

// ===== TIPOS DE DADOS PARA VALIDAÇÃO =====
console.log("\n📊 DEFININDO TIPOS DE DADOS PARA VALIDAÇÃO");

// Dados de entrada (simulando dados de formulário)
let dadosEntrada = {
    // Strings
    nomeCompleto: "Maria Silva Santos",
    email: "maria.silva@empresa.com.br",
    telefone: "(11) 99999-8888",
    endereco: "Rua das Flores, 123 - Jardim Primavera",
    observacoes: "Cliente VIP - atendimento prioritário",

    // Numbers
    idade: 29,
    salario: 5750.50,
    dependentes: 2,
    anoNascimento: 1995,
    pontuacaoCredito: 850.75,

    // Booleans
    ativo: true,
    emailVerificado: false,
    termoAceito: true,
    newsletterOpt: false,
    maiorIdade: true,

    // Tipos especiais
    ultimoLogin: null,
    tokenSessao: undefined,
    codigoVerificacao: Symbol("verification_code"),
    numeroContrato: BigInt("1234567890123456789"),

    // Objetos aninhados
    enderecoPrincipal: {
        rua: "Rua Principal",
        numero: 456,
        bairro: "Centro",
        cidade: "São Paulo",
        estado: "SP",
        cep: "01000-000",
        complemento: null
    },

    // Arrays
    telefones: ["(11) 99999-8888", "(11) 3333-4444"],
    emails: ["principal@email.com", "secundario@email.com"],
    interessesCategorias: ["tecnologia", "viagem", "culinária"],
    historicoCompras: [299.90, 1500.00, 89.99]
};

console.log("✅ Dados de entrada carregados");

// ===== FUNÇÕES DE VALIDAÇÃO POR TIPO =====
console.log("\n🔍 IMPLEMENTANDO VALIDAÇÕES POR TIPO DE DADO");

// Validação de Strings
function validarString(valor, nomecampo, tamanhoMin = 1, tamanhoMax = 255) {
    const resultados = {
        valido: false,
        tipo: typeof valor,
        mensagem: "",
        detalhes: {}
    };

    // Verificar tipo
    if (typeof valor !== "string") {
        resultados.mensagem = `${nomecampo} deve ser uma string`;
        return resultados;
    }

    // Verificar se não está vazio
    if (valor.trim().length === 0) {
        resultados.mensagem = `${nomecampo} não pode estar vazio`;
        return resultados;
    }

    // Verificar tamanho
    if (valor.length < tamanhoMin || valor.length > tamanhoMax) {
        resultados.mensagem = `${nomecampo} deve ter entre ${tamanhoMin} e ${tamanhoMax} caracteres`;
        return resultados;
    }

    // Detalhes adicionais
    resultados.detalhes = {
        tamanho: valor.length,
        temEspacos: valor.includes(" "),
        primeiraLetraMaiuscula: valor[0] === valor[0].toUpperCase(),
        contemNumeros: /\d/.test(valor),
        contemCaracteresEspeciais: /[!@#$%^&*(),.?":{}|<>]/.test(valor)
    };

    resultados.valido = true;
    resultados.mensagem = "String válida";
    return resultados;
}

// Validação de Numbers
function validarNumber(valor, nomeField, min = -Infinity, max = Infinity) {
    const resultados = {
        valido: false,
        tipo: typeof valor,
        mensagem: "",
        detalhes: {}
    };

    // Verificar tipo
    if (typeof valor !== "number") {
        resultados.mensagem = `${nomeField} deve ser um número`;
        return resultados;
    }

    // Verificar se é NaN
    if (Number.isNaN(valor)) {
        resultados.mensagem = `${nomeField} não é um número válido (NaN)`;
        return resultados;
    }

    // Verificar se é finito
    if (!Number.isFinite(valor)) {
        resultados.mensagem = `${nomeField} deve ser um número finito`;
        return resultados;
    }

    // Verificar range
    if (valor < min || valor > max) {
        resultados.mensagem = `${nomeField} deve estar entre ${min} e ${max}`;
        return resultados;
    }

    // Detalhes adicionais
    resultados.detalhes = {
        eInteiro: Number.isInteger(valor),
        ePositivo: valor > 0,
        eNegativo: valor < 0,
        eZero: valor === 0,
        casasDecimais: valor.toString().includes('.') ? valor.toString().split('.')[1].length : 0
    };

    resultados.valido = true;
    resultados.mensagem = "Número válido";
    return resultados;
}

// Validação de Booleans
function validarBoolean(valor, nomeField) {
    const resultados = {
        valido: false,
        tipo: typeof valor,
        mensagem: "",
        detalhes: {}
    };

    if (typeof valor !== "boolean") {
        resultados.mensagem = `${nomeField} deve ser um boolean (true/false)`;
        return resultados;
    }

    resultados.detalhes = {
        valor: valor,
        conversaoString: valor.toString(),
        conversaoNumber: Number(valor)
    };

    resultados.valido = true;
    resultados.mensagem = "Boolean válido";
    return resultados;
}

// Validação de Arrays
function validarArray(valor, nomeField, tamanhoMin = 0, tamanhoMax = 100) {
    const resultados = {
        valido: false,
        tipo: typeof valor,
        mensagem: "",
        detalhes: {}
    };

    if (!Array.isArray(valor)) {
        resultados.mensagem = `${nomeField} deve ser um array`;
        return resultados;
    }

    if (valor.length < tamanhoMin || valor.length > tamanhoMax) {
        resultados.mensagem = `${nomeField} deve ter entre ${tamanhoMin} e ${tamanhoMax} elementos`;
        return resultados;
    }

    // Análise dos tipos dos elementos
    const tiposElementos = valor.map(item => typeof item);
    const tiposUnicos = [...new Set(tiposElementos)];

    resultados.detalhes = {
        tamanho: valor.length,
        estaVazio: valor.length === 0,
        tiposElementos: tiposUnicos,
        eHomogeneo: tiposUnicos.length === 1,
        primeiroElemento: valor[0],
        ultimoElemento: valor[valor.length - 1]
    };

    resultados.valido = true;
    resultados.mensagem = "Array válido";
    return resultados;
}

// Validação de Objetos
function validarObjeto(valor, nomeField, propriedadesObrigatorias = []) {
    const resultados = {
        valido: false,
        tipo: typeof valor,
        mensagem: "",
        detalhes: {}
    };

    if (typeof valor !== "object" || valor === null || Array.isArray(valor)) {
        resultados.mensagem = `${nomeField} deve ser um objeto`;
        return resultados;
    }

    // Verificar propriedades obrigatórias
    const propriedadesExistentes = Object.keys(valor);
    const propriedadesFaltando = propriedadesObrigatorias.filter(
        prop => !propriedadesExistentes.includes(prop)
    );

    if (propriedadesFaltando.length > 0) {
        resultados.mensagem = `${nomeField} deve conter as propriedades: ${propriedadesFaltando.join(", ")}`;
        return resultados;
    }

    resultados.detalhes = {
        quantidadePropriedades: propriedadesExistentes.length,
        propriedades: propriedadesExistentes,
        estaVazio: propriedadesExistentes.length === 0,
        temPropriedadesNulas: propriedadesExistentes.some(prop => valor[prop] === null)
    };

    resultados.valido = true;
    resultados.mensagem = "Objeto válido";
    return resultados;
}

// ===== VALIDAÇÕES ESPECIALIZADAS =====
console.log("\n🔬 IMPLEMENTANDO VALIDAÇÕES ESPECIALIZADAS");

// Validação de Email
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const resultados = {
        valido: false,
        mensagem: "",
        detalhes: {}
    };

    if (typeof email !== "string") {
        resultados.mensagem = "Email deve ser uma string";
        return resultados;
    }

    if (!regexEmail.test(email)) {
        resultados.mensagem = "Formato de email inválido";
        return resultados;
    }

    const partes = email.split("@");
    resultados.detalhes = {
        usuario: partes[0],
        dominio: partes[1],
        tamanho: email.length,
        temPontos: email.includes("."),
        terminacaoValida: /\.(com|org|net|gov|edu|br|com\.br)$/.test(email)
    };

    resultados.valido = true;
    resultados.mensagem = "Email válido";
    return resultados;
}

// Validação de Telefone
function validarTelefone(telefone) {
    const regexTelefone = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    const resultados = {
        valido: false,
        mensagem: "",
        detalhes: {}
    };

    if (typeof telefone !== "string") {
        resultados.mensagem = "Telefone deve ser uma string";
        return resultados;
    }

    if (!regexTelefone.test(telefone)) {
        resultados.mensagem = "Formato de telefone inválido. Use (XX) XXXXX-XXXX";
        return resultados;
    }

    const apenasNumeros = telefone.replace(/\D/g, "");
    resultados.detalhes = {
        formatoCompleto: telefone,
        apenasNumeros: apenasNumeros,
        ddd: apenasNumeros.substring(0, 2),
        numero: apenasNumeros.substring(2),
        eCelular: apenasNumeros.length === 11
    };

    resultados.valido = true;
    resultados.mensagem = "Telefone válido";
    return resultados;
}

// ===== EXECUTANDO VALIDAÇÕES =====
console.log("\n🔍 EXECUTANDO VALIDAÇÕES DOS DADOS");

// Validar strings
console.log("\n📝 VALIDANDO STRINGS:");
const validacaoNome = validarString(dadosEntrada.nomeCompleto, "Nome Completo", 2, 100);
console.log(`Nome: ${validacaoNome.mensagem} (${validacaoNome.detalhes.tamanho} caracteres)`);

const validacaoEmail = validarEmail(dadosEntrada.email);
console.log(`Email: ${validacaoEmail.mensagem}`);
if (validacaoEmail.valido) {
    console.log(`  • Usuário: ${validacaoEmail.detalhes.usuario}`);
    console.log(`  • Domínio: ${validacaoEmail.detalhes.dominio}`);
}

const validacaoTelefone = validarTelefone(dadosEntrada.telefone);
console.log(`Telefone: ${validacaoTelefone.mensagem}`);
if (validacaoTelefone.valido) {
    console.log(`  • DDD: ${validacaoTelefone.detalhes.ddd}`);
    console.log(`  • É celular: ${validacaoTelefone.detalhes.eCelular ? "Sim" : "Não"}`);
}

// Validar numbers
console.log("\n🔢 VALIDANDO NÚMEROS:");
const validacaoIdade = validarNumber(dadosEntrada.idade, "Idade", 0, 150);
console.log(`Idade: ${validacaoIdade.mensagem}`);
if (validacaoIdade.valido) {
    console.log(`  • É inteiro: ${validacaoIdade.detalhes.eInteiro ? "Sim" : "Não"}`);
    console.log(`  • É positivo: ${validacaoIdade.detalhes.ePositivo ? "Sim" : "Não"}`);
}

const validacaoSalario = validarNumber(dadosEntrada.salario, "Salário", 0, 1000000);
console.log(`Salário: ${validacaoSalario.mensagem}`);
if (validacaoSalario.valido) {
    console.log(`  • Casas decimais: ${validacaoSalario.detalhes.casasDecimais}`);
    console.log(`  • Valor: R$ ${dadosEntrada.salario.toFixed(2)}`);
}

// Validar booleans
console.log("\n✅ VALIDANDO BOOLEANS:");
const validacaoAtivo = validarBoolean(dadosEntrada.ativo, "Status Ativo");
console.log(`Status Ativo: ${validacaoAtivo.mensagem} (${dadosEntrada.ativo})`);

const validacaoTermos = validarBoolean(dadosEntrada.termoAceito, "Termos Aceitos");
console.log(`Termos: ${validacaoTermos.mensagem} (${dadosEntrada.termoAceito})`);

// Validar arrays
console.log("\n📚 VALIDANDO ARRAYS:");
const validacaoTelefones = validarArray(dadosEntrada.telefones, "Lista de Telefones", 1, 5);
console.log(`Telefones: ${validacaoTelefones.mensagem}`);
if (validacaoTelefones.valido) {
    console.log(`  • Quantidade: ${validacaoTelefones.detalhes.tamanho}`);
    console.log(`  • Homogêneo: ${validacaoTelefones.detalhes.eHomogeneo ? "Sim" : "Não"}`);
}

const validacaoEmails = validarArray(dadosEntrada.emails, "Lista de Emails", 1, 3);
console.log(`Emails: ${validacaoEmails.mensagem}`);

// Validar objetos
console.log("\n📦 VALIDANDO OBJETOS:");
const validacaoEndereco = validarObjeto(
    dadosEntrada.enderecoPrincipal,
    "Endereço Principal",
    ["rua", "numero", "cidade", "estado"]
);
console.log(`Endereço: ${validacaoEndereco.mensagem}`);
if (validacaoEndereco.valido) {
    console.log(`  • Propriedades: ${validacaoEndereco.detalhes.quantidadePropriedades}`);
    console.log(`  • Tem nulos: ${validacaoEndereco.detalhes.temPropriedadesNulas ? "Sim" : "Não"}`);
}

// ===== CONVERSÕES AUTOMÁTICAS =====
console.log("\n🔄 DEMONSTRANDO CONVERSÕES AUTOMÁTICAS");

// Strings para Numbers
console.log("\n➡️ CONVERSÕES PARA NÚMERO:");
const stringsNumeros = ["123", "45.67", "0", "-89", "abc", "", "null", "undefined"];

stringsNumeros.forEach(str => {
    const numero = Number(str);
    const parseFloat_resultado = parseFloat(str);
    const parseInt_resultado = parseInt(str);

    console.log(`"${str}":`);
    console.log(`  • Number(): ${numero} (${typeof numero})`);
    console.log(`  • parseFloat(): ${parseFloat_resultado}`);
    console.log(`  • parseInt(): ${parseInt_resultado}`);
    console.log(`  • É NaN: ${Number.isNaN(numero)}`);
});

// Numbers para Strings
console.log("\n➡️ CONVERSÕES PARA STRING:");
const numeros = [123, 45.67, 0, -89, Infinity, NaN];

numeros.forEach(num => {
    console.log(`${num}:`);
    console.log(`  • String(): "${String(num)}"`);
    console.log(`  • toString(): "${num.toString()}"`);
    console.log(`  • Concatenação: "${num + ""}"`);
});

// Para Boolean
console.log("\n➡️ CONVERSÕES PARA BOOLEAN:");
const valores = [0, 1, "", "texto", null, undefined, [], {}, NaN, Infinity];

valores.forEach(valor => {
    console.log(`${JSON.stringify(valor)} → Boolean: ${Boolean(valor)}`);
});

// ===== RELATÓRIO FINAL =====
console.log("\n📋 RELATÓRIO FINAL DE VALIDAÇÃO");
console.log("=" .repeat(50));

// Contar validações
let validacoesTotais = 0;
let validacoesSucesso = 0;
let validacoesFalha = 0;

const resultadosValidacao = [
    validacaoNome, validacaoEmail, validacaoTelefone,
    validacaoIdade, validacaoSalario,
    validacaoAtivo, validacaoTermos,
    validacaoTelefones, validacaoEmails,
    validacaoEndereco
];

resultadosValidacao.forEach(resultado => {
    validacoesTotais++;
    if (resultado.valido) {
        validacoesSucesso++;
    } else {
        validacoesFalha++;
    }
});

console.log(`📊 ESTATÍSTICAS:`);
console.log(`• Total de validações: ${validacoesTotais}`);
console.log(`• Sucessos: ${validacoesSucesso} (${((validacoesSucesso/validacoesTotais)*100).toFixed(1)}%)`);
console.log(`• Falhas: ${validacoesFalha} (${((validacoesFalha/validacoesTotais)*100).toFixed(1)}%)`);

console.log(`\n🎯 TIPOS DE DADOS IDENTIFICADOS:`);
Object.entries(dadosEntrada).forEach(([chave, valor]) => {
    let tipo = typeof valor;
    if (valor === null) tipo = "null";
    if (Array.isArray(valor)) tipo = "array";
    if (typeof valor === "object" && valor !== null && !Array.isArray(valor)) {
        tipo = "object";
    }

    console.log(`• ${chave}: ${tipo}`);
});

console.log("\n✅ PROJETO PRÁTICO DE TIPOS DE DADOS CONCLUÍDO!");
console.log("🎓 Conceitos aplicados:");
console.log("   • Identificação de tipos primitivos e não-primitivos");
console.log("   • Validação personalizada por tipo");
console.log("   • Conversões automáticas e manuais");
console.log("   • Verificações especiais (NaN, Infinity, null vs undefined)");
console.log("   • Validações complexas (email, telefone)");
console.log("   • Análise detalhada de estruturas de dados");