
# Métodos Básicos de Arrays

## Métodos de Modificação

### Adicionar Elementos
- `push()`: adiciona ao final, retorna novo length
- `unshift()`: adiciona ao início, retorna novo length
- `splice()`: adiciona/remove em posição específica

### Remover Elementos
- `pop()`: remove do final, retorna elemento removido
- `shift()`: remove do início, retorna elemento removido
- `splice()`: remove de posição específica

## Métodos de Busca

- `indexOf()`: primeiro índice do elemento
- `lastIndexOf()`: último índice do elemento
- `includes()`: verifica se contém elemento
- `find()`: primeiro elemento que satisfaz condição
- `findIndex()`: índice do primeiro elemento que satisfaz condição

## Métodos de Transformação

- `slice()`: retorna subarray (não modifica original)
- `concat()`: une arrays (não modifica originais)
- `join()`: converte para string com separador
- `reverse()`: inverte ordem (modifica original)
- `sort()`: ordena elementos (modifica original)

## Métodos de Verificação

- `Array.isArray()`: verifica se é array
- `every()`: verifica se todos passam no teste
- `some()`: verifica se algum passa no teste

## Características Importantes

- Métodos que modificam o array original vs que retornam novo array
- Diferença entre shallow copy e deep copy
- Performance dos diferentes métodos
- Quando usar cada método apropriadamente

## Encadeamento de Métodos

Muitos métodos podem ser encadeados para operações complexas:
```javascript
array.slice(1, 5).reverse().join('-');
```
