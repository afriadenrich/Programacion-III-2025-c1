console.log("todo anda");

(async () => {
  const peticion = await fetch(API_URL);
  const respuesta = await peticion.json();
  console.log(respuesta);
})();
