const express = require("express");
const router = express.Router();
const MotoController = require("../controllers/motos.controller");

// No hace falta escribir /motos, eso se define en la app.
router.get("/", MotoController.traerTodos);

router.get("/:id", MotoController.traerPorId);

router.post("/", MotoController.crear);

router.put("/:id", MotoController.modificar);

router.delete("/:id", MotoController.eliminar);

module.exports = router;
