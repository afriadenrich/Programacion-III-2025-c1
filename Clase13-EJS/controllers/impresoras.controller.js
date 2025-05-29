const Impresora = require("../models/impresora");
const { request, response } = require("express");

class ImpresoraController {
  /**
   * Trae todas las impresoras :D
   * @param {request} req
   * @param {response} res
   */
  static async traerTodos(req, res) {
    const impresoras = await Impresora.findAll();

    res.render("impresoras", { impresoras });
    // res.send(impresoras);
  }

  /**
   * Crea una impresora :D
   * @param {request} req
   * @param {response} res
   */
  static async crear(req, res) {
    const { marca, modelo, tipo, cartuchos } = req.body;

    const impresora = await Impresora.create({
      marca, // marca: marca
      modelo,
      tipo,
      cartuchos,
    });

    res.send(impresora);
  }
}

module.exports = ImpresoraController;

// Ejemplo todo separado:
// async function traerTodos() {}
// async function traerUno() {}
// async function traerPorMarca() {}

// module.exports = {
//   traerPorMarca,
//   traerTodos,
//   traerUno,
// };

// Ejemplo reducción:

// const marca = req.body.marca;
// const tipo = req.body.tipo;
// const modelo = req.body.modelo;
// const cartuchos = req.body.cartuchos;

// a

// const { marca, modelo, tipo, cartuchos } = req.body;
