
# Estruturas de Repetição

## Tipos de Loops

### for
Loop com contador - usado quando você sabe quantas vezes repetir
```javascript
for (inicialização; condição; incremento) {
    // código
}
```

### while
Loop com condição - repete enquanto a condição for verdadeira
```javascript
while (condição) {
    // código
}
```

### do...while
Executa pelo menos uma vez, depois verifica a condição
```javascript
do {
    // código
} while (condição);
```

### for...in
Itera sobre propriedades de objetos
```javascript
for (let propriedade in objeto) {
    // código
}
```

### for...of
Itera sobre valores de arrays/iteráveis
```javascript
for (let valor of array) {
    // código
}
```

## Controle de Loops

- `break` - Sai do loop
- `continue` - Pula para próxima iteração
