import { View, Text, TextInput, StyleSheet } from "react-native";
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={setValue}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    width: "100%",
    height:50,
    borderColor: "#e8e8e8",
    borderWidth: 2,
    borderRadius: 999,
    paddingHorizontal: 10,
    marginVertical:5,
  },
  input: {
  height:'100%',
  fontSize:20,
  },
});
export default CustomInput