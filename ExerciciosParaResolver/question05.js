function formatarValorDecimal (valorDecimal) {
  valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace('.',',')}`
  //EU QUE FIZ return console.log(`O valor total é R$${valor1 + valor2}`)
  console.log(valorEmReais)

}
// OPERACAO FEITA NA FUNCAO
formatarValorDecimal(0.3 + 0.4)