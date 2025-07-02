const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {
  res.send("Index de General Routes");
});

router.get("/acerca_de", (req, res) => {
  res.send("Acerca de mi sitio web");
});

module.exports = router;