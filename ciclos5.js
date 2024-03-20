/* Escribir un programa que sume los cuadrados de los cien primeros números naturales,
mostrando el resultado en pantalla. */

let total = 0;
let suma = 0;
for (let i = 0; i <= 100; i++) {
    total = i * i;
    suma += total;
}

console.log("La suma de los cuadrados de los primeros 100 numeros naturales es de:",suma);
