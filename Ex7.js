// Remova duplicatas
// Dado um array com números repetidos, retorne um novo array apenas com
// valores únicos.

const data = require("./data.json")
let novoArray = []

for (i = 0; i < data.length; i++){
    let existe = false;
    for (j = 0; j < data.length; j++){
        if (data[i] == novoArray[j]){
            existe = true;
            break;
        }
    }

    if (!existe){
        novoArray[novoArray.length] = data[i]
    }

}

console.log (novoArray.length)