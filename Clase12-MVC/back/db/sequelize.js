const { Sequelize } = require("sequelize");

console.log("Entra a sequelize y lo levanta");

const sequelize = new Sequelize("autos_2025_c1", "root", "123456", {
  dialect: "mysql",
  host: "127.0.0.1",
  port: 3307,
});

module.exports = sequelize;
