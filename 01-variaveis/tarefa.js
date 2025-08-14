
// TAREFA: Sistema de Loja Virtual

console.log("=== TAREFA: SISTEMA DE LOJA VIRTUAL ===");

// TODO: Crie variáveis para os seguintes dados de um produto:
// - nome do produto (constante)
// - preço (pode mudar com promoções)
// - quantidade em estoque (pode mudar)
// - categoria (constante)
// - disponível para venda (pode mudar)

// Suas variáveis aqui:
const nomeProduto = "Notebook Gamer";
let precoProduto = 2500.99;
let quantidadeEstoque = 15;
const categoriaProduto = "Eletrônicos";
let disponivelVenda = true;

// TODO: Simule as seguintes operações:
// 1. Aplicar desconto de 10% no preço
// 2. Vender 3 unidades (diminuir estoque)
// 3. Se estoque for menor que 5, marcar como indisponível

console.log("Produto:", nomeProduto);
console.log("Categoria:", categoriaProduto);
console.log("Preço original:", precoProduto);

// 1. Aplicar desconto
precoProduto = precoProduto * 0.9;
console.log("Preço com desconto:", precoProduto.toFixed(2));

// 2. Vender produtos
quantidadeEstoque -= 3;
console.log("Estoque após venda:", quantidadeEstoque);

// 3. Verificar disponibilidade
if (quantidadeEstoque < 5) {
    disponivelVenda = false;
}

console.log("Disponível para venda:", disponivelVenda ? "Sim" : "Não");
console.log("Estoque atual:", quantidadeEstoque);
