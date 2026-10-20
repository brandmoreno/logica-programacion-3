const prompt = require('prompt-sync')();

let a = Number(prompt("inserte un número: "));

while (isNaN(a)) {
    a = prompt("Invalido. Inserte un número: ")
}

function factorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return `${a} factorial es: ${resultado}`;
}

console.log(factorial(a));