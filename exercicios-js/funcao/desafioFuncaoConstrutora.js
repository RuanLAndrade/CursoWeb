function Pessoa (nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome

  this.falar = function () {
    console.log(`Meu nome é ${nome}`)
    console.log(`Meu sobrenome é ${sobrenome}`)

  }
}

const ruan = new Pessoa('Ruan', 'Andrade')

ruan.falar()