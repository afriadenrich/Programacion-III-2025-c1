const express = require("express");
const { Sequelize } = require("sequelize");

/*

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' 
});
*/
const sequelize = new Sequelize("autos_2025_c1", "root", "123456", {
    dialect: "mysql",
    host: "127.0.0.1",
    port: 3307,
})

const app = express();

// MYSQL 

app.get("/test/conexion", async (req, res) => {
    try {
       await sequelize.authenticate();
       res.send("Todo ok");
    } catch(e) {
        res.status(401);
        res.send(e);
    }
})


app.get("/autos", (req,res) => {

    //
})

app.post("/autos", (req,res) => {

    //
})

app.put("/autos", (req,res) => {

    //
})

app.delete("/autos", (req,res) => {

    //
})


app.listen(3000, () => { console.log("Levantó bien!"); });





