// Encontre o menor número
// Dado um array, retorne o menor número presente nele.

const data = require("./data.json")

let MenorNumero = data[0]

for (i = 0; i < data.length; i++){
    if (data[i] < MenorNumero){
        MenorNumero = data[i];
    }
}


console.log(MenorNumero);