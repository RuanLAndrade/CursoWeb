var input = require("fs").readFileSync("/home/ruanlandrade/Projetos/CursoWeb/exercicios-js/URI/stdin","utf-8");

let valores = input.split("\n");

let A = parseInt(valores.shift());
let B = parseInt(valores.shift());

let X = A + B ;

console.log("X = "+ X)