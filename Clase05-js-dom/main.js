// import * as ArchivoUsuario from "./usuario.js";
import Usuario, { Persona, nombre }  from "./usuario.js";
console.log("Funciona!");
console.log(nombre);

const usuario1 = new Usuario("Nicolas", "Ferrero", 25);
const usuario2 = new Usuario("Nicolas", "Ferrero", 25);
const usuario3 = new Usuario("Agus", "F", 25);

usuario1.saludar();

console.log(Usuario.Equals(usuario1, usuario2));
console.log(Usuario.Equals(usuario1, usuario3));

const titulo = document.getElementById("titulo");

titulo.innerHTML = "Estoy en el main.js";
titulo.style.background = "#ff00ff"

function mostrarDesdeMain(){
    titulo.innerHTML = usuario3.NombreCompleto;
}

const mostrarUsuario = document.getElementById("mostrarUsuario");
mostrarUsuario.onclick = mostrarDesdeMain;