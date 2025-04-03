// Conte os números pares e ímpares
// Dado um array de números inteiros, conte quantos são pares e quantos são
// ímpares.

const data = require('./data.json')

let pares = 0;
let impares = 0;

data.forEach(Data=> {
    if (Data % 2 == 0){
        pares += 1;
    } else {
        impares += 1;
    }
});

console.log ("Pares: " + pares);
console.log ("Impares: " + impares);