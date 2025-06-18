class AgregarProducto {
  constructor(productoRepositorio) {
    this.productoRepositorio = productoRepositorio;
  }

  async ejecutar(producto) {
    return await this.productoRepositorio.agregar(producto);
  }
}
module.exports = AgregarProducto;
