const express = require("express");
const router = express.Router();

let categories = [
  { id: 1, categoryId: 0, name: 'Categoría DGALA', description: 'Categoría DGALA', linkImage: '', indLevel: 0, indStatus: true },
  { id: 2, categoryId: 1, name: 'Aretes', description: 'Aretes', linkImage: 'categories/aretes.png', indLevel: 1, indStatus: true },
  { id: 3, categoryId: 1, name: 'Candongas', description: 'Candongas', linkImage: 'categories/candongas.png', indLevel: 1, indStatus: true },
  { id: 4, categoryId: 1, name: 'Dijes', description: 'Dijes', linkImage: 'categories/dijes.png', indLevel: 1, indStatus: true },
  { id: 5, categoryId: 1, name: 'Pulseras', description: 'Pulseras', linkImage: 'categories/pulseras.png', indLevel: 1, indStatus: true },
  { id: 6, categoryId: 1, name: 'Cadenas', description: 'Cadenas', linkImage: 'categories/cadenas.png', indLevel: 1, indStatus: true },
];

let correlative = categories.length;

let response = { message: '', success: true, data: null };

//POST /api/categories => Crear una Categoría
router.post("/", (req, res) => {
  correlative++;
  let id = correlative;
  let categoryId = req.body.categoryId;
  let name = req.body.name;
  let description = req.body.description;
  let linkImage = req.body.linkImage;
  let indLevel = req.body.indLevel;
  let indStatus = req.body.indStatus;
  let category = { id: correlative, categoryId: categoryId, name: name, description: description, linkImage: linkImage, indLevel: indLevel, indStatus: indStatus };
  categories.push(category);
  response.message = 'El registro fue creado con éxito.';
  response.success = true;
  response.data = category;
  res.json(response);
});

//PUT /api/categories/:id => Actualizar una Categoría
router.put("/:id", (req, res) => {
  let id = req.params.id;
  let category = null;
  for(let i = 0; i < categories.length; i++) {
    if(categories[i].id == id) {
      categories[i].categoryId = req.body.categoryId;
      categories[i].name = req.body.name;
      categories[i].description = req.body.description;
      categories[i].linkImage = req.body.linkImage;
      categories[i].indLevel = req.body.indLevel;
      categories[i].indStatus = req.body.indStatus;
      category = categories[i];
      break;
    }
  }
  response.message = 'El registro fue actualizado con éxito.';
  response.success = true;
  response.data = category;
  res.json(response);
});

//DELETE /api/categories/:id => Eliminar una Categoría
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  let category = categories.filter(item => item.id == id);
  for(let i = 0; i < categories.length; i++) {
    if(categories[i].id == id) {
      categories.splice(i, 1);    
      break;
    }
  }
  response.message = 'El registro fue eliminado con éxito.';
  response.success = true;
  response.data = category;
  res.json(response);
});

//GET /api/categorues => Listar Categorías
router.get("/", (req, res) => {
  response.message = 'La consulta fue realizado con éxito.';
  response.success = true;
  response.data = categories;
  res.json(response);
});

//GET /api/categories/:id => Filtrar Categoría por ID
router.get("/:id", (req, res) => {
  let id = req.params.id;
  let category = categories.filter(item => item.id == id);
  response.message = 'La consulta fue realizado con éxito.';
  response.success = true;
  response.data = category[0];
  res.json(response);
});

module.exports = router;