const express = require("express");
const app = express();

// const path = require("node:path");
// const fileSystem = require("node:fs");

const path = require("path");
const fileSystem = require("fs");

// Directorio PUBLICO
app.use(express.static(path.join(__dirname, "public")));

// const rutaArchivo = "./files/data.txt";
const rutaFiles = path.join(__dirname, "files", "data", "info", "txt");
const rutaArchivo = path.join(rutaFiles, "data.txt");

const existe = fileSystem.existsSync(rutaArchivo);
const existeFiles = fileSystem.existsSync(rutaFiles);

if (!existeFiles) {
  console.log("no exitste la carpeta");
  fileSystem.mkdirSync(rutaFiles, {
    recursive: true,
  });
}

if (!existe || true) {
  // leer el archivo
  fileSystem.writeFileSync(rutaArchivo, "HOLA MUNDO");
  console.log("no existe el archivo");
}

// Destructivo, borra el contenido anterior
// fileSystem.writeFileSync(rutaArchivo, " COMO ESTAN?");

const os = require("os"); // Operating sistem

fileSystem.appendFileSync(rutaArchivo, " COMO ESTÁN?" + os.EOL);
fileSystem.appendFileSync(rutaArchivo, "HOLA" + os.EOL);
fileSystem.appendFileSync(rutaArchivo, "HOLA" + os.EOL);

// End Of Line -> EOL

fileSystem.cpSync(rutaArchivo, "public/data-publica.txt");

// fileSystem.chmodSync("public/archivo-publico.txt", 0o777);

const contenido = fileSystem.readFileSync(rutaArchivo, "ascii");

console.log(contenido);

fileSystem.unlinkSync(rutaArchivo);

const rutaJson = path.join(__dirname, "files", "data.json");

const dataJsonString = fileSystem.readFileSync(rutaJson, "utf-8");

const dataJson = JSON.parse(dataJsonString);

console.log(dataJson.nombre);

app.listen(3000, () => {
  console.log("Levantó");
});
