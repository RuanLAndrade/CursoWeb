var input = require("fs").readFileSync("/home/ruanlandrade/Projetos/CursoWeb/exercicios-js/URI/stdin","utf-8");

let raio = parseFloat(input)
const n = 3.14159

let area =  n * Math.pow(raio, 2)

console.log("A=" + area.toFixed(4))
