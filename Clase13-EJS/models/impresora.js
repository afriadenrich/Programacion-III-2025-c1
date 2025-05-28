const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

const Impresora = sequelize.define("Impresora", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cartuchos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Impresora.sync({ force: true });

module.exports = Impresora;
