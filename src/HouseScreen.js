import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import LightButton from "./LightButton";
import DoortButton from "./DoorButton";
import CameraButton from "./CameraButton";

const COORDS_LIGHTS = [
  [230, 200],
  [35, 220],
  [15, 340],
  [20, 45],
  [227, 52],
];

const COORDS_DOORS = [
  [250, 290],
  [160, 190],
  [70, 190],
  [190, 340],
];

const CAMERA_COORDS = [310, 0];

export default function HouseScreen({ navigation }) {
  const [lights, setLights] = useState([false, false, false, false, false]);
  const [doors, setDoors] = useState([false, false, false, false]);

  useEffect(() => {
    const id = setInterval(getServerState, 1000);
    return () => clearInterval(id);
  }, []);

  const getServerState = async () => {
    const response = await fetch("http://192.168.1.61:8080/api/getHouseState");
    const json = await response.json();
    // console.log(new Date());
    // console.log(json);
    setDoors([
      !!json["door0"],
      !!json["door1"],
      !!json["door2"],
      !!json["door3"],
    ]);
    setLights([
      !!json["led0"],
      !!json["led1"],
      !!json["led2"],
      !!json["led3"],
      !!json["led4"],
    ]);
  };

  const turnLight = async (idx) => {
    const response = await fetch("http://192.168.1.61:8080/api/setLed", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        led: idx,
      }),
    });
    // console.log(await response.json());
    // console.log(idx);
  };

  const turnAllLights = async (on = true) => {
    const filteredIds = lights
      .map((el, i) => (el !== on ? i : null))
      .filter((el) => el !== null);
    for (let id of filteredIds) {
      const res = await fetch("http://192.168.1.61:8080/api/setLed", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          led: id,
        }),
      });
    }
  };

  const openDoorTest = () => {
    let newDoors = [...doors];
    const newState = newDoors.every((el) => !el);
    newDoors = Array(newDoors.length).fill(newState);
    setDoors(newDoors);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.body}>
        <View style={{ flexDirection: "row" }}>
          <Button
            title="ALL LIGHTS ON"
            onPress={() => turnAllLights(true)}
          ></Button>
          <Button
            title="ALL LIGHTS OFF"
            onPress={() => turnAllLights(false)}
          ></Button>
        </View>
        {/* <Button title="DOORS" onPress={openDoorTest}></Button> */}
        {/* <Button title="Fecth" onPress={getServerState}></Button> */}
        <View style={styles.imageContainer}>
          {COORDS_LIGHTS.map((el, i) => (
            <LightButton
              key={i}
              onPress={() => turnLight(i)}
              coords={el}
              text={i}
              active={lights[i]}
            ></LightButton>
          ))}
          {COORDS_DOORS.map((el, i) => (
            <DoortButton
              key={i}
              text={i}
              coords={el}
              active={!doors[i]}
            ></DoortButton>
          ))}

          <CameraButton
            coords={CAMERA_COORDS}
            onPress={() => navigation.navigate("Camara del patio")}
          ></CameraButton>

          <Image
            style={styles.image}
            source={require("../assets/house.jpeg")}
          ></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 375,
    width: 340,
  },
  imageContainer: {
    backgroundColor: "red",
    position: "relative",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
