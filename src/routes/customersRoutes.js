const express = require("express");

const router = express.Router();

let customers = [
  { id: 1, firstName: 'RICARDO GERMAN', lastName: 'AGIP RUBIO', documentType: 'DNI', documentNumber: '27440013' },
  { id: 2, firstName: 'CRISTIAN ERICK', lastName: 'ALBA CARRION', documentType: 'DNI', documentNumber: '45650699' },
  { id: 3, firstName: 'MIRIAM JACKELINE', lastName: 'ALBAN CHUQUIPOMA', documentType: 'DNI', documentNumber: '18195497' },
  { id: 4, firstName: 'ASTRID VANESA ELLY', lastName: 'AMANQUI CONDORI', documentType: 'DNI', documentNumber: '72664197' }
];

//GET /api/products => Listar productos
router.get("/", (req, res) => {
  res.json(customers);
});

router.get("/:id", (req, res) => {
  let customer = customers.filter(item => item.id === req.params.id);
  res.json(customer);
});

//POST /api/products => Crear un producto
router.post("/", (req, res) => {
  
  res.json({
    "id": 3456,
    "name": "Ipad"
  })
});

module.exports = router;