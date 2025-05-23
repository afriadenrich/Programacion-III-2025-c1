const { response } = require("express");
const MotoModel = require("../models/motos.js");

class MotoController {
  static async traerTodos(req, res) {
    const motos = await MotoModel.findAll();
    res.send(motos);
  }

  static async traerPorId(req, res) {
    const { id } = req.params;
    const resultado = await MotoModel.findByPk(id);
    res.send(resultado);
  }
}

module.exports = MotoController;
