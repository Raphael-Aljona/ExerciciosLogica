// 2. Dado um array de caracteres, inverta os caracteres.
// Exemplo:
// Array: ['d', 'i', 'a']
// Saída: ['a', 'i', 'd']

let array = [
    'R', 'a', 'p', 'h', 'a', 'e', 'l' // 7 
]

let inverter;

/*
    inverter = R
    array[i] (Primeiro) = l
    array [array.length - 1 - i] (Ultimo) = R
*/

for (i = 0; i < array.length / 2 ; i++){
    inverter = array[i];
    array [i] = array[array.length - 1 - i]
    array [array.length - 1 - i] = inverter
}

console.log(array)



