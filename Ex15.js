// 15. Transposta de uma matriz
// Dada uma matriz N x M, gere sua transposta (troque linhas por colunas).

const matriz = require('./matriz.json')

let novaMatriz = []

for (i = 0; i < matriz[0].length; i++){
    novaMatriz[i] = [];
    for (j = 0; j < matriz.length; j++){
        novaMatriz[i][j] = matriz[j][i];
    }
}

console.log(novaMatriz)
console.log(novaMatriz.length)
console.log(novaMatriz[0].length)