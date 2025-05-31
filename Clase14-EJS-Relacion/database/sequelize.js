const { Sequelize } = require("sequelize");

const sequelizeUri = new Sequelize(process.env.SQL_URI);

module.exports = sequelizeUri;
