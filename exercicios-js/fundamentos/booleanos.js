let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //NEGAÇÃO PARA TRATAR BOOLEANO E NAO MUDAR TIPAGEM

console.log('os verdadeiros...') // CONTENDO DADOS VAI SAIR TRUE
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos..') // SEM VALOR SAI FALSO OU SE O TRATAMENTO FOR FALSE
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar ...')
console.log(!!('' || null || 0 || 'epa')) // TENDO UMA CONDIÇÃO VERDADEIRA O RESTANTE TORNA FALSO

let nome = 'Lucas'

console.log(nome || 'Desconhecido') // OPERACAO LOGICA EM STRING