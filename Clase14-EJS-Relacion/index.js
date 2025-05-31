const express = require("express");
const app = express();

require("dotenv").config();

// EJS
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Configurar carpeta pública:
app.use(express.static(path.join(__dirname, "public")));

// implementar el body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// DEFINIR LAS RELACIONES
require("./models/relaciones");

// Rutas:
const impresorasRouter = require("./routes/impresoras.routes");
app.use("/impresoras", impresorasRouter);

app.get("/", (req, res) => {
  const datos = [33, 62, 98, "Hola", 3];
  res.render("index", { nombre: "Agustín", apellido: undefined, datos });
});

app.listen(3000);
