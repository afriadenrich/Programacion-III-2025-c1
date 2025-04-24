// 01
let nombre = "Agus";
console.log(nombre);



// 03
let apellido = "Fraidenrich";
let viveEn = "Avellaneda";

let concatenacion = `Hola, mi nombre es ${nombre} ${apellido} y soy de ${viveEn}`;
console.log(concatenacion);

// 04
function saludar(nombre) {
    return "Hola " + nombre;
}

// 05
const saludarFlecha = (nombre) => {
    return "Hola " + nombre;
}

// 07 
// const crearArray = (num1, num2, num3) =>  {
//     const array = [num1, num2, num3];
//     return array;
// }

// Spread operator ...
const crearArray = (...numeros) =>  {
    console.log(...numeros);
}

crearArray(1, 2, 3, 4);

// 08
const frutas = ["manzana", "banana"];
const verduleria = ["naranja", "limón", ...frutas];

console.log(verduleria, "Algo", frutas);

const concatenar = (...cadenas) => {
    let resultado = "";
    cadenas.forEach((valor) => {
        resultado += valor + " ";
    });
    console.log(resultado);
}

concatenar("hola", "como", "estas", "?");

// 09
const formatearProducto = (nombre = "cafe") => {
    const minusculas = nombre.toLowerCase();
    const primerLetra = minusculas[0].toUpperCase();
    const sinPrimerLetra = minusculas.slice(1);
    console.log(primerLetra + sinPrimerLetra);
}

formatearProducto("cafe");

// string - tipo primitivo
let cadena1 = "una cadena";

// String - es una clase
const cadena2 = new String("Un objeto String");

console.log(cadena1);
console.log(cadena2);
