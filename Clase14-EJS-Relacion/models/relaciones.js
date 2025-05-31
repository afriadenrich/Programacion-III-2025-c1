const Impresora = require("./impresora");
const Bandeja = require("./bandeja");
const Dispositivo = require("./dispositivo");
const Tipo = require("./tipo");
const sequelize = require("../database/sequelize");

// UNO A UNO
Impresora.hasOne(Bandeja, { onDelete: "SET NULL" });
Bandeja.belongsTo(Impresora);

// UNO A MUCHOS
Tipo.hasOne(Impresora);
Impresora.belongsTo(Tipo);

// Tipo.sync({ alter: true });
// Impresora.sync({ alter: true });

const Impresora_Dispositivo = sequelize.define(
  "Impresora_Dispositivo",
  {},
  {
    createdAt: false,
    updatedAt: false,
  }
);

// MUCHOS A MUCHOS
Impresora.belongsToMany(Dispositivo, { through: Impresora_Dispositivo });
Dispositivo.belongsToMany(Impresora, { through: Impresora_Dispositivo });
// SYNC

// Impresora.sync({ alter: true });
// Dispositivo.sync({ alter: true });

sequelize.sync({ alter: true });

module.exports = { Impresora, Dispositivo, Tipo, Bandeja };
