
# Operadores de Comparação e Lógicos

## Conceitos Fundamentais

Operadores são símbolos que instruem o interpretador a realizar operações específicas matemáticas, lógicas ou de comparação. Em JavaScript, há vários tipos de operadores que permitem manipular dados e controlar o fluxo do programa.

## Operadores Aritméticos

### Básicos
```javascript
let a = 10, b = 3;

console.log(a + b);  // 13 - Adição
console.log(a - b);  // 7  - Subtração
console.log(a * b);  // 30 - Multiplicação
console.log(a / b);  // 3.333... - Divisão
console.log(a % b);  // 1  - Módulo (resto da divisão)
console.log(a ** b); // 1000 - Exponenciação (ES2016)
```

### Incremento e Decremento
```javascript
let x = 5;

// Pós-incremento/decremento (usa valor, depois modifica)
console.log(x++); // 5 (mostra 5, depois x vira 6)
console.log(x);   // 6

console.log(x--); // 6 (mostra 6, depois x vira 5)
console.log(x);   // 5

// Pré-incremento/decremento (modifica, depois usa valor)
console.log(++x); // 6 (x vira 6, depois mostra 6)
console.log(--x); // 5 (x vira 5, depois mostra 5)
```

### Casos Especiais
```javascript
// Divisão por zero
console.log(5 / 0);   // Infinity
console.log(-5 / 0);  // -Infinity
console.log(0 / 0);   // NaN

// Operações com strings
console.log("5" + 3);  // "53" (concatenação)
console.log("5" - 3);  // 2 (conversão numérica)
console.log("5" * 3);  // 15 (conversão numérica)
console.log("a" * 3);  // NaN (não pode converter)
```

## Operadores de Comparação

### Igualdade e Desigualdade

#### Igualdade Solta (==, !=)
Faz conversão de tipo antes da comparação:

```javascript
// Exemplos de igualdade solta
5 == "5";         // true (string "5" vira número 5)
true == 1;        // true (boolean true vira número 1)
false == 0;       // true (boolean false vira número 0)
null == undefined; // true (caso especial)
"" == 0;          // true (string vazia vira número 0)
[] == "";         // true (array vazio vira string vazia)

// Casos confusos da igualdade solta
"0" == false;     // true
"" == [];         // true
0 == [];          // true
```

#### Igualdade Estrita (===, !==)
Não faz conversão de tipo:

```javascript
// Exemplos de igualdade estrita
5 === "5";        // false (tipos diferentes)
true === 1;       // false (tipos diferentes)
null === undefined; // false (tipos diferentes)
0 === false;      // false (tipos diferentes)

// Casos especiais
NaN === NaN;      // false (NaN nunca é igual a si mesmo)
+0 === -0;        // true (zeros positivo e negativo são iguais)
```

### Comparações Relacionais
```javascript
let a = 10, b = 5;

console.log(a > b);   // true - maior que
console.log(a < b);   // false - menor que
console.log(a >= b);  // true - maior ou igual
console.log(a <= b);  // false - menor ou igual

// Comparação de strings (lexicográfica)
"apple" < "banana";   // true
"Apple" < "apple";    // true (A tem código ASCII menor)
"10" < "2";           // true (comparação como string!)
"10" < 2;             // false (conversão para número)
```

### Comparação de Objetos
```javascript
// Objetos são comparados por referência, não por valor
{a: 1} === {a: 1};    // false (objetos diferentes)
[1, 2] === [1, 2];    // false (arrays diferentes)

// Mesma referência
let obj1 = {a: 1};
let obj2 = obj1;
obj1 === obj2;        // true (mesma referência)

// Para comparar valores, precisa fazer manualmente
function objetosIguais(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}
```

## Operadores Lógicos

### AND Lógico (&&)
```javascript
// Retorna o primeiro valor falsy ou o último valor
true && true;          // true
true && false;         // false
"hello" && "world";    // "world"
"hello" && "";         // ""
0 && "never shown";    // 0

// Short-circuit evaluation
let user = {name: "João"};
user && user.name && console.log(user.name); // executa

// Uso prático para execução condicional
isLoggedIn && redirectToProfile();

// Múltiplas condições
let age = 25;
let hasLicense = true;
let hasCar = true;

age >= 18 && hasLicense && hasCar && console.log("Pode dirigir");
```

### OR Lógico (||)
```javascript
// Retorna o primeiro valor truthy ou o último valor
false || true;         // true
"" || "default";       // "default"
null || undefined || "found"; // "found"

// Uso comum para valores padrão
function greet(name) {
    name = name || "Visitante";
    console.log(`Olá, ${name}!`);
}

// Configurações com padrões
let config = {
    theme: userTheme || defaultTheme || "light",
    timeout: userTimeout || 5000
};
```

### NOT Lógico (!)
```javascript
!true;                 // false
!false;                // true
!"hello";              // false (string não vazia é truthy)
!"";                   // true (string vazia é falsy)
!0;                    // true
!42;                   // false

// Dupla negação para conversão boolean
!!"hello";             // true
!!0;                   // false
!![];                  // true (array vazio é truthy)
!!{};                  // true (objeto vazio é truthy)

// Verificação de existência
if (!user) {
    console.log("Usuário não encontrado");
}

if (!user.profile) {
    console.log("Perfil não configurado");
}
```

## Operadores de Atribuição

### Atribuição Simples
```javascript
let x = 10;            // atribuição básica
let y = x;             // copia o valor
```

### Atribuições Compostas
```javascript
let num = 10;

num += 5;              // num = num + 5; (15)
num -= 3;              // num = num - 3; (12)
num *= 2;              // num = num * 2; (24)
num /= 4;              // num = num / 4; (6)
num %= 4;              // num = num % 4; (2)
num **= 3;             // num = num ** 3; (8)

// Com strings
let str = "Hello";
str += " World";       // "Hello World"

// Com arrays
let arr = [1, 2];
arr += [3, 4];         // "1,23,4" (conversão para string!)
```

### Atribuição por Desestruturação
```javascript
// Arrays
let [first, second] = [1, 2, 3];
console.log(first);    // 1
console.log(second);   // 2

// Objetos
let {name, age} = {name: "João", age: 30, city: "SP"};
console.log(name);     // "João"
console.log(age);      // 30

// Com valores padrão
let [a = 10, b = 20] = [5];
console.log(a);        // 5
console.log(b);        // 20 (padrão)
```

## Operadores Bitwise

Operam nos bits individuais dos números:

```javascript
let a = 5;             // 101 em binário
let b = 3;             // 011 em binário

console.log(a & b);    // 1 - AND bitwise (001)
console.log(a | b);    // 7 - OR bitwise (111)
console.log(a ^ b);    // 6 - XOR bitwise (110)
console.log(~a);       // -6 - NOT bitwise
console.log(a << 1);   // 10 - Left shift (1010)
console.log(a >> 1);   // 2 - Right shift (010)
console.log(a >>> 1);  // 2 - Unsigned right shift
```

## Operadores Especiais

### typeof
```javascript
typeof "hello";        // "string"
typeof 42;             // "number"
typeof true;           // "boolean"
typeof undefined;      // "undefined"
typeof null;           // "object" (bug histórico)
typeof {};             // "object"
typeof [];             // "object"
typeof function(){};   // "function"
typeof Symbol();       // "symbol"
typeof 123n;           // "bigint"
```

### instanceof
```javascript
let arr = [1, 2, 3];
let obj = {a: 1};
let date = new Date();

console.log(arr instanceof Array);    // true
console.log(arr instanceof Object);   // true (Array herda de Object)
console.log(obj instanceof Array);    // false
console.log(date instanceof Date);    // true
```

### in
```javascript
let pessoa = {nome: "Ana", idade: 25};
let arr = ["a", "b", "c"];

console.log("nome" in pessoa);         // true
console.log("altura" in pessoa);       // false
console.log(0 in arr);                 // true (índice existe)
console.log(5 in arr);                 // false (índice não existe)
console.log("length" in arr);          // true (propriedade do array)
```

### delete
```javascript
let obj = {a: 1, b: 2, c: 3};
let arr = [1, 2, 3];

delete obj.b;
console.log(obj);      // {a: 1, c: 3}

delete arr[1];
console.log(arr);      // [1, empty, 3] (cria "buraco")
console.log(arr.length); // 3 (length não muda)
```

## Precedência de Operadores

Da maior para menor precedência:

1. `()` - Parênteses
2. `.` `[]` `()` - Acesso a membros e chamadas de função
3. `++` `--` - Incremento/Decremento (pós-fixo)
4. `!` `~` `+` `-` `++` `--` - Unários e pré-fixos
5. `**` - Exponenciação
6. `*` `/` `%` - Multiplicação, Divisão, Módulo
7. `+` `-` - Adição, Subtração
8. `<<` `>>` `>>>` - Shifts bitwise
9. `<` `<=` `>` `>=` `in` `instanceof` - Relacionais
10. `==` `!=` `===` `!==` - Igualdade
11. `&` - AND bitwise
12. `^` - XOR bitwise
13. `|` - OR bitwise
14. `&&` - AND lógico
15. `||` - OR lógico
16. `??` - Nullish coalescing
17. `? :` - Condicional (ternário)
18. `=` `+=` `-=` etc. - Atribuição

```javascript
// Exemplos de precedência
let result = 2 + 3 * 4;        // 14, não 20 (* tem precedência)
let result2 = (2 + 3) * 4;     // 20 (parênteses têm maior precedência)

let condition = true || false && false; // true (AND antes de OR)
let condition2 = (true || false) && false; // false
```

## Coerção de Tipos em Operadores

### Adição (+)
```javascript
// Se um operando é string, converte tudo para string
"5" + 3;               // "53"
5 + "3";               // "53"
"Hello" + " " + "World"; // "Hello World"

// Com outros tipos
true + "test";         // "truetest"
5 + true;              // 6 (true vira 1)
5 + false;             // 5 (false vira 0)
5 + null;              // 5 (null vira 0)
5 + undefined;         // NaN (undefined vira NaN)
```

### Outros Operadores Aritméticos
```javascript
// Convertem para números
"10" - "5";            // 5
"10" * "5";            // 50
"10" / "2";            // 5
"10" % "3";            // 1

// Casos especiais
"hello" - 5;           // NaN
true * 2;              // 2
false / 2;             // 0
null + 5;              // 5
undefined + 5;         // NaN
```

## Casos Especiais e Pegadinhas

```javascript
// Comparações estranhas
[] == 0;               // true (array vazio vira "", depois 0)
[] == false;           // true
"0" == false;          // true
null == 0;             // false (mas null == false também é false!)

// NaN é especial
NaN == NaN;            // false
NaN === NaN;           // false
isNaN(NaN);            // true
Number.isNaN(NaN);     // true (mais preciso)

// Infinity
1 / 0;                 // Infinity
-1 / 0;                // -Infinity
Infinity === Infinity; // true
Infinity > 1000000;    // true

// Zeros
+0 === -0;             // true
Object.is(+0, -0);     // false (mais preciso)
```

## Boas Práticas

### Use === e !==
```javascript
// ❌ Evitar (conversões implícitas)
if (value == true) { }
if (count == 0) { }

// ✅ Preferir (comparações estritas)
if (value === true) { }
if (count === 0) { }
```

### Use Parênteses para Clareza
```javascript
// ❌ Confuso
let result = a && b || c && d;

// ✅ Claro
let result = (a && b) || (c && d);
```

### Valide Tipos Quando Necessário
```javascript
function somar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Ambos argumentos devem ser números');
    }
    return a + b;
}
```

### Entenda Short-Circuit Evaluation
```javascript
// Use && para execução condicional
isLoggedIn && redirectToProfile();

// Use || para valores padrão
let name = userName || "Visitante";

// Use ?? para valores mais específicos
let timeout = userTimeout ?? 5000; // só se for null/undefined
```

## Resumo

1. **Sempre use `===` e `!==`** - Evita conversões inesperadas
2. **Use parênteses** - Para deixar clara a precedência
3. **Entenda short-circuit evaluation** - Com `&&` e `||`
4. **Cuidado com coerção de tipos** - Especialmente com `+`
5. **Valide tipos** - Quando necessário para robustez
6. **Use operadores apropriados** - `??` para null/undefined, `||` para falsy
7. **Teste casos especiais** - NaN, Infinity, null, undefined

## Exemplos Práticos

Consulte o arquivo `exemplos.js` nesta pasta para ver demonstrações práticas de todos os operadores.
