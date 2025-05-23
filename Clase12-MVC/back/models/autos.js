const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");

const Auto = sequelize.define("Auto", {
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

module.exports = Auto;
