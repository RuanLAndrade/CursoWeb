function sistemaNotas (nota) {
  notaCorrigida = arredondamento(nota)
  if( notaCorrigida >= 40) {
    return console.log(`Parabéns, você foi aprovado com ${notaCorrigida}`);
  } else {
    return console.log(`Não desanime, você conseguirá próximo ano, sua nota foi ${notaCorrigida}`);
  }
}

function arredondamento(nota) {
  if(nota % 5 > 2){
   return  nota + (5 - (nota %5))
  } else {
    return nota
  }
}

sistemaNotas(100)
sistemaNotas(30)
sistemaNotas(38)
sistemaNotas(88)
sistemaNotas(61)