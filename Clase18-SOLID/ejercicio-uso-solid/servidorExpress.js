const express = require("express");

async function crearServidor() {
  const app = express();

  app.use(express.json());

  app.get("/ping", (req, res) => {
    res.send("pong desde Express");
  });

  // Envolvemos el listen de Express para que tenga la misma interfaz que Fastify
  const listenAdaptado = ({ port }, cb) => {
    const server = app.listen(port, () => {
      if (cb) cb(null, `http://localhost:${port}`);
    });
    return server;
  };

  // Retornamos app con método listen sobrescrito
  return {
    ...app,
    listen: listenAdaptado,
  };
}

module.exports = crearServidor;
