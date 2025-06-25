console.log("todo anda");

(async () => {
  const peticion = await fetch("http://localhost:3000");
  const respuesta = await peticion.json();
  console.log(respuesta);
})();
