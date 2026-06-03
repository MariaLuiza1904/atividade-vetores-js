let numeros = [];
let crescente = true;

for (let i = 0; i < 5; i++) {
  numeros[i] = parseInt(prompt("Digite um número:"));
}

for (let i = 0; i < 4; i++) {
  if (numeros[i] > numeros[i + 1]) {
    crescente = false;
  }
}

if (crescente) {
  console.log("Está em ordem crescente!");
} else {
  console.log("Não está em ordem crescente!");
}