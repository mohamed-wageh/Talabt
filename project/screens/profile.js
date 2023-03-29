import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View ,Image } from 'react-native';
import { useState } from 'react'; 
import profile from '../assets/profile.jpg';
export default function Profile() {
     return (
      <View style={styles.container}>
        <Text style={styles.title}> My Profile </Text>
        <view style={styles.buttonContainer}>
        <Button title="My Orders                 >" style={styles.button}/>
        <Button title="Payment information       >" style={styles.button}/>
        <Button title="Settings                  >" style={styles.button}/>
        </view>
        <Image source={profile} style={styles.image} />

        <StatusBar style="auto" />
      </View>
    );
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'space-between',
    },
    title: {
        fontSize: 30,
        color:'black',
        marginBottom: 20,
        position:'relative',
       // alignContent:'flex-start',
        marginTop:30,
    
      },
      buttonContainer:{
        marginBottom:350,
       justifyContent:'space-between',
        width:'80%',

      },
      button: {
    backgroundColor: 'rgba(46, 46, 57, 0.7)',
    justifyContent:'space-between',
    padding: 10,
    paddingLeft:0,
    borderRadius: 4,
    alignItems:'center',
    width:'30%',
    marginBottom:10,
  },
  image:{
    width:100,
    height:100,
    top:100,
    position:'absolute',
  }

      
});