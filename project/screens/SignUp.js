import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import auth from '../firebase/firebase';
import React from 'react';
import {
    View,
     Text,
      SafeAreaView,
       Keyboard,
       StyleSheet,
       Button,
       TouchableOpacity,
        Alert, 
    } from 'react-native';
    import Input from '../component/Input';

    const SignUp = ({navigation}) => {
      const [Email, setEmail] = useState("");
      const [FirstName, setFirstName] = useState("");
      const [Password, setPassword] = useState("");
      const [PasswordConfirm, setPasswordConfirm] = useState("");
      // const [Phone, setPhone] = useState("");
      
      const provider = new GoogleAuthProvider();
      const handleRegister = () => {
        if (Password === PasswordConfirm) {
          createUserWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
              const user = userCredential.user;
              window.alert(auth.currentUser.displayName);
              updateProfile(auth.currentUser, {
                displayName: Name,
                phoneNumber:Phone,
              })
                .then(() => {
                  // Profile updated!
                  // ...
                })
                .catch((error) => {
                  window.alert(error.message);
                });
            })
            .catch((error) => {
              window.alert(error.message);
            });
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
      return (
        <SafeAreaView style={{backgroundColor: '#fff' , flex: 1}}>
          <View style={{paddingTop: 50, paddingHorizontal: 20}}>
      <Text style={{color: '#000', fontSize: 30, fontWeight: 'bold'}}>
      Create An Account
      </Text>
      <Text style={{color: '#BABBC3', fontSize: 18, marginVertical: 10, marginHorizontal:15}}>
      Enter Your Details to Register
      </Text>
      <View style={{marginVertical: 55}}>


      <Input
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            value={Email}
            onChangeText={setEmail}
          />
          <Input
                 iconName="account-outline"
                 label="First Name"
                 placeholder="Enter your first name"
                 value={Name}
                 onChangeText={setName}
          />
          
           {/* <Input
                    iconName="phone-outline"
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    value={Phone}
                    onChangeText={setPhone}
          /> */}
          <Input
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
             secureTextEntry={true}
             onChangeText={setPassword}
             Password
          />
 <Input
            iconName="lock-outline"
            label="Password Confirm"
            placeholder="Confirm your password "
             secureTextEntry={true}
             onChangeText={setPasswordConfirm}
             Password
          />

<TouchableOpacity style={styles.button} onPress={handleRegister} >
           <Text style={styles.buttonText}>Sign Up</Text>
         </TouchableOpacity>

          <TouchableOpacity   onPress={handleOnSignInPress}>
          <Text style={styles.buttonText2}>
          Already have account ? Login
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
        width: '100%',
        backgroundColor: '#6c9cf9',
        marginTop:20, marginBottom:20,
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