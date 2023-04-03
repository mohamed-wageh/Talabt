import { View,
  Text,
   SafeAreaView,
    Keyboard,
    StyleSheet,
    Button,
    TouchableOpacity, } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import Input from './Input';

const SignIn = () => {
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
/>
<Input
iconName="lock-outline"
label="Password"
placeholder="Enter your password"
password
/>



<TouchableOpacity style={styles.button} >
<Text style={styles.buttonText}>Sign In</Text>
</TouchableOpacity>

{/* <Button title="Log In"  /> */}

<Text style={styles.buttonText2}>
Don't have account ? Register
</Text>
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
                    },
});

export default SignIn;
