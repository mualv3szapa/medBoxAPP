import { ListComponent } from "./List/List";
import { MedCounterList, MedCounterTitle, MedCounterView } from "./Style";

const Medicamentos = [
  {
    id: 1,
    nome: "Dipirona",
    quantidade: 4,
    compartimento: 1,
  },
  {
    id: 2,
    nome: "Tramal",
    quantidade: 2,
    compartimento: 2,
  },
  {
    id: 3,
    nome: "Cloridrato de ciclobenzaprina",
    quantidade: 1,
    compartimento: 3,
  },
];

export const MedicineCounter = () => {
  return (
    <MedCounterView>
      <MedCounterTitle>Medicamentos para tomar hoje</MedCounterTitle>

      <ListComponent
        data={Medicamentos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MedCounterList>
            Compartimento {item.compartimento}: {item.nome} restantes: {item.quantidade}
          </MedCounterList>
        )}
      />
    </MedCounterView>
  );
};
