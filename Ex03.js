// Calcule a soma dos elementos
// Dado um array, calcule a soma de todos os seus elementos.

const data = require("./data.json");

let n1 = 0;
let resultado = 0;

for (i = 0; i < data.length; i++){
    n1 = resultado;
    resultado = data[i] + n1;
}

console.log(resultado);

