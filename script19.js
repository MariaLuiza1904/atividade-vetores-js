let A = [];
let B = [];
let C = [];

// Ler os valores do vetor A
for (let i = 0; i < 5; i++) {
    A[i] = parseInt(prompt("Digite o valor de A[" + i + "]:"));
}

// Ler os valores do vetor B
for (let i = 0; i < 5; i++) {
    B[i] = parseInt(prompt("Digite o valor de B[" + i + "]:"));
}

// Somar os elementos correspondentes
for (let i = 0; i < 5; i++) {
    C[i] = A[i] + B[i];
}

// Mostrar o resultado
console.log("Vetor resultante:", C);