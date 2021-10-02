// novo recurso do <ES2015>
const pessoa = {
  nome: 'Ana' ,
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC' ,
    numero: 1000
    }
}
// Destructuring '{}' Operadores de desestruturação / Forma de tirar vários atributos de um objeto em uma única linha
const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep}} = pessoa
console.log( logradouro, numero, cep)

const { conta: {ag, num } } = pessoa
console.log(ag, num)
//Tomar cuidado quando for desestruturar um dado aninhado, verificar que ele foi realmente criado/setado