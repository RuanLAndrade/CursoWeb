//v e v -> v
//v e f -> f
//f e ? -> f
//
//v ou ? -> v
//f ou v -> v
//f ou f -> f

//v xor v -> f
//v xor f -> v
//f xor v -> v
//f xor f -> f
// !v -> f
// !f -> v
function compras(trabalho1, trabalho2) {
  const comprarSorverte = trabalho1 || trabalho2
  const comprarTv50 = trabalho1 && trabalho2
//  const comprarTv32 = !!(trabalho1 ^ trabalho2) 
// Operador Bitwise xor 
// O uso das duas exclamações significa que está forçando fazer operações do tipo booleana, duas negações lógicas para converter algo para boolean
const comprarTv32 = trabalho1 != trabalho2 // OU exclusivo pode ser simulado com uma diferença
const manterSaudavel = !comprarSorverte // Operador unário

return { comprarSorverte, comprarTv50, comprarTv32, manterSaudavel} //Internamente ele está atribuindo CHAVE / VALOR para este Objeto.
//Recurso novo do ECMANSCRIPT 2015
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false,false))
