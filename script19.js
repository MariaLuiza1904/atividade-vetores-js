let A = [];
let B = [];
let C = [];

for (let i = 0; i < 5; i++) {
  A[i] = parseInt(prompt("Digite valor para A:"));
}

for (let i = 0; i < 5; i++) {
  B[i] = parseInt(prompt("Digite valor para B:"));
}

for (let i = 0; i < 5; i++) {
  C[i] = A[i] + B[i];
}

console.log("Vetor soma:", C);