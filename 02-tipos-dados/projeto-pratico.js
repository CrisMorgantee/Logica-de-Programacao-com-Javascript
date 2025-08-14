
// Projeto Prático: Validador de Formulário

console.log("=== VALIDADOR DE FORMULÁRIO ===");

// Dados do formulário (simulando entrada do usuário)
let nomeInput = "  Maria Santos  "; // String com espaços
let idadeInput = "25"; // String que deveria ser número
let emailInput = "maria@email.com"; // String
let aceitaTermosInput = "true"; // String que deveria ser boolean
let salarioInput = "3500.50"; // String que deveria ser número

console.log("Dados recebidos:");
console.log("Nome:", nomeInput, "- Tipo:", typeof nomeInput);
console.log("Idade:", idadeInput, "- Tipo:", typeof idadeInput);
console.log("Email:", emailInput, "- Tipo:", typeof emailInput);
console.log("Aceita termos:", aceitaTermosInput, "- Tipo:", typeof aceitaTermosInput);
console.log("Salário:", salarioInput, "- Tipo:", typeof salarioInput);

console.log("\n=== PROCESSAMENTO E VALIDAÇÃO ===");

// Processar e converter dados
let nome = nomeInput.trim(); // Remove espaços
let idade = Number(idadeInput); // Converte para número
let email = emailInput.toLowerCase(); // Padroniza email
let aceitaTermos = aceitaTermosInput === "true"; // Converte para boolean
let salario = parseFloat(salarioInput); // Converte para número decimal

// Validações
let nomeValido = typeof nome === "string" && nome.length > 0;
let idadeValida = typeof idade === "number" && !isNaN(idade) && idade >= 18;
let emailValido = typeof email === "string" && email.includes("@");
let termosValidos = typeof aceitaTermos === "boolean" && aceitaTermos;
let salarioValido = typeof salario === "number" && !isNaN(salario) && salario > 0;

console.log("Dados processados:");
console.log("Nome:", nome, "- Válido:", nomeValido);
console.log("Idade:", idade, "- Válido:", idadeValida);
console.log("Email:", email, "- Válido:", emailValido);
console.log("Aceita termos:", aceitaTermos, "- Válido:", termosValidos);
console.log("Salário:", salario, "- Válido:", salarioValido);

// Resultado final
let formularioValido = nomeValido && idadeValida && emailValido && termosValidos && salarioValido;

console.log("\n=== RESULTADO ===");
console.log("Formulário válido:", formularioValido);

if (formularioValido) {
    console.log("✅ Cadastro realizado com sucesso!");
    
    // Criar objeto final
    let usuario = {
        nome: nome,
        idade: idade,
        email: email,
        salario: salario,
        dataRegistro: new Date().toISOString(),
        ativo: true
    };
    
    console.log("Usuário criado:", usuario);
} else {
    console.log("❌ Erro: Corrija os dados do formulário");
}
