// 1. Encontre o maior número
// Dado um array, retorne o maior número presente nele.

const data = require('./data.json')

let MaiorNumero = data[0];

for (i = 0; i < data.length; i++){
    if (data[i] > MaiorNumero){
        MaiorNumero = data[i];
    }
}

console.log(MaiorNumero);