
# Estruturas de Repetição

## Conceitos Fundamentais

Estruturas de repetição (loops) permitem executar um bloco de código repetidamente, evitando duplicação desnecessária. São fundamentais para processar coleções de dados, realizar cálculos iterativos e automatizar tarefas repetitivas.

## Tipos de Loops

### for - Loop Clássico
O loop mais versátil, ideal quando você sabe quantas iterações precisa:

```javascript
for (inicialização; condição; incremento) {
    // código a ser repetido
}

// Estrutura detalhada:
// 1. Inicialização: executada uma vez no início
// 2. Condição: verificada antes de cada iteração
// 3. Código: executado se condição for true
// 4. Incremento: executado após cada iteração
```

#### Exemplos Básicos
```javascript
// Contagem simples
for (let i = 0; i < 5; i++) {
    console.log(`Iteração ${i}`);
}

// Contagem regressiva
for (let i = 10; i >= 0; i--) {
    console.log(`Contagem: ${i}`);
}

// Incremento personalizado
for (let i = 0; i <= 20; i += 2) {
    console.log(`Número par: ${i}`);
}

// Múltiplas variáveis
for (let i = 0, j = 10; i <= j; i++, j--) {
    console.log(`i: ${i}, j: ${j}`);
}
```

#### Casos Especiais do for
```javascript
// Loop infinito (cuidado!)
for (;;) {
    console.log("Loop infinito - use break para sair");
    break; // sempre tenha uma condição de saída
}

// Sem inicialização
let i = 0;
for (; i < 5; i++) {
    console.log(i);
}

// Sem incremento (faça manualmente)
for (let i = 0; i < 5;) {
    console.log(i);
    i++; // incremento manual
}
```

### while - Loop Condicional
Executa enquanto a condição for verdadeira. Ideal quando não se sabe o número exato de iterações:

```javascript
while (condição) {
    // código
    // importante: modifique a condição para evitar loop infinito
}

// Exemplos práticos
let contador = 0;
while (contador < 5) {
    console.log(`Contador: ${contador}`);
    contador++; // crucial para evitar loop infinito
}

// Lendo entrada do usuário (simulado)
let resposta = "";
while (resposta !== "sair") {
    console.log("Digite 'sair' para terminar");
    resposta = "sair"; // simula entrada do usuário
}

// Processamento de dados
let numeros = [1, 2, 3, 4, 5];
let indice = 0;
while (indice < numeros.length) {
    console.log(numeros[indice]);
    indice++;
}
```

### do...while - Execute Primeiro, Teste Depois
Executa pelo menos uma vez, depois verifica a condição:

```javascript
do {
    // código executado pelo menos uma vez
} while (condição);

// Menu de opções
let opcao;
do {
    console.log("=== MENU ===");
    console.log("1. Opção 1");
    console.log("2. Opção 2");
    console.log("0. Sair");
    
    opcao = 1; // simula escolha do usuário
    
    switch(opcao) {
        case 1:
            console.log("Executando opção 1");
            break;
        case 2:
            console.log("Executando opção 2");
            break;
    }
    
    opcao = 0; // para terminar o exemplo
} while (opcao !== 0);

// Validação de entrada
let numero;
do {
    numero = Math.floor(Math.random() * 10);
    console.log(`Número gerado: ${numero}`);
} while (numero < 5); // repete até gerar número >= 5
```

### for...in - Iteração sobre Propriedades de Objetos
Itera sobre as propriedades enumeráveis de um objeto:

```javascript
for (let propriedade in objeto) {
    // código usando propriedade
}

// Objeto simples
let pessoa = {
    nome: "Ana",
    idade: 28,
    profissao: "Desenvolvedora",
    cidade: "São Paulo"
};

console.log("Propriedades da pessoa:");
for (let prop in pessoa) {
    console.log(`${prop}: ${pessoa[prop]}`);
}

// Com arrays (não recomendado para arrays)
let cores = ["vermelho", "verde", "azul"];
for (let indice in cores) {
    console.log(`${indice}: ${cores[indice]}`);
    // 0: vermelho, 1: verde, 2: azul
}

// Verificando propriedades próprias vs herdadas
function Pessoa(nome) {
    this.nome = nome;
}
Pessoa.prototype.falar = function() { return "Olá!"; };

let joao = new Pessoa("João");
joao.idade = 30;

for (let prop in joao) {
    if (joao.hasOwnProperty(prop)) {
        console.log(`Própria: ${prop} = ${joao[prop]}`);
    } else {
        console.log(`Herdada: ${prop}`);
    }
}
```

### for...of - Iteração sobre Valores de Iteráveis
Itera sobre valores de objetos iteráveis (arrays, strings, Maps, Sets, etc.):

```javascript
for (let valor of iterável) {
    // código usando valor
}

// Arrays
let frutas = ["maçã", "banana", "laranja"];
for (let fruta of frutas) {
    console.log(`Fruta: ${fruta}`);
}

// Strings
let palavra = "JavaScript";
for (let letra of palavra) {
    console.log(`Letra: ${letra}`);
}

// Maps
let mapa = new Map([
    ["chave1", "valor1"],
    ["chave2", "valor2"]
]);

for (let [chave, valor] of mapa) {
    console.log(`${chave}: ${valor}`);
}

// Sets
let conjunto = new Set([1, 2, 3, 3, 4]); // Set remove duplicatas
for (let numero of conjunto) {
    console.log(`Número: ${numero}`);
}

// NodeList (elementos DOM)
// let elementos = document.querySelectorAll('.classe');
// for (let elemento of elementos) {
//     console.log(elemento);
// }
```

### Diferenças: for...in vs for...of
```javascript
let array = ["a", "b", "c"];
array.propriedadeCustom = "valor";

console.log("for...in (propriedades/índices):");
for (let prop in array) {
    console.log(`${prop}: ${array[prop]}`);
    // 0: a, 1: b, 2: c, propriedadeCustom: valor
}

console.log("for...of (valores):");
for (let valor of array) {
    console.log(valor);
    // a, b, c (não mostra propriedadeCustom)
}
```

## Controle de Loops

### break - Interrompe o Loop
```javascript
// Para o loop completamente
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // sai do loop quando i for 5
    }
    console.log(i); // imprime 0, 1, 2, 3, 4
}

// Em loops aninhados - para apenas o loop interno
for (let i = 0; i < 3; i++) {
    console.log(`Externo: ${i}`);
    for (let j = 0; j < 5; j++) {
        if (j === 2) {
            break; // para apenas este loop interno
        }
        console.log(`  Interno: ${j}`);
    }
}

// Break com label - para loop específico
externo: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break externo; // para o loop externo
        }
        console.log(`${i}-${j}`);
    }
}
```

### continue - Pula para Próxima Iteração
```javascript
// Pula a iteração atual, continua com a próxima
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // pula quando i for 2
    }
    console.log(i); // imprime 0, 1, 3, 4
}

// Filtrando números pares
for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        continue; // pula números ímpares
    }
    console.log(`Número par: ${i}`);
}

// Continue com label
externo: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            continue externo; // pula para próxima iteração do loop externo
        }
        console.log(`${i}-${j}`);
    }
}
```

## Loops Aninhados

### Estruturas Básicas
```javascript
// Matriz (bidimensional)
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Percorrendo matriz:");
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`[${i}][${j}] = ${matriz[i][j]}`);
    }
}

// Tabuada
console.log("Tabuada:");
for (let i = 1; i <= 10; i++) {
    console.log(`\nTabuada do ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
```

### Padrões Comuns
```javascript
// Pirâmide de asteriscos
for (let i = 1; i <= 5; i++) {
    let linha = "";
    for (let j = 1; j <= i; j++) {
        linha += "* ";
    }
    console.log(linha);
}

// Tabuleiro de xadrez
for (let i = 0; i < 8; i++) {
    let linha = "";
    for (let j = 0; j < 8; j++) {
        linha += (i + j) % 2 === 0 ? "⬜" : "⬛";
    }
    console.log(linha);
}
```

## Performance e Otimização

### Cache de Propriedades
```javascript
// ❌ Ineficiente - acessa .length a cada iteração
for (let i = 0; i < array.length; i++) {
    // código
}

// ✅ Eficiente - armazena .length em variável
for (let i = 0, len = array.length; i < len; i++) {
    // código
}
```

### Escolha do Loop Adequado
```javascript
let numeros = [1, 2, 3, 4, 5];

// Para processar todos os elementos
numeros.forEach(num => console.log(num)); // mais limpo

// Para transformar array
let dobrados = numeros.map(num => num * 2); // mais funcional

// Para filtrar
let pares = numeros.filter(num => num % 2 === 0); // mais expressivo

// Para encontrar elemento
let encontrado = numeros.find(num => num > 3); // mais direto

// Para verificar condições
let todosPares = numeros.every(num => num % 2 === 0); // mais claro
let algumPar = numeros.some(num => num % 2 === 0); // mais claro
```

## Casos de Uso Práticos

### Processamento de Dados
```javascript
// Calculando estatísticas
function calcularEstatisticas(numeros) {
    let soma = 0;
    let min = numeros[0];
    let max = numeros[0];
    
    for (let numero of numeros) {
        soma += numero;
        if (numero < min) min = numero;
        if (numero > max) max = numero;
    }
    
    return {
        soma,
        media: soma / numeros.length,
        min,
        max
    };
}
```

### Busca em Dados
```javascript
// Busca linear
function buscarProduto(produtos, nomeBuscado) {
    for (let produto of produtos) {
        if (produto.nome.toLowerCase().includes(nomeBuscado.toLowerCase())) {
            return produto;
        }
    }
    return null;
}

// Busca com múltiplos critérios
function filtrarProdutos(produtos, filtros) {
    let resultado = [];
    
    for (let produto of produtos) {
        let atendeCriterios = true;
        
        for (let criterio in filtros) {
            if (produto[criterio] !== filtros[criterio]) {
                atendeCriterios = false;
                break;
            }
        }
        
        if (atendeCriterios) {
            resultado.push(produto);
        }
    }
    
    return resultado;
}
```

### Geração de Conteúdo
```javascript
// Gerando HTML
function gerarTabela(dados) {
    let html = "<table>\n";
    
    // Cabeçalho
    html += "  <thead>\n    <tr>\n";
    for (let coluna in dados[0]) {
        html += `      <th>${coluna}</th>\n`;
    }
    html += "    </tr>\n  </thead>\n";
    
    // Corpo
    html += "  <tbody>\n";
    for (let linha of dados) {
        html += "    <tr>\n";
        for (let valor of Object.values(linha)) {
            html += `      <td>${valor}</td>\n`;
        }
        html += "    </tr>\n";
    }
    html += "  </tbody>\n</table>";
    
    return html;
}
```

## Armadilhas Comuns

### Loop Infinito
```javascript
// ❌ Perigoso - loop infinito
// for (let i = 0; i < 10; i--) { // incremento errado
//     console.log(i);
// }

// ❌ Perigoso - condição nunca muda
// let x = 10;
// while (x > 5) {
//     console.log(x); // x nunca é modificado
// }

// ✅ Correto - sempre tenha condição de saída
let tentativas = 0;
while (tentativas < 100) { // limite de segurança
    // lógica aqui
    tentativas++;
}
```

### Modificação Durante Iteração
```javascript
// ❌ Problemático - modificar array durante iteração
let nums = [1, 2, 3, 4, 5];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        nums.splice(i, 1); // remove elemento - muda índices!
        i--; // ajuste necessário
    }
}

// ✅ Melhor - iterar de trás para frente
for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] % 2 === 0) {
        nums.splice(i, 1); // seguro iterar de trás para frente
    }
}

// ✅ Ainda melhor - usar filter
let imparesApenas = nums.filter(num => num % 2 !== 0);
```

### Closures em Loops
```javascript
// ❌ Problema comum - todas as funções capturam o mesmo 'i'
let funcoes = [];
for (var i = 0; i < 3; i++) {
    funcoes.push(function() {
        console.log(i); // sempre imprime 3
    });
}

// ✅ Solução 1 - usar let (escopo de bloco)
let funcoes2 = [];
for (let i = 0; i < 3; i++) {
    funcoes2.push(function() {
        console.log(i); // imprime 0, 1, 2 corretamente
    });
}

// ✅ Solução 2 - IIFE
let funcoes3 = [];
for (var i = 0; i < 3; i++) {
    funcoes3.push((function(index) {
        return function() {
            console.log(index);
        };
    })(i));
}
```

## Boas Práticas

1. **Escolha o loop apropriado** para cada situação
2. **Use `let` em vez de `var`** para evitar problemas de escopo
3. **Cache propriedades** que são acessadas repetidamente
4. **Evite modificar arrays** durante iteração
5. **Sempre tenha condição de saída** clara
6. **Use métodos de array** (`forEach`, `map`, `filter`) quando apropriado
7. **Considere performance** em loops grandes
8. **Use nomes descritivos** para variáveis de controle
9. **Adicione comentários** em lógicas complexas
10. **Teste casos extremos** (arrays vazios, valores null)

## Resumo dos Loops

| Loop | Quando Usar | Vantagens |
|------|-------------|-----------|
| `for` | Número conhecido de iterações | Controle total, flexível |
| `while` | Condição pode mudar durante execução | Simples, claro |
| `do...while` | Precisa executar pelo menos uma vez | Garante uma execução |
| `for...in` | Iterar propriedades de objetos | Acesso às chaves |
| `for...of` | Iterar valores de iteráveis | Mais limpo, moderno |

## Exemplos Práticos

Consulte os arquivos desta pasta:
- `exemplos.js` - Demonstrações de todos os tipos de loop
- `projeto-pratico.js` - Sistema completo usando diferentes loops
