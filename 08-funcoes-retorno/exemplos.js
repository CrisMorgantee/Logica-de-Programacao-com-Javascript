
// Exemplos de Funções com Retorno de Valor

console.log("=== RETORNO SIMPLES ===");

function somar(a, b) {
    return a + b;
}

function obterNomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

function ehPar(numero) {
    return numero % 2 === 0;
}

console.log("Soma 5 + 3:", somar(5, 3));
console.log("Nome completo:", obterNomeCompleto("João", "Silva"));
console.log("8 é par?", ehPar(8));
console.log("7 é par?", ehPar(7));

console.log("\n=== RETORNO CONDICIONAL ===");

function classificarIdade(idade) {
    if (idade < 13) {
        return "Criança";
    } else if (idade < 18) {
        return "Adolescente";
    } else if (idade < 60) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

console.log("Idade 10:", classificarIdade(10));
console.log("Idade 16:", classificarIdade(16));
console.log("Idade 30:", classificarIdade(30));
console.log("Idade 65:", classificarIdade(65));

function avaliarNota(nota) {
    if (nota >= 90) return "A";
    if (nota >= 80) return "B";
    if (nota >= 70) return "C";
    if (nota >= 60) return "D";
    return "F";
}

console.log("Nota 95:", avaliarNota(95));
console.log("Nota 75:", avaliarNota(75));
console.log("Nota 55:", avaliarNota(55));

console.log("\n=== GUARD CLAUSES (Return Antecipado) ===");

function calcularDesconto(preco, percentual, ehVip) {
    // Validações com return antecipado
    if (typeof preco !== 'number' || preco <= 0) {
        return null;
    }
    
    if (typeof percentual !== 'number' || percentual < 0) {
        return null;
    }
    
    // Aplicar desconto
    let desconto = preco * (percentual / 100);
    
    // Desconto extra para VIP
    if (ehVip) {
        desconto += preco * 0.05; // 5% extra
    }
    
    return {
        precoOriginal: preco,
        percentualDesconto: percentual,
        ehVip: ehVip,
        valorDesconto: desconto,
        precoFinal: preco - desconto
    };
}

console.log("Desconto válido:", calcularDesconto(100, 10, true));
console.log("Desconto inválido:", calcularDesconto(-50, 10));
console.log("Desconto VIP:", calcularDesconto(200, 15, true));
console.log("Desconto normal:", calcularDesconto(200, 15, false));

console.log("\n=== RETORNO DE OBJETOS ===");

function criarPessoa(nome, idade, email) {
    return {
        nome: nome,
        idade: idade,
        email: email,
        ativo: true,
        criadoEm: new Date(),
        saudar: function() {
            return `Olá, eu sou ${this.nome}`;
        }
    };
}

const pessoa1 = criarPessoa("Maria", 28, "maria@email.com");
console.log("Pessoa criada:", pessoa1);
console.log("Saudação:", pessoa1.saudar());

// Retorno com destructuring
function analisarTexto(texto) {
    const palavras = texto.split(' ');
    const caracteres = texto.length;
    const caracteresLimpos = texto.replace(/\s/g, '').length;
    
    return {
        original: texto,
        palavras: palavras.length,
        caracteres,
        caracteresLimpos,
        primeiraLetra: texto[0],
        ultimaLetra: texto[texto.length - 1]
    };
}

const analise = analisarTexto("JavaScript é uma linguagem incrível");
console.log("Análise do texto:", analise);

console.log("\n=== RETORNO DE ARRAYS ===");

function obterEstatisticas(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        return [0, 0, 0, 0]; // [min, max, soma, media]
    }
    
    let min = numeros[0];
    let max = numeros[0];
    let soma = 0;
    
    for (let numero of numeros) {
        if (numero < min) min = numero;
        if (numero > max) max = numero;
        soma += numero;
    }
    
    const media = soma / numeros.length;
    
    return [min, max, soma, media];
}

const [min, max, soma, media] = obterEstatisticas([5, 2, 8, 1, 9, 3]);
console.log(`Min: ${min}, Max: ${max}, Soma: ${soma}, Média: ${media.toFixed(2)}`);

console.log("\n=== RETORNO DE FUNÇÕES (Higher-Order) ===");

function criarOperador(operacao) {
    switch (operacao) {
        case 'somar':
            return (a, b) => a + b;
        case 'subtrair':
            return (a, b) => a - b;
        case 'multiplicar':
            return (a, b) => a * b;
        case 'dividir':
            return (a, b) => b !== 0 ? a / b : null;
        default:
            return () => null;
    }
}

const somar2 = criarOperador('somar');
const multiplicar = criarOperador('multiplicar');

console.log("Soma com função retornada:", somar2(5, 3));
console.log("Multiplicação com função retornada:", multiplicar(4, 6));

console.log("\n=== FUNÇÕES FACTORY ===");

function criarContador(valorInicial = 0) {
    let count = valorInicial;
    
    return {
        incrementar: () => ++count,
        decrementar: () => --count,
        obterValor: () => count,
        resetar: () => { count = valorInicial; return count; }
    };
}

const contador = criarContador(10);
console.log("Valor inicial:", contador.obterValor());
console.log("Incrementar:", contador.incrementar());
console.log("Incrementar:", contador.incrementar());
console.log("Decrementar:", contador.decrementar());
console.log("Resetar:", contador.resetar());

console.log("\n=== RETURN COM ARROW FUNCTIONS ===");

// Return implícito (uma linha)
const quadrado = x => x * x;
const ehMaiorIdade = idade => idade >= 18;
const formatarMoeda = valor => `R$ ${valor.toFixed(2)}`;

console.log("Quadrado de 7:", quadrado(7));
console.log("É maior de idade (17):", ehMaiorIdade(17));
console.log("Formatar 1234.567:", formatarMoeda(1234.567));

// Return explícito (múltiplas linhas)
const calcularIMC = (peso, altura) => {
    const imc = peso / (altura * altura);
    let classificacao;
    
    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25) classificacao = "Peso normal";
    else if (imc < 30) classificacao = "Sobrepeso";
    else classificacao = "Obeso";
    
    return { imc: imc.toFixed(2), classificacao };
};

console.log("IMC (70kg, 1.75m):", calcularIMC(70, 1.75));

console.log("\n=== RETORNO MÚLTIPLO COM DESTRUCTURING ===");

function dividirComResto(dividendo, divisor) {
    const quociente = Math.floor(dividendo / divisor);
    const resto = dividendo % divisor;
    return { quociente, resto };
}

const { quociente, resto } = dividirComResto(17, 3);
console.log(`17 ÷ 3 = ${quociente} resto ${resto}`);

function obterCoordenadas() {
    return [Math.random() * 100, Math.random() * 100];
}

const [x, y] = obterCoordenadas();
console.log(`Coordenadas: x=${x.toFixed(2)}, y=${y.toFixed(2)}`);

console.log("\n=== FUNCTIONS SEM RETURN (undefined) ===");

function semRetorno() {
    console.log("Esta função não retorna nada explicitamente");
}

function comRetornoVazio() {
    return; // Retorno vazio também é undefined
}

const resultado1 = semRetorno();
const resultado2 = comRetornoVazio();

console.log("Resultado sem return:", resultado1); // undefined
console.log("Resultado com return vazio:", resultado2); // undefined
