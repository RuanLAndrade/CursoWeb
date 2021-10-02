let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 // tem uma ordem precedência maior
console.log(num1)

// é verdadeiro pois ele soma primeiro a variável e depois faz a comparação e depois da comparação ele subtrai
console.log(++num1 === num2-- ) 
console.log(num1 === num2)
// FAÇA SEMPRE O CÓDIGO MAIS SIMPLES POSSÍVEL

let exp = 2 ** 3 // o primeiro parâmetro representa a base e o segundo o expoente.
console.log(exp) // 2 elevado a 3 igual 8

let base = 2
base**= 3 // eleva o valor armazenado  na base à terceira potência
console.log(base)

let expo = 2 ** -3 // com expoente negativo
console.log(expo) // 2 elevado a -3 igual a 0.125