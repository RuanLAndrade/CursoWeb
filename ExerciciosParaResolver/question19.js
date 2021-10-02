const menu = function (code, amount) {
  switch (code) {
    case 100 :
      price = 3
      return console.log(`${amount} Cachorro Quente R$${amount * price}`)
      case 200 :
        price = 4
        return console.log(`${amount} Hamburguer Simples R$${amount * price}`)
      case 300 :
      price = 5.5
      return console.log(`${amount} Cheeseburguer R$${amount * price}`)
      case 400 :
      price = 7.5
      return console.log(`${amount} Bauru R$${amount * price}`)
      case 500 :
      price = 3.5
      return console.log(`${amount} Regrigerante R$${amount * price}`)
      case 600 :
      price = 2.8
      return console.log(`${amount} Suco R$${amount * price}`)
      default :
      return console.log('Produto não existente')
  }
}

menu(100, 2)
menu(200, 4)
menu(300, 1)
menu(400, 1)
menu(500, 4)
menu(600, 5)
menu(700, 2)
