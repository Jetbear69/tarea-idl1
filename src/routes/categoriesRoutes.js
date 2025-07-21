const express = require("express");
const pool = require("../../db.js");
const router = express.Router();

router.post("/", async (req, res) => {
  const { nombre } = req.body;
  const [result] = await pool.execute("INSERT INTO categorias(nombre, fecha_creacion, fecha_actualizacion) VALUES('" + nombre + "', NOW(), NOW());");
  res.status(201).json({"message": "Se creo el registro", data: req.body});
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  const [result] = await pool.execute("UPDATE categorias SET nombre = ?, fecha_actualizacion = NOW() WHERE id = ?;", [nombre, id]);
  
  if(result.affectedRows === 0) {
    res.status(404).json({"message": "Se no ha sido encontrado", data: null});
  } else {
    res.status(200).json({"message": "Se actualizo el registro", data: req.body});
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.execute("DELETE FROM categorias WHERE id = ?;", [id]);
  if(result.affectedRows === 0) {
    res.status(404).json({"message": "Se no ha sido encontrado", data: null});
  } else {
    res.status(200).json({"message": "Se elimino el registro", data: null});
  }
});

router.get("/", async (req, res) => {
  let sql = "select * from categorias;";
  const [resultado] = await pool.query(sql);
  res.json(resultado);
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let sql = "select * from categorias WHERE id = " + id + ";";
  const [resultado] = await pool.query(sql);
  res.json(resultado[0]);
});

module.exports = router;