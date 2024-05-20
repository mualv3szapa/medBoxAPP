import { useEffect, useState } from "react";
import { ListComponent } from "./List/List";
import { MedCounterList, MedCounterTitle, MedCounterView } from "./Style";
import api from "../../services/api";

// const Medicamentos = [
//   {
//     id: 1,
//     nome: "Dipirona",
//     quantidade: 4,
//     compartimento: 1,
//   },
//   {
//     id: 2,
//     nome: "Tramal",
//     quantidade: 2,
//     compartimento: 2,
//   },
//   {
//     id: 3,
//     nome: "Cloridrato de ciclobenzaprina",
//     quantidade: 1,
//     compartimento: 3,
//   },
// ];

export const MedicineCounter = () => {
  const [medicamentos, setMedicamentos] = useState([]);

  async function GetMedicamentos() {
    try {
      const promise = await api.get("/Medicamento");

      setMedicamentos(promise.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetMedicamentos();
  }, []);

  return (
    <MedCounterView>
      <MedCounterTitle>Medicamentos para tomar hoje</MedCounterTitle>

      <ListComponent
        data={medicamentos}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MedCounterList>
            Compartimento {item.compartimento}: {item.nome} restantes:{" "}
            {item.qtdMedicamentoAdd}
          </MedCounterList>
        )}
      />
    </MedCounterView>
  );
};
