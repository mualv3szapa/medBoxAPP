import { useEffect, useState } from "react";
import { MedCounterList, MedCounterTitle, MedCounterView } from "./Style";
import api from "../../services/api";
import { ButtonCancel } from "../Button/Button";

export const MedicineCounter = () => {
  const [compartimento1, setCompartimento1] = useState(null);
  const [compartimento2, setCompartimento2] = useState(null);
  const [compartimento3, setCompartimento3] = useState(null);

  async function GetCompartimento1() {
    try {
      const promise = await api.get("/Compartimento1");
      setCompartimento1(promise.data);
      console.log(promise.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function GetCompartimento2() {
    try {
      const promise = await api.get("/Compartimento2");
      setCompartimento2(promise.data);
      console.log(promise.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function GetCompartimento3() {
    try {
      const promise = await api.get("/Compartimento3");
      setCompartimento3(promise.data);
      console.log(promise.data);
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

      {compartimento1 != null && (
        <MedCounterList>
          Compartimento {compartimento1[0].numeroCompartimento}:{" "}
          {compartimento1[0].medicamentoId?.nome}
        </MedCounterList>
      )}

      {compartimento2 != null && (
        <MedCounterList>
          Compartimento {compartimento2[0].numeroCompartimento}:{" "}
          {compartimento2[0].medicamentoId?.nome}
        </MedCounterList>
      )}

      {compartimento3 != null && (
        <MedCounterList>
          Compartimento {compartimento3[0].numeroCompartimento}:{" "}
          {compartimento3[0].medicamentoId?.nome}
        </MedCounterList>
      )}
    </MedCounterView>
  );
};
