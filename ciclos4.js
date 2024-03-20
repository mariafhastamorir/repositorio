/* Escribir un programa que imprima por pantalla los cuadrados de los números del 1 al 30 */

let i = 1;

while(i < 31){
    let potencia = Math.pow(i,2);
    console.log("La potencia de ", i,"=",potencia);
    i++
}