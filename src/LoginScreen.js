import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const check = () => {
    if (user === "admin" && password === "casa123") {
      alert("Contraseña correcta");
      navigation.navigate("Vista de la casa");
    } else {
      alert("Contraseña o usuario incorrecto");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Ingrese con su usuario y contraseña</Text>
          <TextInput
            value={user}
            onChangeText={(txt) => setUser(txt)}
            style={styles.inputBox}
            placeholder="Nombre de usuario"
          />
          <TextInput
            value={password}
            onChangeText={(txt) => setPassword(txt)}
            secureTextEntry
            style={styles.inputBox}
            placeholder="Contraseña"
          />
          <Button title="Ingresar" onPress={() => check()}></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  debugBlock: {
    padding: 8,
    backgroundColor: "red",
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "#eee",
    minHeight: 400,
    width: 280,
    padding: 16,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    marginBottom: 24,
  },
  inputBox: {
    marginVertical: 16,
    height: 40,
    fontSize: 24,
    borderWidth: 1,
    textAlign: "center",
  },
});
