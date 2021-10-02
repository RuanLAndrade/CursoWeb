var input = require("fs").readFileSync("/home/ruanlandrade/Projetos/CursoWeb/exercicios-js/URI/stdin","utf-8");

var lines = input.split('\n');
let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());

let media = (A * 3.5 + B * 7.5 ) / 11.0;

console.log("MEDIA = " + media.toFixed(5));