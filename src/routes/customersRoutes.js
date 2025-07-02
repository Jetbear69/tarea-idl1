const express = require("express");

const router = express.Router();

let customers = [
  { id: 1, firstName: 'RICARDO GERMAN', lastName: 'AGIP RUBIO', documentType: 'DNI', documentNumber: '27440013' },
  { id: 2, firstName: 'CRISTIAN ERICK', lastName: 'ALBA CARRION', documentType: 'DNI', documentNumber: '45650699' },
  { id: 3, firstName: 'MIRIAM JACKELINE', lastName: 'ALBAN CHUQUIPOMA', documentType: 'DNI', documentNumber: '18195497' },
  { id: 4, firstName: 'ASTRID VANESA ELLY', lastName: 'AMANQUI CONDORI', documentType: 'DNI', documentNumber: '72664197' }
];
let correlative = customers.length;

//POST /api/customers => Crear un Cliente
router.post("/", (req, res) => {  
  let id = correlative + 1;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let documentType = req.body.documentType;
  let documentNumber = req.body.documentNumber;
  let customer = { id: correlative, firstName: firstName, lastName: lastName, documentType: documentType, documentNumber: documentNumber };
  customers.push(customer);
  correlative++;
  res.json(customer);
});

//GET /api/customers => Listar Clientes
router.get("/", (req, res) => {
  res.json(customers);
});


router.get("/:id", (req, res) => {
  let id = req.params.id;
  let customer = customers.filter(item => item.id == id);
  res.json(customer);
});

module.exports = router;