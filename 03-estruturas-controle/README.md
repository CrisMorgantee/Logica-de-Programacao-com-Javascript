
# Estruturas de Controle e Condicionais

## Conceitos Fundamentais

As estruturas de controle permitem que o programa tome decisões e execute diferentes blocos de código baseados em condições. São essenciais para criar programas dinâmicos e inteligentes.

## Estruturas Condicionais

### if...else
A estrutura mais básica para tomada de decisões:

```javascript
if (condicao) {
    // código executado se condição for verdadeira
} else {
    // código executado se condição for falsa
}

// Exemplos práticos
let idade = 18;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
```

### if...else if...else
Para múltiplas condições sequenciais:

```javascript
if (condicao1) {
    // código 1
} else if (condicao2) {
    // código 2
} else if (condicao3) {
    // código 3
} else {
    // código padrão (se nenhuma condição for atendida)
}

// Exemplo prático
let nota = 85;

if (nota >= 90) {
    console.log("Conceito A");
} else if (nota >= 80) {
    console.log("Conceito B");
} else if (nota >= 70) {
    console.log("Conceito C");
} else if (nota >= 60) {
    console.log("Conceito D");
} else {
    console.log("Conceito F - Reprovado");
}
```

### switch...case
Para comparar uma variável com múltiplos valores possíveis:

```javascript
switch (variavel) {
    case valor1:
        // código para valor1
        break;
    case valor2:
        // código para valor2
        break;
    case valor3:
    case valor4: // múltiplos valores para o mesmo código
        // código para valor3 ou valor4
        break;
    default:
        // código padrão
}

// Exemplo prático
let diaSemana = 3;
let nomeDia;

switch (diaSemana) {
    case 1:
        nomeDia = "Domingo";
        break;
    case 2:
        nomeDia = "Segunda-feira";
        break;
    case 3:
        nomeDia = "Terça-feira";
        break;
    case 4:
        nomeDia = "Quarta-feira";
        break;
    case 5:
        nomeDia = "Quinta-feira";
        break;
    case 6:
        nomeDia = "Sexta-feira";
        break;
    case 7:
        nomeDia = "Sábado";
        break;
    default:
        nomeDia = "Dia inválido";
}
```

#### Importância do break
```javascript
// Sem break - "fall through"
let x = 2;
switch (x) {
    case 1:
        console.log("Um");
    case 2:
        console.log("Dois");  // Executa
    case 3:
        console.log("Três");  // Também executa!
    default:
        console.log("Outro"); // Também executa!
}
// Saída: "Dois", "Três", "Outro"

// Com break - comportamento desejado
switch (x) {
    case 1:
        console.log("Um");
        break;
    case 2:
        console.log("Dois");
        break; // Para aqui
    case 3:
        console.log("Três");
        break;
    default:
        console.log("Outro");
}
// Saída: "Dois"
```

### Operador Ternário (Conditional Operator)
Forma concisa para condições simples:

```javascript
let resultado = condicao ? valorSeVerdadeiro : valorSeFalso;

// Exemplos
let idade = 20;
let status = idade >= 18 ? "adulto" : "menor";

let numero = -5;
let tipo = numero > 0 ? "positivo" : numero < 0 ? "negativo" : "zero";

// Pode ser encadeado (mas cuidado com legibilidade)
let nota = 85;
let conceito = nota >= 90 ? "A" : 
               nota >= 80 ? "B" : 
               nota >= 70 ? "C" : 
               nota >= 60 ? "D" : "F";
```

## Valores Falsy e Truthy

### Valores Falsy (considerados false em contexto booleano)
- `false`
- `0` e `-0`
- `0n` (BigInt zero)
- `""` (string vazia)
- `null`
- `undefined`
- `NaN`

### Valores Truthy (considerados true)
Qualquer valor que não seja falsy:
- `true`
- Qualquer número diferente de 0
- Strings não vazias (incluindo `"0"`, `"false"`)
- Arrays e objetos (mesmo vazios)
- Funções

```javascript
// Exemplos práticos
let nome = "";
if (nome) {
    console.log(`Olá, ${nome}`);
} else {
    console.log("Nome não informado");
}

let lista = [];
if (lista.length) {
    console.log("Lista tem itens");
} else {
    console.log("Lista está vazia");
}

// Operador de negação lógica
if (!nome) {
    console.log("Nome é falsy");
}
```

## Operadores de Comparação

### Igualdade
```javascript
// Igualdade solta (==) - faz conversão de tipo
5 == "5";        // true
true == 1;       // true
null == undefined; // true

// Igualdade estrita (===) - não faz conversão
5 === "5";       // false
true === 1;      // false
null === undefined; // false

// Desigualdade
5 != "5";        // false (conversão)
5 !== "5";       // true (sem conversão)
```

### Comparações Numéricas
```javascript
let a = 10, b = 5;

a > b;   // true (maior que)
a < b;   // false (menor que)
a >= b;  // true (maior ou igual)
a <= b;  // false (menor ou igual)

// Cuidado com strings
"10" > "5";  // false! (comparação lexicográfica)
"10" > 5;    // true (conversão numérica)
```

## Operadores Lógicos

### AND (&&)
```javascript
// Retorna o primeiro valor falsy ou o último valor
true && true;     // true
true && false;    // false
"hello" && "world"; // "world"
"hello" && "";    // ""
"" && "world";    // ""

// Short-circuit evaluation
let user = { name: "João" };
user && user.name && console.log(user.name); // "João"
```

### OR (||)
```javascript
// Retorna o primeiro valor truthy ou o último valor
false || true;    // true
false || false;   // false
"" || "default";  // "default"
"value" || "default"; // "value"

// Uso comum para valores padrão
function saudar(nome) {
    nome = nome || "Visitante";
    console.log(`Olá, ${nome}!`);
}
```

### NOT (!)
```javascript
!true;           // false
!false;          // true
!"hello";        // false
!"";             // true
!0;              // true
!null;           // true

// Dupla negação para converter para boolean
!!"hello";       // true
!!0;             // false
!!null;          // false
```

## Operadores de Coalescência

### Nullish Coalescing (??) - ES2020
```javascript
// Retorna o lado direito se o esquerdo for null ou undefined
let nome = null ?? "Padrão";        // "Padrão"
let idade = undefined ?? 18;        // 18
let valor = 0 ?? 10;                // 0 (pois 0 não é null/undefined)
let texto = "" ?? "Vazio";          // "" (pois "" não é null/undefined)

// Diferença do ||
let config = {
    timeout: 0,
    retries: null
};

// Com ||
let timeout1 = config.timeout || 5000;  // 5000 (0 é falsy)
let retries1 = config.retries || 3;     // 3 (null é falsy)

// Com ??
let timeout2 = config.timeout ?? 5000;  // 0 (0 não é null/undefined)
let retries2 = config.retries ?? 3;     // 3 (null é null)
```

### Optional Chaining (?.) - ES2020
```javascript
let user = {
    profile: {
        address: {
            street: "Rua A"
        }
    }
};

// Sem optional chaining - pode dar erro
// let street = user.profile.address.street; // OK
// let street = user.company.address.street; // TypeError!

// Com optional chaining - seguro
let street1 = user.profile?.address?.street;     // "Rua A"
let street2 = user.company?.address?.street;     // undefined
let method = user.profile?.save?.();             // chama se existir
let item = user.items?.[0];                      // acesso array seguro
```

## Estruturas Aninhadas e Complexas

### Condições Aninhadas
```javascript
let idade = 25;
let temCarteira = true;
let possuiCarro = false;

if (idade >= 18) {
    if (temCarteira) {
        if (possuiCarro) {
            console.log("Pode dirigir seu carro");
        } else {
            console.log("Pode alugar um carro");
        }
    } else {
        console.log("Precisa tirar carteira de motorista");
    }
} else {
    console.log("Muito jovem para dirigir");
}

// Refatorado com early returns (melhor)
function verificarDirecao(idade, temCarteira, possuiCarro) {
    if (idade < 18) {
        return "Muito jovem para dirigir";
    }
    
    if (!temCarteira) {
        return "Precisa tirar carteira de motorista";
    }
    
    return possuiCarro ? "Pode dirigir seu carro" : "Pode alugar um carro";
}
```

### Condições Complexas
```javascript
// Combinando múltiplos operadores
let usuario = {
    idade: 25,
    ativo: true,
    plano: "premium",
    creditos: 100
};

// Verificação complexa
if ((usuario.idade >= 18 && usuario.ativo) && 
    (usuario.plano === "premium" || usuario.creditos > 50)) {
    console.log("Acesso liberado");
}

// Mais legível com variáveis
let maiorIdade = usuario.idade >= 18;
let contaAtiva = usuario.ativo;
let temAcesso = usuario.plano === "premium" || usuario.creditos > 50;

if (maiorIdade && contaAtiva && temAcesso) {
    console.log("Acesso liberado");
}
```

## Padrões Comuns e Boas Práticas

### Guard Clauses (Cláusulas de Guarda)
```javascript
// Em vez de aninhamento profundo
function processarPedido(pedido) {
    if (!pedido) {
        throw new Error("Pedido é obrigatório");
    }
    
    if (!pedido.itens || pedido.itens.length === 0) {
        throw new Error("Pedido deve ter pelo menos um item");
    }
    
    if (pedido.valor <= 0) {
        throw new Error("Valor do pedido deve ser positivo");
    }
    
    // Lógica principal aqui
    return processarItens(pedido.itens);
}
```

### Evitando Magic Numbers
```javascript
// ❌ Ruim - números mágicos
if (status === 1) {
    // ...
} else if (status === 2) {
    // ...
}

// ✅ Bom - constantes nomeadas
const STATUS = {
    PENDENTE: 1,
    APROVADO: 2,
    REJEITADO: 3
};

if (status === STATUS.PENDENTE) {
    // ...
} else if (status === STATUS.APROVADO) {
    // ...
}
```

### Validação de Entrada
```javascript
function calcularDesconto(valor, percentual) {
    // Validações no início
    if (typeof valor !== 'number' || valor <= 0) {
        throw new Error('Valor deve ser um número positivo');
    }
    
    if (typeof percentual !== 'number' || percentual < 0 || percentual > 100) {
        throw new Error('Percentual deve estar entre 0 e 100');
    }
    
    return valor * (percentual / 100);
}
```

## Resumo de Boas Práticas

1. **Use `===` e `!==`** - Evite conversões implícitas
2. **Prefira guard clauses** - Reduz aninhamento
3. **Nomes descritivos** - Para variáveis booleanas use `is`, `has`, `can`
4. **Evite condições complexas** - Quebre em variáveis menores
5. **Use constantes** - Para valores que se repetem
6. **Valide entradas** - Sempre que necessário
7. **Considere optional chaining** - Para objetos aninhados
8. **Use nullish coalescing** - Para valores padrão mais precisos

## Exemplos Práticos

Consulte os arquivos desta pasta:
- `exemplos.js` - Demonstrações de todas as estruturas
- `projeto-pratico.js` - Sistema de avaliação usando controle de fluxo
