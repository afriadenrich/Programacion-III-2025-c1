// http://localhost:5500/Clase07-async/formularios.html
// ?
// nombre=agust&
// edad=33&
// email=a%40a&
// password=123456787&
// terminos=on&
// notificaciones=on&
// radio=prog&
// opciones=progII

// HTML 

// LAS PASSWORD NO SE MANDAN POR LOS PARAMETROS DE RUTA JAMÁS!!! (ya vamos a ver eso)

const parametrosParseados = new URLSearchParams(document.location.search);
// for (let i = 0; i < largo; i++)
// array.forEach((item) => { ... }) 
// for of -> for(item of array) { ... }
for(value of parametrosParseados.values()) {
    console.log(value);
}

parametrosParseados.forEach((value, key) => {
    console.log(key, value);
});


/** @type {HTMLFormElement}  */
const formulario = document.getElementById("form");

formulario.onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formulario);
    formData.forEach((value, key) => {
        console.log(key, value);
    });
}