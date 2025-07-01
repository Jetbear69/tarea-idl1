const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

const fnHealth = (req, res) => {
  res.send("OK");
}

app.get("/health", fnHealth);

app.listen(process.env.PORT, () => {
  console.log("El proyecto Express funciona!");
});
