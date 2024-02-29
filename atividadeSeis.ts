console.clear();

const teclado = require (`prompt-sync`)();

let idade: number = 0;
let salario: number = 0;
let totPessoasNaCondicao: number = 0;
let pessoasContablizadas: number = 1;


while (pessoasContablizadas <= 4){

    console.log(``);
    console.log(``);
    console.log(``);
    idade = parseInt(teclado(`Digite a idade do funcionário ${pessoasContablizadas}: `));
    console.clear();
    console.log(``);
    console.log(``);
    salario = parseFloat(teclado(`Digite o salario do funcionário ${pessoasContablizadas}: `));
    console.log(` `)
    console.clear();

if (idade < 30 && salario > 3000){
    totPessoasNaCondicao++; 
    pessoasContablizadas++;    
}
else {
    pessoasContablizadas++;
    }   
}
console.log(``);
console.log(``);
console.log(`O total de pessoas que atende a condição é ${totPessoasNaCondicao}`);
