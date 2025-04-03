// Rotacione um array para a direita
// Dado um array e um número k, rotacione os elementos k vezes para a direita.

const data = require("./data.json")

let k = 1
const n = data.length - k;

k = k % n

console.log("Array invertida: " + [...data.slice(-k), ...data.slice(0, n)])



