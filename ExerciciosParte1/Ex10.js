// Encontre o maior elemento de uma matriz
// Dada uma matriz N x M, encontre o maior número presente nela.

const matriz = require('./matriz.json')
let n1 = 0;

for (i = 0; i < matriz.length; i++){
    for(j = 0; j < matriz[i].length; j++){
        if (n1 <= matriz[i][j]){
            n1 = matriz[i][j];
        } 
    }
}
console.log (n1);