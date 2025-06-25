const apiUrl = "https://clase12-back.onrender.com";

const peticion = fetch(apiUrl + "/motos");

peticion.then(async (response) => {
  const json = await response.json();
  console.log(json);
});

const post = fetch(apiUrl + "/motos", {
  method: "POST",
  body: JSON.stringify({ marca: "intel" }),
  headers: {
    "Content-Type": "application/json",
  },
});

post.then(async (response) => {
  const json = await response.json();
  console.log(json);
});

const put = fetch(apiUrl + "/motos/9", {
  method: "PUT",
  body: JSON.stringify({ marca: "AMD" }),
  headers: {
    "Content-Type": "application/json",
  },
});

put.then(async (response) => {
  const json = await response.json();
  console.log(json);
});

const eliminar = fetch(apiUrl + "/motos/11", {
  method: "DELETE",
});

eliminar.then(async (response) => {
  const json = await response.json();
  console.log(json);
});
