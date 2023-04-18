import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

const CustomButton = ({ onPress, text, type = "Button", bgColor, txColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        View
        style={[
          styles.text,
          styles[`text_${type}`],
          txColor ? { color: txColor } : {},
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    marginVertical: 10,
    alignItems: "center",
    top: 20,
    borderRadius: 10,
    borderColor: "#6c9cf9",
    borderWidth: 3,
  },
  container_Button: {
    backgroundColor: "#6c9cf9",
  },
  container_Link: {},
  text: {
    color: "white",
    fontSize: 20,
    fontFamily: "Nunito-Bold",
  },
  text_Link: {
    color: "#3a3967",
    fontSize: 15,
  },
});
export default CustomButton;
