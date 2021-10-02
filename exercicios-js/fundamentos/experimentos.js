//TENHA CONHECIMENTO DE QUAL RUNTIME VOCÊ ESTÁ, ENTENDER OS PRINCIPIOS E MANEIRA COMO PROGRAMA, PENSAR, PARADIGMAS

let a = 3
this.c =456
this.d = false
this.e = 'teste'

console.log(this.a)
console.log(global.a) //global dentro do node equivale a objeto window no navegador
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel maluca: sem var e let!
abc = c //nao faça isso em casa
console.log(global.bc)
//module.exports = { e: 456, f: false , g : 'teste'}