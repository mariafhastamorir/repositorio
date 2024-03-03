console.log("6. Escribir un algoritmo que determine el área y el volúmen de un cilindro: ");
console.log("Ingrese el valor del radio: ");
let r=6;
console.log("Ingrese el valor de la altura: ");
let h=9;

const PI=3.14;
let area=(2*PI*r*h+(2*PI*Math.pow(r,2)));
let vol=(PI*Math.pow(r,2)*h);


console.log("El área es: ",area," y el volúmen es de: ",vol);