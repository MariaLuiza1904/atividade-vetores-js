
let numeros = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
  numeros[i] = parseInt(prompt("Digite um número:"));
  soma += numeros[i];
}

console.log("Soma:", soma);
