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
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

const SignIn = ({ navigation }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { height } = useWindowDimensions();
  const [inputs, setInputs] = React.useState({email: '', password: ''});
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  // const validate = async () => {
  //   Keyboard.dismiss();
  //   let isValid = true;
  //   if (!inputs.email) {
  //     handleError('Please input email', 'email');
  //     isValid = false;
  //   }
  //   if (!inputs.password) {
  //     handleError('Please input password', 'password');
  //     isValid = false;
  //   }
  //   if (isValid) {
  //     handleSignIn();
  //   }
  // };

  const SignInvalidattion =yup.object().shape({
    email:yup.string().email('please enter valid email').required('Email address is required'),
    password:yup.string().min(6,({min})=> 'password must be  6 characters').required('password is required') 

  })
  const handleSignIn = (Email,Password) => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
    signInWithEmailAndPassword(auth, Email, Password)
      .then(() => {
        navigation.navigate("Home");
        console.log("done")
        
      })
      .catch((error) => {
        window.alert(error.message);
      });

    }, 3000);
  };
  const handleOnSignUpPress = () => {
    navigation.navigate("SignUp");
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
  // const handleOnchange = (text, input) => {
  //   setInputs(prevState => ({...prevState, [input]: text}));
  // };

  // const handleError = (error, input) => {
  //   setErrors(prevState => ({...prevState, [input]: error}));
  // };
  return (
    <Formik
    initialValues={{ email: '' ,password:''}}
    validateOnMount={true}
    onSubmit={values => handleSignIn(values.email,values.password)}
    validationSchema={SignInvalidattion}
  >
     {({ handleChange, handleBlur, handleSubmit, values,touched,errors, isValid }) => (

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
         onChangeText={handleChange('email')}
         onBlur={handleBlur('email')}
         value={values.email}

            // onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            // label="Email"
            placeholder="Enter your email address"
            // error={errors.email}
            // onChangeText={text => handleOnchange(text, 'email')}
          />
          {(errors.email && touched.email)&&
          <Text style={styles.errors}>{errors.email}</Text>
          }
          
          <Input
           onChangeText={handleChange('password')}
           onBlur={handleBlur('password')}
           value={values.password}
            // onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            // label="Password"
            placeholder="Enter your password"
            // error={errors.password}
            // onChangeText={text => handleOnchange(text, 'password')}
            password
          />
          {(errors.password && touched.password)&&
          <Text style={styles.errors}>{errors.password}</Text>
          }
        </View>
          <TouchableOpacity onPress={handleForgetPasswordPress}>
            <Text style={[styles.buttonText2,{right:0}]}>Forget Password ?</Text>
          </TouchableOpacity>
          <CustomButton
          disabled={!isValid}
          text={"Login"}
          onPress={handleSubmit}
          />
          <TouchableOpacity onPress={handleOnSignUpPress}>
            <Text style={[styles.buttonText2,{marginTop:"100%"}]}>
              Don't have account ?<Text   style={{ color: COLORS.blue }}> Register</Text>
            </Text>
          </TouchableOpacity>

      </View>
    </SafeAreaView>
    )}
    </Formik>
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
  errors:{
    color: COLORS.red,
     fontSize: 12,
  },
});

export default SignIn;
