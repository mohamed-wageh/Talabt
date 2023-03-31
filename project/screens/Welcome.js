import { View, Text,Image,StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import Logo from '../assets/img/logo.jpg'
import CustomButton from "../component/CustomButton";

const Welcome = () => {
  const {height} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.5 }]}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.title}>Make Healthy Life With Fresh Grocery</Text>
        <Text style={styles.text}>
          Get The Best Quality And The Most Delicious Grocery Foods In The
          World,To Get Them All Just Use Our App
        </Text>
      </View>
      <CustomButton/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    height: "100%",
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 500,
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    marginBottom: 10,
    color: "##1e1f26",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: "#3A3967",
  },
});
export default Welcome