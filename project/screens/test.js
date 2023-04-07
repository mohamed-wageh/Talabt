import {
  View,
  Text,
  useWindowDimensions,
  Image,
} from "react-native";
import React from 'react'
import backGround from '../assets/img/back-ground.jpg'
import CustomButton from "../component/CustomButton";
import { globalStyles } from "../styles/global";
const Test = ({ navigation }) => {
  const { height } = useWindowDimensions();
  return (
    <View style={globalStyles.main}>
      <Image
        source={backGround}
        style={[globalStyles.logo, { height: height * 0.4 }]}
        resizeMode="stretch"
      />
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Cabinup</Text>
        <Text style={globalStyles.title}>Furniture Store</Text>
        <Text style={globalStyles.text}>
          Build your dream home and make it minimalistic & modern with our
          unique and high quality Furniture
        </Text>
        <CustomButton
          text="LOGIN TO YOUR ACCOUNT"
          onPress={() => navigation.navigate("SignIn")}
        />
        <CustomButton
          text="CREATE AN ACCOUNT"
          bgColor={"#fff"}
          txColor={"#6c9cf9"}
          onPress={() => navigation.navigate("Signup")}
        />
      </View>
    </View>
  );
};

export default Test