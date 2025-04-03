// 12. Soma de cada coluna
// Dada uma matriz, calcule a soma dos elementos de cada coluna e exiba os
// resultados.

const matriz = require("./matriz.json")

let resultado = 0;
let n = 0;

for (i = 0; i < matriz[i].length; i++){
    for(j = 0; j < matriz.length; j++){
        resultado += matriz[j][i]
    }
    n += 1;
    console.log("A coluna " + n + " soma o seguinte valor " + resultado);
    resultado = 0;
}