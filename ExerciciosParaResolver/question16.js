const calculadoraBasica = function (num1, operador, num2) {
  switch(operador) {
    case '+' :
      return num1 + num2
    case '-' : 
    return num1 - num2
    case '*' :
      return num1 * num2
    case '/' :
      return num1 / num2
    default :
    return ' A operação não é válida !'
  }
}

console.log(calculadoraBasica(2, '+', 4))
console.log(calculadoraBasica(2, '-', 4))
console.log(calculadoraBasica(2, '*', 4))
console.log(calculadoraBasica(2, '/', 4))