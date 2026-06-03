let numeros = [];

for (let i = 0; i < 5; i++) {
  numeros[i] = parseInt(prompt("Digite um número:"));
}

let maior = numeros[0];

for (let i = 1; i < 5; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
}

console.log("Maior número:", maior);
