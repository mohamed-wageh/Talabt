import { View, Text, StyleSheet,Pressable,TouchableOpacity } from "react-native";
import React from 'react'

const CustomButton = ({ onPress, text, type = "Button" ,bgColor , txColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container,
      styles[`container_${type}`],
      bgColor ? {backgroundColor: bgColor} :{},
      ]}
    >
      <Text View style={[
        styles.text,
        styles[`text_${type}`],
        txColor ? {color: txColor} : {},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    top: 20,
  },
  container_Button: {
    backgroundColor: "#3a3967",
  },
  container_Link: {},
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
  },
  text_Link: {
    color: "#3a3967",
    fontSize: 15,
  },
});
export default CustomButton