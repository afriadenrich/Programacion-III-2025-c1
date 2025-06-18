const express = require("express");
const { join } = require("path");
const app = express();
const XLSX = require("xlsx");

// Devolver en la respuesta el CONTENIDO del archivo
// Settear el Content-Type en el tipo del archivo
// Settear el Content-Disposition en el correspondiente

// npm install xlsx

const datos = [
  { nombre: "Algo", apellido: "Algo" },
  { nombre: "Algo1", apellido: "Algo1" },
  { nombre: "Algo2", apellido: "Algo2" },
  { nombre: "Algo3", apellido: "Algo3" },
];

// A [0, 1, 2, 3, 4, 5]
// B [0, 1, 2, 3, 4, 5]
// C [0, 1, 2, 3, 4, 5]

//https://www.npmjs.com/package/xlsx#processing-json-and-js-data

app.get("/", (req, res) => {
  // Crea libro y hoja de excel
  const libro = XLSX.utils.book_new();
  const hoja = XLSX.utils.json_to_sheet(datos);

  // Une libro y hoja de excel
  XLSX.utils.book_append_sheet(libro, hoja, "Hoja datos");

  // Obtiene el CONTENIDO del archivo
  const dataFinal = XLSX.write(libro, { type: "buffer" });

  res.attachment("data.xlsx");
  res.send(dataFinal);
});

app.listen(3000, () => {
  console.log("App funcionando");
});
