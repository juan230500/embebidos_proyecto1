import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const LightButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.box,
        left: props.coords[0],
        top: props.coords[1],
        backgroundColor: props.active
          ? "rgba(0,255,0,0.7)"
          : "rgba(255,0,0,0.7)",
      }}
      onPress={props.onPress}
    >
      <Text>{props.text}</Text>
      <Icon name="lightbulb" size={15} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    backgroundColor: "rgba(0,255,0,0.5)",
    width: 20,
    height: 20,
    zIndex: 100,
    top: 0,
    left: 0,
    borderRadius: 50,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LightButton;
