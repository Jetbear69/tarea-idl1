const express = require("express");
const router = express.Router();

let users = [
  { id: 1, roleId: 1, name: 'admin', email: 'admin@dgala.com.pe', access: '123456', indStatus: true },
  { id: 2, roleId: 2, name: 'operador', email: 'operador@dgala.com.pe', access: '123456', indStatus: true }
];

let correlative = users.length;

let response = { message: '', success: true, data: null };

//POST /api/users => Crear un Usuario
router.post("/", (req, res) => {
  correlative++;
  let id = correlative;
  let roleId = req.body.roleId;
  let name = req.body.name;
  let email = req.body.email;
  let access = req.body.access;
  let indStatus = req.body.indStatus;
  let user = { id: id, roleId: roleId, name: name, email: email, access: access, indStatus: indStatus };
  users.push(user);
  response.message = 'El registro fue creado con éxito.';
  response.success = true;
  response.data = user;
  res.json(response);
});

//PUT /api/users/:id => Actualizar un Usuario
router.put("/:id", (req, res) => {
  let id = req.params.id;
  let user = null;
  for(let i = 0; i < users.length; i++) {
    if(users[i].id == id) {
      users[i].roleId = req.body.roleId;
      users[i].name = req.body.name;
      users[i].email = req.body.email;
      users[i].access = req.body.access;
      users[i].indStatus = req.body.indStatus;
      user = users[i];
      break;
    }
  }
  response.message = 'El registro fue actualizado con éxito.';
  response.success = true;
  response.data = user;
  res.json(response);
});

//DELETE /api/users/:id => Eliminar un Usuario
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  let user = users.filter(item => item.id == id);
  for(let i = 0; i < users.length; i++) {
    if(users[i].id == id) {
      users.splice(i, 1);    
      break;
    }
  }
  response.message = 'El registro fue eliminado con éxito.';
  response.success = true;
  response.data = user;
  res.json(response);
});

//GET /api/users => Listar Usuarios
router.get("/", (req, res) => {
  response.message = 'La consulta fue realizado con éxito.';
  response.success = true;
  response.data = users;
  res.json(response);
});

//GET /api/users/:id => Filtrar Usuario por ID
router.get("/:id", (req, res) => {
  let id = req.params.id;
  let user = users.filter(item => item.id == id);
  response.message = 'La consulta fue realizado con éxito.';
  response.success = true;
  response.data = user[0];
  res.json(response);
});

module.exports = router;