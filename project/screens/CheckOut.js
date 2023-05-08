import React, {useState, useEffect} from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,StatusBar,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,Dimensions,
    Animated,
    ToastAndroid,
} from 'react-native';
//import { RadioButton } from 'react-native-paper';
import Entypo from "react-native-vector-icons/Entypo";
import Input from "../component/Input";
import { Formik, Form, Field } from 'formik';
import {COLOURS, Items} from '../database/database';
import Ionicons from "react-native-vector-icons/Ionicons";

const CheckOut = ({navigation}) => {

  
  const handledone = () => {
    
    ToastAndroid.show("Items will be Deliverd SOON!", ToastAndroid.SHORT);
    navigation.navigate("Home");
  };
  
  return (
    <SafeAreaView style={{ backgroundColor: "white"}}>
         <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack("Cart")}>
              <Entypo
                name="chevron-left"
                style={{
                  fontSize: 18,
                  color: COLOURS.backgroundDark,
                  padding: 12,
                  backgroundColor: COLOURS.white,
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
        <Text style={styles.title}>Full Your Address  Info : </Text>
        
    <Input
             label="Region"
             />        
    <Input
             label="City"
           />
    <Input

             label="Address"
             />
     <Input
            label="Unit Number"
             />

     <Input
            label="Floor"
             />

    <Text style={styles.title}>Select Your Payment Info : </Text>

    <TextInput  
            value="cash"
          
    />    

    <TextInput  
            value="visa"
    />    

<View
            style={{
              paddingHorizontal: 16,
              marginTop: 40,
              marginBottom: 40,

            }}>
       
        
      </View>
      <TouchableOpacity
       style={styles.button} 
       onPress={handledone}>
            <Text style={styles.buttontext}>Pay Now</Text>
          </TouchableOpacity>
    </View>

</ScrollView>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "flex-start",
    marginLeft:20,
  },
  title: {
    fontSize: 20,
    color: "#6c9cf9",
    marginBottom: 20,
    position: "relative",
    marginTop: 30,
    marginLeft: 10,
    justifyContent:'flex-start',
    alignSelf:'flex-start',
    fontWeight: "bold",
  },
  buttontext: {
    color: "#eee",
  },
  button: {
    backgroundColor: "#6c9cf9",
    padding: 10,
    borderRadius: 8,
    width: "25%",
    textAlign:'center',
    marginBottom: 15,
    alignSelf:'center',
  },

});

export default CheckOut;
