
// PASSO 1: ESTRUTURA BÁSICA E VARIÁVEIS
// =====================================
// Conceitos aplicados: var, let, const, tipos de dados

console.log("🛒 PASSO 1: ESTRUTURA BÁSICA DO E-COMMERCE");
console.log("=".repeat(50));

// 1.1 - CONFIGURAÇÕES GLOBAIS DA LOJA (const - não mudam)
const NOME_LOJA = "Tech Store";
const VERSAO_SISTEMA = "1.0.0";
const MOEDA = "R$";

// 1.2 - CONFIGURAÇÕES QUE PODEM MUDAR (let)
let lojaAberta = true;
let totalVendasDia = 0;
let numeroClientes = 0;

// 1.3 - TIPOS DE DADOS DIVERSOS
const configuracoes = {
    nome: NOME_LOJA,           // string
    aberta: lojaAberta,        // boolean
    vendas: totalVendasDia,    // number
    categorias: ["Eletrônicos", "Roupas", "Casa"], // array
    endereco: {                // objeto
        rua: "Rua Tech, 123",
        cidade: "São Paulo",
        cep: "01234-567"
    }
};

// 1.4 - EXIBIÇÃO INICIAL
console.log("\n📊 CONFIGURAÇÕES DA LOJA:");
console.log(`Nome: ${configuracoes.nome}`);
console.log(`Versão: ${VERSAO_SISTEMA}`);
console.log(`Status: ${configuracoes.aberta ? "Aberta" : "Fechada"}`);
console.log(`Categorias disponíveis: ${configuracoes.categorias.join(", ")}`);
console.log(`Endereço: ${configuracoes.endereco.rua}, ${configuracoes.endereco.cidade}`);

// 1.5 - SIMULAÇÃO DE MUDANÇA DE ESTADO
console.log("\n🔄 SIMULANDO OPERAÇÕES BÁSICAS:");

// Incrementando contadores
numeroClientes++;
totalVendasDia += 150.99;

console.log(`Clientes atendidos: ${numeroClientes}`);
console.log(`Vendas do dia: ${MOEDA}${totalVendasDia.toFixed(2)}`);

// Testando tipos de dados
console.log("\n🔍 VERIFICANDO TIPOS:");
console.log(`Tipo do nome: ${typeof NOME_LOJA}`);
console.log(`Tipo do status: ${typeof lojaAberta}`);
console.log(`Tipo das vendas: ${typeof totalVendasDia}`);
console.log(`É array? ${Array.isArray(configuracoes.categorias)}`);

console.log("\n✅ PASSO 1 CONCLUÍDO!");
console.log("Próximo: Criar sistema de produtos com objetos");
