import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, Image } from "react-native";

export default function CameraScreen({ navigation }) {
  const [image, setImage] = useState();

  const getImage = async () => {
    const response = await fetch("http://192.168.1.61:8080/api/getPhoto");
    const json = await response.json();
    console.log(json);
    console.log("OK");
    setImage("data:image/png;base64," + json.image);
  };

  return (
    <View style={styles.container}>
      <Button title="TOMAR FOTO" onPress={getImage}></Button>
      {image && (
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        ></Image>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 352,
    height: 288,
  },
});
