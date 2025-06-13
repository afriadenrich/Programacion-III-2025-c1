const IProductoRepositorio = require("./IProductoRepositorio");
const { Producto } = require("../models/producto"); // Sequelize model simulado

class ProductoRepositorioSequelize extends IProductoRepositorio {
  async obtenerTodos() {
    return await Producto.findAll();
  }

  async agregar(producto) {
    return await Producto.create(producto);
  }
}
module.exports = ProductoRepositorioSequelize;
