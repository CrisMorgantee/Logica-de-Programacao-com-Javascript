
// ========================================
// TAREFA: EXERCÍCIOS PRÁTICOS COM VARIÁVEIS
// ========================================

console.log("📝 INICIANDO EXERCÍCIOS DE VARIÁVEIS");
console.log("=" .repeat(40));

// ===== EXERCÍCIO 1: INFORMAÇÕES PESSOAIS =====
console.log("\n🎯 EXERCÍCIO 1: Criando variáveis para informações pessoais");

// TODO: Declare as variáveis abaixo com os tipos corretos (const/let)
// e complete com suas informações pessoais

const MEU_NOME = "Ana Carolina";
const MEU_EMAIL = "ana.carolina@email.com";
let minhaIdade = 26;
let minhaProfissao = "Desenvolvedora";
let minhaEscolaridade = "Superior";
const MEU_PAIS = "Brasil";
let minhaCidade = "São Paulo";
let meuEstadoCivil = "Solteiro";

console.log("✅ Variáveis criadas:");
console.log(`Nome: ${MEU_NOME}`);
console.log(`Email: ${MEU_EMAIL}`);
console.log(`Idade: ${minhaIdade} anos`);
console.log(`Profissão: ${minhaProfissao}`);
console.log(`País: ${MEU_PAIS}`);

// ===== EXERCÍCIO 2: CALCULADORA DE DADOS PESSOAIS =====
console.log("\n🎯 EXERCÍCIO 2: Calculadora de dados pessoais");

// Calcular ano de nascimento
const ANO_ATUAL = 2024;
let anoNascimento = ANO_ATUAL - minhaIdade;

// Calcular idade em meses, dias e horas (aproximado)
let idadeEmMeses = minhaIdade * 12;
let idadeEmDias = minhaIdade * 365;
let idadeEmHoras = idadeEmDias * 24;

// Calcular quando fará aniversário
let proximoAniversario = minhaIdade + 1;
let anoProximoAniversario = ANO_ATUAL + 1;

console.log("📊 Cálculos realizados:");
console.log(`Ano de nascimento: ${anoNascimento}`);
console.log(`Idade em meses: ${idadeEmMeses}`);
console.log(`Idade em dias: ${idadeEmDias}`);
console.log(`Idade em horas: ${idadeEmHoras}`);
console.log(`Próximo aniversário: ${proximoAniversario} anos em ${anoProximoAniversario}`);

// ===== EXERCÍCIO 3: SISTEMA DE PREFERÊNCIAS =====
console.log("\n🎯 EXERCÍCIO 3: Sistema de preferências do usuário");

// Declare variáveis para preferências
let corFavorita = "azul";
let comidaFavorita = "pizza";
let filmeFavorito = "Inception";
let musicaFavorita = "Bohemian Rhapsody";
let esporteFavorito = "futebol";
let hobbyFavorito = "programação";

// Configurações de sistema
let temaEscuro = true;
let notificacoesPush = false;
let salvamentoAutomatico = true;
let modoPoupanciaEnergia = false;

console.log("🎨 Suas preferências:");
console.log(`Cor favorita: ${corFavorita}`);
console.log(`Comida favorita: ${comidaFavorita}`);
console.log(`Filme favorito: ${filmeFavorito}`);
console.log(`Hobby favorito: ${hobbyFavorito}`);

console.log("\n⚙️ Configurações do sistema:");
console.log(`Tema escuro: ${temaEscuro ? "Ativado" : "Desativado"}`);
console.log(`Notificações push: ${notificacoesPush ? "Ativadas" : "Desativadas"}`);
console.log(`Salvamento automático: ${salvamentοAutomatico ? "Ativo" : "Inativo"}`);

// ===== EXERCÍCIO 4: MUDANÇAS E ATUALIZAÇÕES =====
console.log("\n🎯 EXERCÍCIO 4: Simulando mudanças na vida");

console.log("📈 Simulando mudanças...");

// Simular aniversário
console.log(`Idade antes do aniversário: ${minhaIdade}`);
minhaIdade = minhaIdade + 1;
console.log(`Idade após aniversário: ${minhaIdade}`);

// Simular mudança de profissão
console.log(`Profissão anterior: ${minhaProfissao}`);
minhaProfissao = "Tech Lead";
console.log(`Nova profissão: ${minhaProfissao}`);

// Simular mudança de cidade
console.log(`Cidade anterior: ${minhaCidade}`);
minhaCidade = "Rio de Janeiro";
console.log(`Nova cidade: ${minhaCidade}`);

// Simular mudança de estado civil
console.log(`Estado civil anterior: ${meuEstadoCivil}`);
meuEstadoCivil = "Casado";
console.log(`Novo estado civil: ${meuEstadoCivil}`);

// ===== EXERCÍCIO 5: VALIDAÇÕES E VERIFICAÇÕES =====
console.log("\n🎯 EXERCÍCIO 5: Validações e verificações");

// Verificar se é maior de idade
let eMaiorIdade = minhaIdade >= 18;
console.log(`É maior de idade: ${eMaiorIdade ? "Sim" : "Não"}`);

// Verificar faixa etária
let faixaEtaria;
if (minhaIdade < 18) {
    faixaEtaria = "Menor de idade";
} else if (minhaIdade < 30) {
    faixaEtaria = "Jovem adulto";
} else if (minhaIdade < 60) {
    faixaEtaria = "Adulto";
} else {
    faixaEtaria = "Idoso";
}

console.log(`Faixa etária: ${faixaEtaria}`);

// Verificar se o email é válido (verificação simples)
let emailValido = MEU_EMAIL.includes("@") && MEU_EMAIL.includes(".");
console.log(`Email válido: ${emailValido ? "Sim" : "Não"}`);

// Verificar se o nome tem sobrenome
let temSobrenome = MEU_NOME.includes(" ");
console.log(`Tem sobrenome: ${temSobrenome ? "Sim" : "Não"}`);

// ===== EXERCÍCIO 6: EXPERIMENTANDO COM ESCOPO =====
console.log("\n🎯 EXERCÍCIO 6: Experimentando com escopo");

function exemploEscopo() {
    // Variáveis locais da função
    let variavelLocal = "Esta variável só existe dentro da função";
    const CONSTANTE_LOCAL = "Constante local";
    
    console.log("Dentro da função:");
    console.log(`- Variável local: ${variavelLocal}`);
    console.log(`- Constante local: ${CONSTANTE_LOCAL}`);
    console.log(`- Variável global (nome): ${MEU_NOME}`); // Pode acessar variável global
    
    // Testando escopo de bloco
    if (true) {
        let variavelBloco = "Só existe neste bloco";
        console.log(`- Variável do bloco: ${variavelBloco}`);
    }
    
    // console.log(variavelBloco); // Erro! Variável não existe fora do bloco
}

exemploEscopo();

// ===== EXERCÍCIO 7: CONVENÇÕES DE NOMENCLATURA =====
console.log("\n🎯 EXERCÍCIO 7: Praticando convenções de nomenclatura");

// Constantes (UPPER_SNAKE_CASE)
const NUMERO_PI = 3.14159;
const VELOCIDADE_LUZ = 299792458; // m/s
const TEMPERATURA_CONGELAMENTO = 0; // Celsius

// Variáveis (camelCase)
let nomeCompletoUsuario = MEU_NOME;
let dataUltimaAtualizacao = new Date();
let quantidadeItensCarrinho = 0;
let valorTotalCompras = 0.00;

// Booleanos (is, has, can, should)
let isUsuarioAtivo = true;
let hasPermissaoAdmin = false;
let canEditarPerfil = true;
let shouldMostrarNotificacao = false;

console.log("📝 Convenções aplicadas:");
console.log(`Constante PI: ${NUMERO_PI}`);
console.log(`Nome completo: ${nomeCompletoUsuario}`);
console.log(`Usuário ativo: ${isUsuarioAtivo}`);
console.log(`Pode editar: ${canEditarPerfil}`);

// ===== RESULTADO FINAL =====
console.log("\n📊 RESUMO DOS EXERCÍCIOS REALIZADOS");
console.log("=" .repeat(50));

console.log("✅ Exercícios completados:");
console.log("1. ✓ Informações pessoais declaradas");
console.log("2. ✓ Cálculos de dados pessoais");
console.log("3. ✓ Sistema de preferências criado");
console.log("4. ✓ Simulação de mudanças");
console.log("5. ✓ Validações implementadas");
console.log("6. ✓ Escopo de variáveis testado");
console.log("7. ✓ Convenções de nomenclatura aplicadas");

console.log("\n🎯 Conceitos praticados:");
console.log("• Declaração com const, let e var");
console.log("• Tipos de dados (string, number, boolean)");
console.log("• Escopo de variáveis");
console.log("• Convenções de nomenclatura");
console.log("• Reatribuição de valores");
console.log("• Cálculos matemáticos");
console.log("• Verificações e validações");

console.log("\n🏆 TAREFA CONCLUÍDA COM SUCESSO!");
