const nome = 'Rebeca'
const concatenacao = 'Olá  ' + nome + '!'
const template = `
Olá
${nome}!` // INTERPOLAÇÃO, Não precisa de quebra de texto, exemplo
console.log(concatenacao, template)

// expressoes... 
console.log(` 1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() /* CRIOU uma função para converter para maiusculo para
 mostrar que tem como chamar funcção na interpolação */
console.log(`Ei ... ${up('cuidado')}!`)