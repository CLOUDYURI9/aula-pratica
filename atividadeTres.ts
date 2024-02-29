/*
Nome: Yuri Dinato da Silva

3 – Converta a temperatura x (entrada manual) CELSIUS para FAHRENHEIT, Segue a formula (°C × 9/5) + 32.
*/

const teclado =  require('prompt-sync')();

let celsius: number = parseFloat(teclado(`digite um numero: `));

let fahrenheit: number = (celsius * 9/5) + 32

console.log(`convertendo da Fahrenheit ${fahrenheit}`)

