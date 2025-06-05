const express = require("express");
const app = express();
const morgan = require("morgan");

// Middleware de logs
app.use(morgan("dev"));

app.get("/", (req, res) => {
  console.log("Estoy en el verbo");
  res.send("Lo que sea GET");
});

app.post("/", (req, res) => {
  console.log(req.body.erroroqofdafo);
  res.send("Lo que sea POST ");
});

// Middlewares de atrapar errores
// app.use((err, req, res, next) => {
//   console.log(err.status);
//   next();
// });

app.use((err, req, res, next) => {
  const mensaje = err.message;

  res.status(err.status || 500);
  res.send(err.message);
});

app.listen(3000, () => {
  console.log("Todo ok!");
});
