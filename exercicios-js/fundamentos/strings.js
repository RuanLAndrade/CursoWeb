const escola = "Cod3r"

console.log(escola.charAt(4)) // trás o elemento na posição do índice 4 da variável escola
console.log(escola.charAt(5)) // Não trás excessão de erro pois deveria porquê não existe posição 5
console.log(escola.charCodeAt(3)) // Trás a tabela ASCHII
console.log(escola.indexOf(3)) // Trás o índice

console.log(escola.substring(1)) //  percorrer índice da variável
console.log(escola.substring(0, 3)) // percorre do índice 0 até o 3

console.log('Escola '.concat(escola).concat("!")) // CONCATENAÇÃO
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) 
console.log(escola.replace(/\d/, 'e')) // Substitui todos os digitos pela letra 'e' // REGEX
console.log(escola.replace(/\w/g, 'e')) // Substitui todos os digitos e letras pela letra 'e  // REGEX'
console.log('Ana, Maria, Pedro'.split(',')) /* Usando uma string e criando array utilizando o split
 para fazer a separação por meio de vírgula ','    */
console.log('Ana, Maria, Pedro'.split(/,/)) // REGEX / 