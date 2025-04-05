// 16. Verifique se uma matriz é simétrica
// Uma matriz quadrada é simétrica se for igual à sua transposta.

let matriz = require("./matriz.json")

matriz = matriz.slice(0, matriz[0].length)

function Simetrica() {
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz.length; j++){
            if (matriz[j][i] != matriz[i][j]){
                return false
            }
        }
    }
    return true
}

if (Simetrica()){
    console.log("A matriz é simétrica")
} else {
    console.log("A matriz não é simétrica")
}