let calculaValorPlano = function (idade) {
  if(idade <= 10) {
    return console.log('O valor a ser pago é R$180')
  } else if (idade <= 30) {
    return console.log('O valor a ser pago é R$150')
  }else if (idade <= 60) {
    return console.log('O valor a ser pago é R$195')
  }else {
    return console.log('O valor a ser pago é R$230')
  }
}

calculaValorPlano(25)
calculaValorPlano(65)
calculaValorPlano(7)