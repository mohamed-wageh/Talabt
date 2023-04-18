import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";

import { globalStyles } from "../styles/global";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';






import Loader from "../component/Loader";
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import auth from "../firebase/firebase";
import CustomButton from "../component/CustomButton";
import React from "react";
import COLORS from "../constant/colors";
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import Input from "../component/Input";

const SignUp = ({ navigation }) => {
  const [Email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [Phone, setmobile] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [loading, setLoading] = React.useState(false);

  // const [Phone, setPhone] = useState("");

  const provider = new GoogleAuthProvider();
  const handleRegister = (Email,Password) => {
    
      setLoading(true);
      setTimeout(async () => {
        setLoading(false);
        createUserWithEmailAndPassword(auth, Email, Password)
          .then((userCredential) => {
            const user = userCredential.user;
            window.alert("account created")
            navigation.navigate("Home");
          })
          .catch((error) => {
            window.alert(error.message);
          });
      }, 3000);
      
              // window.alert("account created")
  };
  const handleOnSignInPress = () => {
    navigation.navigate("SignIn");
  };
  const handleSignInWithGoogle = () => {
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        console.log(errorMessage);
        const email = error.customData.email;
        // The AuthCredential type that was used.
        console.log(email);
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(credential);
      });
  };
  const handleSignInWithFacebook = () => {
    console.log("handleSignInWithFacebook");
  };
  const handleForgetPassword = () => {
    navigation.navigate("Forget");
  };
  const SignInvalidattion =yup.object().shape({
    email:yup.string().email('please enter valid email').required('Email address is required'),
    firstName:yup.string().min(2,({min})=> 'Too Short!').max(50,({max})=> 'Too Long!').required('firstName is required') ,
    lastName:yup.string().min(2,({min})=> 'Too Short!').max(50,({max})=> 'Too Long!').required('lastName is required') ,
    password:yup.string().min(6,({min})=> 'password must be at least 6 characters').required('password is required') ,
    confirmpassword: yup.string().min(6,({min})=> 'password must be at least 6 characters').oneOf([ yup.ref('password')],'your password do not match').required('confirmPassword is required') ,
    mobile:yup.string().min(11,({min})=> 'mobile number must be exactly 11 digit').max(11,({max})=> 'mobile number must be exactly 11 digit').matches(/^[0-9]+$/,'mobile number must be only digit') .required('mobile is required') ,
  })
  return (
    <Formik initialValues={{ email: '' ,password:'',confirmpassword:'',firstName:'',lastName:'',mobile:''}}
    validateOnMount={true}
    onSubmit={values => handleRegister(values.email,values.password)}
    validationSchema={SignInvalidattion}
  >
     {({ handleChange, handleBlur, handleSubmit, values,touched,errors,setFieldTouched, isValid }) => (

    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Loader visible={loading} />
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>
        Create An Account
        </Text>
        <Text style={globalStyles.text}>
        Enter Your Details to Register
        </Text>
        
        <View style = {[{flexDirection:"row"},{marginTop:50},{marginBottom:10}]}>
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
            iconName="account-outline"
            placeholder="Enter your first name"
            value={values.firstName}
            onChangeText={handleChange('firstName')}
             // onChangeText={setfirstName}
             onBlur={() => setFieldTouched ('firstName')}
          />
            {touched.firstName&& errors.firstName &&(
          <Text style={styles.errors}>{errors.firstName}</Text>
          )}
           <Input
            iconName="account-outline"
            placeholder="Enter your last name"
            value={values.lastName}
            // onChangeText={setlastName}
            onChangeText={handleChange('lastName')}
            onBlur={() => setFieldTouched ('lastName')}
          />
            {touched.firstName && errors.lastName &&(
          <Text style={styles.errors}>{errors.lastName}</Text>
          )}
           <Input
            iconName="phone-outline"
            placeholder="Enter your phone number"
            value={values.mobile}
            // onChangeText={setmobile}
            onChangeText={handleChange('mobile')}
            onBlur={() => setFieldTouched ('mobile')}
          />
          {touched.mobile && errors.mobile &&(
          <Text style={styles.errors}>{errors.mobile}</Text>
          )}
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
          <Input
           onChangeText={handleChange('confirmpassword')}
           onBlur={handleBlur('confirmpassword')}
           value={values.confirmpassword}
            // onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            // label="Password"
            placeholder="Enter your confirm password"
            // error={errors.password}
            // onChangeText={text => handleOnchange(text, 'password')}
            password
          />
          {(errors.confirmpassword && touched.confirmpassword)&&
          <Text style={styles.errors}>{errors.confirmpassword}</Text>
          }
          
        </View>
        {/* <TouchableOpacity onPress={handleForgetPasswordPress}>
            <Text style={[styles.buttonText2,{right:0}]}>Forget Password ?</Text>
          </TouchableOpacity> */}
          <CustomButton
          disabled={!isValid}
          text={"Create Account"}
          onPress={handleSubmit}
          />
          <TouchableOpacity
          
        onPress={handleSignInWithGoogle}
       
        style= {[styles.button1,{marginTop:20},{flexDirection:"row"},{ borderRadius: 10,},{backgroundColor:'#DB4437'}]}>
        {/* <Icon
          name={"google"}
          style={[{ fontSize: 22},{color:COLORS.blue},{marginLeft:10}]}
        /> */}
       <Text style={[styles.buttonText]} > Continue with Google</Text>
      </TouchableOpacity>
          <TouchableOpacity onPress={handleOnSignInPress}>
            <Text style={[styles.buttonText2,{marginTop:"0%"}]}>
            Already have account ?<Text   style={{ color: COLORS.blue }}>Login</Text>
            </Text>
          </TouchableOpacity>

      </View>
    </SafeAreaView>
    )}
    </Formik>
  );
};
export default SignUp;

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
    height: 65,
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
    fontSize: 20,
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
  // roundButton1: {
  //   width: 50,
  //   height: 50,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: 10,
  //   borderRadius: 100,
  //   backgroundColor: 'white',
  // },
  
});