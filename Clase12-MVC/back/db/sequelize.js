const { Sequelize } = require("sequelize");
const sqlite = require("@sequelize/sqlite3");

console.log("Entra a sequelize y lo levanta");

// const sequelize = new Sequelize("autos_2025_c1", "root", "123456", {
//   dialect: "mysql",
//   host: "127.0.0.1",
//   port: 3307,
// });
let sequelize;

if (process.env.DIALECTO_DB === "mysql") {
  sequelize = new Sequelize(
    "autos_2025_c1",
    process.env.SQL_USER,
    process.env.SQL_PASSWORD,
    {
      dialect: "mysql",
      host: process.env.SQL_HOST,
      port: process.env.SQL_PORT,
    }
  );
} else {
  sequelize = new Sequelize(process.env.SQLLITE_URI, {
    dialect: "sqlite",
  });
}

//      127.0.0.1             10.74.48.48      15.18.87.57      43.58.54.4      45.3.15.5
// mi PC / la de mi colega -> desarrollo -> Quality Assurance -> Homologación -> Producción
// AMBIENTES

// Variables de ambiente
// ENVIORNMENT

module.exports = sequelize;
