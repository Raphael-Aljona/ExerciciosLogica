// 13.Diagonal principal
// Dada uma matriz quadrada N x N, retorne os elementos da sua diagonal principal.

const matriz = require('./matriz.json')

let n = 0;

for (i = 0; i < matriz.length; i++){
    for (j = 0; j < matriz[i].length; j++){
        if (matriz[i] == matriz[j]){
            n += 1;
            console.log ("Essa é a index "+ n + " da diagonal, ele tem o valor de: " + matriz[i][j])
        }
        
    }
}