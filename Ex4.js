// 4. Calcule a média dos elementos
// Dado um array de números, retorne a média dos valores.:

const data = require('./data.json');

let resultado = 0;

data.forEach(Data => {
    resultado += Data;
});

resultado = resultado / data.length;

console.log(resultado);