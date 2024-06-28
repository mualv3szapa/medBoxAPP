import { LogBox } from "react-native";
import Calendar from "../components/Calendar/Calendar";
import { Container, ContainerScroll } from "../components/Container/Container";
import { Header } from "../components/Header/Header";
import { MedicineCounter } from "../components/MedicineCounter/MedicineCounter";
import { ButtonCancel, ButtonToCadastrar } from "../components/Button/Button";
import { useEffect, useState } from "react";
import api from "../services/api";

LogBox.ignoreAllLogs();

export const Main = ({ navigation }) => {
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
    <Container>
      <Header source={require("../assets/logo.png")} />

      <ContainerScroll>
        <Calendar />

        {compartimento1 == null &&
        compartimento2 == null &&
        compartimento3 == null ? (
          <></>
        ) : (
          <MedicineCounter />
        )}

        <ButtonToCadastrar
          onPress={() => navigation.navigate("AddMedicine")}
          text={"Cadastrar medicamentos"}
        />
      </ContainerScroll>
    </Container>
  );
};
