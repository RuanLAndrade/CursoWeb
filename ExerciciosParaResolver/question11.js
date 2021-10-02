function calculaAnoBissexto (ano) {
  if(ano <=0){
    return false
  } else if (ano % 400 === 0) {
    return true
  } else if (ano % 100 === 0) {
      return false
  } else if ( ano % 4 === 0) {
    return true
  } else {
    return false
  }
}

console.log(calculaAnoBissexto(100));
console.log(calculaAnoBissexto(50));
console.log(calculaAnoBissexto(400));
console.log(calculaAnoBissexto(4));
console.log(calculaAnoBissexto(1));