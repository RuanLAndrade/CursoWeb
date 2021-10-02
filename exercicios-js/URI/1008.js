var input = require("fs").readFileSync("/home/ruanlandrade/Projetos/CursoWeb/exercicios-js/URI/stdin","utf-8");

var lines = input.split('\n');

let number = parseInt(lines.shift());
let hour = parseInt(lines.shift());
let salary = parseFloat(lines.shift());

salary = salary * hour

console.log("NUMBER = "+ number)
console.log("SALARY = U$ "+ salary )