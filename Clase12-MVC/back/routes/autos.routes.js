const express = require("express");
const router = express.Router();

// No hace falta escribir /autos, eso se define en la app.
router.get("/", (req, res) => {
  res.send("GET de autos");
});
router.get("/:id", (req, res) => {
  res.send("GET por ID de autos");
});
router.post("/", (req, res) => {
  res.send("POST de autos");
});
router.put("/", (req, res) => {
  res.send("PUT de autos");
});
router.patch("/", (req, res) => {
  res.send("PATCH de autos");
});
router.delete("/", (req, res) => {
  res.send("DELETE de autos");
});

module.exports = router;
