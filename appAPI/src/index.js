const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

mongoose.connect(
  "mongodb+srv://murilozapiello:Poikll01@medboxserver.0gbufsi.mongodb.net/?retryWrites=true&w=majority"
);

const Medicamento = mongoose.model("Medicamento", {
  id: Number,
  nome: String,
  primeiraData: {
    type: Date,
    default: Date.now,
  },
  segundaData: {
    type: Date,
    default: Date.now,
  },
  qtdMedicamentoAdd: Number,
  compartimento: Number,
});

app.get("/", (req, res) => {
  res.send("Hello word");
});

app.post("/", async (req, res) => {
  const medicamento = new Medicamento({
    id: req.body.id,
    nome: req.body.nome,
    primeiraData: req.body.primeiraData,
    segundaData: req.body.segundaData,
    qtdMedicamentoAdd: req.body.qtdMedicamentoAdd,
    compartimento: req.body.compartimento,
  });

  await medicamento.save();
  res.send(medicamento);
});

app.listen(port, () => {
  console.log("App running");
});
