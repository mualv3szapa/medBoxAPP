import { ButtonTime, ButtonToCadastrar } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { AddMedInput, AddMedTitle } from "./Style";
import { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { DateTimePick, LastDayPick } from "../../components/TimePick/TimePick";
import { Alert } from "react-native";

export const AddMedicine = ({ navigation }) => {
  const [showModalDateTime, setShowModalDateTime] = useState(false);

  const [showModalLastDay, setShowModalLastDay] = useState(false);

  // const [nomeMedicamento, setNomeMedicamento] = useState("");
  // const [numeroCompartimento, setNumeroCompartimento] = useState();
  // const [qtdMedicamento, setQtdMedicamento] = useState();
  // const [ horaEmHora, setHoraEmHora ] = useState();

  // const SendMedicine = () => {
  //   Alert.alert(
  //     `Cadastro efetuado do medicamento ${nomeMedicamento} no compartimento ${numeroCompartimento} contendo ${qtdMedicamento} unidades para tomar de ${horaEmHora} em ${horaEmHora} horas`
  //   );
  //   navigation.navigate("Main");
  // };

  const showDateTimePicker = () => {
    setShowModalDateTime(true);
  };

  const hideDateTimePicker = () => {
    setShowModalDateTime(false);
  };

  const handleConfirmDateTime = (date) => {
    console.warn("A date has been picked: ", date);
    hideDateTimePicker();
  };
  const showLastDatePicker = () => {
    setShowModalLastDay(true);
  };

  const hideLastDatePicker = () => {
    setShowModalDateTime(false);
  };

  const handleConfirmLastDate = (date) => {
    console.warn("A date has been picked: ", date);
    hideDateTimePicker();
  };

  return (
    <Container>
      <AddMedTitle>Cadastro de Medicamento</AddMedTitle>

      <AddMedInput
        placeholder="Nome do medicamento"
        // onChangeText={(x) => setNomeMedicamento(x)}
      />
      <AddMedInput
        keyboardType="numeric"
        placeholder="Compartimento do medicamento"
        // onChangeText={(x) => setNumeroCompartimento(x)}
      />
      <AddMedInput
        keyboardType="numeric"
        placeholder="Quantidade de medicamentos"
        // onChangeText={(x) => setQtdMedicamento}
      />

      <AddMedInput
        keyboardType="numeric"
        placeholder="De quantas em quantas horas?"
        // onChangeText={(x) => setHoraEmHora}
      />

      <ButtonTime
        text={"Selecione o dia e horário do medicamento"}
        onPress={showDateTimePicker}
      />
      <ButtonTime
        text={"Selecione o ultimo dia do medicamento"}
        onPress={showLastDatePicker}
      />

      <ButtonToCadastrar
        onPress={() => navigation.navigate("Main")}
        text={"Cadastrar"}
      />

      <DateTimePick
        isVisible={showModalDateTime}
        mode={"datetime"}
        onConfirm={handleConfirmDateTime}
        onCancel={hideDateTimePicker}
      />

      <LastDayPick
        isVisible={showModalLastDay}
        mode={"date"}
        onConfirm={handleConfirmLastDate}
        onCancel={hideLastDatePicker}
      />
    </Container>
  );
};
