import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase";
import React from "react";
import CustomInput from "../component/CustomInput";
import CustomButton from "../component/CustomButton";

const SignIn = ({ navigation }) => {
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordRepeat, setPasswordRepeat] = useState("");
  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, Email, Password, Name)
      .then((userCredential) => {
        const user = userCredential.user;
        window.alert("User account created");
      })
      .catch((error) => {
        window.alert(error.message);
      });
  };
  const handleProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: Name,
    })
      .then(() => {
        const displayName = user.displayName;
        console.log("profile update");
        console.log(displayName);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleOnSignInPress = () => {
    navigation.navigate("SignIn");
  };
  const handleSignInWithGoogle = () => {
    console.log("handleSignInWithGoogle");
  };
  const handleSignInWithFacebook = () => {
    console.log("handleSignInWithFacebook");
  };
  const handleForgetPassword = () => {
    navigation.navigate("Forget");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Create An Account</Text>
        <CustomInput placeholder="Name" value={Name} setValue={setName} />
        <CustomInput placeholder="Email" value={Email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={Password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="PasswordRepeat"
          value={PasswordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />
        <CustomButton text="Register" onPress={handleRegister} />
        <Text style={styles.text}>
          By registration, you confirm that you accept our{" "}
          <Text style={styles.link}>Terms of use</Text> and{" "}
          <Text style={styles.link}>Privacy Policy</Text>{" "}
        </Text>
        <CustomButton
          text="Forget Password?"
          onPress={handleForgetPassword}
          type="Link"
        />
        <CustomButton
          text="Sign In With Facebook"
          onPress={handleSignInWithFacebook}
          bgColor="#3173de"
          txColor="white"
        />
        <CustomButton
          text="Sign In With Google"
          onPress={handleSignInWithGoogle}
          bgColor="#c4402f"
          txColor="white"
        />
        <CustomButton
          text="Have an account? Log In"
          onPress={handleOnSignInPress}
          type="Link"
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 10,
    color: "#3A3967",
  },
  text: {
    fontSize: 15,
    marginTop: 15,
    color: "gray",
  },
  link: {
    color: "#fdb075",
  },
});
export default SignIn;
