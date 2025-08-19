
// PASSO 3: SISTEMA DE USUÁRIOS
// =============================
// Conceitos aplicados: objetos, estruturas de controle, validação

console.log("🛒 PASSO 3: SISTEMA DE USUÁRIOS");
console.log("=".repeat(50));

// 3.1 - FUNÇÃO PARA VALIDAR EMAIL (estruturas de controle + funções)
function validarEmail(email) {
    // Verificação básica de email
    if (typeof email !== "string") {
        return false;
    }
    
    if (email.length < 5) {
        return false;
    }
    
    if (!email.includes("@")) {
        return false;
    }
    
    if (!email.includes(".")) {
        return false;
    }
    
    return true;
}

// 3.2 - FUNÇÃO PARA VALIDAR IDADE
function validarIdade(idade) {
    if (typeof idade !== "number") {
        return false;
    }
    
    if (idade < 0 || idade > 120) {
        return false;
    }
    
    return true;
}

// 3.3 - FUNÇÃO FACTORY PARA CRIAR USUÁRIOS
function criarUsuario(nome, email, idade, cidade) {
    // Validações usando estruturas de controle
    if (!nome || nome.length < 2) {
        console.log("❌ Erro: Nome deve ter pelo menos 2 caracteres");
        return null;
    }
    
    if (!validarEmail(email)) {
        console.log("❌ Erro: Email inválido");
        return null;
    }
    
    if (!validarIdade(idade)) {
        console.log("❌ Erro: Idade inválida");
        return null;
    }
    
    // Determinar categoria do cliente por idade
    let categoria;
    if (idade < 18) {
        categoria = "Menor";
    } else if (idade >= 18 && idade < 60) {
        categoria = "Adulto";
    } else {
        categoria = "Idoso";
    }
    
    // Determinar desconto por categoria
    let descontoPercentual;
    switch (categoria) {
        case "Menor":
            descontoPercentual = 5; // 5% desconto para menores
            break;
        case "Idoso":
            descontoPercentual = 10; // 10% desconto para idosos
            break;
        default:
            descontoPercentual = 0;
    }
    
    return {
        id: Date.now(), // ID simples baseado no timestamp
        nome,
        email,
        idade,
        cidade,
        categoria,
        descontoPercentual,
        ativo: true,
        dataCadastro: new Date(),
        totalCompras: 0,
        historicoCompras: [],
        
        // Método para exibir informações
        exibirInfo() {
            return `${this.nome} (${this.idade} anos) - ${this.email} - ${this.categoria}`;
        },
        
        // Método para verificar se pode comprar álcool
        podeComprarAlcool() {
            return this.idade >= 18;
        },
        
        // Método para calcular desconto
        calcularDesconto(valor) {
            if (this.descontoPercentual > 0) {
                return valor * (this.descontoPercentual / 100);
            }
            return 0;
        },
        
        // Método para adicionar compra ao histórico
        adicionarCompra(valor) {
            this.totalCompras += valor;
            this.historicoCompras.push({
                data: new Date(),
                valor: valor
            });
        }
    };
}

// 3.4 - CRIANDO USUÁRIOS COM VALIDAÇÃO
console.log("\n👥 CRIANDO USUÁRIOS:");

const usuarios = [];

// Usuários válidos
const usuario1 = criarUsuario("Ana Silva", "ana@email.com", 25, "São Paulo");
const usuario2 = criarUsuario("João Santos", "joao@email.com", 65, "Rio de Janeiro");
const usuario3 = criarUsuario("Maria Costa", "maria@email.com", 16, "Belo Horizonte");

// Tentativas com dados inválidos
console.log("\n⚠️ TESTANDO VALIDAÇÕES:");
const usuarioInvalido1 = criarUsuario("A", "email-inválido", 25, "São Paulo"); // Nome muito curto
const usuarioInvalido2 = criarUsuario("Pedro", "pedro@email.com", -5, "Salvador"); // Idade inválida
const usuarioInvalido3 = criarUsuario("Carlos", "sem-arroba.com", 30, "Fortaleza"); // Email sem @

// Adicionando apenas usuários válidos
if (usuario1) usuarios.push(usuario1);
if (usuario2) usuarios.push(usuario2);
if (usuario3) usuarios.push(usuario3);

// 3.5 - EXIBINDO USUÁRIOS CADASTRADOS
console.log("\n📋 USUÁRIOS CADASTRADOS:");
for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i];
    const podeAlcool = usuario.podeComprarAlcool() ? "✅" : "❌";
    const desconto = usuario.descontoPercentual > 0 ? `${usuario.descontoPercentual}% desconto` : "Sem desconto";
    
    console.log(`${i + 1}. ${usuario.exibirInfo()}`);
    console.log(`   Pode comprar álcool: ${podeAlcool} | ${desconto}`);
}

// 3.6 - FUNÇÃO PARA BUSCAR USUÁRIO POR EMAIL
function buscarUsuarioPorEmail(email) {
    for (let usuario of usuarios) {
        if (usuario.email === email) {
            return usuario;
        }
    }
    return null;
}

// 3.7 - TESTANDO BUSCA E DESCONTOS
console.log("\n🔍 TESTANDO BUSCA E DESCONTOS:");

const emailBusca = "joao@email.com";
const usuarioEncontrado = buscarUsuarioPorEmail(emailBusca);

if (usuarioEncontrado) {
    console.log(`Usuário encontrado: ${usuarioEncontrado.nome}`);
    
    // Simulando compra com desconto
    const valorCompra = 100.00;
    const desconto = usuarioEncontrado.calcularDesconto(valorCompra);
    const valorFinal = valorCompra - desconto;
    
    console.log(`Valor da compra: R$${valorCompra.toFixed(2)}`);
    if (desconto > 0) {
        console.log(`Desconto aplicado: R$${desconto.toFixed(2)} (${usuarioEncontrado.descontoPercentual}%)`);
    }
    console.log(`Valor final: R$${valorFinal.toFixed(2)}`);
    
    // Registrando a compra
    usuarioEncontrado.adicionarCompra(valorFinal);
    console.log(`Total de compras do usuário: R$${usuarioEncontrado.totalCompras.toFixed(2)}`);
} else {
    console.log("❌ Usuário não encontrado");
}

// 3.8 - RELATÓRIO DE USUÁRIOS POR CATEGORIA
console.log("\n📊 USUÁRIOS POR CATEGORIA:");

const relatorioCategoria = {
    "Menor": 0,
    "Adulto": 0,
    "Idoso": 0
};

for (let usuario of usuarios) {
    relatorioCategoria[usuario.categoria]++;
}

for (let categoria in relatorioCategoria) {
    console.log(`${categoria}: ${relatorioCategoria[categoria]} usuário(s)`);
}

console.log("\n✅ PASSO 3 CONCLUÍDO!");
console.log("Próximo: Criar carrinho de compras com arrays");
