// Exercicio 
// Objetivo = Somar os números positivos de um Array

// 1 - Somar os números
// 2 - Verificar se os valores são números e exibir erro para caso algum não seja.
// 3 - Verificar se os números são positivos 
// 3 - Exibir Resultado

function sum(array) {
  const verifyArray = array.some(item => typeof item != 'number' || item <= 0)

  if(verifyArray) return 'Coloque apenas número positivos no array'

  const result = array.reduce((previousValue, currentValue) => previousValue + currentValue)

  return result
} 

const teste = [10, 50, 'teste']

console.log(sum(teste));