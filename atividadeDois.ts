/*
NOME: Yuri Dinato da Silva

2-Faça a média de 10 número (entrada via teclado) e exiba o resultado.
*/

const  teclado = require('prompt-sync')();


let numero01 : number = parseFloat(teclado(`digite o primeiro numero: `));
let numero02: number = parseFloat(teclado (`digite o segundo numero: `));
let numero03 : number = parseFloat(teclado (`digite o terceiro numero: `));
let numero04 : number = parseFloat(teclado(`digite o quarto numero: `));
let numero05 : number = parseFloat(teclado(`digite o quinto numero: `));
let numero06 : number = parseFloat(teclado(`digite o sexto numero: `));
let numero07 : number = parseFloat(teclado(`digite o sétimo numero: `));
let numero08 : number = parseFloat(teclado(`digite o oitavo numero: `));
let numero09 : number = parseFloat(teclado(`digite o nono numero: `));
let numero10 : number = parseFloat(teclado(`digite o décimo numero: `));

let media : number = (numero01+numero02+numero03+numero04+numero05+numero06+numero07+numero08+numero09+numero10) /10;

console.log(`a média de 10 numeros é ${media}`)
