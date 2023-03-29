import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react'; 
export default function Profile() {
     return (
      <View style={styles.container}>
        <Text style={styles.title}> My Profile </Text>
        <Button title="My Orders                 >" style={styles.button}/>
        <Button title="Payment information     >" style={styles.button}/>
        <Button title="Settings                  >" style={styles.button}/>

        <StatusBar style="auto" />
      </View>
    );
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
       alignItems: 'center',
      // justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        color:'black',
        marginBottom: 20,
        position:'relative',
        alignContent:'flex-start',
    
      },
      button: {
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 4,
        alignItems:'flex-start',
        width:'fitContent',
        marginBottom:10,
      },

      
});