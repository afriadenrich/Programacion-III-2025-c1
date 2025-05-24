// VISTA
// En la entrada, definir las rutas y sus verbos.
// En la salida, devuelve el JOSN u otra cosa.

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// Solo si versión de node >= 21
// process.loadEnvFile();
// Si versión de node < 21
const dotenv = require("dotenv");
dotenv.config();

// Me traigo los enrutadores
const autoRouter = require("./routes/autos.routes");
const motoRouter = require("./routes/motos.routes");

// Utilizo el body parser
app.use(bodyParser.json());

// Utilizo los enrutadores
app.use("/motos", motoRouter);
app.use("/autos", autoRouter);

app.listen(3000, () => {
  console.log("Levantó súper bien");
});
