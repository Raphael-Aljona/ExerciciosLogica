// Dado um array de números, coloque o array em ordem crescente.

let array = [
    10, 8, 89, 98, 18, 43, 15, 23, 5, 55
]

let numAnterior;
let atualizarNum;

for (let i = 0; i < array.length; i++){
    for(j = 0; j < array.length; j++){
        if (array[j] > array [j + 1]){
            atualizarNum = array[j]
            array[j] = array[j + 1]
            array [j + 1] = atualizarNum   
        }
    }
}

console.log("O array em ordem crescente é: " + array)

// console.log(temp)
