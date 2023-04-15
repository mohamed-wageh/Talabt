import { useState } from 'react';
import { View,
  Text,
   SafeAreaView,
    Keyboard,
    StyleSheet,
    Button,
    useWindowDimensions,
    TouchableOpacity, } from "react-native";
   import {
      signInWithEmailAndPassword,
    } from "firebase/auth";  
import React from "react";
import { TextInput } from "react-native";
import auth from '../firebase/firebase';
import Input from '../component/Input';

const SignIn = ({ navigation }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { height } = useWindowDimensions();
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, Email, Password)
      .then(() => {
        navigation.navigate("Profile");
        console.log(auth.currentUser.displayName)
        console.log(auth.currentUser.email)
        console.log(auth.currentUser.phoneNumber)
      })
      .catch((error) => {
        window.alert(error.message);
      });
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
  return (
<SafeAreaView style={{backgroundColor: '#fff' , flex: 1}}>
<View style={{paddingTop: 50, paddingHorizontal: 20}}>
<Text style={{color: '#000', fontSize: 40, fontWeight: 'bold'}}>
Log In
</Text>
<Text style={{color: '#BABBC3', fontSize: 18, marginVertical: 10}}>
Enter Your Details to Login
</Text>
<View style={{marginVertical: 80}}>



<Input
iconName="email-outline"
label="Email"
placeholder="Enter your email address"
onChangeText={setEmail}
/>
<Input

iconName="lock-outline"
label="Password"
placeholder="Enter your password"
Password
onChangeText={setPassword}
/>


<TouchableOpacity style={styles.button} onPress={handleSignIn} >
<Text style={styles.buttonText}>Sign In</Text>
</TouchableOpacity>

<TouchableOpacity        
 onPress={handleForgetPasswordPress}>
<Text style={styles.buttonText2}>
Forget Password ?
</Text>
</TouchableOpacity>

<TouchableOpacity 
style={styles.button1} 
onPress={handleSignInWithFacebook}>
<Text style={styles.buttonText}>Sign In With Facebook</Text>
</TouchableOpacity>

<TouchableOpacity 
style={styles.button2} 
onPress={handleSignInWithGoogle}>
<Text style={styles.buttonText}>Sign In With Google</Text>
</TouchableOpacity>

<TouchableOpacity        
onPress={handleOnSignUpPress}>
<Text style={styles.buttonText2}>
Don't have account ? Register
</Text>
</TouchableOpacity>
</View>
</View>
</SafeAreaView>

);



};


const styles = StyleSheet.create({
button: {
height: 55,
width: '100%',
backgroundColor: '#B57EDC',
marginVertical: 30,
justifyContent: 'center',
alignItems: 'center',
    activeOpacity : 0.7 ,
  },
  button1: {
    height: 55,
    width: '100%',
    backgroundColor: '#458ae7',
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
        activeOpacity : 0.7 ,
      },
      button2: {
        height: 55,
        width: '100%',
        backgroundColor: '#DB4437',
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
            activeOpacity : 0.7 ,
          },
  buttonText: {
  color:  '#fff',
   fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
          },
  buttonText2: {
  color: '#000',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: 16,
  marginBottom: 20,
  marginTop: 20,
                    },
});

export default SignIn;
