import {PI, sumar, restar, multiplicar, dividir, numeros} from './models/matematica.js';
let total, numero1=10, numero2=20;
console.clear();
console.log(`La constante PI vale '${PI}'`); // Uso la constante PI importada.


total = sumar(numero1, numero2);
console.log(`sumar(${numero1}, ${numero2}) = ${total}`);


total = restar(numero1, numero2);
console.log(`restar(${numero1}, ${numero2}) = ${total}`);


total = multiplicar(numero1, numero2);
console.log(`multiplicar(${numero1}, ${numero2}) = ${total}`);


total = dividir(numero1, numero2);
console.log(`dividir(${numero1}, ${numero2}) = ${total}`);


console.log("Elementos del array:");
for (let elemento of numeros) {
    console.log(elemento);
}


