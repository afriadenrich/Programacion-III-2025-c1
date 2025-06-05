const express = require("express");
const app = express();

// use -> aplica un middleware
app.use(express.json()); // bodyParser.json()

app.use((req, res, next) => {
  console.log(Date.now());
  console.log(new Date() + " - " + req.method);
  next();
});

app.post("/", (req, res, next) => {
  if (!req.body) {
    return res.send("Falta el body");
  }

  if (!req.body.nombre || !req.body.apellido || !req.body.dni) {
    return res.send("Falta un dato");
  }

  next();
});

app.post("/", (req, res, next) => {
  if (req.body.nombre.length < 3) {
    res.send("Nombre muy corto");
    return;
  }
  if (req.body.apellido.length <= 3) {
    return res.send("Apellido muy corto");
  }
  console.log(req.body.dni);
  if (req.body.dni <= 999999) {
    return res.send("DNI muy corto");
  }
  if (req.body.dni > 100000000) {
    return res.send("DNI muy largo");
  }

  next();
});

app.post("/", (req, res, next) => {
  const { nombre, apellido, dni } = req.body;

  console.log("Guarda un usuario en la base de datos...");
  console.log(nombre, apellido, dni);

  //   res.json({ mensaje: "todo ok" });
  res.send("todo ok ");
  next();
});

app.get("/", (req, res, next) => {
  res.send("Ruta por get");
  next();
});

app.use((req, res) => {
  console.log(Date.now());
  console.log(new Date() + " - " + req.method);
});

app.listen(3000, () => {
  console.log("Todo ok!");
});
