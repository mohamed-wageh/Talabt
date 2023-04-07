import {  Button, View, Text,StyleSheet,TextInput,ImageBackground,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import testimg from '../assets/img/download.jpg';
import { sendPasswordResetEmail } from "firebase/auth";
import auth from '../firebase/firebase';
export default function Forget({navigation}){
const[Email,setEmail]=useState('')

const handleSignIn = () => {
    
      navigation.navigate("SignIn");
}
const handleForgotPassword= () => {
sendPasswordResetEmail(auth, Email)
  .then(() => {
    console.log("password sent")
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Email doesn't Exist")
    // ..
  });
}
  return (
    <View style={styles.Container}>
      <ImageBackground source={testimg} style={styles.backgroundimage}/>
      <Text style={styles.title}>Enter your email below and we'll help you to reset your password</Text>
      <TextInput style={styles.input}
      placeholder='   E-mail'
      value={Email}
      onChangeText={setEmail}
      />
  <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
            <Text style={styles.buttonText}>Send Link</Text>          
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Back to Sign in</Text>
                  
          </TouchableOpacity>
          
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
width:'90%',
height:50,
margin:10,
borderWidth:2,
borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    marginTop: 50,
    width:'40%',
    borderwidth: 5,
    alignItems: 'center',
  },
  
  buttonText: {
    color: 'cyan',
    fontWeight: 'bold',
  },
  backgroundimage:{
width:200,
height:200,
bottom:'5%',
  },
  title:{
    fontSize:12,
    fontWeight:'bold',
    marginBottom:10,
    color:'rgba(0,0,0,0.5)',
  },
});