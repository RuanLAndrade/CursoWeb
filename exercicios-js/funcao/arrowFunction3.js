let comparaComThis = function (param) {
  console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow  = param => console.log(this===param)
// em FUNÇÕES ARROW ELE PEGA O MÓDULO EM QUE ELE ESTÁ SENDO EXECUITADO
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

//TESTE RADICAL
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)