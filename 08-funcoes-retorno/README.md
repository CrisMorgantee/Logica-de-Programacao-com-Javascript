
# Funções com Retorno de Valor

## Return Statement

### Retorno Simples
```javascript
function funcao() {
    return valor;
}
```

### Retorno Condicional
```javascript
function funcao(condicao) {
    if (condicao) {
        return valor1;
    }
    return valor2;
}
```

### Return Antecipado
```javascript
function funcao(parametro) {
    if (!parametro) return null; // Guard clause
    // resto do código
}
```

## Tipos de Retorno

1. **Valores primitivos** (number, string, boolean)
2. **Objetos** e arrays
3. **Funções** (higher-order functions)
4. **Undefined** (quando não há return)
5. **Múltiplos valores** (usando arrays ou objetos)

## Características

- Só um valor pode ser retornado
- `return` encerra a execução da função
- Sem `return` explicit, retorna `undefined`
- Arrow functions têm return implícito em uma linha

## Boas Práticas

- Sempre retorne o mesmo tipo quando possível
- Use early returns para validações
- Retorne objetos para múltiplos valores
- Documente o que a função retorna
