const { Sequelize } = require("sequelize");

// Connection URI.
// dialecto://usuario:contraseña@host:puerto/nombreDB

const sequelizeUri = new Sequelize(process.env.SQL_URI);

module.exports = sequelizeUri;

/*
const sequelize = new Sequelize(
  process.env.SQL_DB,
  process.env.SQL_USER,
  process.env.SQL_PASS,
  {
    dialect: process.env.SQL_DIALECT,
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
  }
);
*/
