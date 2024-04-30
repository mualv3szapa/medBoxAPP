import { LogBox } from "react-native";
import Calendar from "../components/Calendar/Calendar";
import { Container } from "../components/Container/Container";
import { Header } from "../components/Header/Header";
import { MedicineCounter } from "../components/MedicineCounter/MedicineCounter";
import { ButtonToCadastrar } from "../components/Button/Button";

LogBox.ignoreAllLogs();

export const Main = ({ navigation }) => {
  return (
    <Container>
      <Header source={require("../assets/logo.png")} />

      <Calendar />

      <MedicineCounter />

      <ButtonToCadastrar
        onPress={() => navigation.navigate("AddMedicine")}
        text={"Cadastrar medicamentos"}
      />
    </Container>
  );
};
