let numeros = [3, 7, 11, 5, 2, 0, 8];
let suma = 0;
let i = 0;

do {
  suma += numeros[i];
  i++;
} while (i < numeros.length && numeros[i] !== 0);

/* el length sirve para que este no cuente un solo numero si no todos los de la cadena
numeros[i] ,  numeros[i] !== 0 se utiliza para verificar si el elemento en la posición i 
del array numeros es diferente de cero */

console.log("La suma de los números da un total de: ", suma);

//el resultado debe dar 28 ya que el 0 termina la suma y 8 no se sumaria
