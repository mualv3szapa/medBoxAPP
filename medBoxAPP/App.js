import { NavigationContainer } from "@react-navigation/native";
import { Main } from "./src/screens/Main";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
  useFonts,
} from "@expo-google-fonts/quicksand";
import { AddMedicine } from "./src/screens/AddMedicine/AddMedicine";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddMedicine"
          component={AddMedicine}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
