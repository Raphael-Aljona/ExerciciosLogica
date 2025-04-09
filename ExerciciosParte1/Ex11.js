// 11. Soma de cada linha
// Dada uma matriz, calcule a soma dos elementos de cada linha e exiba os
// resultados.

const matriz = require("./matriz.json")

let resultado = 0;
let n = 0;

for (i = 0; i < matriz.length; i++){
    for (j = 0; j < matriz[i].length; j++){
        resultado += matriz[i][j];
    }
    n += 1;
    console.log ("A linha " + n + " soma o total de " + resultado)
    resultado = 0;
}