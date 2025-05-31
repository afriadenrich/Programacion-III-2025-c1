const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

const Bandeja = sequelize.define(
  "Bandeja",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    capacidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

// Bandeja.sync({ force: true });

module.exports = Bandeja;
