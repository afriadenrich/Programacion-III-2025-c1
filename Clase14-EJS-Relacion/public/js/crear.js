const crear = document.getElementById("crear");

const marca = document.getElementById("marca");
const tipo = document.getElementById("tipo");
const cartuchos = document.getElementById("cartuchos");
const modelo = document.getElementById("modelo");

crear.onclick = () => {
  fetch("/impresoras", {
    method: "POST",
    body: JSON.stringify({
      marca: marca.value,
      tipo: tipo.value,
      cartuchos: cartuchos.value,
      modelo: modelo.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
