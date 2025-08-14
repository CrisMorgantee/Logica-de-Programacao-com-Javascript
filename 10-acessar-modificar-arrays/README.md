
# Acessando e Modificando Elementos do Array

## Acessando Elementos

### Índice Numérico
```javascript
const array = ['a', 'b', 'c'];
console.log(array[0]); // 'a'
console.log(array[1]); // 'b'
```

### Primeiro e Último Elemento
```javascript
const primeiro = array[0];
const ultimo = array[array.length - 1];
```

### Verificando Existência
```javascript
if (indice in array) {
    // elemento existe
}
```

## Modificando Elementos

### Alteração Direta
```javascript
array[0] = 'novo valor';
```

### Adicionando Elementos
- `push()`: adiciona no final
- `unshift()`: adiciona no início
- `splice()`: adiciona em posição específica

### Removendo Elementos
- `pop()`: remove do final
- `shift()`: remove do início
- `splice()`: remove de posição específica
- `delete`: cria "buraco" no array

## Métodos Úteis

- `indexOf()`: encontra índice
- `includes()`: verifica existência
- `slice()`: cria subarray
- `concat()`: une arrays

## Boas Práticas

- Sempre verificar se índice existe
- Usar métodos apropriados para cada operação
- Cuidado com arrays esparsos
- Considerar performance em arrays grandes
