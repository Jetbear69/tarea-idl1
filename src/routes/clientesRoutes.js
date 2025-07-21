const express = require("express");
const pool = require("../../db.js");
const router = express.Router();

//POST /api/clientes => Crear un Cliente
router.post("/", async (req, res) => {
  const { rut_sin, nombre, direccion, ciudad, numero_telefono} = req.body;
  const [result] = await pool.execute("INSERT INTO clientes(rut_sin, nombre, direccion, ciudad, numero_telefono, created_at) VALUES(?, ?, ?, ?, ?, NOW());", [rut_sin, nombre, direccion, ciudad, numero_telefono]);
  res.status(201).json({"message": "Se creo el registro", data: req.body});
});

//PUT /api/clientes/:id => Actualizar un Cliente
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { rut_sin, nombre, direccion, ciudad, numero_telefono} = req.body;
  const [result] = await pool.execute("UPDATE clientes SET rut_sin = ?, nombre = ?, direccion = ?, ciudad = ?, numero_telefono = ?, updated_at = NOW() WHERE codigo_interno = ?;", [rut_sin, nombre, direccion, ciudad, numero_telefono, id]);
  
  if(result.affectedRows === 0) {
    res.status(404).json({"message": "Se no ha sido encontrado", data: null});
  } else {
    res.status(200).json({"message": "Se actualizo el registro", data: req.body});
  }
});

//DELETE /api/clientes/:id => Eliminar un Cliente
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.execute("DELETE FROM clientes WHERE codigo_interno = ?;", [id]);
  if(result.affectedRows === 0) {
    res.status(404).json({"message": "Se no ha sido encontrado", data: null});
  } else {
    res.status(200).json({"message": "Se elimino el registro", data: null});
  }
});

//GET /api/clientes => Listar Clientes
router.get("/", async (req, res) => {
  let sql = "select * from clientes;";
  const [resultado] = await pool.query(sql);
  res.json(resultado);
});

//GET /api/clientes/:id => Filtrar Cliente por ID
router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let sql = "select * from clientes WHERE codigo_interno = " + id + ";";
  const [resultado] = await pool.query(sql);
  res.json(resultado[0]);
});

module.exports = router;