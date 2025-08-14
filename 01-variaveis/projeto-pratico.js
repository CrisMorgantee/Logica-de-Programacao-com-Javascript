
// Projeto Prático: Sistema de Cadastro de Usuário

console.log("=== SISTEMA DE CADASTRO DE USUÁRIO ===");

// Informações do usuário
const nomeUsuario = "Ana Carolina";
let idadeUsuario = 28;
let emailUsuario = "ana@email.com";
const dataRegistro = "2024-01-15";

// Status do usuário
let usuarioAtivo = true;
let numeroAcessos = 0;
let ultimoAcesso = null;

// Exibir informações iniciais
console.log("Dados do usuário:");
console.log("Nome:", nomeUsuario);
console.log("Idade:", idadeUsuario);
console.log("Email:", emailUsuario);
console.log("Data de Registro:", dataRegistro);
console.log("Status:", usuarioAtivo ? "Ativo" : "Inativo");

// Simular login do usuário
numeroAcessos++;
ultimoAcesso = "2024-01-20 10:30:00";

console.log("\nApós login:");
console.log("Número de acessos:", numeroAcessos);
console.log("Último acesso:", ultimoAcesso);

// Atualizar idade (aniversário)
idadeUsuario++;
console.log("\nApós aniversário:");
console.log("Nova idade:", idadeUsuario);

// Desativar usuário
usuarioAtivo = false;
console.log("Status atualizado:", usuarioAtivo ? "Ativo" : "Inativo");
