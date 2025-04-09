// Rotacione um array para a direita
// Dado um array e um número k, rotacione os elementos k vezes para a direita.

const data = require("./data.json")

let k = 4
const n = data.length - k;
                                                                    // ... serve para juntar os arrays (concatenação)
console.log("Elementos rotacionados: " + k + " vezes para direita " + [...data.slice(-k), ...data.slice(0, n)]) 
                                                                      
