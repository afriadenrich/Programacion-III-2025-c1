const express = require("express");
const { join } = require("path");
const app = express();

// Devolver en la respuesta el CONTENIDO del archivo
// Settear el Content-Type en el tipo del archivo
// Settear el Content-Disposition en el correspondiente

function descargar({ response, contentType, fileName, filePath }) {
  response.setHeader("Content-Type", contentType);
  response.setHeader("Content-Disposition", "attachment; filename=" + fileName);
  response.sendFile(join(process.cwd(), "archivos", filePath));
}

app.get("/descarga/txt", (req, res) => {
  // process.cwd() -> Current Working Directory
  res.setHeader("Content-Type", "text/plain");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=menuDescargado.txt"
  );
  res.sendFile(join(process.cwd(), "archivos", "menu.txt"));
});

app.get("/descarga/json", (req, res) => {
  descargar({
    response: res,
    contentType: "application/json",
    fileName: "logs.json",
    filePath: "logs.json",
  });
});

app.get("/descarga/pdf", (req, res) => {
  descargar({
    response: res,
    contentType: "application/pdf",
    fileName: "TP FINAL.pdf",
    filePath: "TP.pdf",
  });
});

app.get("/descarga/html", (req, res) => {
  const path = join(process.cwd(), "index.html");
  //   res.download(path, "web.html");
  res.attachment("algo.html");
  res.sendFile(path);
});

app.listen(3000, () => {
  console.log("App funcionando");
});
