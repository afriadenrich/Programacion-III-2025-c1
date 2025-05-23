const express = require("express");
const router = express.Router();
const MotoController = require("../controllers/motos.controller");

// No hace falta escribir /motos, eso se define en la app.
router.get("/", MotoController.traerTodos);

router.get("/:id", MotoController.traerPorId);

router.post("/", (req, res) => {
  res.send("POST de motos");
});
router.put("/", (req, res) => {
  res.send("PUT de motos");
});
router.patch("/", (req, res) => {
  res.send("PATCH de motos");
});
router.delete("/", (req, res) => {
  res.send("DELETE de motos");
});

module.exports = router;
