import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraScreen from "./src/CameraScreen";
import HouseScreen from "./src/HouseScreen";
import LoginScreen from "./src/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Iniciar sesión" component={LoginScreen} />
        <Stack.Screen name="Vista de la casa" component={HouseScreen} />
        <Stack.Screen name="Camara del patio" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
