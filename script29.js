let soma = 0;

for (let n of numeros) {
    if (n % 2 === 0) soma += n;
}

console.log("Soma dos pares:", soma);