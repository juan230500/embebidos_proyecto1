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

const DoortButton = (props) => {
  return (
    <View
      style={{
        ...styles.box,
        left: props.coords[0],
        top: props.coords[1],
        backgroundColor: "rgba(0,100,255,0.7)",
      }}
    >
      {/* <Text>{props.text}</Text> */}
      {props.active ? (
        <Icon name="door-open" size={15} color="black" />
      ) : (
        <Icon name="door-closed" size={15} color="black" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    backgroundColor: "rgba(0,200,0,0.5)",
    width: 25,
    height: 25,
    zIndex: 100,
    top: 0,
    left: 0,
    borderRadius: 50,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DoortButton;
