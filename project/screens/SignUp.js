import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signUpWithPopup,
} from "firebase/auth";
import Loader from "../component/Loader";
import { collection, addDoc, doc, setDoc } from "firebase/firestore"; 
import { auth ,db} from "../firebase/firebase";
import React from "react";
import { globalStyles } from "../styles/global";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
  DatePickerIOS,
} from "react-native";
import Input from "../component/Input";
import CustomButton from "../component/CustomButton";


    const SignUp = ({navigation}) => {
      const [Email, setEmail] = useState("");
      const [FirstName, setFirstName] = useState("");
      const [LastName, setLastName] = useState("");
      const [Password, setPassword] = useState("");
      const [Phone, setPhone] = useState("");
      const [PasswordConfirm, setPasswordConfirm] = useState("");
      const [loading, setLoading] = React.useState(false);

      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      const provider = new GoogleAuthProvider();
      // signInWithPopup(auth, provider)
      // .then((result) => {
      //   // This gives you a Google Access Token. You can use it to access the Google API.
      //   const credential = GoogleAuthProvider.credentialFromResult(result);
      //   const token = credential.accessToken;
      //   // The signed-in user info.
      //   const user = result.user;
      //   // IdP data available using getAdditionalUserInfo(result)
      //   // ...
      // }).catch((error) => {
      //   // Handle Errors here.
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   // The email of the user's account used.
      //   const email = error.customData.email;
      //   // The AuthCredential type that was used.
      //   const credential = GoogleAuthProvider.credentialFromError(error);
      //   // ...
      // });
    


      const handleRegister = () => {
        if (Password === PasswordConfirm) {
          createUserWithEmailAndPassword(auth, Email, Password)
        } else {
          window.alert("Not Same Password");
        }
        
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


      function registerUser() {
        if (Email === "" || Password === "") {
          alert("Email or password or username is empty");
        } else if (!emailPattern.test(Email)) {
          alert("Please use a real email");
        }
        else if (Password !== PasswordConfirm) {
          alert("Passwords doesn't match");
        }
        else {
          
            handleRegister();
          
        }
      }

      return (
        <SafeAreaView style={{backgroundColor: '#fff' , flex: 1}}>
                <Loader visible={loading} />

          <View style={{paddingTop: 50, paddingHorizontal: 20}}>
      {/* <Text style={{color: '#000', fontSize: 30, fontWeight: 'bold'}}>
      Create An Account
      </Text>
      <Text style={{color: '#BABBC3', fontSize: 18, marginVertical: 10, marginHorizontal:15}}>
      Enter Your Details to Register
      </Text> */}
      <Text style={[globalStyles.title,{marginLeft:60}]}>
      Create An Account
      </Text>
        <Text style={[globalStyles.text,{marginLeft:90}]}>
        Enter Your Details to Register
        </Text>
      <View style = {[{flexDirection:"row"},{marginTop:50},{marginBottom:15},{marginLeft:100}]}>
          <Icon name="sofa-single" size={32} color={COLORS.blue} style={{marginTop:5}} />
          <Text style={[globalStyles.title,{marginHorizontal:10}]}>Cabinup</Text>
        </View>
        <View style={{width:"100%"}}>

      <Input
            iconName="email-outline"
            placeholder="Enter your email address"
            value={Email}
            onChangeText={setEmail}
          />
          <Input
                 iconName="account-outline"
                 placeholder="Enter your first name"
                 value={FirstName}
                 onChangeText={setFirstName}
          />
           <Input
                 iconName="account-outline"
                 placeholder="Enter your last name"
                 value={LastName}
                 onChangeText={setLastName}
          />

          <Input
            iconName="phone-outline"
            placeholder="Enter your phone number"
            value={Phone}
            onChangeText={setPhone}
          />
          <Input
            iconName="lock-outline"
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={setPassword}
            Password
          />
          <Input
            iconName="lock-outline"
            placeholder="Confirm your password "
            secureTextEntry={true}
            onChangeText={setPasswordConfirm}
            Password
          />

{/* <TouchableOpacity style={styles.button} onPress={handleRegister} >
           <Text style={styles.buttonText}>Sign Up</Text>
         </TouchableOpacity> */}

         <CustomButton    
         text={"Create Account"}
         onPress={registerUser}

        //  onPress={() => registerUser()}
         />

         {/* <Icon
          name={google}
          style={{color: COLORS.darkBlue, fontSize: 22, marginRight: 10}}
        /> */}
          {/* <TouchableOpacity   onPress={handleOnSignInPress}>
          <Text style={styles.buttonText2}>
          Already have account ? Login
          </Text>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={handleOnSignInPress}>
            <Text style={[styles.buttonText2,{marginTop:"30%"}]}>
            Already have account ? <Text   style={{ color: COLORS.blue }}> Login</Text>
            </Text>
          </TouchableOpacity>
          </View>
          </View>
          </SafeAreaView>

        );

    };
    export default SignUp;


const styles = StyleSheet.create({
  button: {
    height: 55,
    width: "100%",
    backgroundColor: "#6c9cf9",
    marginTop: 20,
    marginBottom: 20,
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
  },
});
