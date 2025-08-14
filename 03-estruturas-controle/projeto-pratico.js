
// Projeto Prático: Sistema de Login e Níveis de Usuário

console.log("=== SISTEMA DE LOGIN E NÍVEIS DE USUÁRIO ===");

// Base de dados simulada
const usuarios = [
    { nome: "admin", senha: "admin123", tipo: "administrador", ativo: true },
    { nome: "joao", senha: "joao456", tipo: "funcionario", ativo: true },
    { nome: "maria", senha: "maria789", tipo: "cliente", ativo: false },
    { nome: "pedro", senha: "pedro321", tipo: "cliente", ativo: true }
];

function fazerLogin(nomeUsuario, senhaUsuario) {
    console.log(`\n=== Tentativa de login: ${nomeUsuario} ===`);
    
    // Verificar se usuário existe
    let usuarioEncontrado = null;
    
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nome === nomeUsuario) {
            usuarioEncontrado = usuarios[i];
            break;
        }
    }
    
    // Validar login
    if (!usuarioEncontrado) {
        console.log("❌ Usuário não encontrado");
        return null;
    }
    
    if (!usuarioEncontrado.ativo) {
        console.log("❌ Conta desativada. Entre em contato com o suporte.");
        return null;
    }
    
    if (usuarioEncontrado.senha !== senhaUsuario) {
        console.log("❌ Senha incorreta");
        return null;
    }
    
    console.log("✅ Login realizado com sucesso!");
    return usuarioEncontrado;
}

function definirPermissoes(usuario) {
    let permissoes = {};
    
    switch (usuario.tipo) {
        case "administrador":
            permissoes = {
                criarUsuarios: true,
                editarUsuarios: true,
                excluirUsuarios: true,
                visualizarRelatorios: true,
                gerenciarSistema: true
            };
            console.log("🔑 Permissões de ADMINISTRADOR concedidas");
            break;
            
        case "funcionario":
            permissoes = {
                criarUsuarios: false,
                editarUsuarios: true,
                excluirUsuarios: false,
                visualizarRelatorios: true,
                gerenciarSistema: false
            };
            console.log("👤 Permissões de FUNCIONÁRIO concedidas");
            break;
            
        case "cliente":
            permissoes = {
                criarUsuarios: false,
                editarUsuarios: false,
                excluirUsuarios: false,
                visualizarRelatorios: false,
                gerenciarSistema: false
            };
            console.log("🛒 Permissões de CLIENTE concedidas");
            break;
            
        default:
            permissoes = {
                criarUsuarios: false,
                editarUsuarios: false,
                excluirUsuarios: false,
                visualizarRelatorios: false,
                gerenciarSistema: false
            };
            console.log("⚠️ Tipo de usuário desconhecido - permissões básicas");
    }
    
    return permissoes;
}

function simularAcaoUsuario(usuario, permissoes, acao) {
    console.log(`\n--- Tentativa de: ${acao} ---`);
    
    let podeExecutar = false;
    
    switch (acao) {
        case "criar_usuario":
            podeExecutar = permissoes.criarUsuarios;
            break;
        case "editar_usuario":
            podeExecutar = permissoes.editarUsuarios;
            break;
        case "excluir_usuario":
            podeExecutar = permissoes.excluirUsuarios;
            break;
        case "ver_relatorios":
            podeExecutar = permissoes.visualizarRelatorios;
            break;
        case "gerenciar_sistema":
            podeExecutar = permissoes.gerenciarSistema;
            break;
        default:
            console.log("⚠️ Ação não reconhecida");
            return;
    }
    
    if (podeExecutar) {
        console.log(`✅ ${usuario.nome} executou: ${acao}`);
    } else {
        console.log(`❌ ${usuario.nome} não tem permissão para: ${acao}`);
    }
}

// Simulação de diferentes logins
const tentativasLogin = [
    { nome: "admin", senha: "admin123" },
    { nome: "joao", senha: "joao456" },
    { nome: "maria", senha: "maria789" },
    { nome: "pedro", senha: "senha_errada" },
    { nome: "inexistente", senha: "qualquer" }
];

tentativasLogin.forEach(tentativa => {
    let usuario = fazerLogin(tentativa.nome, tentativa.senha);
    
    if (usuario) {
        let permissoes = definirPermissoes(usuario);
        
        // Simular algumas ações
        simularAcaoUsuario(usuario, permissoes, "ver_relatorios");
        simularAcaoUsuario(usuario, permissoes, "criar_usuario");
        simularAcaoUsuario(usuario, permissoes, "gerenciar_sistema");
    }
});
