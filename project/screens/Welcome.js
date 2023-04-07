import { View, Text ,StyleSheet , TouchableOpacity  , ImageBackground } from 'react-native'
import React from 'react';
import backgroundImage from '../assets/img/back-ground.jpg';
import CustomButton from '../component/CustomButton'


const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <Text style={styles.Text}>Graceful and </Text>
        <Text style={styles.Text}> Stylish</Text>
        <Text style={styles.Text2}>Furniture for</Text>
        <Text style={styles.Text2}> Your Home </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Start")}
            style={styles.Button}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex :1,
    backgroundColor: '#fff' ,
    alignItems : 'center',
    justifyContent : 'center',
    fontSize : 30,
    fontWeight: 'bold',
    },
    Text:{
      color : 'white',
      fontWeight:'bold',
      fontSize:35,
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
    width : 300,
    height : 50,
  },
  buttonText: {
    fontWeight:'bold',
    marginLeft: 80,
    marginBottom:10,
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

export default Welcome

