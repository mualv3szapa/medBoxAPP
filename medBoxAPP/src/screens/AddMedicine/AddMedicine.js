import { ButtonTime, ButtonToCadastrar } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { AddMedInput, AddMedTitle } from "./Style";
import { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { TimePick } from "../../components/TimePick/TimePick";

export const AddMedicine = ({ navigation }) => {
  const [showModalTime, setShowModalTime] = useState(false);

  const [showModalDay, setShowModalDay] = useState(false);

  const showTimePicker = () => {
    setShowModalTime(true);

    console.log(showModalDay);
  };

  const hideTimePicker = () => {
    setShowModalTime(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideTimePicker();
  };

  return (
    <Container>
      <AddMedTitle>Cadastro de Medicamento</AddMedTitle>

      <AddMedInput placeholder="Nome do medicamento" />
      <AddMedInput
        keyboardType="numeric"
        placeholder="Quantidade de medicamentos"
      />
      <AddMedInput
        keyboardType="numeric"
        placeholder="Quantos dias irá tomar o remédio"
      />
      <AddMedInput
        keyboardType="numeric"
        placeholder="De quantas em quantas horas?"
      />

      <ButtonTime
        text={"Selecione o dia e horário do medicamento"}
        onPress={showTimePicker}
      />

      <ButtonToCadastrar
        onPress={() => navigation.navigate("Main")}
        text={"Cadastrar"}
      />

      <TimePick
        isVisible={showModalTime}
        mode={"datetime"}
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
      />
    </Container>
  );
};
