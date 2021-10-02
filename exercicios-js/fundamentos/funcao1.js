// Funcao sem Retorno
function imprimirSoma(a, b){
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8, 9)
imprimirSoma()

// Funcao com retorno
function soma (a, b = 1) {
  return a + b
}

console.log(soma(2,3)) // esta somando todos os valores 
console.log(soma(2))// esta pegando o valor passado na funcao e o que ja foi parametrizado
console.log(soma()) // retornar NaN pois ele soma um numero com um undefined