// CALLBACK É PASSAR UMA FUNÇÃO QUE SERÁ CHAMADA POR EVENTO
// NESSE CASO FOI O LOOP, CADA ELEMENTO PERCORRIDO NO ARRAY 
const fabricantes = [ 'mercedes', 'audi', 'bmw']

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome} `)  // " ` " TEMPLATE STRING
}
fabricantes.forEach(imprimir)
//ARROWFUNCTION
fabricantes.forEach(fabricante => console.log(fabricante))

// fabricantes.forEach(function (a) { //IMPRIMIR O VALOR DE A QUE SÃO AS ARRAYS
//   console.log(a)
// })