console.log("Hola mundo");

// Tipos de datos!

// undefined - Variable se crea pero no se asigna dato.
// null - Variable se crea y se asigna null.

// string - cadenas de datos.
// number - numerico (enteros Y flotantes).
// boolean - true o false
let vacio;
let nulo = null;
let numero = 8;
let numero2 = 2.5;
let cadena = "hola";
let promociona = false;
let recursa = true;

console.log(typeof vacio);
console.log(nulo);
console.log(typeof numero);
console.log(typeof cadena);
console.log(typeof promociona);
console.log(typeof recursa);

// Variables que cambian: let
// Variables constantes: const
// Variables que cambian: var - NO SE USA MÁS

const hola = "Hola";
// hola = "mundo"; ERROR -> NO PUEDE CAMBIAR PORQUE ES CONSTANTE
console.log(hola);

let nombre = null;

let fecha = new Date();

// console.log(fecha.toTimeString());

// Objetos
let auto = {
    marca: "Toyota",
    modelo: "Ferrari",
    precio: 2000,
    fechaDeSalida: new Date(1960, 7, 11)
}

let auto2 = {creador: "Toyota",
    precioBase: 2000}

auto2.precio = 3000;
console.log(auto2)

// Funciones

function sumar(n1, n2) {
    // console.log(n1 + n2);
    return n1 + n2;
}

const respuesta = sumar(9, 11);
console.log(respuesta);
console.log(sumar(88, 22));

// Variables que son funciones

const multiplicar = function(n1, n2){
    return n1 * n2;
}

const multiplicacion = multiplicar(4, 6);
console.log(multiplicacion);

// Objetos con funciones

const auto3 = {
    marca: "Fitito",
    modelo: "4",
    precio: 800,
    calcularImpuestos: function(porcentajeImpuestos) {
        return this.precio + this.precio * porcentajeImpuestos / 100;
    } 
}

auto3.precio = 1200;
// auto3 = {
//     marca: "Volkswagen"
// }

const impuestos = auto3.calcularImpuestos(50);
console.log(auto3);

// Clases
class Auto {
    marca;
    modelo;
    precio;

    constructor(marca, modelo, precio){
        if(typeof marca === "string"){
            this.marca = marca;
        }
        this.modelo = modelo;
        this.precio = precio;
    }

    calcularImpuestos(porcentajeImpuestos) {
        return this.precio + this.precio * porcentajeImpuestos / 100;
    } 
}

const auto4 = new Auto("Huawei", "Toyota", 99999);
const auto5 = new Auto("Huawei", "Toyota", 99999);
// auto4.otraCosa = "otra cosa";
console.log(auto4);
console.log(auto5);
// Comprobaciones
const auto6 = auto4;

console.log(auto4 === auto6);
console.log(auto4 === auto3);
console.log(auto4 === auto5);

// == -> Compara por valor, sea el tipo que sea. En este caso 0 == flase == "" 
// === -> Compara por valor Y tipo de dato. En este caso 0 === 0 
// if(0 !== "") {
//     console.log("Es distinto");
// } else {
//     console.log("Es igual");
// }

// Arrays
console.log("\nArrays!")
console.log("==============")

const array1 = new Array(3)
array1[0] = new Auto("Fiat", "cero", 1);
array1[1] = new Auto("Fiat", "uno", 1);
array1.push("agrego un elemtno");
const ulitmoElemnto = array1.pop();
array1.splice(0, 1);
console.log(array1);
console.log(ulitmoElemnto);
const array2 = [
    "elemento1", "elemento2", "elemento3"
];
console.log(array2);


/*
    function callback(value) {
        console.log(value);
    }
*/
/*
    const callback = function(value) {
    console.log(value);
    }
*/
/*
    const callback = (value) => {
        console.log(value);
    }
*/

// const callback = (value) => {
//     console.log(value);
// }

const callback = (value) => console.log(value);
 
// for each
array2.forEach((value) => console.log(value));

//       param callbackfn de tipo function
// forEach(callbackfn: (value: string, index: number, array: string[]) => void)
/*function callback(value) {
    console.log(value);
}*/


console.log("==============")
// for solo
for(let i = 0; i < array2.length; i++) {
    callback(array2[i], i, array2);
}

console.log("==============")
