const IProductoRepositorio = require("./IProductoRepositorio");

const productosSimulados = [
  { id: 1, nombre: "Tablet", precio: 500 },
  { id: 2, nombre: "Monitor", precio: 300 },
];

class ProductoRepositorioOtroORM extends IProductoRepositorio {
  async obtenerTodos() {
    return productosSimulados;
  }

  async agregar(producto) {
    productosSimulados.push(producto);
    return producto;
  }
}
module.exports = ProductoRepositorioOtroORM;
