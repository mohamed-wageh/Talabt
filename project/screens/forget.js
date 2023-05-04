import { Alert,useWindowDimensions, SafeAreaView,Button, View, Text,StyleSheet,TextInput,ImageBackground,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { sendPasswordResetEmail } from "firebase/auth";
import { auth ,db} from "../firebase/firebase";
import Input from '../component/Input';
import COLORS from '../constant/colors';
import CustomButton from '../component/CustomButton';
export default function Forget({navigation}){
const[Email,setEmail]=useState('')
const[CheckValidEmail,setCheckValidEmail]=useState(false)
const handleCheckEmail=(Text)=>{
let re = /\S+@\S +\.\S+/;
let regex = re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 setEmail(Text);
 if(re.test(Text)|| regex.test(Text)){
  setCheckValidEmail(false);
 }else{
  setCheckValidEmail(true);
 }
};

const handleOnSignInPress = () => {
  navigation.navigate("SignIn");
};

const handleForgotPassword= () => {
sendPasswordResetEmail(auth, Email)
  .then(() => {
    window.alert("link sent")
    // Password reset email sent!

    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    window.alert("Email doesn't exist")
    // ..
  });
}
return (
  <SafeAreaView style={{backgroundColor: COLORS.white , flex: 1}}>
  <View style={{paddingTop: 50, paddingHorizontal: 20}}>
  <Text style={{color: COLORS.black, fontSize: 35, fontWeight: 'bold', marginVertical: 10}}>
  Forget password!!
  </Text>
  <Text style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
  don't worry sir we'll help you to reset your password
  </Text>
  <View style={{marginVertical: 10}}>
  
  
  
  <Input
  iconName="email-outline"
  
  placeholder="Enter your email address"
  onChangeText={Text => handleCheckEmail(Text)}
  />
  {CheckValidEmail ? (<Text style={styles.Textfailed}>wrong format Email</Text>) : (
  <Text style={styles.Textfailed}> </Text>)}
   <CustomButton text="Send Link" bgColor={COLORS.hex} onPress={handleForgotPassword}/>
   <CustomButton text="Back to Sign in"  type='Link' bgColor={COLORS.white} txColor={COLORS.hex} onPress={handleOnSignInPress}/>
  </View>
  </View>
  </SafeAreaView>
  
  );
  
  
  
  };
  
  
  const styles = StyleSheet.create({
  button: {
    height: 55,
width: '100%',
marginVertical: 30,
justifyContent: 'center',
alignItems: 'center',
    activeOpacity : 0.7 ,
    backgroundColor:'#81d4fa',
    },
        Textfailed:{
      color:'red',
      fontWeight: 'bold',
      fontSize: 15,
        },
      
    buttonText: {
    color:  '#fff',
     fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
            },
            buttonText2: {
              color: '#81d4fa',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 22,
              marginBottom: 50,
              marginTop: 70,          
                                },
  });