const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) {
    case 10: //Se eu tenho o mesmo resultado para diferentes casos, eu posso apenas pular para o próximo case
      case 9:       //Comportamento for trough / colocar o break senão ele irá executar todos
      console.log('Quadro de Honra')
      break
      case 8 : case 7:
        console.log('Aprovado')
        break
        case 6, 5, 4:
          console.log('Recuperação')
          break
          case 3, 2, 1, 0:
            console.log('Reprovado!')
            break
          default: 
        console.log('Nota Inválida')
  }
}

imprimirResultado(10)
imprimirResultado(9)
imprimirResultado(8)
imprimirResultado(7)
imprimirResultado(-2)
imprimirResultado(0)
