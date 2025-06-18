const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

router.get("/", productoController.obtenerProductos);
router.post("/", productoController.agregarProducto);

module.exports = router;
