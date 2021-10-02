function jurosSimples (capitalInicial, taxaJuros, tempoAplicacao) {
  this.capitalInicial = capitalInicial
  this.taxaJuros = taxaJuros
  this.tempoAplicacao = tempoAplicacao
  
  return console.log(capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao))
}

function jurosCompostos (capitalInicial, taxaJuros, tempoAplicacao){
  
  this.capitalInicial = capitalInicial
  this.taxaJuros = taxaJuros
  this.tempoAplicacao = tempoAplicacao

  return console.log( capitalInicial * (1 + taxaJuros) ** tempoAplicacao)
}

jurosSimples(1000, 10/100, 10)
jurosCompostos(1000, 10/100, 10)