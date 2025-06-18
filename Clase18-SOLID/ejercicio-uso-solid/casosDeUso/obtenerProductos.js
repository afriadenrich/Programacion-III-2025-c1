class ObtenerProductos {
  constructor(productoRepositorio) {
    this.productoRepositorio = productoRepositorio;
  }

  async ejecutar() {
    return await this.productoRepositorio.obtenerTodos();
  }
}
module.exports = ObtenerProductos;
