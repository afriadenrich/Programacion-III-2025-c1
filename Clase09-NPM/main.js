import Swall from "./node_modules/sweetalert2/dist/sweetalert2.esm.all.js";
import Toastify from "./node_modules/toastify-js/src/toastify-es.js";
const enviar = document.getElementById("enviar");

/* node_modules/nombre-paquete/dist/archivo.esm.js */
// Swall.fire({
//     title: 'Error!',
//     text: 'Do you want to continue',
//     icon: "error",
//     confirmButtonText: 'Cool',
// });

Toastify({
  text: "This is a toast",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  onClick: function () {}, // Callback after click
}).showToast();

enviar.onclick = () => {
  Toastify({
    text: "Enviado!",
    duration: 5000,
  }).showToast();

 
};
// CommonJS
// ES Modules
