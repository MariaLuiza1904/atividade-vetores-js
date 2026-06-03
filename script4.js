let numeros = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
  numeros[i] = parseFloat(prompt("Digite um número:"));
  soma += numeros[i];
}

let media = soma / 5;
console.log("Média:", media)
