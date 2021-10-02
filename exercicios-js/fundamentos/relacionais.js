console.log('01)', '1' == 1) //igual
console.log('02)', '1' === 1) // estritamente igual
console.log('03)', '3' != 3) // diferente de 
console.log('04)', '3' !== 3) //  estritamente diferente

console.log('05)', 3 < 2) // menor que
console.log('06)', 3 > 3)  // maior que
console.log('07)',  3 <= 2) // menor ou igual
console.log('08)', 3 >= 2) // maior ou igual

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // estritamente igual (Não faz diferença pois está buscando referencia de memoria)
console.log('10)', d1 == d2) // igual
console.log('11)', d1.getTime() === d2.getTime()) // está comparando o Number pois tem mesmo tipo e mesmo valor por issso deu true
console.log('12)', undefined == null)  //  
console.log('13)', undefined === null) // VIA DE REGRA SEMPRE USAR O ESTRITAMENTE '==='