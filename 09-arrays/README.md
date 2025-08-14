
# Conceito de Arrays

## O que são Arrays?

Arrays são estruturas de dados que armazenam uma coleção de elementos em uma lista ordenada. Em JavaScript, arrays são objetos especiais que podem conter qualquer tipo de dado.

## Características dos Arrays

- **Indexados**: Elementos acessados por índice numérico (começando em 0)
- **Dinâmicos**: Tamanho pode mudar durante a execução
- **Heterogêneos**: Podem conter diferentes tipos de dados
- **Ordenados**: Mantêm a ordem de inserção

## Criação de Arrays

### Literal de Array
```javascript
const array = [elemento1, elemento2, elemento3];
```

### Construtor Array
```javascript
const array = new Array(elemento1, elemento2);
```

### Array.of()
```javascript
const array = Array.of(1, 2, 3);
```

### Array.from()
```javascript
const array = Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']
```

## Propriedades Importantes

- `length`: Retorna o tamanho do array
- Índices numéricos: 0, 1, 2, 3...

## Quando Usar Arrays

- Listas de dados similares
- Coleções ordenadas
- Quando a ordem importa
- Para iterar sobre elementos
