let A = [];
let B = [];
let C = [];

for (let i = 0; i < 5; i++) {
  A[i] = parseInt(prompt("Digite valor para A:"));
}

for (let i = 0; i < 5; i++) {
  B[i] = parseInt(prompt("Digite valor para B:"));
}

let j = 0;

for (let i = 0; i < 5; i++) {
  C[j++] = A[i];
  C[j++] = B[i];
}

console.log("Vetor intercalado:", C);