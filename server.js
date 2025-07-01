const express = require("express");
const app = express();
const officegen = require("officegen");
const PDFDocument = require("pdfkit");
const path = require("path");


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
  pObj.addText("This document was generated on the fly!");
  res.setHeader('Content-Disposition', 'attachment; filename="generated_document_docx"');
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
  sheet.name = 'Officegen Excel';
  sheet.setCell('E7', 42);
  sheet.setCell('I1', -3);
  sheet.setCell('I2', 3.1415922653589);
  sheet.setCell('G102', 'Hello World!');
  res.setHeader('Content-Disposition', 'attachment; filename="generated_document_xlsx"');
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
  xlsx.generate(res);
});

app.get("/informe_pdf", (req, res) => {
  const doc = new PDFDocument();
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="generated_document_pdf"');
  doc.pipe(res);
  doc.fontSize(25).text('Hello from PDFKIT!', 100, 100);
  doc.text('This is a dynamically generated PDF.', {align: 'center'});
  doc.end();
});

app.listen(process.env.PORT, () => {
  console.log("El proyecto Express funciona!");
});
