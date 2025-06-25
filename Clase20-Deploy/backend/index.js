const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

app.get("/", (req, res) => {
  res.send({ mensaje: "Funciona" });
});

app.listen(3000, () => {
  console.log("Levantó");
});
