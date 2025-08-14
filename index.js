
// Exemplo de função com parâmetro
function saudar(nome) {
    return `Olá, ${nome}! Bem-vindo!`;
}

// Função com múltiplos parâmetros
function calcular(a, b, operacao) {
    switch(operacao) {
        case 'soma':
            return a + b;
        case 'subtracao':
            return a - b;
        case 'multiplicacao':
            return a * b;
        case 'divisao':
            return b !== 0 ? a / b : 'Erro: divisão por zero';
        default:
            return 'Operação inválida';
    }
}

// Função com parâmetro padrão
function apresentar(nome, idade = 18) {
    return `Meu nome é ${nome} e tenho ${idade} anos.`;
}

// Testando as funções
console.log(saudar("Maria"));
console.log(calcular(10, 5, "soma"));
console.log(calcular(10, 3, "multiplicacao"));
console.log(apresentar("João"));
console.log(apresentar("Ana", 25));
