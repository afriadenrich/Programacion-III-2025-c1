const { response, request } = require("express");
const MotoModel = require("../models/motos.js");

class MotoController {
  /**
   * @param {request} req
   * @param {response} res
   */
  static async traerTodos(req, res) {
    const motos = await MotoModel.findAll();
    res.send(motos);
  }

  /**
   * @param {request} req
   * @param {response} res
   */
  static async traerPorId(req, res) {
    const { id } = req.params;
    const resultado = await MotoModel.findByPk(id);
    res.send(resultado);
  }

  /**
   * Con POST, los datos vienen por el BODY.
   * NO por la URL. motivos: 1.seguridad. 2. tamaño.
   * Trae los datos por el body
   * @param {request} req
   * @param {response} res
   */
  static async crear(req, res) {
    // const body = req.body;
    // const marca = body.marca;
    const marca = req.body.marca;
    const resultado = await MotoModel.create({ marca: marca });
    res.send(resultado);
  }

  /**
   * Con PUT, los datos vienen por el BODY.
   * NO por la URL. motivos: 1.seguridad. 2. tamaño.
   * Trae los datos por el body, además de el id por params.
   * @param {request} req
   * @param {response} res
   */
  static async modificar(req, res) {}

  /**
   * Trae el id por params
   * /:id
   * @param {request} req
   * @param {response} res
   */
  static async eliminar(req, res) {
    // const { id } = req.params;
    const id = req.params.id;
    const resultado = await MotoModel.destroy({
      where: { id: id },
    });
    res.send(resultado);
  }
}

module.exports = MotoController;
