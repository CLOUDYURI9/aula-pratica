/*
NOME: Yuri Dinato da Silva

2-Faça a média de 10 número (entrada via teclado) e exiba o resultado.
*/
var teclado = require('prompt-sync')();
var numero01 = parseFloat(teclado("digite o primeiro numero: "));
var numero02 = parseFloat(teclado("digite o segundo numero: "));
var numero03 = parseFloat(teclado("digite o terceiro numero: "));
var numero04 = parseFloat(teclado("digite o quarto numero: "));
var numero05 = parseFloat(teclado("digite o quinto numero: "));
var numero06 = parseFloat(teclado("digite o sexto numero: "));
var numero07 = parseFloat(teclado("digite o s\u00E9timo numero: "));
var numero08 = parseFloat(teclado("digite o oitavo numero: "));
var numero09 = parseFloat(teclado("digite o nono numero: "));
var numero10 = parseFloat(teclado("digite o d\u00E9cimo numero: "));
var media = (numero01 + numero02 + numero03 + numero04 + numero05 + numero06 + numero07 + numero08 + numero09 + numero10) / 10;
console.log("a m\u00E9dia de 10 numeros \u00E9 ".concat(media));
