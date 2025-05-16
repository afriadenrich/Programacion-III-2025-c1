// Alternativa de import, es lo que usa express
const express = require("express");
const servidor = express();

// get, post, put, delete, etc.
// http://mi-servidor.com/
servidor.get("/", (request, response) => {
    // Lógica...
    response.send("Hola mundo");
});

// Servidor + Verbo + Ruta + Callback
// GET = Traer recursos
servidor.get("/clima", (request, response) => {
    response.send("GET de climas");
});

// POST = Guardar recursos
servidor.post("/clima", (request, response) => {
    // Lógica...
    console.log("Se guardaría un clima...");
    response.send("POST de climas...");
});

// PUT = Modificación completa de un recurso
servidor.put("/clima", (req, res) => {
    console.log("Se mofica un clima");
    res.send("PUT a clima");
});

// DELETE = ELIMINACION de un recurso
servidor.delete("/clima", (req, res) => {
    console.log("Se elimina un clima");
    res.send("DELETE a clima");
});

// PATCH = Modificación parcial de un recurso
servidor.patch("/clima", (req, res) => {
    console.log("Se modifica una parte de un clima");
    res.send("PATCH a clima");
});

// CRUD -> CREATE - READ - UPDATE - DELETE

servidor.all("/autos", (req, res) => {
    // res.send("Estoy en autos por el verbo: " + req.method);
    switch(req.method) {
        case "GET":
            res.send("GET autos");
        break;
        case "POST":
            res.send("POST autos");
        break;
        default:
            res.status(405).send();
    }
});

// STATUS de error - 405 en Método no permitido
servidor.delete("/clima/avellaneda", (req, res) => {
    console.log("Alguien quiere borrar avellaneda!!!");
    res.status(405);
    res.send();
})

servidor.get("/clima/avellaneda", (request, response) => {
    // Lógica...
    response.send({nombre: "Avellaneda", clima: "20 grados"});
});

servidor.listen(3000);

// node index.js para arrancar el servidor
// Control + C en la consola para frenarlo