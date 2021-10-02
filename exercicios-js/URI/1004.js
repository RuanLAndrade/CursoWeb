var input = require("fs").readFileSync("/home/ruanlandrade/Projetos/CursoWeb/exercicios-js/URI/stdin","utf-8");

let lines = input.split();

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());

let PROD = A * B;

console.log("PROD = "+ PROD);