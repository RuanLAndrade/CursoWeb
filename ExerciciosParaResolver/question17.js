const GanharAumento = function (SalarioAtual, plano) {
  switch (plano) {
    case 'a' :
      return SalarioAtual * 1.1
    case 'b' :
      return SalarioAtual * 1.15
    case 'c' :
      return SalarioAtual * 1.20
    default :
    return 'O plano é inválido.'
   }
}

console.log(GanharAumento(1500, 'a').toFixed(2))
console.log(GanharAumento(1500, 'b').toFixed(2))
console.log(GanharAumento(1500, 'c').toFixed(2))
console.log(GanharAumento(1500, 'd'))