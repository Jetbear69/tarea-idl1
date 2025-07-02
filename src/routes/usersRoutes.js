const express = require("express");
const router = express.Router();

let users = [
  { id: 1, roleId: 1, name: 'admin', email: 'admin@dgala.com.pe', access: '123456', indStatus: true },
  { id: 2, roleId: 2, name: 'operador', email: 'operador@dgala.com.pe', access: '123456', indStatus: true }
];

let correlative = users.length;

let response = { message: '', success: true, data: null };

//POST /api/customers => Crear un Cliente
router.post("/", (req, res) => {
  correlative++;
  let id = correlative;
  let roleId = req.body.firstName;
  let name = req.body.lastName;
  let documentType = req.body.documentType;
  let documentNumber = req.body.documentNumber;
  let customer = { id: correlative, firstName: firstName, lastName: lastName, documentType: documentType, documentNumber: documentNumber };
  customers.push(customer);
  response.message = 'El registro fue creado con éxito.';
  response.success = true;
  response.data = customer;
  res.json(response);
});

//PUT /api/customers/:id => Actualizar un Cliente
router.put("/:id", (req, res) => {
  let id = req.params.id;
  let customer = null;
  for(let i = 0; i < customers.length; i++) {
    if(customers[i].id == id) {
      customers[i].firstName = req.body.firstName;
      customers[i].lastName = req.body.lastName;
      customers[i].documentType = req.body.documentType;
      customers[i].documentNumber = req.body.documentNumber;
      customer = customers[i];
      break;
    }
  }
  response.message = 'El registro fue actualizado con éxito.';
  response.success = true;
  response.data = customer;
  res.json(response);
});

//DELETE /api/customers/:id => Eliminar un Cliente
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  let customer = customers.filter(item => item.id == id);
  for(let i = 0; i < customers.length; i++) {
    if(customers[i].id == id) {
      customers.splice(i, 1);    
      break;
    }
  }
  response.message = 'El registro fue eliminado con éxito.';
  response.success = true;
  response.data = customer;
  res.json(response);
});

//GET /api/customers => Listar Clientes
router.get("/", (req, res) => {
  response.message = 'La consulta fue realizado con éxito.';
  response.success = true;
  response.data = customers;
  res.json(response);
});

//GET /api/customers/:id => Filtrar Cliente por ID
router.get("/:id", (req, res) => {
  let id = req.params.id;
  let customer = customers.filter(item => item.id == id);
  response.message = 'La consulta fue realizado con éxito.';
  response.success = true;
  response.data = customer[0];
  res.json(response);
});

module.exports = router;