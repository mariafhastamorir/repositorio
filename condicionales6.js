/* Dados dos números A y B, sumarlos si al menos uno de ellos es negativo, en caso contrario
multiplicarlos.
*/

console.log("Por favor, ingrese un valor para a");
let a = 8;
console.log("Por favor, ingrese un valor para b");
let b = -5;

if(a < 0 || b < 0){
    let suma = a + b;
    console.log("El resultado de la suma es:", suma);
} else{
    let multiplicacion = a * b;
    console.log("El resultado de la multiplicacion es:", multiplicacion)
}