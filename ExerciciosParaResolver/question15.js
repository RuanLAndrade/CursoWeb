const carDealership = function (modelo) {
  switch(modelo){
    case 'hatch':
      return 'compra efetuada com sucesso!'
      // break NÃO É NECESSÁRIO O BREAK
    case 'sedans' :
      case 'motocicleta' :
      case 'caminhonetes' :
      return 'tem certeza que não prefere este modelo ?'
    default :
    return 'Não trabalhamos com este modelo aqui'
    break
  }
}

console.log(carDealership('hatch'))