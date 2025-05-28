// 1. Configuración inicial

// const app = require("express")();
const express = require("express");
const app = express();

// implementar el .env
// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();

// EJS

// EJS

// implementar el body parser
const bodyParser = require("body-parser");
const impresorasRouter = require("./routes/impresoras.routes");
app.use(bodyParser.json());

// Rutas:
app.use("/impresoras", impresorasRouter);

// Entra la request ->
// index instancia las rutas ->
// las rutas llaman a los métodos ->
// los métodos conectan con los modelos / Controllers ->
// los modelos contectan con la DB ->
// Sequelize es la DB
// La DB devuelve el modelo creado / listado / modificado / etc.
// El controller recibe la respuesta de la DB.
// Tomar lo que devuelve el controller y generar un HTML.

app.listen(3000);
