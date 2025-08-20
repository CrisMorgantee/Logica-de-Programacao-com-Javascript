
// ===============================================
// PROJETO PRÁTICO: SISTEMA DE PERFIL DE USUÁRIO
// ===============================================

console.log("🚀 INICIANDO SISTEMA DE PERFIL DE USUÁRIO");
console.log("=" .repeat(50));

// ===== CONFIGURAÇÕES GLOBAIS (CONST) =====
const EMPRESA = "TechCorp Solutions";
const VERSAO_SISTEMA = "2.1.0";
const MAX_TENTATIVAS_LOGIN = 3;
const TEMPO_SESSAO_MINUTOS = 30;
const TIPOS_USUARIO = {
    ADMIN: "administrador",
    USER: "usuario",
    GUEST: "convidado"
};

console.log(`Sistema: ${EMPRESA} v${VERSAO_SISTEMA}`);
console.log(`Configurações carregadas ✅`);

// ===== DADOS DO USUÁRIO (LET para valores que mudam) =====
let nomeUsuario = "Maria Silva";
let emailUsuario = "maria.silva@email.com";
let idadeUsuario = 28;
let tipoUsuario = TIPOS_USUARIO.USER;
let usuarioAtivo = true;
let ultimoLogin = new Date();
let tentativasLogin = 0;
let tempoSessaoRestante = TEMPO_SESSAO_MINUTOS;

// ===== PREFERÊNCIAS DO USUÁRIO =====
let temaPreferido = "escuro";
let idiomaPreferido = "pt-BR";
let notificacoesAtivas = true;
let configuracaoPrivacidade = "publico";

console.log("\n👤 DADOS DO USUÁRIO CARREGADOS");
console.log(`Nome: ${nomeUsuario}`);
console.log(`Email: ${emailUsuario}`);
console.log(`Tipo: ${tipoUsuario}`);
console.log(`Status: ${usuarioAtivo ? "Ativo" : "Inativo"}`);

// ===== INFORMAÇÕES DA SESSÃO =====
let sessaoId = Math.random().toString(36).substr(2, 9);
let inicioSessao = new Date();
let dispositivoAcesso = "Desktop Chrome";
let localizacaoAcesso = "São Paulo, SP";

console.log("\n🔐 SESSÃO INICIADA");
console.log(`ID da Sessão: ${sessaoId}`);
console.log(`Início: ${inicioSessao.toLocaleString("pt-BR")}`);
console.log(`Dispositivo: ${dispositivoAcesso}`);

// ===== SIMULAÇÃO DE ATIVIDADES DO USUÁRIO =====
console.log("\n📊 SIMULANDO ATIVIDADES DO USUÁRIO...");

// Simular mudança de configurações
console.log("\n🎨 Alterando preferências do usuário:");
temaPreferido = "claro";
console.log(`Tema alterado para: ${temaPreferido}`);

idiomaPreferido = "en-US";
console.log(`Idioma alterado para: ${idiomaPreferido}`);

notificacoesAtivas = false;
console.log(`Notificações: ${notificacoesAtivas ? "Ativadas" : "Desativadas"}`);

// Simular atualização de perfil
console.log("\n✏️ Atualizando dados do perfil:");
let novoNome = "Maria Silva Santos";
let novaIdade = 29;

console.log(`Nome anterior: ${nomeUsuario}`);
nomeUsuario = novoNome;
console.log(`Nome atualizado: ${nomeUsuario}`);

console.log(`Idade anterior: ${idadeUsuario}`);
idadeUsuario = novaIdade;
console.log(`Nova idade: ${idadeUsuario}`);

// ===== SISTEMA DE PONTUAÇÃO E ESTATÍSTICAS =====
let pontuacaoUsuario = 0;
let nivelUsuario = 1;
let experienciaAtual = 0;
let experienciaNecessaria = 100;

console.log("\n🏆 SISTEMA DE GAMIFICAÇÃO");

// Simular atividades que geram pontos
const atividades = [
    { nome: "Login diário", pontos: 10 },
    { nome: "Perfil completo", pontos: 50 },
    { nome: "Primeira postagem", pontos: 25 },
    { nome: "Convite enviado", pontos: 15 }
];

atividades.forEach(atividade => {
    pontuacaoUsuario += atividade.pontos;
    experienciaAtual += atividade.pontos;
    console.log(`✅ ${atividade.nome}: +${atividade.pontos} pontos`);
});

// Verificar se subiu de nível
if (experienciaAtual >= experienciaNecessaria) {
    nivelUsuario++;
    experienciaAtual -= experienciaNecessaria;
    experienciaNecessaria = nivelUsuario * 100;
    console.log(`🎉 PARABÉNS! Você subiu para o nível ${nivelUsuario}!`);
}

console.log(`\nEstatísticas atuais:`);
console.log(`- Pontuação total: ${pontuacaoUsuario}`);
console.log(`- Nível atual: ${nivelUsuario}`);
console.log(`- Experiência: ${experienciaAtual}/${experienciaNecessaria}`);

// ===== SISTEMA DE SEGURANÇA =====
console.log("\n🔒 SIMULANDO VERIFICAÇÕES DE SEGURANÇA");

// Simular tentativas de login
let loginBemSucedido = false;
let senhaCorreta = "senha123"; // Em um sistema real, seria hash
let tentativaSenha = "senha456"; // Simulando senha incorreta

console.log("Verificando credenciais...");

if (tentativaSenha === senhaCorreta) {
    loginBemSucedido = true;
    tentativasLogin = 0;
    console.log("✅ Login realizado com sucesso!");
} else {
    tentativasLogin++;
    console.log(`❌ Senha incorreta. Tentativa ${tentativasLogin}/${MAX_TENTATIVAS_LOGIN}`);
    
    if (tentativasLogin >= MAX_TENTATIVAS_LOGIN) {
        usuarioAtivo = false;
        console.log("🚫 Conta bloqueada devido a múltiplas tentativas incorretas!");
    }
}

// ===== SIMULAÇÃO DE TEMPO DE SESSÃO =====
console.log("\n⏰ SIMULANDO CONTROLE DE SESSÃO");

// Simular passagem de tempo
let minutosDecorridos = 25;
tempoSessaoRestante -= minutosDecorridos;

console.log(`Tempo decorrido: ${minutosDecorridos} minutos`);
console.log(`Tempo restante da sessão: ${tempoSessaoRestante} minutos`);

if (tempoSessaoRestante <= 5) {
    console.log("⚠️ AVISO: Sua sessão expirará em breve!");
}

if (tempoSessaoRestante <= 0) {
    console.log("🔐 Sessão expirada. Faça login novamente.");
    usuarioAtivo = false;
}

// ===== RELATÓRIO FINAL DO SISTEMA =====
console.log("\n📋 RELATÓRIO FINAL DO SISTEMA");
console.log("=" .repeat(40));

// Informações básicas
console.log("INFORMAÇÕES BÁSICAS:");
console.log(`- Nome: ${nomeUsuario}`);
console.log(`- Email: ${emailUsuario}`);
console.log(`- Idade: ${idadeUsuario} anos`);
console.log(`- Tipo: ${tipoUsuario}`);
console.log(`- Status: ${usuarioAtivo ? "🟢 Ativo" : "🔴 Inativo"}`);

// Preferências
console.log("\nPREFERÊNCIAS:");
console.log(`- Tema: ${temaPreferido}`);
console.log(`- Idioma: ${idiomaPreferido}`);
console.log(`- Notificações: ${notificacoesAtivas ? "Ativadas" : "Desativadas"}`);
console.log(`- Privacidade: ${configuracaoPrivacidade}`);

// Gamificação
console.log("\nGAMIFICAÇÃO:");
console.log(`- Nível: ${nivelUsuario}`);
console.log(`- Pontuação: ${pontuacaoUsuario}`);
console.log(`- Experiência: ${experienciaAtual}/${experienciaNecessaria}`);

// Sessão
console.log("\nSESSÃO:");
console.log(`- ID: ${sessaoId}`);
console.log(`- Início: ${inicioSessao.toLocaleString("pt-BR")}`);
console.log(`- Dispositivo: ${dispositivoAcesso}`);
console.log(`- Localização: ${localizacaoAcesso}`);
console.log(`- Tempo restante: ${tempoSessaoRestante > 0 ? tempoSessaoRestante + " min" : "Expirada"}`);

// Segurança
console.log("\nSEGURANÇA:");
console.log(`- Tentativas de login: ${tentativasLogin}/${MAX_TENTATIVAS_LOGIN}`);
console.log(`- Último acesso: ${ultimoLogin.toLocaleString("pt-BR")}`);

console.log("\n✅ PROJETO PRÁTICO CONCLUÍDO!");
console.log("🎯 Conceitos aplicados:");
console.log("   • Uso correto de const, let e var");
console.log("   • Convenções de nomenclatura");
console.log("   • Escopo de variáveis");
console.log("   • Tipos de dados diversos");
console.log("   • Simulação de sistema real");
