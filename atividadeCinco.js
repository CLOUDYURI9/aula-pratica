console.clear();
var teclado = require("prompt-sync")();
console.log(" ");
console.log(" ");
console.log(" ");
var idade = parseFloat(teclado("Digite sua idade: "));
console.clear();
console.log(" ");
console.log(" ");
console.log(" ");
if (idade >= 18) {
    console.log("Maior de Idade!!");
}
else {
    console.log("Menor de Idade");
}
