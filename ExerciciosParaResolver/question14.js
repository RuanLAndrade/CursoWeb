// Objetivo 
// Fazer uma seleção de frutas e retornar as mensagens contidas na questão
// Retornar mensagem apenas para as frutas, maçã, kiwi e melancia.
const fruitFair = function(fruit) {

switch (fruit) { 
  case 'maca' || 'maça' || 'maçã':
    return console.log('Não vendemos esta fruta aqui')    
    break;
    case 'kiwi':
    return console.log('Estamos com escassez de kiwi.')    
    break;
    case 'melancia':
    return console.log('Aqui está, custa R$ 3,00 o kg')    
    break;

  default:
    return console.log('Digite uma opção válida')
    break;
}
}

fruitFair('maca')
fruitFair('kiwi')
fruitFair('melancia')
fruitFair('banana')