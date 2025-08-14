
# Estruturas de Controle e Condicionais

## Estruturas Condicionais

### if...else
```javascript
if (condicao) {
    // código se verdadeiro
} else {
    // código se falso
}
```

### if...else if...else
```javascript
if (condicao1) {
    // código 1
} else if (condicao2) {
    // código 2
} else {
    // código padrão
}
```

### switch...case
```javascript
switch (variavel) {
    case valor1:
        // código
        break;
    case valor2:
        // código
        break;
    default:
        // código padrão
}
```

### Operador Ternário
```javascript
let resultado = condicao ? valorSeVerdadeiro : valorSeFalso;
```

## Valores Falsy e Truthy

**Falsy**: false, 0, "", null, undefined, NaN
**Truthy**: Qualquer valor que não seja falsy
