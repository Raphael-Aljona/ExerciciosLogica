// 7. Dado um array ordenado, encontre a mediana dos elementos
// Exemplo:
// Vetor: [1, 2, 3, 4, 5, 6]
// Saída: 3.5

const array = [1, 2, 3, 4, 5, 6]
let meio = array.length;
let mediana = 0;

if (meio % 2 == 0){
    mediana = (array[(meio / 2) - 1] + array[meio / 2]) / 2
} else{
    mediana = (array[(meio / 2) - 0.5])
}

console.log(mediana)