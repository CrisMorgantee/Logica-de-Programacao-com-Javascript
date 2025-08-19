
// =====================================================================================
// PROJETO COMPLETO: SISTEMA DE E-COMMERCE EDUCACIONAL
// =====================================================================================
// 
// 📚 OBJETIVO PEDAGÓGICO:
// Este arquivo integra TODOS os conceitos fundamentais de JavaScript em um sistema
// funcional completo. Cada seção demonstra conceitos específicos de forma prática.
//
// 🎯 CONCEITOS APLICADOS:
// ✅ Variáveis (const, let) e tipos de dados
// ✅ Objetos e métodos personalizados
// ✅ Arrays e manipulação de dados
// ✅ Funções com parâmetros e retorno
// ✅ Factory Functions (padrão de design)
// ✅ Estruturas de controle (if/else, switch)
// ✅ Estruturas de repetição (for, forEach)
// ✅ Validação de dados e tratamento de erros
// ✅ Sistema CRUD (Create, Read, Update, Delete)
// ✅ Cálculos financeiros e lógica de negócio
// ✅ Manipulação de estado da aplicação
// ✅ Modularização e organização de código
//
// 💡 METODOLOGIA:
// Cada seção é numerada e explica o "porquê" das decisões técnicas,
// não apenas o "como". Isso desenvolve o pensamento crítico do aluno.
//
// =====================================================================================

console.log("🛒 SISTEMA DE E-COMMERCE COMPLETO");
console.log("=".repeat(60));

// =====================================================================================
// 1. CONFIGURAÇÕES GLOBAIS E VARIÁVEIS FUNDAMENTAIS
// =====================================================================================
//
// 🔍 CONCEITO: Variáveis e Constantes
// 
// Por que usar CONST para configurações?
// - Evita modificações acidentais de valores críticos
// - Deixa claro que são valores fixos do sistema
// - Melhora a legibilidade e manutenção do código
//
// Por que usar LET para contadores?
// - Permite modificação durante a execução
// - Escopo de bloco mais seguro que VAR
// - Evita problemas de hoisting (içamento)

const NOME_LOJA = "TechStore Plus";           // string: nome imutável da loja
const VERSAO_SISTEMA = "2.0.0";               // string: versionamento do sistema
const MOEDA = "R$";                           // string: símbolo da moeda
const FRETE_GRATIS_VALOR_MINIMO = 200.00;     // number: limite para frete grátis

// 🔍 CONCEITO: Estado da Aplicação
// Estas variáveis representam o "estado" atual do sistema
// Em aplicações reais, isso seria armazenado em banco de dados
let sistemaAtivo = true;        // boolean: controla se o sistema está operacional
let totalVendasDia = 0;         // number: acumula valor total de vendas
let numeroVendasDia = 0;        // number: conta quantidade de vendas

// =====================================================================================
// 2. FACTORY FUNCTION PARA PRODUTOS - PADRÃO DE DESIGN FUNDAMENTAL
// =====================================================================================
//
// 🔍 CONCEITO: Factory Functions (Funções Fábrica)
//
// O QUE É uma Factory Function?
// É uma função que retorna objetos novos a cada chamada, como uma "fábrica" de objetos.
//
// POR QUE usar Factory Functions?
// ✅ MODULARIDADE: Fácil de reutilizar a função de criação
// ✅ CONSISTÊNCIA: Todos os produtos têm a mesma estrutura e métodos
// ✅ EXTENSIBILIDADE: Fácil adicionar novos métodos a todos os produtos
// ✅ MANUTENIBILIDADE: Mudanças na estrutura só precisam ser feitas na factory
// ✅ ENCAPSULAMENTO: Lógica de criação fica centralizada
//
// ALTERNATIVAS e por que NÃO usamos:
// ❌ Objetos literais: Cada produto seria criado manualmente (repetição)
// ❌ Classes: Mais complexo para iniciantes, conceito mais avançado
// ❌ Constructor Functions: Sintaxe mais confusa, requer 'new'
//
// CASOS DE USO da Factory Function:
// - Criar múltiplos objetos com estrutura similar
// - Validar dados antes da criação
// - Aplicar configurações padrão
// - Adicionar métodos compartilhados

function criarProduto(id, nome, preco, categoria, estoque, descricao, peso, avaliacoes = 5.0) {
    // 🔍 CONCEITO: Parâmetros com Valores Padrão
    // 'avaliacoes = 5.0' define um valor padrão caso não seja fornecido
    
    // 🔍 CONCEITO: Retorno de Objeto Literal
    // A factory retorna um objeto com propriedades e métodos
    return {
        // ---------------------------------------------------------------------------------
        // PROPRIEDADES DO PRODUTO (Estado/Dados)
        // ---------------------------------------------------------------------------------
        id,                          // Desestruturação: equivale a id: id
        nome,                        // string: nome do produto
        preco,                       // number: preço em reais
        categoria,                   // string: categoria do produto
        estoque,                     // number: quantidade disponível
        descricao,                   // string: descrição detalhada
        peso,                        // number: peso em kg (para frete)
        ativo: true,                 // boolean: produto ativo no sistema
        avaliacoes,                  // number: nota média de avaliações
        dataCadastro: new Date(),    // Date: timestamp de criação
        
        // ---------------------------------------------------------------------------------
        // MÉTODOS DO PRODUTO (Comportamentos/Ações)
        // ---------------------------------------------------------------------------------
        
        // 🔍 CONCEITO: Métodos de Objeto
        // Funções dentro de objetos que operam sobre os dados do próprio objeto
        // 'this' refere-se ao objeto atual
        
        // MÉTODO: Calcular preço com desconto
        // USO: produto.calcularPrecoComDesconto(10) // 10% de desconto
        calcularPrecoComDesconto(percentual) {
            // 🔍 CONCEITO: Validação de Entrada
            // Sempre validar dados antes de processar
            if (percentual < 0 || percentual > 100) {
                console.log("⚠️ Percentual de desconto deve estar entre 0 e 100");
                return this.preco;  // Retorna preço original se inválido
            }
            
            // 🔍 CONCEITO: Cálculo Matemático
            // (1 - percentual/100) converte porcentagem para decimal
            // Ex: 10% = 0.10, então (1 - 0.10) = 0.90 = 90% do preço
            return this.preco * (1 - percentual / 100);
        },
        
        // MÉTODO: Verificar se produto tem estoque suficiente
        // USO: produto.verificarDisponibilidade(3) // verifica se tem 3 unidades
        verificarDisponibilidade(quantidade = 1) {
            // 🔍 CONCEITO: Operadores Lógicos
            // && (E): ambas condições devem ser verdadeiras
            return this.ativo && this.estoque >= quantidade;
        },
        
        // MÉTODO: Reduzir estoque após venda
        // USO: produto.reduzirEstoque(2) // remove 2 unidades do estoque
        reduzirEstoque(quantidade) {
            // 🔍 CONCEITO: Estrutura Condicional e Retorno Boolean
            if (this.verificarDisponibilidade(quantidade)) {
                this.estoque -= quantidade;  // Operador de atribuição composta
                return true;   // Sucesso
            }
            return false;      // Falha (estoque insuficiente)
        },
        
        // MÉTODO: Adicionar produtos ao estoque
        // USO: produto.adicionarEstoque(10) // adiciona 10 unidades
        adicionarEstoque(quantidade) {
            if (quantidade > 0) {
                this.estoque += quantidade;
                return true;
            }
            return false;
        },
        
        // MÉTODO: Ativar/desativar produto
        // USO: produto.alterarStatus(false) // desativa produto
        alterarStatus(novoStatus) {
            this.ativo = novoStatus;
            return this.ativo;
        },
        
        // MÉTODO: Obter resumo formatado do produto
        // USO: console.log(produto.obterResumo())
        obterResumo() {
            // 🔍 CONCEITO: Operador Ternário (Condicional Compacta)
            // condição ? valorSeVerdadeiro : valorSeFalso
            const status = this.ativo ? "Ativo" : "Inativo";
            const disponibilidade = this.estoque > 0 ? "Disponível" : "Esgotado";
            
            // 🔍 CONCEITO: Template Literals (String Template)
            // Usar ${} para inserir variáveis em strings
            return `${this.nome} - ${this.categoria} - ${MOEDA}${this.preco.toFixed(2)} - ${status} - ${disponibilidade}`;
        },
        
        // MÉTODO: Calcular valor total do estoque deste produto
        // USO: let valorTotal = produto.calcularValorEstoque()
        calcularValorEstoque() {
            // 🔍 CONCEITO: Operações Matemáticas Simples
            return this.preco * this.estoque;
        }
    };
}

// =====================================================================================
// 3. INICIALIZAÇÃO DO BANCO DE DADOS DE PRODUTOS
// =====================================================================================
//
// 🔍 CONCEITO: Função de Inicialização
//
// POR QUE criar uma função separada para inicializar dados?
// ✅ ORGANIZAÇÃO: Separa dados de lógica de negócio
// ✅ REUTILIZAÇÃO: Pode ser chamada para "resetar" o sistema
// ✅ MANUTENÇÃO: Fácil adicionar/remover produtos iniciais
// ✅ TESTABILIDADE: Pode ser testada independentemente

function inicializarBancoDadosProdutos() {
    // 🔍 CONCEITO: Array de Objetos (Estrutura de Dados)
    // Simula um banco de dados com dados iniciais
    const dadosIniciais = [
        {
            id: 1,
            nome: "iPhone 15 Pro",
            preco: 8999.00,
            categoria: "Smartphones",
            estoque: 12,
            descricao: "iPhone 15 Pro 256GB Titânio Natural",
            peso: 0.187,      // peso em kg
            avaliacoes: 4.8   // nota de 0 a 5
        },
        {
            id: 2,
            nome: "MacBook Pro M3",
            preco: 15999.00,
            categoria: "Notebooks",
            estoque: 8,
            descricao: "MacBook Pro 14 M3 512GB Space Gray",
            peso: 1.6,
            avaliacoes: 4.9
        },
        {
            id: 3,
            nome: "AirPods Pro 2",
            preco: 2199.00,
            categoria: "Acessórios",
            estoque: 25,
            descricao: "AirPods Pro 2ª geração com cancelamento de ruído",
            peso: 0.056,
            avaliacoes: 4.7
        },
        {
            id: 4,
            nome: "Apple Watch Series 9",
            preco: 3999.00,
            categoria: "Wearables",
            estoque: 15,
            descricao: "Apple Watch Series 9 45mm GPS Meia-noite",
            peso: 0.038,
            avaliacoes: 4.6
        },
        {
            id: 5,
            nome: "iPad Air M2",
            preco: 5499.00,
            categoria: "Tablets",
            estoque: 18,
            descricao: "iPad Air 11 M2 Wi-Fi 256GB Azul",
            peso: 0.462,
            avaliacoes: 4.8
        }
    ];
    
    // 🔍 CONCEITO: Método MAP - Transformação de Arrays
    // 
    // O que faz: Transforma cada elemento do array em algo novo
    // Como funciona: Para cada objeto simples, cria um produto completo usando a factory
    // 
    // ANTES: Array de objetos simples (apenas dados)
    // DEPOIS: Array de objetos complexos (dados + métodos)
    //
    // Por que usar MAP aqui?
    // ✅ Transforma dados brutos em objetos funcionais
    // ✅ Aplica a factory function a todos os itens
    // ✅ Mantém o mesmo número de elementos
    // ✅ Código limpo e funcional
    
    return dadosIniciais.map(produto => 
        criarProduto(
            produto.id,
            produto.nome,
            produto.preco,
            produto.categoria,
            produto.estoque,
            produto.descricao,
            produto.peso,
            produto.avaliacoes
        )
    );
}

// 🔍 CONCEITO: Execução e Armazenamento
// Chama a função e armazena o resultado em uma constante
const produtos = inicializarBancoDadosProdutos();

// =====================================================================================
// 4. FUNÇÕES DE GERENCIAMENTO DE PRODUTOS (CRUD)
// =====================================================================================
//
// 🔍 CONCEITO: Sistema CRUD
// Create (Criar), Read (Ler), Update (Atualizar), Delete (Deletar)
// São as 4 operações básicas de qualquer sistema de dados

// FUNÇÃO: Adicionar novo produto ao banco (CREATE)
function adicionarProdutoAoBanco(nome, preco, categoria, estoque, descricao, peso, avaliacoes) {
    // 🔍 CONCEITO: Geração Automática de ID
    // Encontra o maior ID existente e adiciona 1
    // Math.max(...array) encontra o maior valor
    // O operador spread (...) "espalha" os elementos do array
    const maiorId = produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) : 0;
    const novoId = maiorId + 1;
    
    // 🔍 CONCEITO: Validação Robusta de Dados
    // SEMPRE validar dados antes de processar
    // Retorna objeto com sucesso/erro para facilitar tratamento
    
    if (!nome || nome.length < 2) {
        return { sucesso: false, erro: "Nome deve ter pelo menos 2 caracteres" };
    }
    
    if (!preco || preco <= 0) {
        return { sucesso: false, erro: "Preço deve ser maior que zero" };
    }
    
    if (!categoria || categoria.length < 2) {
        return { sucesso: false, erro: "Categoria deve ter pelo menos 2 caracteres" };
    }
    
    if (estoque < 0) {
        return { sucesso: false, erro: "Estoque não pode ser negativo" };
    }
    
    // 🔍 CONCEITO: Verificação de Duplicatas
    // Usa FIND para procurar produto com mesmo nome
    // toLowerCase() garante comparação case-insensitive
    const produtoExistente = produtos.find(p => 
        p.nome.toLowerCase() === nome.toLowerCase()
    );
    
    if (produtoExistente) {
        return { sucesso: false, erro: "Produto com este nome já existe" };
    }
    
    // 🔍 CONCEITO: Criação e Inserção
    // Usa a factory function para criar produto consistente
    const novoProduto = criarProduto(
        novoId,
        nome,
        preco,
        categoria,
        estoque || 0,        // Valor padrão se não fornecido
        descricao || "",     // String vazia se não fornecida
        peso || 0,           // Zero se não fornecido
        avaliacoes || 5.0    // Nota máxima se não fornecida
    );
    
    // 🔍 CONCEITO: Adição ao Array
    // PUSH adiciona elemento no final do array
    produtos.push(novoProduto);
    
    // 🔍 CONCEITO: Retorno Estruturado
    // Objeto com status, dados e mensagem para facilitar uso
    return { 
        sucesso: true, 
        produto: novoProduto,
        mensagem: `Produto "${nome}" adicionado com sucesso!`
    };
}

// FUNÇÃO: Buscar produto por ID (READ)
function buscarProdutoPorId(id) {
    // 🔍 CONCEITO: Método FIND
    // Procura o PRIMEIRO elemento que atende à condição
    // Retorna o elemento encontrado ou undefined
    // && garante que só busca produtos ativos
    return produtos.find(produto => produto.id === id && produto.ativo) || null;
}

// FUNÇÃO: Listar produtos por categoria (READ com filtro)
function listarProdutosPorCategoria(categoria) {
    // 🔍 CONCEITO: Método FILTER
    // Retorna TODOS os elementos que atendem à condição
    // toLowerCase() garante comparação case-insensitive
    return produtos.filter(produto => 
        produto.categoria.toLowerCase() === categoria.toLowerCase() && produto.ativo
    );
}

// =====================================================================================
// 5. FACTORY FUNCTION PARA USUÁRIOS
// =====================================================================================
//
// 🔍 CONCEITO: Reutilização do Padrão Factory
// Aplicamos o mesmo padrão para usuários, demonstrando consistência

const usuarios = [];  // Array para armazenar usuários cadastrados

function criarUsuario(nome, email, idade, endereco) {
    // 🔍 CONCEITO: Validação Específica por Tipo de Dado
    
    // Validação de STRING
    if (!nome || nome.length < 2) {
        return { sucesso: false, erro: "Nome deve ter pelo menos 2 caracteres" };
    }
    
    // Validação de EMAIL (básica)
    // Verifica se contém @ e . (validação real seria mais complexa)
    if (!email || !email.includes("@") || !email.includes(".")) {
        return { sucesso: false, erro: "Email inválido" };
    }
    
    // Validação de IDADE (range numérico)
    if (!idade || idade < 16 || idade > 120) {
        return { sucesso: false, erro: "Idade deve estar entre 16 e 120 anos" };
    }
    
    // 🔍 CONCEITO: Verificação de Unicidade
    // SOME retorna true se PELO MENOS UM elemento atende à condição
    const emailExiste = usuarios.some(u => u.email === email);
    if (emailExiste) {
        return { sucesso: false, erro: "Email já cadastrado" };
    }
    
    // 🔍 CONCEITO: Lógica de Negócio Condicional
    // Determina categoria e benefícios baseado na idade
    let categoria, desconto, limiteCreditoBonus;
    
    if (idade < 25) {
        categoria = "Jovem";
        desconto = 5;           // 5% de desconto
        limiteCreditoBonus = 1000;
    } else if (idade >= 60) {
        categoria = "Senior";
        desconto = 15;          // 15% de desconto
        limiteCreditoBonus = 5000;
    } else {
        categoria = "Adulto";
        desconto = 0;           // Sem desconto
        limiteCreditoBonus = 2000;
    }
    
    // 🔍 CONCEITO: Objeto Complexo com Métodos
    const novoUsuario = {
        // ---------------------------------------------------------------------------------
        // PROPRIEDADES BÁSICAS
        // ---------------------------------------------------------------------------------
        id: Date.now() + Math.random(),  // ID único baseado em timestamp
        nome,
        email,
        idade,
        endereco,
        categoria,
        desconto,
        limiteCreditoBonus,
        ativo: true,
        dataCadastro: new Date(),
        
        // ---------------------------------------------------------------------------------
        // PROPRIEDADES DE HISTÓRICO
        // ---------------------------------------------------------------------------------
        totalCompras: 0,         // Valor total já gasto
        numeroCompras: 0,        // Quantidade de compras realizadas
        historicoCompras: [],    // Array com histórico detalhado
        carrinho: [],            // Array com itens do carrinho atual
        
        // ---------------------------------------------------------------------------------
        // MÉTODOS DO USUÁRIO
        // ---------------------------------------------------------------------------------
        
        // MÉTODO: Registrar uma nova compra
        adicionarCompra(valor, itens) {
            this.totalCompras += valor;
            this.numeroCompras++;
            // 🔍 CONCEITO: Spread Operator para Cópia
            // [...itens] cria uma cópia do array, não uma referência
            this.historicoCompras.push({
                data: new Date(),
                valor,
                itens: [...itens]
            });
        },
        
        // MÉTODO: Calcular desconto baseado na categoria
        calcularDesconto(valor) {
            if (this.desconto > 0) {
                return valor * (this.desconto / 100);
            }
            return 0;
        },
        
        // MÉTODO: Verificar se pode fazer uma compra
        podeComprar(valor) {
            // 🔍 CONCEITO: Operador OU (||)
            // Se valor for menor que limite OU se já comprou mais de R$ 1000
            return valor <= this.limiteCreditoBonus || this.totalCompras > 1000;
        },
        
        // MÉTODO: Obter resumo do usuário
        obterResumo() {
            // 🔍 CONCEITO: Retorno de Objeto Seletivo
            // Retorna apenas informações relevantes, não dados sensíveis
            return {
                nome: this.nome,
                categoria: this.categoria,
                totalCompras: this.totalCompras,
                numeroCompras: this.numeroCompras,
                desconto: this.desconto
            };
        }
    };
    
    // 🔍 CONCEITO: Adição ao Array Global
    usuarios.push(novoUsuario);
    return { 
        sucesso: true, 
        usuario: novoUsuario,
        mensagem: `Usuário ${nome} cadastrado com sucesso!`
    };
}

// FUNÇÃO: Buscar usuário por email
function buscarUsuarioPorEmail(email) {
    return usuarios.find(u => u.email === email && u.ativo) || null;
}

// =====================================================================================
// 6. SISTEMA DE CARRINHO DE COMPRAS
// =====================================================================================
//
// 🔍 CONCEITO: Manipulação de Estado Complexo
// O carrinho representa estado mutável que deve ser gerenciado cuidadosamente

// FUNÇÃO: Adicionar produto ao carrinho
function adicionarAoCarrinho(usuario, produtoId, quantidade = 1) {
    // 🔍 CONCEITO: Busca e Validação
    const produto = produtos.find(p => p.id === produtoId);
    
    if (!produto) {
        return { sucesso: false, erro: "Produto não encontrado" };
    }
    
    // 🔍 CONCEITO: Verificação de Regra de Negócio
    if (!produto.verificarDisponibilidade(quantidade)) {
        return { 
            sucesso: false, 
            erro: `Estoque insuficiente. Disponível: ${produto.estoque}` 
        };
    }
    
    // 🔍 CONCEITO: Verificação de Item Existente no Carrinho
    const itemExistente = usuario.carrinho.find(item => item.produto.id === produtoId);
    
    if (itemExistente) {
        // 🔍 CONCEITO: Atualização de Quantidade
        const novaQuantidade = itemExistente.quantidade + quantidade;
        if (!produto.verificarDisponibilidade(novaQuantidade)) {
            return { 
                sucesso: false, 
                erro: "Estoque insuficiente para quantidade total" 
            };
        }
        itemExistente.quantidade = novaQuantidade;
        itemExistente.subtotal = produto.preco * novaQuantidade;
    } else {
        // 🔍 CONCEITO: Adição de Novo Item
        usuario.carrinho.push({
            produto,                          // Referência ao objeto produto
            quantidade,                       // Quantidade desejada
            subtotal: produto.preco * quantidade,  // Valor total do item
            dataAdicao: new Date()           // Timestamp de quando foi adicionado
        });
    }
    
    return { 
        sucesso: true, 
        mensagem: `${produto.nome} adicionado ao carrinho` 
    };
}

// FUNÇÃO: Remover produto do carrinho
function removerDoCarrinho(usuario, produtoId) {
    // 🔍 CONCEITO: Contagem Antes/Depois para Verificação
    const indiceInicial = usuario.carrinho.length;
    
    // 🔍 CONCEITO: Método FILTER para Remoção
    // Mantém todos os itens EXCETO o que tem o ID especificado
    usuario.carrinho = usuario.carrinho.filter(item => item.produto.id !== produtoId);
    
    // 🔍 CONCEITO: Verificação de Sucesso da Operação
    if (usuario.carrinho.length < indiceInicial) {
        return { sucesso: true, mensagem: "Item removido do carrinho" };
    }
    
    return { sucesso: false, erro: "Item não encontrado no carrinho" };
}

// FUNÇÃO: Limpar carrinho completamente
function limparCarrinho(usuario) {
    // 🔍 CONCEITO: Reset de Array
    usuario.carrinho = [];
    return { sucesso: true, mensagem: "Carrinho limpo" };
}

// =====================================================================================
// 7. FUNÇÕES DE CÁLCULO FINANCEIRO
// =====================================================================================
//
// 🔍 CONCEITO: Lógica de Negócio Complexa
// Estas funções implementam regras de negócio reais de e-commerce

// FUNÇÃO: Calcular frete baseado em estado e peso
function calcularFrete(estado, pesoTotal, valorCompra) {
    // 🔍 CONCEITO: Regra de Negócio Condicional
    // Frete grátis para compras acima de valor mínimo
    if (valorCompra >= FRETE_GRATIS_VALOR_MINIMO) {
        return { 
            valor: 0, 
            gratuito: true, 
            motivo: "Compra acima de R$ 200" 
        };
    }
    
    // 🔍 CONCEITO: Tabela de Dados (Objeto como Mapa)
    // Simula tabela de preços de frete por estado
    const tabelaFrete = {
        "SP": 12.00, "RJ": 15.00, "MG": 18.00, "RS": 22.00,
        "PR": 20.00, "SC": 20.00, "GO": 25.00, "DF": 22.00,
        "BA": 28.00, "PE": 30.00, "CE": 32.00, "AM": 45.00
    };
    
    // 🔍 CONCEITO: Busca com Valor Padrão
    // || 35.00 define valor padrão se estado não estiver na tabela
    const freteBase = tabelaFrete[estado.toUpperCase()] || 35.00;
    
    // 🔍 CONCEITO: Cálculo Condicional
    // Acréscimo por peso adicional (acima de 1kg)
    const acrescimoPeso = pesoTotal > 1 ? (pesoTotal - 1) * 3 : 0;
    
    return { 
        valor: freteBase + acrescimoPeso, 
        gratuito: false,
        detalhes: { base: freteBase, peso: acrescimoPeso }
    };
}

// FUNÇÃO: Calcular impostos por categoria
function calcularImpostos(valor, categoria) {
    // 🔍 CONCEITO: Tabela de Alíquotas
    const tabelaImpostos = {
        "Smartphones": 0.20,    // 20%
        "Notebooks": 0.18,      // 18%
        "Tablets": 0.16,        // 16%
        "Acessórios": 0.12,     // 12%
        "Wearables": 0.15       // 15%
    };
    
    const aliquota = tabelaImpostos[categoria] || 0.15;  // 15% padrão
    return valor * aliquota;
}

// FUNÇÃO: Calcular parcelamento com ou sem juros
function calcularParcelamento(valor, parcelas) {
    // 🔍 CONCEITO: Validação de Entrada Simples
    if (parcelas === 1) {
        return {
            parcelas: 1,
            valorParcela: valor,
            valorTotal: valor,
            juros: 0,
            temJuros: false
        };
    }
    
    // 🔍 CONCEITO: Lógica de Juros Progressiva
    let juros = 0;
    let temJuros = false;
    
    if (parcelas > 6) {
        juros = 0.0299; // 2.99% ao mês para mais de 6x
        temJuros = true;
    } else if (parcelas > 3) {
        juros = 0.0199; // 1.99% ao mês para 4-6x
        temJuros = true;
    }
    // 1-3x sem juros
    
    if (temJuros) {
        // 🔍 CONCEITO: Fórmula de Juros Compostos
        // Math.pow(base, expoente) calcula potenciação
        const valorComJuros = valor * Math.pow(1 + juros, parcelas);
        return {
            parcelas,
            valorParcela: valorComJuros / parcelas,
            valorTotal: valorComJuros,
            juros: valorComJuros - valor,
            temJuros: true,
            taxaJuros: juros * 100
        };
    }
    
    // Sem juros
    return {
        parcelas,
        valorParcela: valor / parcelas,
        valorTotal: valor,
        juros: 0,
        temJuros: false
    };
}

// FUNÇÃO: Calcular resumo completo da compra
function calcularResumoCompra(usuario) {
    // 🔍 CONCEITO: Validação de Pré-condição
    if (!usuario.carrinho || usuario.carrinho.length === 0) {
        return { sucesso: false, erro: "Carrinho vazio" };
    }
    
    // 🔍 CONCEITO: Acumuladores para Cálculos
    let subtotal = 0;
    let pesoTotal = 0;
    let impostoTotal = 0;
    
    // 🔍 CONCEITO: Iteração com forEach para Acumular Valores
    usuario.carrinho.forEach(item => {
        subtotal += item.subtotal;
        pesoTotal += item.produto.peso * item.quantidade;
        impostoTotal += calcularImpostos(item.subtotal, item.produto.categoria);
    });
    
    // 🔍 CONCEITO: Aplicação de Descontos
    const descontoUsuario = usuario.calcularDesconto(subtotal);
    
    // 🔍 CONCEITO: Desconto Progressivo por Volume
    let descontoVolume = 0;
    if (subtotal > 5000) {
        descontoVolume = subtotal * 0.08; // 8% para compras acima de R$ 5000
    } else if (subtotal > 2000) {
        descontoVolume = subtotal * 0.05; // 5% para compras acima de R$ 2000
    } else if (subtotal > 1000) {
        descontoVolume = subtotal * 0.03; // 3% para compras acima de R$ 1000
    }
    
    const totalDescontos = descontoUsuario + descontoVolume;
    const valorComDesconto = subtotal - totalDescontos;
    
    // 🔍 CONCEITO: Cálculo de Frete
    const frete = calcularFrete(
        usuario.endereco?.estado || "SP",  // Operador de encadeamento opcional
        pesoTotal, 
        valorComDesconto
    );
    
    // 🔍 CONCEITO: Totalização Final
    const valorFinal = valorComDesconto + frete.valor + impostoTotal;
    
    // 🔍 CONCEITO: Método REDUCE para Soma
    // Soma todas as quantidades do carrinho
    const quantidadeTotal = usuario.carrinho.reduce((total, item) => total + item.quantidade, 0);
    
    return {
        sucesso: true,
        resumo: {
            subtotal,
            descontos: {
                usuario: descontoUsuario,
                volume: descontoVolume,
                total: totalDescontos
            },
            impostos: impostoTotal,
            frete: frete,
            valorFinal,
            pesoTotal,
            economia: totalDescontos,
            itens: usuario.carrinho.length,
            quantidadeTotal
        }
    };
}

// =====================================================================================
// 8. SISTEMA DE CHECKOUT (FINALIZAÇÃO DE COMPRA)
// =====================================================================================
//
// 🔍 CONCEITO: Transação Complexa
// O checkout é uma "transação" que deve ser atômica (tudo ou nada)

function finalizarCompra(usuario, formaPagamento, parcelas = 1) {
    // 🔍 CONCEITO: Reutilização de Função
    const resumo = calcularResumoCompra(usuario);
    
    if (!resumo.sucesso) {
        return resumo;  // Propaga erro do cálculo
    }
    
    // 🔍 CONCEITO: Verificação de Limite de Crédito
    if (!usuario.podeComprar(resumo.resumo.valorFinal)) {
        return { 
            sucesso: false, 
            erro: "Limite de crédito insuficiente para esta compra" 
        };
    }
    
    // 🔍 CONCEITO: Verificação de Estoque Completa
    // Usa FOR...OF para permitir early return
    for (let item of usuario.carrinho) {
        if (!item.produto.verificarDisponibilidade(item.quantidade)) {
            return { 
                sucesso: false, 
                erro: `Produto ${item.produto.nome} não tem estoque suficiente` 
            };
        }
    }
    
    // 🔍 CONCEITO: Operação de Redução de Estoque
    // Só executa se todas as verificações passaram
    usuario.carrinho.forEach(item => {
        item.produto.reduzirEstoque(item.quantidade);
    });
    
    // 🔍 CONCEITO: Cálculo Condicional de Parcelamento
    let dadosParcelamento = null;
    if (formaPagamento === "cartao" && parcelas > 1) {
        dadosParcelamento = calcularParcelamento(resumo.resumo.valorFinal, parcelas);
    }
    
    // 🔍 CONCEITO: Criação de Objeto de Pedido
    const pedido = {
        id: `PED${Date.now()}`,           // ID único baseado em timestamp
        usuario: usuario.obterResumo(),   // Snapshot dos dados do usuário
        itens: [...usuario.carrinho],     // Cópia dos itens do carrinho
        resumo: resumo.resumo,            // Dados calculados da compra
        formaPagamento,
        parcelamento: dadosParcelamento,
        status: "confirmado",
        dataCompra: new Date(),
        // 🔍 CONCEITO: Cálculo de Data Futura
        previsaoEntrega: new Date(Date.now() + (7 * 24 * 60 * 60 * 1000)) // 7 dias
    };
    
    // 🔍 CONCEITO: Atualização de Histórico
    usuario.adicionarCompra(resumo.resumo.valorFinal, usuario.carrinho);
    
    // 🔍 CONCEITO: Atualização de Estatísticas Globais
    totalVendasDia += resumo.resumo.valorFinal;
    numeroVendasDia++;
    
    // 🔍 CONCEITO: Limpeza de Estado
    limparCarrinho(usuario);
    
    return {
        sucesso: true,
        pedido,
        mensagem: `Compra realizada com sucesso! Pedido ${pedido.id}`
    };
}

// =====================================================================================
// 9. FUNÇÕES DE RELATÓRIO E EXIBIÇÃO
// =====================================================================================
//
// 🔍 CONCEITO: Funções de Apresentação
// Separam lógica de negócio da apresentação de dados

// FUNÇÃO: Exibir catálogo de produtos
function exibirCatalogo() {
    console.log("\n📱 CATÁLOGO DE PRODUTOS");
    console.log("=".repeat(50));
    
    // 🔍 CONCEITO: Iteração com forEach para Exibição
    produtos.forEach(produto => {
        if (produto.ativo) {
            // 🔍 CONCEITO: Formatação Condicional
            const disponibilidade = produto.estoque > 0 ? "✅ Disponível" : "❌ Esgotado";
            
            console.log(`${produto.id}. ${produto.nome}`);
            console.log(`   Preço: ${MOEDA}${produto.preco.toFixed(2)}`);
            console.log(`   Categoria: ${produto.categoria}`);
            console.log(`   Estoque: ${produto.estoque} | ${disponibilidade}`);
            console.log(`   Avaliação: ⭐${produto.avaliacoes}/5.0`);
            console.log(`   ${produto.descricao}`);
            console.log("-".repeat(50));
        }
    });
}

// FUNÇÃO: Exibir carrinho do usuário
function exibirCarrinho(usuario) {
    // 🔍 CONCEITO: Verificação de Estado Vazio
    if (!usuario.carrinho || usuario.carrinho.length === 0) {
        console.log("🛒 Carrinho vazio");
        return;
    }
    
    console.log(`\n🛒 CARRINHO DE ${usuario.nome.toUpperCase()}`);
    console.log("=".repeat(50));
    
    // 🔍 CONCEITO: Iteração com Índice
    usuario.carrinho.forEach((item, index) => {
        console.log(`${index + 1}. ${item.produto.nome}`);
        console.log(`   Quantidade: ${item.quantidade}x`);
        console.log(`   Preço unitário: ${MOEDA}${item.produto.preco.toFixed(2)}`);
        console.log(`   Subtotal: ${MOEDA}${item.subtotal.toFixed(2)}`);
        console.log("-".repeat(30));
    });
    
    // 🔍 CONCEITO: Exibição de Resumo
    const resumo = calcularResumoCompra(usuario);
    if (resumo.sucesso) {
        console.log(`💰 VALOR TOTAL: ${MOEDA}${resumo.resumo.valorFinal.toFixed(2)}`);
        if (resumo.resumo.economia > 0) {
            console.log(`💸 Economia: ${MOEDA}${resumo.resumo.economia.toFixed(2)}`);
        }
    }
}

// FUNÇÃO: Gerar relatório de vendas
function gerarRelatorioVendas() {
    console.log("\n📊 RELATÓRIO DE VENDAS DO DIA");
    console.log("=".repeat(50));
    console.log(`Número de vendas: ${numeroVendasDia}`);
    console.log(`Total vendido: ${MOEDA}${totalVendasDia.toFixed(2)}`);
    
    // 🔍 CONCEITO: Cálculo com Proteção contra Divisão por Zero
    const ticketMedio = numeroVendasDia > 0 ? (totalVendasDia / numeroVendasDia).toFixed(2) : "0.00";
    console.log(`Ticket médio: ${MOEDA}${ticketMedio}`);
    
    // 🔍 CONCEITO: Filtro e Análise de Dados
    console.log("\n⚠️ PRODUTOS COM BAIXO ESTOQUE:");
    produtos
        .filter(p => p.estoque < 5 && p.ativo)  // Produtos ativos com menos de 5 unidades
        .forEach(p => {
            console.log(`- ${p.nome}: ${p.estoque} unidades`);
        });
}

// =====================================================================================
// 10. SIMULAÇÃO COMPLETA DO SISTEMA
// =====================================================================================
//
// 🔍 CONCEITO: Função de Demonstração
// Integra todos os componentes em um exemplo prático e completo

function executarSimulacao() {
    console.log("\n🚀 INICIANDO SIMULAÇÃO COMPLETA");
    console.log("=".repeat(60));
    
    // ---------------------------------------------------------------------------------
    // PASSO 1: CADASTRO DE USUÁRIOS
    // ---------------------------------------------------------------------------------
    console.log("\n👥 CADASTRANDO USUÁRIOS...");
    
    // 🔍 CONCEITO: Criação de Usuários Diversos
    // Testa diferentes categorias de usuário (jovem, adulto, senior)
    const usuario1 = criarUsuario(
        "João Silva", 
        "joao@email.com", 
        28, 
        { rua: "Rua A, 123", cidade: "São Paulo", estado: "SP", cep: "01234-567" }
    );
    
    const usuario2 = criarUsuario(
        "Maria Santos", 
        "maria@email.com", 
        65, 
        { rua: "Av. B, 456", cidade: "Rio de Janeiro", estado: "RJ", cep: "20123-456" }
    );
    
    const usuario3 = criarUsuario(
        "Pedro Lima", 
        "pedro@email.com", 
        22, 
        { rua: "Rua C, 789", cidade: "Belo Horizonte", estado: "MG", cep: "30123-789" }
    );
    
    // 🔍 CONCEITO: Verificação de Sucesso
    if (usuario1.sucesso) console.log(`✅ ${usuario1.mensagem}`);
    if (usuario2.sucesso) console.log(`✅ ${usuario2.mensagem}`);
    if (usuario3.sucesso) console.log(`✅ ${usuario3.mensagem}`);
    
    // ---------------------------------------------------------------------------------
    // PASSO 2: EXIBIÇÃO DO CATÁLOGO
    // ---------------------------------------------------------------------------------
    exibirCatalogo();
    
    // ---------------------------------------------------------------------------------
    // PASSO 3: SIMULAÇÃO DE COMPRAS
    // ---------------------------------------------------------------------------------
    console.log("\n🛍️ SIMULANDO COMPRAS...");
    
    // 🔍 CONCEITO: Simulação de Compra do João (Usuário Adulto)
    const joao = usuario1.usuario;
    console.log(`\n--- COMPRA DO ${joao.nome.toUpperCase()} ---`);
    
    // Adiciona produtos ao carrinho
    adicionarAoCarrinho(joao, 1, 1); // iPhone
    adicionarAoCarrinho(joao, 3, 2); // 2x AirPods
    
    exibirCarrinho(joao);
    
    // 🔍 CONCEITO: Exibição Detalhada de Resumo
    const resumoJoao = calcularResumoCompra(joao);
    if (resumoJoao.sucesso) {
        console.log("\n💳 RESUMO DA COMPRA:");
        const r = resumoJoao.resumo;
        console.log(`Subtotal: ${MOEDA}${r.subtotal.toFixed(2)}`);
        console.log(`Desconto usuário: -${MOEDA}${r.descontos.usuario.toFixed(2)}`);
        console.log(`Desconto volume: -${MOEDA}${r.descontos.volume.toFixed(2)}`);
        console.log(`Impostos: ${MOEDA}${r.impostos.toFixed(2)}`);
        console.log(`Frete: ${MOEDA}${r.frete.valor.toFixed(2)} ${r.frete.gratuito ? "(GRÁTIS)" : ""}`);
        console.log(`TOTAL: ${MOEDA}${r.valorFinal.toFixed(2)}`);
    }
    
    // 🔍 CONCEITO: Finalização com Parcelamento
    const pedidoJoao = finalizarCompra(joao, "cartao", 3);
    if (pedidoJoao.sucesso) {
        console.log(`✅ ${pedidoJoao.mensagem}`);
        if (pedidoJoao.pedido.parcelamento) {
            const p = pedidoJoao.pedido.parcelamento;
            console.log(`💳 Parcelamento: ${p.parcelas}x de ${MOEDA}${p.valorParcela.toFixed(2)}`);
        }
    }
    
    // 🔍 CONCEITO: Simulação de Compra da Maria (Usuária Senior com Desconto)
    const maria = usuario2.usuario;
    console.log(`\n--- COMPRA DA ${maria.nome.toUpperCase()} ---`);
    
    adicionarAoCarrinho(maria, 2, 1); // MacBook
    adicionarAoCarrinho(maria, 4, 1); // Apple Watch
    
    exibirCarrinho(maria);
    
    const pedidoMaria = finalizarCompra(maria, "pix");
    if (pedidoMaria.sucesso) {
        console.log(`✅ ${pedidoMaria.mensagem}`);
    }
    
    // 🔍 CONCEITO: Simulação de Compra do Pedro (Usuário Jovem)
    const pedro = usuario3.usuario;
    console.log(`\n--- COMPRA DO ${pedro.nome.toUpperCase()} ---`);
    
    adicionarAoCarrinho(pedro, 5, 1); // iPad
    adicionarAoCarrinho(pedro, 3, 1); // AirPods
    
    exibirCarrinho(pedro);
    
    const pedidoPedro = finalizarCompra(pedro, "debito");
    if (pedidoPedro.sucesso) {
        console.log(`✅ ${pedidoPedro.mensagem}`);
    }
    
    // ---------------------------------------------------------------------------------
    // PASSO 4: RELATÓRIOS FINAIS
    // ---------------------------------------------------------------------------------
    gerarRelatorioVendas();
    
    console.log("\n👥 RESUMO DOS USUÁRIOS:");
    usuarios.forEach(user => {
        const resumo = user.obterResumo();
        console.log(`- ${resumo.nome} (${resumo.categoria}): ${resumo.numeroCompras} compras, ${MOEDA}${resumo.totalCompras.toFixed(2)} total`);
    });
    
    console.log("\n✅ SIMULAÇÃO COMPLETA FINALIZADA!");
    console.log("=".repeat(60));
}

// =====================================================================================
// 11. EXECUÇÃO DA SIMULAÇÃO E RESUMO EDUCACIONAL
// =====================================================================================

// 🔍 CONCEITO: Execução Principal
executarSimulacao();

// =====================================================================================
// 12. RESUMO EDUCACIONAL COMPLETO
// =====================================================================================

console.log("\n🎯 CONCEITOS DE JAVASCRIPT APLICADOS NESTE PROJETO:");
console.log("=".repeat(70));

console.log("\n📝 VARIÁVEIS E TIPOS:");
console.log("✅ const - Para valores imutáveis (configurações)");
console.log("✅ let - Para valores mutáveis (contadores, estados)");
console.log("✅ string, number, boolean, object, array - Todos os tipos básicos");

console.log("\n🏭 FACTORY FUNCTIONS:");
console.log("✅ Padrão de criação de objetos consistentes");
console.log("✅ Encapsulamento de lógica de criação");
console.log("✅ Métodos compartilhados entre instâncias");
console.log("✅ Validação centralizada de dados");

console.log("\n🔧 MÉTODOS DE ARRAY:");
console.log("✅ map() - Transformação de elementos");
console.log("✅ filter() - Filtragem de elementos");
console.log("✅ find() - Busca de elemento específico");
console.log("✅ forEach() - Iteração sem retorno");
console.log("✅ some() - Verificação de existência");
console.log("✅ reduce() - Acumulação de valores");

console.log("\n⚡ FUNÇÕES:");
console.log("✅ Declaração e expressão de funções");
console.log("✅ Parâmetros com valores padrão");
console.log("✅ Retorno de objetos e valores");
console.log("✅ Funções puras vs. com efeitos colaterais");

console.log("\n🎮 ESTRUTURAS DE CONTROLE:");
console.log("✅ if/else - Condicionais simples e complexas");
console.log("✅ Operador ternário - Condicionais compactas");
console.log("✅ && e || - Operadores lógicos");
console.log("✅ for...of - Iteração sobre arrays");

console.log("\n📊 MANIPULAÇÃO DE DADOS:");
console.log("✅ Objetos literais e propriedades dinâmicas");
console.log("✅ Spread operator (...) para cópias");
console.log("✅ Destructuring para extração de dados");
console.log("✅ Template literals para formatação");

console.log("\n🛡️ VALIDAÇÃO E TRATAMENTO:");
console.log("✅ Validação de entrada de dados");
console.log("✅ Tratamento de erros com objetos de resposta");
console.log("✅ Verificação de tipos e valores");
console.log("✅ Proteção contra divisão por zero");

console.log("\n💼 LÓGICA DE NEGÓCIO:");
console.log("✅ Cálculos financeiros (juros, descontos, impostos)");
console.log("✅ Regras de negócio condicionais");
console.log("✅ Estado da aplicação e transações");
console.log("✅ Sistema CRUD completo");

console.log("\n🏗️ ARQUITETURA E DESIGN:");
console.log("✅ Modularização de código em funções");
console.log("✅ Separação de responsabilidades");
console.log("✅ Reutilização de código");
console.log("✅ Padrões de design (Factory, State)");

console.log("\n📈 CONCEITOS AVANÇADOS APLICADOS:");
console.log("✅ Closure (funções internas)");
console.log("✅ Higher-order functions (funções que recebem funções)");
console.log("✅ Imutabilidade de dados (cópias vs. referências)");
console.log("✅ Composição de funções");

console.log("\n💡 PRÓXIMOS PASSOS PARA EXPANSÃO:");
console.log("=".repeat(50));
console.log("🔹 Adicionar persistência de dados (localStorage/banco)");
console.log("🔹 Implementar interface web (HTML/CSS/DOM)");
console.log("🔹 Adicionar sistema de avaliações e comentários");
console.log("🔹 Criar dashboard administrativo");
console.log("🔹 Implementar sistema de cupons e promoções");
console.log("🔹 Adicionar integração com APIs de pagamento");
console.log("🔹 Implementar busca e filtros avançados");
console.log("🔹 Adicionar sistema de notificações");
console.log("🔹 Criar relatórios analíticos");
console.log("🔹 Implementar autenticação e autorização");

console.log("\n🎓 VALOR PEDAGÓGICO DESTE PROJETO:");
console.log("=".repeat(50));
console.log("📚 INTEGRAÇÃO: Todos os conceitos trabalhando juntos");
console.log("🎯 PRÁTICA: Aplicação real dos conceitos teóricos");
console.log("🧠 LÓGICA: Desenvolvimento do pensamento algorítmico");
console.log("🔧 TÉCNICA: Boas práticas de programação");
console.log("💼 NEGÓCIO: Compreensão de regras de negócio reais");
console.log("🚀 EVOLUÇÃO: Base sólida para projetos mais complexos");

console.log("\n" + "=".repeat(70));
console.log("🏆 PARABÉNS! VOCÊ DOMINOU OS FUNDAMENTOS DO JAVASCRIPT!");
console.log("=".repeat(70));
