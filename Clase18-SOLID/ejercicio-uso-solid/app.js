// const express = require("express");
// const app = express();
// const productoRoutes = require("./routes/producto");

// app.use("/productos", productoRoutes);

// app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));

// const crearServidor = require("./servidorExpress");
const crearServidor = require("./servidorFastify");

const PORT = 3000;

crearServidor().then((app) => {
  app.listen({ port: PORT }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Servidor corriendo en ${address}`);
  });
});
