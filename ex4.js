
const precoOriginal = 100;   
const desconto = 50;         

const valorDesconto = precoOriginal * (desconto / 100);
const precoFinal = precoOriginal - valorDesconto;

console.log(`O preço original era R$ ${precoOriginal.toFixed(2)}. Com desconto de ${desconto}%, o valor final é R$ ${precoFinal.toFixed(2)}.`);