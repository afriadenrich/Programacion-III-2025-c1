const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");

const Moto = sequelize.define("Moto", {
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
});

module.exports = Moto;
