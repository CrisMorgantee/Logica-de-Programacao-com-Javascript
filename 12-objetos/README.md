
# Objetos em JavaScript

## Conceitos Fundamentais

Objetos são estruturas de dados que armazenam coleções de pares chave-valor (propriedades). São o tipo de dado mais importante em JavaScript.

## Criação de Objetos

### Literal de Objeto
```javascript
const obj = {
    propriedade: "valor",
    metodo: function() { return "resultado"; }
};
```

### Construtor Object
```javascript
const obj = new Object();
obj.propriedade = "valor";
```

### Object.create()
```javascript
const obj = Object.create(prototipo);
```

## Propriedades

- **Propriedades de dados**: armazenam valores
- **Propriedades acessoras**: getters e setters
- **Propriedades computadas**: `[expressao]: valor`

## Características Importantes

- Objetos são passados por referência
- Propriedades podem ser adicionadas/removidas dinamicamente
- Chaves são sempre strings ou Symbols
- Valores podem ser qualquer tipo de dados

## Métodos de Objeto Nativos

- `Object.keys()`: retorna array de chaves
- `Object.values()`: retorna array de valores  
- `Object.entries()`: retorna array de pares [chave, valor]
- `Object.assign()`: copia propriedades
- `Object.freeze()`: congela objeto
- `Object.seal()`: sela objeto

## Boas Práticas

- Use notação literal quando possível
- Cuidado com mutabilidade
- Entenda a diferença entre shallow e deep copy
- Use métodos apropriados para manipulação
