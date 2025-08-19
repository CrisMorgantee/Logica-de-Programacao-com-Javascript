
// PASSO 2: SISTEMA DE PRODUTOS (OBJETOS)
// ======================================
// Conceitos aplicados: objetos, propriedades, métodos, this

console.log("🛒 PASSO 2: SISTEMA DE PRODUTOS");
console.log("=".repeat(50));

// 2.1 - CRIANDO PRODUTOS COMO OBJETOS
const produto1 = {
    id: 1,
    nome: "Smartphone Galaxy",
    preco: 1200.00,
    categoria: "Eletrônicos",
    estoque: 15,
    descricao: "Smartphone com 128GB de memória",
    ativo: true,
    
    // Método para exibir informações
    exibirInfo: function() {
        return `${this.nome} - ${this.categoria} - R$${this.preco.toFixed(2)}`;
    },
    
    // Método para verificar disponibilidade
    estaDisponivel: function() {
        return this.ativo && this.estoque > 0;
    },
    
    // Método para reduzir estoque
    vender: function(quantidade = 1) {
        if (this.estoque >= quantidade) {
            this.estoque -= quantidade;
            return true;
        }
        return false;
    }
};

const produto2 = {
    id: 2,
    nome: "Notebook Pro",
    preco: 2500.00,
    categoria: "Eletrônicos",
    estoque: 8,
    descricao: "Notebook para programadores",
    ativo: true,
    
    exibirInfo: function() {
        return `${this.nome} - ${this.categoria} - R$${this.preco.toFixed(2)}`;
    },
    
    estaDisponivel: function() {
        return this.ativo && this.estoque > 0;
    },
    
    vender: function(quantidade = 1) {
        if (this.estoque >= quantidade) {
            this.estoque -= quantidade;
            return true;
        }
        return false;
    }
};

const produto3 = {
    id: 3,
    nome: "Fone Bluetooth",
    preco: 299.99,
    categoria: "Eletrônicos",
    estoque: 25,
    descricao: "Fone sem fio com cancelamento de ruído",
    ativo: true,
    
    exibirInfo: function() {
        return `${this.nome} - ${this.categoria} - R$${this.preco.toFixed(2)}`;
    },
    
    estaDisponivel: function() {
        return this.ativo && this.estoque > 0;
    },
    
    vender: function(quantidade = 1) {
        if (this.estoque >= quantidade) {
            this.estoque -= quantidade;
            return true;
        }
        return false;
    }
};

// 2.2 - ARRAY DE PRODUTOS (combinando arrays e objetos)
const produtos = [produto1, produto2, produto3];

// 2.3 - EXIBINDO CATÁLOGO
console.log("\n📱 CATÁLOGO DE PRODUTOS:");
for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    const status = produto.estaDisponivel() ? "✅ Disponível" : "❌ Indisponível";
    console.log(`${produto.id}. ${produto.exibirInfo()} | Estoque: ${produto.estoque} | ${status}`);
}

// 2.4 - TESTANDO MÉTODOS DOS OBJETOS
console.log("\n🛍️ TESTANDO VENDAS:");

// Venda bem-sucedida
if (produto1.vender(2)) {
    console.log(`✅ Vendido: 2x ${produto1.nome}`);
    console.log(`Estoque restante: ${produto1.estoque}`);
} else {
    console.log(`❌ Venda falhou: estoque insuficiente`);
}

// Tentativa de venda com estoque insuficiente
if (produto2.vender(10)) {
    console.log(`✅ Vendido: 10x ${produto2.nome}`);
} else {
    console.log(`❌ Venda falhou: estoque insuficiente para ${produto2.nome}`);
    console.log(`Estoque disponível: ${produto2.estoque}`);
}

// 2.5 - FUNÇÃO FACTORY PARA CRIAR PRODUTOS (conceito avançado)
function criarProduto(id, nome, preco, categoria, estoque, descricao) {
    return {
        id,
        nome,
        preco,
        categoria,
        estoque,
        descricao,
        ativo: true,
        
        exibirInfo() {
            return `${this.nome} - ${this.categoria} - R$${this.preco.toFixed(2)}`;
        },
        
        estaDisponivel() {
            return this.ativo && this.estoque > 0;
        },
        
        vender(quantidade = 1) {
            if (this.estoque >= quantidade) {
                this.estoque -= quantidade;
                return true;
            }
            return false;
        }
    };
}

// Criando produto usando factory function
const novoProduto = criarProduto(4, "Mouse Gamer", 89.99, "Eletrônicos", 30, "Mouse com RGB");
produtos.push(novoProduto);

console.log("\n➕ PRODUTO ADICIONADO:");
console.log(novoProduto.exibirInfo());

// 2.6 - ESTATÍSTICAS BÁSICAS
console.log("\n📊 ESTATÍSTICAS:");
console.log(`Total de produtos: ${produtos.length}`);

let valorTotalEstoque = 0;
let itensEmEstoque = 0;

for (let produto of produtos) {
    valorTotalEstoque += produto.preco * produto.estoque;
    itensEmEstoque += produto.estoque;
}

console.log(`Itens em estoque: ${itensEmEstoque}`);
console.log(`Valor total do estoque: R$${valorTotalEstoque.toFixed(2)}`);

console.log("\n✅ PASSO 2 CONCLUÍDO!");
console.log("Próximo: Criar sistema de usuários");
