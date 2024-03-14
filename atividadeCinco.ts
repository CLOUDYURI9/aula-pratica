/*
Nome: Yuri Dinato da Silva
*/
console.clear();

const teclado = require(`prompt-sync`)();

console.log(` `)
console.log(` `)
console.log(` `)

let idade : number = parseFloat(teclado(`Digite sua idade: `));

console.clear();
console.log(` `)
console.log(` `)
console.log(` `)

if (idade >= 18){
    console.log(`Maior de Idade!!`);
}
else{
    console.log(`Menor de Idade`);
}
