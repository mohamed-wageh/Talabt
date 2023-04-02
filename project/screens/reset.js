import { Button, View, Text,StyleSheet,TextInput,ImageBackground} from 'react-native'
import React from 'react'
import testimg from '../assets/6195699.png';

export default function Reset(){
  return (
    <View style={styles.Container}>
      <ImageBackground source={testimg} style={styles.backgroundimage}/>
      <Text style={styles.title}>Enter your code to reset your password</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
        fontSize:15,
        fontWeight:'bold',
        marginBottom:10,
      },
      backgroundimage:{
        width:100,
        height:100,
        bottom:'10%',
          },

    });