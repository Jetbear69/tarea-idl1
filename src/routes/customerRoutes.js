const express = require("express");

const router = express.Router();

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