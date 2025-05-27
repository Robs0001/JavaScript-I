const notas = [7.5, 8.0, 6.5, 9.0];
let soma = 0;

for (let nota of notas) {
    soma += nota;
}

const media = soma / notas.length;
console.log(`A média das notas é ${media.toFixed(2)}`);