// Dado um array de caracteres, verifique se ele forma um palíndromo (lê-se da mesma
//     forma de frente para trás e de trás para frente.
//     Exemplo:
//     Array: ['r', 'a', 'd', 'a', 'r']
//     Saída: É um palíndromo.

const array = ['a', 'e', 'a', 'r', 'a']
let letra;
let igual = 0;

// Melhor lógica
for (let i = 0; i < array.length / 2; i++) {
    if (array[i] != array[array.length - 1 - i]){
        console.log("Não é um palindromo")
        return;
    } 
}
console.log("É um palindromo")

// *** Também funciona ***

// if (array.length / 2 <= igual){
//     console.log("É um palindromo")
// } else {
//     console.log("Não é um palindromo")
// }
