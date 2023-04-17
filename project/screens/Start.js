import { View, Text ,StyleSheet , TouchableOpacity  , ImageBackground } from 'react-native'
import React from 'react';
// import backgroundImage from '../assets/N.png';



const Start = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <Text style={styles.Text}>My Team </Text>
        <Text style={styles.Text}>Welcomes </Text>
        <Text style={styles.Text}> To You</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            style={styles.Button}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex :1,
    alignItems : 'center',
    justifyContent : 'center',
    },
    Text:{
      color : '#fff',
      fontWeight:'bold',
      fontSize:45,
      marginLeft:170,
    },
    Text2:{
      fontWeight : 'bold',
      fontSize:30,
      marginLeft:180,
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop : 290,
      width: '100%',
      letterSpacing: 0.25,
      lineHeight: 21,
      paddingVertical: 8,
    },
    Button: {
      backgroundColor: '#f77',
      padding: 10,
      borderRadius: 10,
      flexDirection:'row',
      width : 170,
      height : 50,
    },
    buttonText: {
      fontWeight:'bold',
      marginLeft: 50,
      marginBottom:15,
      fontSize:25,
      textAlign:'center',
    },
  
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: "100%",
    height:"100%",
  },
})

export default Start

