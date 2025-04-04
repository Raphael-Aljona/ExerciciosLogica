// 14.Diagonal secundária
// Dada uma matriz quadrada N x N, retorne os elementos da sua diagonal
// secundária.

let matriz = require("./matriz.json")

matriz = matriz.slice(0, matriz[0].length)

matriz.forEach((row, i) => {
    console.log(matriz[i][matriz.length - 1 - i])
});