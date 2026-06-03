let numeros = [];
let encontrado = false;

for (let i = 0; i < 5; i++) {
  numeros[i] = parseInt(prompt("Digite um número:"));
}

let busca = parseInt(prompt("Digite um número para buscar:"));

for (let i = 0; i < 5; i++) {
  if (numeros[i] === busca) {
    encontrado = true;
  }
}

if (encontrado) {
  console.log("Número encontrado!");
} else {
  console.log("Número não encontrado!");
}