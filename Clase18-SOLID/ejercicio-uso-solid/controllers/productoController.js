const ProductoRepositorioSequelize = require("../repositorios/ProductoRepositorioSequelize");
const ProductoRepositorioOtroORM = require("../repositorios/ProductoRepositorioOtroORM");
const ObtenerProductos = require("../casosDeUso/obtenerProductos");
const AgregarProducto = require("../casosDeUso/agregarProducto");

const usarSequelize = false;
const repo = usarSequelize
  ? new ProductoRepositorioSequelize()
  : new ProductoRepositorioOtroORM();

exports.obtenerProductos = async (req, res) => {
  const casoDeUso = new ObtenerProductos(repo);

  try {
    const productos = await casoDeUso.ejecutar();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
};

exports.agregarProducto = async (req, res) => {
  const casoDeUso = new AgregarProducto(repo);
  const nuevoProducto = req.body;

  try {
    const resultado = await casoDeUso.ejecutar(nuevoProducto);
    res.status(201).json(resultado);
  } catch (err) {
    res.status(500).json({ error: "Error al agregar producto" });
  }
};
