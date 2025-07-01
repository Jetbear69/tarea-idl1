const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

const fnHealth = (req, res) => {
  res.send("<h1>OK</h1> <strong>funciona!</strong>");
}

app.get("/health", fnHealth);

app.get("/status", (req, res) => {
  res.json(
    {
      "id": 12,
      "status": "Registrado"
    }
  );
});

app.listen(process.env.PORT, () => {
  console.log("El proyecto Express funciona!");
});
