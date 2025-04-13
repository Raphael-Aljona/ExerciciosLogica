// Dado dois arrays de mesmo tamanho, retorne um novo vetor intercalando os
// elementos
// Exemplo:
// Vetor A: [1, 3, 5]
// Vetor B: [2, 4, 6]
// Saída: [1, 2, 3, 4, 5, 6]

const arrayImpar = [15, 13, 17]
const arrayPar = [22, 18, 98]
let intercalando = []
let index = 0;

for (let i = 0; i < arrayImpar.length; i++){
    intercalando[index] = arrayImpar[i];
    index ++;
    intercalando[index] = arrayPar[i];
    index ++;
}

console.log(intercalando)