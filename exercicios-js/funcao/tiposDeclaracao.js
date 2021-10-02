console.log(soma(2,3))
console.log(sub(3,2))
console.log(mult(5,4))

// function declaration - funções são pre carregadas em execuçao de codigo
function soma(x, y) {
  return x + y
}

// function expression
const sub = function (x, y) {
  return x- y
}

// named function declaration
const mult = function mult (x, y) {
  return x * y
}