import React, {useState, useEffect} from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from 'react-native';
//import { RadioButton } from 'react-native-paper';
import Input from "../component/Input";
import { Formik, Form, Field } from 'formik';
import {COLOURS, Items} from '../database/Database';



const CheckOut = () => {
  const [product, setProduct] = useState();
  const [total, setTotal] = useState(null);
  const [Count] = useState(1);
  
  const handledone = () => {
    navigation.navigate("Home");
  };
  
  return (
    <SafeAreaView style={{ backgroundColor: "white"}}>
         <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
       
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
              marginBottom: 80,

            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Order Info
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>
                Subtotal
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: COLOURS.black,
                  opacity: 0.8,
                }}>
                ${total}.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 22,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>
                Shipping Tax
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: COLOURS.black,
                  opacity: 0.8,
                }}>
                ${total / 20}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>
                Total
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: COLOURS.black,
                }}>
                ${total + total / 20}
              </Text>
            </View>
          </View>
        
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          height: '8%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
      </View>
      <TouchableOpacity
       style={styles.button} 
       onPress={handledone}>
            <Text style={styles.buttontext}>pay now</Text>
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
