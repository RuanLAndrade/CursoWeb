//Ele é composto por 3 partes ,a primeira parte é uma expressão  sempre retorna true ou false
//  depois a '?'
// e retorno dessa expressão 
const resultado = nota => nota >= 7  ? 'Aprovado' : 'Reprovado' 
//SEGUNDA FORMA
//const resultado = nota =>{
//     return nota >= 7  ? 'Aprovado' : 'Reprovado' 
//}

//const status = nota >= 7  ? 'Aprovado' : 'Reprovado '

console.log(resultado(7.1))
console.log(resultado(6.9))

