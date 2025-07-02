const express = require("express");

const router = express.Router();

//GET /api/products => Listar productos
router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
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