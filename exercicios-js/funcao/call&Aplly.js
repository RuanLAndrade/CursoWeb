function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome : 'Laptop',
  preco : 4500,
  desc : 0.15,
  getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco : 49990, desc : 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
// CALL - PRIMEIRO PARAM = CONTEXTO,NULLO,GLOBAL,PRODUTO
console.log(getPreco.call(carro, 0.17, '$'))
//APPLY -  Primeiro PARAM CONTEXTO FUNCTION - SECOND PARAM POR MEIO DE ARRAY 
console.log(getPreco.apply(global, [0.17 , '$']))