console.log("Local Storage");

const parrafo = document.getElementById("parrafo");
const input = document.getElementById("input");

function guardar(){
    // Se guarda con clave - valor
    // SOLO se guardan strings.
    // Antes de guardar, transformar a string.
    localStorage.setItem("dato", input.value);
    parrafo.innerText = input.value;
}

function traer(){
    const dato = localStorage.getItem("dato");
    parrafo.innerText = dato;
}

function guardarObjeto(){
    // Se guarda con clave - valor
    // SOLO se guardan strings.
    // Antes de guardar, transformar a string.
    const objeto = {
        nombre: "Persona",
        apellido: "Alien"
    };

    // const json = "{" + "'nombre: '" + objeto.nombre + ", 'a'"

    const json = JSON.stringify(objeto);
        console.log("JSON: ", json);
    localStorage.setItem("objeto", json);
}

function traerObjeto(){
    const objeto = localStorage.getItem("objeto");
    const deserializado = JSON.parse(objeto);
   console.log(deserializado.nombre);
}

traer();
traerObjeto();