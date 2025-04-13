// Dado dois arrays, retorne a intercalação entre eles (os elementos em comum entre
//     os dois arrays, em qualquer ordem):
//     Exemplo:
//     const arrayUm = [1, 2, 3, 4, 4, 2]
//     const arrayDois = [2, 0, 4, 2]
//     Saída: [2, 4, 2]

const arrayUm = [1, 2, 3, 4, 2, 4]
const arrayDois = [2, 0, 4, 2]
let index = 0;
let novoArray= [];

for (let i = 0; i < arrayUm.length; i++){
    for (let j = 0; j <arrayDois.length; j++){
        if (arrayUm[i] == arrayDois[j]){
            novoArray[index] = arrayUm[i]
            index++;
            arrayDois.splice(j, 1); //Unica função que encontrei que conseguia entrar nesse caso
            break;
        }
    }
}

console.log(novoArray)
