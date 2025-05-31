const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

const Tipo = sequelize.define(
  "Tipo",
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

// Tipo.sync({ force: true });

module.exports = Tipo;
