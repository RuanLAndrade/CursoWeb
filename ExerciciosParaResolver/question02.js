function classificaTriangulo (comp01, comp02, comp03) {
  if(comp01 === comp02 && comp01 === comp03){
    return 'Este triangulo é Equilátero'
  } else if (comp01 === comp02 || comp02 === comp03 || comp01 === comp03){
    return 'Este triangulo é Isósceles'
  } else {
        return 'Este triangulo é Escaleno'
  }
  
}

console.log(classificaTriangulo(4,4,4))