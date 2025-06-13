class IProductoRepositorio {
  async obtenerTodos() {
    throw new Error("Método no implementado");
  }

  async agregar(producto) {
    throw new Error("Método no implementado");
  }
}

module.exports = IProductoRepositorio;
