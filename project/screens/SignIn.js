import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  StyleSheet,
  Button,
  useWindowDimensions,
  TouchableOpacity,
  Alert, 
} from "react-native";

import React from "react";
import { TextInput } from "react-native";
import auth from "../firebase/firebase";
import Input from "../component/Input";
import COLORS from "../constant/colors";
import { globalStyles } from "../styles/global";
import Loader from '../component/Loader';
import {AsyncStorage} from 'react-native';
import CustomButton from "../component/CustomButton";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { signInWithEmailAndPassword } from "firebase/auth";


const SignIn = ({ navigation }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { height } = useWindowDimensions();
  const [inputs, setInputs] = React.useState({email: '', password: ''});
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      handleSignIn();
    }
  };

  const handleSignIn = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
    signInWithEmailAndPassword(auth, Email, Password)
      .then(() => {
        navigation.navigate("Profile");
        
      })
      .catch((error) => {
        window.alert(error.message);
      });

    }, 3000);
  };
  const handleOnSignUpPress = () => {
    navigation.navigate("Signup");
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
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Loader visible={loading} />
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>
          Welcome Back
        </Text>
        <Text style={globalStyles.text}>
          Login to your account
        </Text>
        <View style = {[{flexDirection:"row"},{marginTop:150},{marginBottom:10}]}>
          <Icon name="sofa-single" size={32} color={COLORS.blue} style={{marginTop:5}} />
          <Text style={[globalStyles.title,{marginHorizontal:10}]}>Cabinup</Text>
        </View>
        <View style={{width:"100%"}}>
        <Input
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            // label="Email"
            placeholder="Enter your email address"
            error={errors.email}
            onChangeText={setEmail}
          />
          <Input
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            // label="Password"
            placeholder="Enter your password"
            error={errors.password}
            onChangeText={setPassword}
            password
          />
        </View>
          <TouchableOpacity onPress={handleForgetPasswordPress}>
            <Text style={[styles.buttonText2,{right:0}]}>Forget Password ?</Text>
          </TouchableOpacity>
          <CustomButton text={"Login"} onPress={validate}/>
          <TouchableOpacity onPress={handleOnSignUpPress}>
            <Text style={[styles.buttonText2,{marginTop:"100%"}]}>
              Don't have account ?<Text   style={{ color: COLORS.blue }}> Register</Text>
            </Text>
          </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 55,
    width: "100%",
    backgroundColor: "#B57EDC",
    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    activeOpacity: 0.7,
  },
  button1: {
    height: 55,
    width: "100%",
    backgroundColor: "#458ae7",
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    activeOpacity: 0.7,
  },
  button2: {
    height: 55,
    width: "100%",
    backgroundColor: "#DB4437",
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    activeOpacity: 0.7,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  buttonText2: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    marginBottom: 15,
    marginTop: 15,
  },
});

export default SignIn;
