const express = require("express");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.use(express.json());

// app.use(bodyParser.json());

const Medicamento = mongoose.model("Medicamento", {
  nome: String,
  primeiraData: {
    type: Date,
    default: Date.now,
  },
  segundaData: {
    type: Date,
    default: Date.now,
  },
  qtdMedicamentoDiario: Number,
  qtdMedicamentoAdd: Number,
  compartimento: Number,
});

app.get("/", async (req, res) => {
  const medicamento = await Medicamento.find();

  res.send(medicamento);
});

app.post("/", async (req, res) => {
  const medicamento = new Medicamento({
    nome: req.body.nome,
    primeiraData: req.body.primeiraData,
    segundaData: req.body.segundaData,
    qtdMedicamentoDiario: req.body.qtdMedicamentoDiario,
    qtdMedicamentoAdd: req.body.qtdMedicamentoAdd,
    compartimento: req.body.compartimento,
  });

  await medicamento.save();
  return res.send(medicamento);
});

app.delete("/:id", async (req, res) => {
  const medicamento = await Medicamento.findByIdAndDelete(req.params.id);
  return res.send(medicamento);
});

app.put("/:id", async (req, res) => {
  const medicamento = await Medicamento.findByIdAndUpdate(req.params.id, {
    nome: req.body.nome,
    primeiraData: req.body.primeiraData,
    segundaData: req.body.segundaData,
    qtdMedicamentoDiario: req.body.qtdMedicamentoDiario,
    qtdMedicamentoAdd: req.body.qtdMedicamentoAdd,
    compartimento: req.body.compartimento,
  });

  return res.send(medicamento);
});

app.listen(port, () => {
  mongoose.connect(
    "mongodb+srv://murilozapiello:Poikll01@medboxserver.0gbufsi.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("App running");
});
