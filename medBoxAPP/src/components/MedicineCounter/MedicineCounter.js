import { useEffect, useState } from "react";
import { MedCounterList, MedCounterTitle, MedCounterView } from "./Style";
import api from "../../services/api";
import { ButtonCancel } from "../Button/Button";

export const MedicineCounter = () => {
  const [compartimento1, setCompartimento1] = useState({});
  const [compartimento2, setCompartimento2] = useState({});
  const [compartimento3, setCompartimento3] = useState({});

  async function GetCompartimento1() {
    try {
      const promise = await api.get("/Compartimento1");
      setCompartimento1(promise.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function GetCompartimento2() {
    try {
      const promise = await api.get("/Compartimento2");
      setCompartimento2(promise.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function GetCompartimento3() {
    try {
      const promise = await api.get("/Compartimento3");
      setCompartimento3(promise.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetCompartimento1();
    GetCompartimento2();
    GetCompartimento3();
  }, []);

  return (
    <MedCounterView>
      <MedCounterTitle>Medicamentos para tomar hoje</MedCounterTitle>

      {compartimento1 && (
        <MedCounterList>
          Compartimento {compartimento1.numeroCompartimento}:{" "}
          {compartimento1.medicamentoId?.nome} restantes:{" "}
          {compartimento1.medicamentoId?.qtdMedicamentoAdd}
        </MedCounterList>
      )}

      {compartimento2 && (
        <MedCounterList>
          Compartimento {compartimento2.numeroCompartimento}:{" "}
          {compartimento2.medicamentoId?.nome} restantes:{" "}
          {compartimento2.medicamentoId?.qtdMedicamentoAdd}
        </MedCounterList>
      )}

      {compartimento3 && (
        <MedCounterList>
          Compartimento {compartimento3.numeroCompartimento}:{" "}
          {compartimento3.medicamentoId?.nome} restantes:{" "}
          {compartimento3.medicamentoId?.qtdMedicamentoAdd}
        </MedCounterList>
      )}
    </MedCounterView>
  );
};
