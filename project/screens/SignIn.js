import { useState } from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Image,
  ScrollView
} from "react-native";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import React from 'react'
import auth from "../firebase/firebase";
import CustomInput from '../component/CustomInput';
import CustomButton from '../component/CustomButton';
import Logo from '../assets/img/logo.jpg'

const SignIn = ({ navigation }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { height } = useWindowDimensions();
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, Email, Password)
      .then(() => {
        navigation.navigate("Profile");
      })
      .catch((error) => {
        window.alert(error.message);
      });
  };
  const handleOnSignUpPress = () => {
    navigation.navigate("SignUp2");
  };
  const handleSignInWithGoogle = () => {
    window.alert("handleSignInWithGoogle");
  };
  const handleSignInWithFacebook = () => {
    window.alert("handleSignInWithFacebook");
  };
  const handleForgetPasswordPress = () => {
    navigation.navigate("Forget");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <CustomInput placeholder="email" value={Email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={Password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton text="Sign In" onPress={handleSignIn} />
        <CustomButton
          text="Forget Password?"
          onPress={handleForgetPasswordPress}
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
          text="Don't have an account? Create one"
          onPress={handleOnSignUpPress}
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
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 500,
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    marginBottom: 10,
    color: "##1e1f26",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: "#3A3967",
  },
});
export default SignIn