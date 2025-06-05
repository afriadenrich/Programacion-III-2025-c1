const express = require("express");
const app = express();

// npm i cors
const cors = require("cors");
// CORS -> Cross Origin Resource Sharing

app.use(
  cors({
    allowedHeaders: ["Content-Type", "Authorization", "ApiKey"],
    origin: "*",
    methods: ["GET", "POST"],
  })
);

app.get("/", (req, res) => {
  res.send("AAAAA");
});

app.delete("/", (req, res) => {
  res.send("AAAAA");
});

app.listen(3000, () => {
  console.log("Andó");
});
