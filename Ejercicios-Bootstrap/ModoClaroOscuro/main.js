const body = document.body;
const defaultTheme = localStorage.getItem("tema");

const btnClaro = document.getElementById("claro");
const btnOscuro = document.getElementById("oscuro");

if(defaultTheme === null) {
    defaultTheme === "light";
} 

cambiarModo(defaultTheme);

function cambiarModo(modo) {
    body.setAttribute("data-bs-theme", modo);
    
    localStorage.setItem("tema", modo);

    ocultarBoton(modo);
}

function ocultarBoton(modo) {
    if(modo === "light") {
        btnClaro.hidden = true;
        btnOscuro.hidden = false;
    } else {
        btnClaro.hidden = false;
        btnOscuro.hidden = true;
    }
}