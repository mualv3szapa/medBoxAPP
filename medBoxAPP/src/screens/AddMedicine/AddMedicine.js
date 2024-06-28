import {
  ButtonCadastrarMedicamento,
  ButtonCancel,
  ButtonTime,
  ButtonToCadastrar,
} from "../../components/Button/Button";
import {
  Container,
  ContainerScroll,
} from "../../components/Container/Container";
import { AddMedInput, AddMedInputView, AddMedTitle } from "./Style";
import { useEffect, useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { DateTimePick, LastDayPick } from "../../components/TimePick/TimePick";
import { Alert } from "react-native";
import api from "../../services/api";

export const AddMedicine = ({ navigation }) => {
  const [showModalDateTime, setShowModalDateTime] = useState(false);
  const [medicamentoId, setMedicamentoId] = useState("");
  const [compartimentoId, setCompartimentoId] = useState("");
  const [nomeMedicamento, setNomeMedicamento] = useState("");
  const [numeroCompartimento, setNumeroCompartimento] = useState();
  const [dateTime, setDateTime] = useState("");
  const [qtdMedicamentoAdd, setQtdMedicamentoAdd] = useState();
  const [qtdMedicamentoDiario, setQtdMedicamentoDiario] = useState();

  async function PostMedicamento() {
    try {
      await api.post("/Medicamento", {
        _id: medicamentoId,
        nome: nomeMedicamento,
        primeiraData: dateTime,
        qtdMedicamentoAdd: qtdMedicamentoAdd,
        qtdMedicamentoDiario: qtdMedicamentoDiario,
      });

      await api.post(`/Compartimento${numeroCompartimento}`, {
        _id: compartimentoId,
        medicamentoId: medicamentoId,
        numeroCompartimento: numeroCompartimento,
      });

      navigation.replace("Main");
    } catch (error) {
      console.error(error);
    }
  }

  const showDateTimePicker = () => {
    setShowModalDateTime(true);
  };

  const hideDateTimePicker = () => {
    setShowModalDateTime(false);
  };

  const handleConfirmDateTime = (date) => {
    console.warn("A date has been picked: ", date);
    setDateTime(date);
    hideDateTimePicker();
  };

  return (
    <Container>
      <AddMedTitle>Cadastro de Medicamento</AddMedTitle>

      <AddMedInput
        placeholder="Nome do medicamento"
        onChangeText={(x) => setNomeMedicamento(x)}
        fieldValue={nomeMedicamento}
      />

      <AddMedInput
        keyboardType="numeric"
        placeholder="Compartimento"
        onChangeText={(x) => setNumeroCompartimento(x)}
        fieldValue={numeroCompartimento}
      />

      <AddMedInput
        keyboardType="numeric"
        placeholder="Quantidade de medicamentos adicionados"
        onChangeText={(x) => setQtdMedicamentoAdd(x)}
        fieldValue={qtdMedicamentoAdd}
      />

      <AddMedInput
        keyboardType="numeric"
        placeholder="Dosagem que irá tomar (ex: 2 pilulas)"
        onChangeText={(x) => setQtdMedicamentoDiario(x)}
        fieldValue={qtdMedicamentoDiario}
      />

      <ButtonTime
        text={
          dateTime == ""
            ? "Selecione a data e a hora que irá começar a tomar o remédio"
            : `${dateTime}`
        }
        onPress={showDateTimePicker}
      />

      <ButtonCadastrarMedicamento
        onPress={() => PostMedicamento()}
        text={"Cadastrar"}
      />

      <DateTimePick
        isVisible={showModalDateTime}
        mode={"datetime"}
        onConfirm={handleConfirmDateTime}
        onCancel={hideDateTimePicker}
      />

      <ButtonCancel
        onPress={() => navigation.navigate("Main")}
        text={"cancelar"}
      />
    </Container>
  );
};
