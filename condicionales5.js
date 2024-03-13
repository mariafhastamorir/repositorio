/* Dados dos números A y B encontrar el cociente entre A y B.
Recordar que la división por cero no está definida, 
en ese caso debe aparecer una leyenda anunciando que la división
no es posible 
*/

console.log("Por favor ingrese el valor del dividendo");
let a = 45;
console.log("Por favor ingrese el valor del divisor");
let b = 5;
  
if (b === 0) {
    console.log("La division por cero no es posible");
} else {
    let division = a / b;
    console.log("La solucion de la division es de:", division );
}
