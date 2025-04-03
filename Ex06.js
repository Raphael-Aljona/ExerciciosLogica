// Inverta um array
// Dado um array, retorne um novo array com os elementos invertidos.

const data = require("./data.json")

const novoArray = []

for (i = 0; i < data.length; i++){
    novoArray[data.length - 1 - i] = data[i] // modo mais facil de entender é imagina novoArray[] = data[i] -> consegue se entender que novo array recebe data[i]
}

console.log(novoArray);