// 14.Diagonal secundária
// Dada uma matriz quadrada N x N, retorne os elementos da sua diagonal
// secundária.

let matriz = require("./matriz.json")

matriz = matriz.slice(0, matriz[0].length)

for (i = 0; i < matriz.length; i++){
    console.log (matriz[i][matriz.length - 1 - i]) //Pega a origem da linha e dps vai até a ultima coluna do tamanho da matriz ex: [0, 24] [1, 23]...
}

// matriz.forEach((row, i) => {
//     console.log(matriz[i][matriz.length - 1 - i])
// });