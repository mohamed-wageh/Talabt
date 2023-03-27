import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import db from '../firebase/firebase'

const welcome = () => {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
const handleSubmit = () => {
  setDoc(doc(db, "users", "id"), {
  name:Name,
  age:Age,
  }).then(() =>{
    console.log('done')
  }).catch((error) =>{
    console.log(error)
  });
}
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Crud Operation</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={Name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>age</Text>
          <TextInput
            style={styles.input}
            placeholder="price"
            value={Age}
            onChangeText={setAge}
          />
        </View>
        <Button title="Submit" onPress={handleSubmit} />
        <Text style={styles.counterText}>Name is : </Text>
        <Text style={styles.counterText}>price is : </Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 20,
    margin:10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    width: "80%",
    margin: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    width: "30%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  errorMsg: {
    color: "red",
    marginBottom: 10,
  },
  message: {
    color: "blue",
    marginBottom: 10,
  },
  counterText: {
    marginTop: 20,
    fontSize: 16,
  },
});


export default welcome