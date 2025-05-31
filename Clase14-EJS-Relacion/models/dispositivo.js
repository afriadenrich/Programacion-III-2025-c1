const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

const Dispositivo = sequelize.define(
  "Dispositivo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

// Dispositivo.sync({ force: true });

module.exports = Dispositivo;
