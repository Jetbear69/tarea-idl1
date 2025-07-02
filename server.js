const express = require("express");
const app = express();
const officegen = require("officegen");
const PDFDocument = require("pdfkit");
const bodyParser = require("body-parser");

const generalRoutes = require("./src/routes/generalRoutes");
const productsRoutes = require("./src/routes/productsRoutes");
const customersRoutes = require("./src/routes/customersRoutes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

const fnHealth = (req, res) => {
  res.send("<h1>OK</h1> <strong>funciona!</strong>");
}

app.get("/health", fnHealth);

app.get("/status", (req, res) => {
  res.json(
    {
      "id": 12,
      "status": "Registrado"
    }
  );
});

app.get("/formato", (req, res) => {
  let xml = "<respuesta><id>34</id><estado>Registrado</estado></respuesta>".trim();
  res.set("Content-Type", "application/xml");
  res.send(xml);
});

app.get("/informe_word", (req, res) => {
  let docx = officegen({type: 'docx'});
  docx.on('finalize', function(written){
    console.log("Finished creating DOCX file");
  });
  docx.on('error', function(err){
    console.log(err);
  });
  let pObj = docx.createP();
  pObj.addText("Documento Word para el Curso de Desarrollo de Sistemas de Información");
  res.setHeader('Content-Disposition', 'attachment; filename="josehugo_saraviachavez.docx"');
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
  docx.generate(res);
});

app.get("/informe_excel", (req, res) => {
  let xlsx = officegen({type: 'xlsx'});
  xlsx.on('finalize', function(written){
    console.log("Finished creating XLSX file");
  });
  xlsx.on('error', function(err){
    console.log(err);
  });
  let sheet = xlsx.makeNewSheet();
  sheet.name = 'JSARAVIA';
  sheet.setCell('B2', 'Curso');
  sheet.setCell('B3', 'Docente');
  sheet.setCell('B4', 'Alumno');
  sheet.setCell('C2', 'Desarrollo de Sistemas de Información');
  sheet.setCell('C3', 'Ray Leonardo Rojas Enciso');
  sheet.setCell('C4', 'José Hugo Saravia Chávez');
  res.setHeader('Content-Disposition', 'attachment; filename="josehugo_saraviachavez.xlsx"');
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
  xlsx.generate(res);
});

app.get("/informe_pdf", (req, res) => {
  const doc = new PDFDocument();
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="josehugo_saraviachavez.pdf"');
  doc.pipe(res);
  doc.fontSize(25).text('Desarrollo de Sistemas de Información', 100, 100);
  doc.text('Inbcreible pero el Al Hilal eliminó al poderoso Manchester City', {align: 'center'});
  doc.end();
});

app.use("/general", generalRoutes);
// http://google.com/general
// http://google.com/general/acerca_de
// http://google.com/general/nosotros
// http://google.com/general/contacto
app.use("/api/products", productsRoutes);
app.use("/api/customers", customersRoutes);

// GET /api/categories => listar
// POST /api/categories => crear
// PUT /api/categories => editar
// DELETE /api/categories => eliminar
// GET /api/categories/filter => filtrar

// GET /api/users => listar
// POST /api/users => crear
// PUT /api/users => editar
// DELETE /api/users => eliminar
// GET /api/users/filter => filtrar

app.listen(process.env.PORT, () => {
  console.log("El proyecto Express funciona!");
});
