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

const CameraButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.box,
        left: props.coords[0],
        top: props.coords[1],
      }}
      onPress={props.onPress}
    >
      {/* <Text>{props.text}</Text> */}
      <Icon name="camera" size={25} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    backgroundColor: "rgba(255,255,0,1)",
    width: 35,
    height: 35,
    zIndex: 100,
    top: 0,
    left: 0,
    borderRadius: 50,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CameraButton;
