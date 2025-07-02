const express = require("express");

const router = express.Router();

let customers = [
  { id: 1, firstName: 'RICARDO GERMAN', lastName: 'AGIP RUBIO', documentType: 'DNI', documentNumber: '27440013'},
  { id: 2, firstName: 'CRISTIAN ERICK', lastName: 'ALBA CARRION', documentType: 'DNI', documentNumber: '27440013'},
  { id: 3, firstName: 'RICARDO GERMAN', lastName: 'AGIP RUBIO', documentType: 'DNI', documentNumber: '27440013'},
  { id: 4, firstName: 'RICARDO GERMAN', lastName: 'AGIP RUBIO', documentType: 'DNI', documentNumber: '27440013'}
];

//GET /api/products => Listar productos
router.get("/", (req, res) => {
  res.json([
    {
      id: 1, name: "Hugo"
    },
    {
      id: 2, name: "Paco"
    },
    {
      id: 3, name: "Luis"
    },
  ]);
});

//POST /api/products => Crear un producto
router.post("/", (req, res) => {
  
  res.json({
    "id": 3456,
    "name": "Ipad"
  })
});

module.exports = router;