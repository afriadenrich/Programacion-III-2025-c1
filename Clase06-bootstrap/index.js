// OBTENEMOS EL ICONO
let modeToggler = document.getElementById("mode-toggler");
// OBTENEMOS EL TAG HTML (TIENE LA PROPIEDAD DARK/LIGHT)
let html = document.getElementsByTagName("html")[0];
//CUANDO LA PAGINA CARGA VERIFICAMOS LA PREFERENCIA DEL USUARIO (LOCAL STORAGE)
window.onload = () => {
  //OBTENEMOS THEME
  const theme = localStorage.getItem("theme");
  console.log(theme);
  //DEPENDE EL THEME CONFIGURAMOS EL TEMA DE LA WEB
  switch (theme) {
    case "dark":
      modeToggler.classList.remove("bi-brightness-high");
      modeToggler.classList.add("bi-moon");
      html.setAttribute("data-bs-theme", "dark");
      break;
    case (null, "light"):
      modeToggler.classList.add("bi-brightness-high");
      modeToggler.classList.remove("bi-moon");
      html.setAttribute("data-bs-theme", "light");
      break;
  }
};
// LE ASIGNAMOS UNA FUNCION AL EVENTO CLICK DEL ICONO
modeToggler.addEventListener("click", () => {
  // REVISAMOS QUE MODO ESTAMOS USANDO
  if (html.getAttribute("data-bs-theme") == "light") {
    // ESTAMOS EN MODO LIGHT
    modeToggler.classList.remove("bi-brightness-high");
    modeToggler.classList.add("bi-moon");
    //SETEAMOS LA PROPIEDAD DARK
    html.setAttribute("data-bs-theme", "dark");
    //GUARDAMOS LA PROPIEDAD DARK EN LOCAL STORAGE
    localStorage.setItem("theme", "dark");
  } else {
    // ESTAMOS EN MODO DARK
    modeToggler.classList.add("bi-brightness-high");
    modeToggler.classList.remove("bi-moon");
    //SETEAMOS LA PROPIEDAD LIGHT
    html.setAttribute("data-bs-theme", "light");
    //GUARDAMOS LA PROPIEDAD LIGHT EN LOCAL STORAGE
    localStorage.setItem("theme", "light");
  }
});
