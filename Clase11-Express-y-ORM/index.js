const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");

// 1. Instalamos todo
// npm install sequelize mysql2

// 2 Creamos la conexión
const sequelize = new Sequelize("autos_2025_c1", "root", "123456", {
  dialect: "mysql",
  host: "127.0.0.1",
  port: 3307,
});

const app = express();

// MYSQL
// 3. Testear la conexión
app.get("/test/conexion", async (req, res) => {
  try {
    await sequelize.authenticate();
    res.send("Todo ok");
  } catch (e) {
    res.status(401);
    res.send(e);
  }
});

// 4. Crear el modelo
const Auto = sequelize.define(
  "Auto",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fechaSalida: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "autos",
  }
);

// Sincronizar el modelo, 3 opciones
app.get("/test/sync", async (req, res) => {
  const respuesta = await Auto.sync();
  console.log(respuesta);
  res.send("Terminó");
});

app.get("/test/sync/alter", async (req, res) => {
  const respuesta = await Auto.sync({ alter: true });
  console.log(respuesta);
  res.send("Terminó");
});

app.get("/test/sync/force", async (req, res) => {
  const respuesta = await Auto.sync({ force: true });
  console.log(respuesta);
  res.send("Terminó");
});

// 5. Utilizar el modelo
app.get("/autos", async (req, res) => {
  const resultado = await Auto.findAll();
  // const resultado = await Auto.findAll({
  //     where: {
  //         marca: "Ford"
  //     }
  // });
  // const resultado =await Auto.findByPk(3);
  console.log(resultado);
  res.send(resultado);
  //
});

app.post("/autos", async (req, res) => {
  try {
    const resultado = await Auto.create({
      marca: "MARCA",
      modelo: "MODELO",
      precio: 123,
      fechaSalida: "1970/01/01",
    });
    res.send({ mensaje: "Todo ok" });
  } catch {
    res.status(400);
    res.send({ mensaje: "Todo mal" });
  }
  //
});

app.put("/autos", async (req, res) => {
  const resultado = await Auto.update(
    { marca: "Ferrari", modelo: "C3", precio: 100 },
    {
      where: {
        modelo: "MODELO",
      },
    }
  );
  res.send(resultado);
  //
});

app.delete("/autos", async (req, res) => {
  const resultado = await Auto.destroy({
    where: {
      id: 1,
    },
  });
  res.send(resultado);
  //
});

// revisa la vida del servidor
// app.get("/healthChek", (req, res) => {
//     res.send({"mensaje": "todo ok"})
// })

app.listen(3000, () => {
  console.log("Levantó bien!");
});
