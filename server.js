const express = require("express");
const app = express();
const officegen = require("officegen");
const PDFDocument = require("pdfkit");

const generalRoutes = require("./src/routes/generalRoutes");
const productsRoutes = require("./src/routes/productsRoutes");
const customersRoutes = require("./src/routes/customersRoutes");
const categoriesRoutes = require("./src/routes/categoriesRoutes");
const usersRoutes = require("./src/routes/usersRoutes");

const clientesRoutes = require("./src/routes/clientesRoutes");

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

const fnHealth = (req, res) => {
  res.send("<h1>OK</h1> <strong>funciona bien el API!</strong>");
}

app.get("/health", fnHealth);

app.get("/status", (req, res) => {
  res.json({ "id": 12, "status": "Registrado" });
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
  res.setHeader('Content-Disposition', 'attachment; filename="erick_huamanmoriano.docx"');
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
  sheet.name = 'EHUAMAN';
  sheet.setCell('B2', 'Curso');
  sheet.setCell('B3', 'Docente');
  sheet.setCell('B4', 'Alumno');
  sheet.setCell('C2', 'Desarrollo de Sistemas de Información');
  sheet.setCell('C3', 'Ray Leonardo Rojas Enciso');
  sheet.setCell('C4', 'Erick Huamán Moriano');
  res.setHeader('Content-Disposition', 'attachment; filename="erick_huamanmoriano.xlsx"');
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
  xlsx.generate(res);
});

app.get("/informe_pdf", (req, res) => {
  const doc = new PDFDocument();
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="erick_huamanmoriano.pdf"');
  doc.pipe(res);
  doc.fontSize(25).text('Desarrollo de Sistemas de Información', 100, 100);
  doc.text('Real Madrid pasa a Semifinales del Mundial de Clubes', {align: 'center'});
  doc.end();
});

app.use("/general", generalRoutes);
// http://google.com/general
// http://google.com/general/acerca_de
// http://google.com/general/nosotros
// http://google.com/general/contacto
app.use("/api/products", productsRoutes);//APIs para el CRUD de Productos
app.use("/api/customers", customersRoutes);//APIs para el CRUD de Clientes
app.use("/api/categories", categoriesRoutes);//APIs para el CRUD de Categorías
app.use("/api/users", usersRoutes);//APIs para el CRUD de Usuarios
app.use("/api/clientes", clientesRoutes);//API para el CRUD de Clientes que está en la base de datos MySQL

app.listen(port, () => {
  console.log("El proyecto Express funciona!");
});
