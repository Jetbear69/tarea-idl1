const express = require("express");
const pool = require("../../db.js");
const router = express.Router();

router.post("/", async (req, res) => {
  const { id_categoria, nombre, precio, cantidad } = req.body;
  const [result] = await pool.execute("INSERT INTO productos(id_categoria, nombre, precio, cantidad, fecha_creacion, fecha_actualizacion) VALUES(?, ?, ?, ?, NOW(), NOW());", [id_categoria, nombre, precio, cantidad]);
  res.status(201).json({"message": "Se creo el registro", data: req.body});
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { id_categoria, nombre, precio, cantidad } = req.body;
  const [result] = await pool.execute("UPDATE productos SET id_categoria = ?, nombre = ?, precio = ?, cantidad = ?, fecha_actualizacion = NOW() WHERE id = ?;", [id_categoria, nombre, precio, cantidad, id]);
  
  if(result.affectedRows === 0) {
    res.status(404).json({"message": "Se no ha sido encontrado", data: null});
  } else {
    res.status(200).json({"message": "Se actualizo el registro", data: req.body});
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.execute("DELETE FROM productos WHERE id = ?;", [id]);
  if(result.affectedRows === 0) {
    res.status(404).json({"message": "Se no ha sido encontrado", data: null});
  } else {
    res.status(200).json({"message": "Se elimino el registro", data: null});
  }
});

router.get("/", async (req, res) => {
  let sql = "select * from productos;";
  const [resultado] = await pool.query(sql);
  res.json(resultado);
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let sql = "select * from productos WHERE id = " + id + ";";
  const [resultado] = await pool.query(sql);
  res.json(resultado[0]);
});

module.exports = router;