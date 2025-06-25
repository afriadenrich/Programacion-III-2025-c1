const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);

app.get("/", (req, res) => {
  res.send({ mensaje: "Funciona" });
});

app.listen(3000, () => {
  console.log("Levantó");
});
