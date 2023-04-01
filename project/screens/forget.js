import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import CustomInput from "../component/CustomInput";
import CustomButton from "../component/CustomButton";
import Logo from "../assets/img/email.jpg";
import auth from "../firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const Forget = ({ navigation }) => {
  const [Email, setEmail] = useState("");
  const { height } = useWindowDimensions();
  const handleOnSignInPress = () => {
    navigation.navigate("SignIn");
  };
  const handleForgetPassword = () => {
    sendPasswordResetEmail(auth, Email)
      .then(() => {
        window.alert("Password reset email sent!");
      })
      .catch((error) => {
        window.alert(error.massage);
      });
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <Text style={styles.title}>FORGET PASSWORD?</Text>
        <Text style={styles.text}>
          Don't worry! Enter your email below and we'll email you with
          instruction on how to reset your password
        </Text>
        <CustomInput placeholder="email" value={Email} setValue={setEmail} />
        <CustomButton
          text="Send Verification Link"
          onPress={handleForgetPassword}
        />
        <CustomButton
          text="Back to Sign in"
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
  logo: {
    width: "70%",
    // maxWidth: 300,
    // maxHeight: 500,
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
export default Forget;
