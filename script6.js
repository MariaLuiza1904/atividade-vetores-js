let numeros = [];
let pares = 0;

for (let i = 0; i < 5; i++) {
  numeros[i] = parseInt(prompt("Digite um número:"));
  if (numeros[i] % 2 === 0) {
    pares++;
  }
}

console.log("Quantidade de pares:", pares);
