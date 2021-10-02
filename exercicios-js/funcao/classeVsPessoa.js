class Pessoa {
  constructor(nome) {
    this.nome = nome
  }
  falar () {
    // USADO THIS POIS É A VARIAVEL QUE FOI CRIADA PARA RECEBER O NOME
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa('Ruan')
p1.falar()

const criarPessoa = nome => {
  return {
    falar : () => console.log(`Meu Nome é ${nome}`)
  }
}

const p2 = criarPessoa ('Ruan')
p2.falar()