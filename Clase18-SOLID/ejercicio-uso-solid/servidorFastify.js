// servidorFastify.js
const fastify = require("fastify");

async function crearServidor() {
  const app = fastify();

  app.get("/ping", async (request, reply) => {
    return "pong desde Fastify";
  });

  return app;
}

module.exports = crearServidor;
