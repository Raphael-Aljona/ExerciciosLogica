// Dado um array de números e um valor, retorne dois números do vetor cuja soma
// seja igual ao número, ou 0 caso não exista.
// Exemplo:
// Vetor: [3, 2, 4]
// Número: [6]
// Saída: [2, 4]

const array = [3, 4, 5, 2];
const numero = 8;
let encontrou = false;

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) { // j = i + 1 -> previne do index somar com si mesmo. Ex: 4 + 4 -> SERIA IMPOSSIVEL
        if (array[i] + array[j] === numero) {
            console.log(array[i], array[j]);
            encontrou = true;
        }
    }
}

if (!encontrou) {
    console.log(0);
}