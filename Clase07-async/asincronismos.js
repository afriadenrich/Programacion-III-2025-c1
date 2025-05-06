// Promesas

// Promesas:
// traer del servidor externo los datos ...
// La app promete que va a llegar una respuesta
// Cuando se cumpla la promesa, recién ahí hago algo con la respuesta.

// API:
// Application Programming Interface - Interface de programación de aplicaciones

// REST:
// Representational State Transfer - Transferencia de estado reprecentacional.

// API-REST: Una interfaz de aplicación que va estar en un servidor disponible para su uso sin guardar estados y devolviendo respuestas acordes a las peticiones que reciba.

// Cómo puedo obtener los datos de un servidor externo?
// Utilizamos el método de javascript fetch()

// HTML HyperText Markup Languaje 
// HTTP / HTTPS
// HyperText transfer Protocol - Protocolo de Trasferencia de Hyper Textos
// HTTPS - HyperText transfer Protocol Secure
// Protocolo / Reglas de cómo transferir peticiones / respuestas de hyper texto por internet
// BODY - ENCABEZADOS (Headers) - MÉTODO (GET, POST, PUT, DELETE, PATCH, OPTIONS...) - Código de estado - más cosas...
// FTP -> File Trasfer Protocol


const clima = document.getElementById("clima");
const viento = document.getElementById("viento");

const climaBerlin = document.getElementById("climaBerlin");
const vientoBerlin = document.getElementById("vientoBerlin");

const peticion = fetch("https://goweather.xyz/weather/Avellaneda");

console.log(peticion); // 1

// Promesa.then -> ENTONCES
peticion.then((respuesta) => {
    const json = respuesta.json();

    json.then((valor) => {

        clima.innerText = valor.description;
        viento.innerText = valor.wind;
        console.log("Resultado Avellaneda", valor);
    })
});

console.log("Se ejecuta antes que la callback 1 ");

// Patrón Async - Await
// await promesa
// await requiere estar dentro de un método declarado como asincrónico (palbra clave: async)

async function traerClima() {
    const respuesta = await fetch("https://goweather.xyz/weather/Berlin");
    const valor = await respuesta.json();
    console.log("Resultado berlin", valor);
    
    climaBerlin.innerText = valor.description;
    vientoBerlin.innerText = valor.wind;
}

traerClima();

console.log("Se ejecuta antes que la callback 2");

/*
try {
    console.log();
} catch(e) {

} finally {

}*/

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
// https://api.nasa.gov/planetary/apod  ?  api_key = DEMO_KEY
//                                      ? clave = valor & clave = valor & clave = valor

const apiKey = "DEMO_KEY";
const date = "2025-04-20";

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2025-04-20

const ruta = "https://api.nasa.gov/planetary/apod";

const rutaFinal = ruta + "?" + "api_key=" + apiKey + "&" + "date=" + date; 
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2025-04-20

const parametros = new URLSearchParams({
    api_key: "DEMO_KEY", // &
    date: "2025-04-20" 
});

const urlFinal = ruta + "?" + parametros.toString();
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2025-04-20

fetch(urlFinal).then((response) => {
    response.json().then((valor) => {
        console.log(valor);
    })
});