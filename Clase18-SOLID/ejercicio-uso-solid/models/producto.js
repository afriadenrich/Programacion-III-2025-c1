class Producto {
  static async findAll() {
    return [
      { id: 1, nombre: 'Laptop', precio: 1200 },
      { id: 2, nombre: 'Mouse', precio: 25 }
    ];
  }

  static async create(data) {
    return { id: Math.floor(Math.random() * 1000), ...data };
  }
}

module.exports = { Producto };
