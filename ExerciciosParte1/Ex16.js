// 16. Verifique se uma matriz é simétrica
// Uma matriz quadrada é simétrica se for igual à sua transposta.

let matriz = require("./matriz.json")

matriz = matriz.slice(0, matriz[0].length)

function Simetria() {
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz.length; j++){
            if (matriz[j][i] != matriz[i][j]){
                return false
            }
        }
    }
    return true
}

// SE O RETURN FOR TRUE
if (Simetria()){
    console.log("É igual a transposta")
} // SE O RETURN FOR FALSE
else {
    console.log("Não é igual a transposta")
}