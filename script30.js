let maior = Math.max(...numeros);
let menor = Math.min(...numeros);

let iMaior = numeros.indexOf(maior);
let iMenor = numeros.indexOf(menor);

[numeros[iMaior], numeros[iMenor]] = [numeros[iMenor], numeros[iMaior]];

console.log(numeros);