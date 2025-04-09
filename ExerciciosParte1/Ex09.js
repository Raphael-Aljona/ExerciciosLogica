// Soma de todos os elementos da matriz
// Dada uma matriz N x M, retorne a soma de todos os seus elementos.

const matriz = require('./matriz.json')

let resultado = 0;

for (i = 0; i < matriz.length; i++){
    for (j = 0; j < matriz[i].length; j++){
        resultado += matriz[i][j]; 
    }               // linha 0 elemento 0 -> aumentando sucessivamente
}

console.log(resultado);
