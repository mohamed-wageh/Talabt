// import { View, Text, TextInput } from 'react-native'
// import React from 'react'
// import { StyleSheet } from 'react-native'


// const SignUp = () => {
//   return (
//     <View>
//       <Text style={styles.title}>Register</Text>
//       <Text style={styles.text}>Enter Your Details to Register</Text>
//         <Text>Email</Text>
//         <TextInput style= {styles.input} placeholder= "Email"/>  
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   title: { fontSize: 30, fontWeight: 'bold', marginTop: 15, marginBottom: 5, marginRight:10w},
//   text: { fontSize: 15, color: '#BABBC3' }

// })

// export default SignUp


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
    import Input from './Input';

    const SignUp = ({navigation}) => {
       
      return (
        <SafeAreaView style={{backgroundColor: '#fff' , flex: 1}}>
          <View style={{paddingTop: 50, paddingHorizontal: 20}}>
      <Text style={{color: '#000', fontSize: 40, fontWeight: 'bold'}}>
      Register
      </Text>
      <Text style={{color: '#BABBC3', fontSize: 18, marginVertical: 10}}>
      Enter Your Details to Register
      </Text>
      <View style={{marginVertical: 80}}>


      <Input
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
          />
          <Input
                 iconName="account-outline"
                 label="Full Name"
                 placeholder="Enter your full name"
          />
           <Input
                    iconName="phone-outline"
                    label="Phone Number"
                    placeholder="Enter your phone no"
          />
          <Input
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
             secureTextEntry={true}
          />


<TouchableOpacity style={styles.button} >
           <Text style={styles.buttonText}>Sign In</Text>
         </TouchableOpacity>

          {/* <Button title="Log In"  /> */}

          <Text style={styles.buttonText2}>
          Already have account ? Login
          </Text>
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