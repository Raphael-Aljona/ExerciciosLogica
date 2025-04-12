// Dado um array de números e um valor, retorne dois números do vetor cuja soma
// seja igual ao número, ou 0 caso não exista.
// Exemplo:
// Vetor: [3, 2, 4]
// Número: [6]
// Saída: [2, 4]

const array = [3, 4, 5, 2]
let numero = 8
let numAnterior = 0;

for (let i = 0; i < array.length; i++){
    numAnterior = array[i]
    for (let j = 0; j < array.length; j++){
        if(numero == (numAnterior + array[j + 1])){
            console.log (numAnterior + " " + array[j + 1])
        }
    }
}

