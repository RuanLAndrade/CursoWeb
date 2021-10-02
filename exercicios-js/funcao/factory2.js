function criarProduto(nome, preco) {
  return {
    nome ,
    preco,
    desconto : 0.1
  }
}

console.log(criarProduto('Laptop', 3000))
console.log(criarProduto('IPAD', 3000))