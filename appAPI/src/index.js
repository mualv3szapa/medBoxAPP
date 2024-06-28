const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;
// const ip = "192.168.81.168";
// const ip = "192.168.33.168";
// const ip = "192.168.97.168";
// const ip = "192.168.15.5";
// const ip = "192.168.246.168";
const ip = "10.0.0.102";

app.use(express.json());

const Medicamento = mongoose.model("Medicamento", {
  nome: String,
  primeiraData: {
    type: Date,
    default: Date.now,
  },
  qtdMedicamentoDiario: Number,
  qtdMedicamentoAdd: Number,
  // compartimento: Number,
});

const CompartimentoSchema = new mongoose.Schema({
  medicamentoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Medicamento",
    required: true,
  },
  numeroCompartimento: Number,
});

const Compartimento1 = mongoose.model("Compartimento1", CompartimentoSchema);
const Compartimento2 = mongoose.model("Compartimento2", CompartimentoSchema);
const Compartimento3 = mongoose.model("Compartimento3", CompartimentoSchema);

app.get("/Medicamento", async (req, res) => {
  const medicamento = await Medicamento.find();
  res.send(medicamento);
});

app.post("/Medicamento", async (req, res) => {
  const medicamento = new Medicamento({
    nome: req.body.nome,
    primeiraData: req.body.primeiraData,
    qtdMedicamentoDiario: req.body.qtdMedicamentoDiario,
    qtdMedicamentoAdd: req.body.qtdMedicamentoAdd,
  });

  await medicamento.save();
  return res.send(medicamento);
});

app.delete("/Medicamento/:id", async (req, res) => {
  const medicamento = await Medicamento.findByIdAndDelete(req.params.id);
  return res.send(medicamento);
});
app.get("/Medicamento/:id", async (req, res) => {
  const medicamento = await Medicamento.findById();
  return res.send(medicamento);
});

app.put("/Medicamento/:id", async (req, res) => {
  const medicamento = await Medicamento.findByIdAndUpdate(req.params.id, {
    nome: req.body.nome,
    primeiraData: req.body.primeiraData,
    qtdMedicamentoDiario: req.body.qtdMedicamentoDiario,
    qtdMedicamentoAdd: req.body.qtdMedicamentoAdd,
    compartimento: req.body.compartimento,
  });

  return res.send(medicamento);
});

app.get("/Compartimento1", async (req, res) => {
  const compartimentos = await Compartimento1.find().populate("medicamentoId");
  res.send(compartimentos);
});

app.post("/Compartimento1", async (req, res) => {
  const compartimento = new Compartimento1(req.body);
  await compartimento.save();
  res.send(compartimento);
});

app.delete("/Compartimento1/:id", async (req, res) => {
  const compartimento = await Compartimento1.findByIdAndDelete(req.params.id);
  res.send(compartimento);
});

app.get("/Compartimento1/:id", async (req, res) => {
  const compartimento = await Compartimento1.findById(req.params.id).populate(
    "medicamentoId"
  );
  res.send(compartimento);
});

app.put("/Compartimento1/:id", async (req, res) => {
  const compartimento = await Compartimento1.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.send(compartimento);
});

app.get("/Compartimento2", async (req, res) => {
  const compartimentos = await Compartimento2.find().populate("medicamentoId");
  res.send(compartimentos);
});

app.post("/Compartimento2", async (req, res) => {
  const compartimento = new Compartimento2(req.body);
  await compartimento.save();
  res.send(compartimento);
});

app.delete("/Compartimento2/:id", async (req, res) => {
  const compartimento = await Compartimento2.findByIdAndDelete(req.params.id);
  res.send(compartimento);
});

app.get("/Compartimento2/:id", async (req, res) => {
  const compartimento = await Compartimento2.findById(req.params.id).populate(
    "medicamentoId"
  );
  res.send(compartimento);
});

app.put("/Compartimento2/:id", async (req, res) => {
  const compartimento = await Compartimento2.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.send(compartimento);
});

app.get("/Compartimento3", async (req, res) => {
  const compartimentos = await Compartimento3.find().populate("medicamentoId");
  res.send(compartimentos);
});

app.post("/Compartimento3", async (req, res) => {
  const compartimento = new Compartimento3(req.body);
  await compartimento.save();
  res.send(compartimento);
});

app.delete("/Compartimento3/:id", async (req, res) => {
  const compartimento = await Compartimento3.findByIdAndDelete(req.params.id);
  res.send(compartimento);
});

app.get("/Compartimento3/:id", async (req, res) => {
  const compartimento = await Compartimento3.findById(req.params.id).populate(
    "medicamentoId"
  );
  res.send(compartimento);
});

app.put("/Compartimento3/:id", async (req, res) => {
  const compartimento = await Compartimento3.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.send(compartimento);
});

app.listen(port, ip, () => {
  mongoose.connect(
    "mongodb+srv://murilozapiello:Poikll01@medboxserver.0gbufsi.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log(`App running on http://${ip}:${port}`);
});
