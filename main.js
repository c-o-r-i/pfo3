/* Ejercicio 1: Calcular el área de un rectángulo
Escribe una función que reciba la longitud y el ancho de un rectángulo y devuelva su área */

function calcAreaRect(base, altura) {
    console.log("Base del rectángulo: " + base + " Altura del rectángulo: " + altura)
    area = base * altura;
    return "Área del rectángulo: " + area;
}

console.log("Solución Ejercicio 1: Calcular el área de un rectángulo")
console.log(" ")
console.log(calcAreaRect(14, 17))
console.log(" ")
console.log(calcAreaRect(47, 233))
console.log(" ")
console.log(calcAreaRect(110, 2433))
console.log(" ")
console.log("/////////////////////////////////////////////////////////////////////")
console.log(" ")

/*
    Escribí una función que calcula el área de un rectángulo.
    La fórmula para calcular el área de un rectángulo consiste en multiplicar la longitud
    de su base por la longitud de su altura.
    Esta función recibe como parámetro dichas longitudes:

        function calcularAreaRectangulo(base, altura)

    Despues realiza la multiplicación de ambos valores para obtener el área:

        area = base * altura;

    Y retorna el valor de area:

        return "El área del rectángulo es: " + area;
*/


/* Ejercicio 2: Contar palabras en una cadena 
Escribe una función que reciba una cadena de texto (string) y devuelva la cantidad de palabras en la cadena.*/

function contarPalabras(cadena) {
    console.log("Cadena ingresada: " + cadena)
    totalPalabras = cadena.split(/\s/).length
    return "La cadena ingresada tiene " + totalPalabras + " palabras";
}

console.log("Solución Ejercicio 2: Contar palabras en una cadena")
console.log(" ")
console.log(contarPalabras("Porque tiene electrolitos"))
console.log(" ")
console.log(contarPalabras("No se quien inventó el verano pero fue una pésima idea"))
console.log(" ")
console.log(contarPalabras("Tengo hambre y sueño"))
console.log(" ")
console.log("/////////////////////////////////////////////////////////////////")
console.log(" ")

/*
    Escribí una funcion que cuenta las cantidad de palabras que tiene una cadena.
    Esta función recibe como parámetro la cadena ingresada:
        function contarPalabras(cadena)

    Después usa el método "split" para separar la cadena palabra por palabra:
        cadena.split(/\s\)

    Y crea un array con las palabras sueltas:
    Ejemplo: La cadena "Piedra, papel o tijera" formaría el array: ["Piedra", "Papel", "TIjera"]

    Para contar la cantidad de elementos del array se aplica el método "length" y se guarda
    el resultado en la variable "totalPalabras". 
        totalPalabras = cadena.split(/\s\).length

*/


/* Ejercicio 3: Invertir una cadena 
Escribe una función que tome una cadena como parámetro y devuelva la cadena invertida*/

function invertirCadena(cadena) {
    console.log("Cadena: " + cadena);
    cadenaInvertidaCadena = cadena.split('').reverse().join('');
    return cadenaInvertida;
}

console.log("Solución Ejercicio 3: Invertir una cadena")
console.log(" ")
console.log(invertirCadena("Porque tiene electrolitos"))
console.log(" ")
console.log(invertirCadena("Salchipapa"))
console.log(" ")
console.log(invertirCadena("Tengo hambre y sueño"))
console.log(" ")
console.log("///////////////////////////////////////////////////////////////")
console.log(" ")

/* 
    Escribí una funcion que invierte los caracteres de una cadena.
    Esta función recibe como parámetro la cadena ingresada:
        function invertirCadena(cadena)

    Después usa el método "split" para separar la cadena caracter por caracter:
        cadena.split('')

    Y crea un array con los caracteres aislados:
    Ejemplo: La cadena "miau" formaría el array: ['m', 'i', 'a', 'u']

    Despues usando el método "reverse" se voltea el array:
        cadena.split('').reverse()
    Ejemplo: La cadena "miau" formaría el array: ['u', 'a', 'i', 'm']

    Con el método "join" se vuelven a juntar los caracteres formando una nueva cadena,
    que se guarda en la variable cadenaInvertida:
        cadenaInvertida = cadena.split('').reverse().join('');

    Y finalmente la función retorna la cadena invertida:
        return cadenaInvertida

*/


/* Ejercicio 4: Encontrar un palíndromo 
Escribe una función que reciba un string y devuelva true o false si el string es un palíndromo*/ 

function esPalindromo(cadena) {
    cadenaInvertida = invertirCadena(cadena);
    return "La cadena es un palíndromo? " + (cadenaInvertida === cadena);
}


console.log("Solución Ejercicio 4: Encontrar un palíndromo")
console.log(" ")
console.log(esPalindromo("yatay"))
console.log(" ")
console.log(esPalindromo("chilindrina"))
console.log(" ")
console.log(esPalindromo("ojo"))
console.log(" ")
console.log("//////////////////////////////////////////////////////////////")
console.log(" ")

/*
    Escribí una función que devuelve "true" si una cadena ingresada es palíndromo.
    Esta función recibe como parámetro la cadena ingresada:
        function esPalindromo(cadena)

    Usando la función "invertirCadena" del  ejercicio anterior voltea la cadena:
        cadenaInvertida = invertirCadena(cadena);

    Y compara la cadena ingresada con la cadena invertida.
    Si son iguales, retorna true. Si no, retorna false: 
        return "La cadena es palíndromo? " + (cadenaInvertida === cadena);

*/



/* Ejercicio 5: Convertir la edad de un perro a años humanos
Escribe una función que tome un valor de un usuario, utilizando una ventana emergente prompt y calcule la edad
canina, que equivale a 7 veces la edad humana */ 

function edadCanina() {
    edadPerro = parseInt(prompt("Ingresar la edad del perro:"))

    if (isNaN(edadPerro) || edadPerro <= 0) {
        console.log("La edad ingresada no es válida")
        return;
    }
    edadHumana = edad * 7;
    console.log("El perro tiene el equivalente a " + edadHumana + " años humanos.")
}


console.log("Solución Ejercicio 5: Convertir la edad de un perro a años humanos")
console.log(" ")
edadCanina()
console.log(" ")
edadCanina()
console.log(" ")
edadCanina()
console.log("//////////////////////////////////////////////////////////////////")


/* 
    Escribí una función que toma una edad perruna y calcula el equivalente en años humanos.
    Esta función inicialmente imprime por pantalla la solicitud de ingresar por teclado la edad del perro:
        (prompt("Ingresar la edad del perro:")

    Este valor es convertido a número estero con la función "parseInt" y se guarda en la variable edad:
        edad = parseInt(prompt("Ingrese la edad del perro"))

    Posteriormente se valida que el valor ingresado por teclado sea un número y que no sea un número negativo:
        if (isNaN(edad) || edad < 0)

    Si no es válido, se lanza un mensaje de advertencia y con el "return" se detiene la ejecución del código:
        console.log("La edad ingresada no es válida")
        return;

    Si es válido, se realiza el cálculo del equivalente de la edad perruna en años humanos:
        edadHumana = edad * 7;

    Y se muestra por consola:
        console.log("El perro tiene el equivalente a " + edadHumana + " años humanos.")
        
*/