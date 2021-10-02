// CRIANDO UM CONSTRUTOR POR MEIO DE FUNÇAO AO INVES DE OBJETO
//COMO SE FOSSE UM OBJETO
// É UM MOLDE, FUNCIONA COMO SE FOSSE UMA CLASSE EM OUTRAS LINGUAGENS
function Carro (velocidadeMaxima = 200, delta = 5) {
  // Atributo Privado
  let velocidadeAtual = 0

  // Metodo Publico
  // O THIS FAZ COM QUE A FUNÇAO SE TORNE PUBLICA
  this.acelerar = function() {
    if(velocidadeAtual + delta <= velocidadeMaxima){
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMaxima
    }
  }

  // METODO PUBLICO
  this.getVelocidadeAtual = function() {
    return velocidadeAtual
  }
}

const uno = new Carro // PODE CHAMAR COM OU SEM PARENTESES
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)