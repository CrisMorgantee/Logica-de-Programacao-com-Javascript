
# Funções com Parâmetros

## Tipos de Parâmetros

### Parâmetros Simples
```javascript
function funcao(parametro1, parametro2) {
    // código
}
```

### Parâmetros Padrão
```javascript
function funcao(parametro1, parametro2 = "valor padrão") {
    // código
}
```

### Rest Parameters
```javascript
function funcao(primeiro, ...resto) {
    // resto é um array com os parâmetros restantes
}
```

### Destructuring
```javascript
function funcao({prop1, prop2}) {
    // extrai propriedades do objeto
}

function funcao([item1, item2]) {
    // extrai elementos do array
}
```

## Características

- JavaScript não valida número de parâmetros
- Parâmetros extras são ignorados
- Parâmetros faltantes são `undefined`
- `arguments` object (functions tradicionais)
- Arrow functions não têm `arguments`

## Boas Práticas

- Use parâmetros padrão quando apropriado
- Limite o número de parâmetros (máximo 3-4)
- Use objetos para múltiplos parâmetros
- Valide parâmetros quando necessário
