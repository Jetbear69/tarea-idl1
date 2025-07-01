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

app.get("/formato", (req, res) => {
  let xml = "<respuesta><id>34</id><estado>Registrado</estado></respuesta>".trim();
  res.set("Content-Type", "application/xml");
  res.send(xml);
});

app.get("/informe_word", (req, res) => {
  
});

app.get("/informe_excel", (req, res) => {
  
});

app.get("/informe_pdf", (req, res) => {
  
});

app.listen(process.env.PORT, () => {
  console.log("El proyecto Express funciona!");
});
