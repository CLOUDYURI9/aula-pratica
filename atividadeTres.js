/*
Nome: Yuri Dinato da Silva

3 – Converta a temperatura x (entrada manual) CELSIUS para FAHRENHEIT, Segue a formula (°C × 9/5) + 32.
*/
var teclado = require('prompt-sync')();
var celsius = parseFloat(teclado("digite um numero: "));
var fahrenheit = (celsius * 9 / 5) + 32;
console.log("convertendo da Fahrenheit ".concat(fahrenheit));
