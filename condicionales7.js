/* Escribir un algoritmo que determine si un año es bisiesto o no.
*/
console.log("Por favor, ingrese el año que desea saber si es o no bisiesto");
let ano = 2024;
if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0){
    console.log(" el año es bisiesto");
}else{
    console.log(" el año no es bisiesto");
}