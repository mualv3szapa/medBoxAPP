import { LogBox } from "react-native";
import Calendar from "../components/Calendar/Calendar";
import { Container, ContainerScroll } from "../components/Container/Container";
import { Header } from "../components/Header/Header";
import { MedicineCounter } from "../components/MedicineCounter/MedicineCounter";
import { ButtonCancel, ButtonToCadastrar } from "../components/Button/Button";

LogBox.ignoreAllLogs();

export const Main = ({ navigation }) => {
  return (
    <Container>
      <Header source={require("../assets/logo.png")} />

      <ContainerScroll>
        <Calendar />

        <MedicineCounter />

        <ButtonToCadastrar
          onPress={() => navigation.navigate("AddMedicine")}
          text={"Cadastrar medicamentos"}
        />

        
      </ContainerScroll>
    </Container>
  );
};
