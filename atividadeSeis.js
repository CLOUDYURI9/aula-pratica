console.clear();
var teclado = require("prompt-sync")();
var idade = 0;
var salario = 0;
var totPessoasNaCondicao = 0;
var pessoasContablizadas = 1;
while (pessoasContablizadas <= 4) {
    console.log("");
    console.log("");
    console.log("");
    idade = parseInt(teclado("Digite a idade do funcion\u00E1rio ".concat(pessoasContablizadas, ": ")));
    console.clear();
    console.log("");
    console.log("");
    salario = parseFloat(teclado("Digite o salario do funcion\u00E1rio ".concat(pessoasContablizadas, ": ")));
    console.log(" ");
    console.clear();
    if (idade < 30 && salario > 3000) {
        totPessoasNaCondicao++;
        pessoasContablizadas++;
    }
    else {
        pessoasContablizadas++;
    }
}
console.log("");
console.log("");
console.log("O total de pessoas que atende a condi\u00E7\u00E3o \u00E9 ".concat(totPessoasNaCondicao));
