console.log("Dados dos números A y B, sumarlos si A es menor que B o sino restarlos.");
console.log("Por favor, ingrese el valor para a: ");
let a = 12;
console.log("Por favor, ingrese el valor para b: ");
let b = 31;
if (a < b) {
    let suma = a + b;
    console.log("Ya que a es menor que b, entonces se suma, y el resultado es:", suma);
    
} else {
    let resta = a - b;
    console.log("Ya que a es mayor que b, entonces se resta, y el resultado es:", resta);
}
