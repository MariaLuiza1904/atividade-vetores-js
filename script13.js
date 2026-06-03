let numeros = [];
let contador = 0;

for (let i = 0; i < 5; i++) {
  numeros[i] = parseInt(prompt("Digite um número:"));
}

let busca = parseInt(prompt("Digite um número para contar:"));

for (let i = 0; i < 5; i++) {
  if (numeros[i] === busca) {
    contador++;
  }
}

console.log("Quantidade de vezes:", contador);