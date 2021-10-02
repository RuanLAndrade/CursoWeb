const verifyDay = function (num) {
  switch(num) {
    case 1 :
      return console.log('Domingo : Não é um dia útil')
      break
    case 2 :
    case 3 :
    case 4 :
    case 5 :
    case 6 :
      return console.log('É um dia útil')
      break
    case 7 :
      return console.log('Sábado : Não é um dia útil')
      break
      default :
      return console.log('Na semana existem 7 dias')
  }
}

verifyDay(6)