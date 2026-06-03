let numeros = [];

for (let i = 0; i < 5; i++) {
  numeros[i] = parseInt(prompt("Digite um número:"));
}

for (let i = 0; i < 5; i++) {
  if (numeros[i] > 10) {
    console.log(numeros[i]);
  }
}
