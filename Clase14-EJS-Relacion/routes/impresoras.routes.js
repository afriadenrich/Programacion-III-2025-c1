// const express = require("express");
// const router = express.Router();

// const router = require("express").Router();

const { Router } = require("express");
const ImpresoraController = require("../controllers/impresoras.controller");
const router = Router();

router.get("/", ImpresoraController.traerTodos);
router.post("/", ImpresoraController.crear);

router.get("/crear", (req, res) => {
  res.render("crear");
});

module.exports = router;
