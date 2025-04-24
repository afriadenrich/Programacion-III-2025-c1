console.log("DOM.js");

const titulo = document.getElementById("titulo");

/** 
 * @type HTMLInputElement
 */
const nombreInput = document.getElementById("nombre");

// nombreInput.type = "text";

titulo.innerText = "Chau clase";

console.log(titulo.innerText);

function mostrarContraseña(){
    nombreInput.type = "text";
    // botonMostrar.style.fontWeight = 900;
}

function ocultarContraseña(){
    nombreInput.type = "password";
    // botonMostrar.style.fontWeight = 500;
}

function cambiarTitulo() {
    titulo.innerText = nombreInput.value;
}

/** @type HTMLButtonElement */
const botonMostrar = document.getElementById("mostrar");

botonMostrar.onmouseenter = mostrarContraseña; 
botonMostrar.onmouseleave = ocultarContraseña; 


const parrafosPorTag = document.getElementsByTagName("p");

console.log(parrafosPorTag);

const parrafosPorClase = document.getElementsByClassName("parrafo");
const cantidadParrafos = parrafosPorClase.length;

for(let i = 0; i < cantidadParrafos; i++) {
    /** @type HTMLParagraphElement */
    const elemento = parrafosPorClase.item(i);

    elemento.style.textDecoration = "underline";
    elemento.style.margin = "0";
}

console.log(parrafosPorClase);

const parrafosPorClaseRojo = document.getElementsByClassName("rojo");

console.log(parrafosPorClaseRojo);