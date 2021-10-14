const sacarDinheiro = function (valorSaque) {
  let cont100 = 0
  let cont50 = 0
  let cont10 = 0
  let cont5 = 0
  let cont1 = 0
  let valorNota = calcularValorNota(valorSaque)

  while(valorSaque >= valorNota) {
    switch (valorNota) {
      case 100 :
        valorSaque -= 100
        cont100++
        break
      case 50 : 
        valorSaque -= 50
        cont50++
        break
      case 10 :
        valorSaque -= 10
        cont10++
          break
      case 5 :
        valorSaque -= 5
        cont5++
        break
      case 1 : 
        valorSaque -= 1
        cont1++
        break
    }
    valorNota = calcularValorNota(valorSaque)
  }
  return elaborarResultado(cont100, cont50, cont10, cont5, cont1)
}

const calcularValorNota = function (valorSaque) {
  if(valorSaque >= 100) {
    return 100
  } else if (valorSaque >= 50) {
    return 50
  } else if (valorSaque >= 10) {
    return 10
  } else if ( valorSaque >= 5) {
    return 5
  } else if ( valorSaque >= 1) {
    return 1
  }
}

const elaborarResultado = function (cont100, cont50, cont10, cont5, cont1) {
 let resultado = ''
 
 if(cont100 > 0 ) {
   resultado += `${cont100} nota(s) de R$100`
 }

 if (cont50 > 0 ) {
   resultado += `\n${cont50} nota(s) de R$50`
 }

 if(cont10 > 0 ) {
   resultado += `\n${cont10} nota(s) de R$10`
 }

 if(cont5 > 0) {
   resultado += `\n${cont5} nota(s) de R$5`
 }

 if(cont1 > 0) {
   resultado += `\n${cont1} nota(s) de R$1`
 }
 return resultado
}

console.log(sacarDinheiro(283))