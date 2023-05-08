import * as React from "react";
import { View, Text, ImageBackground , useWindowDimensions, Image , StyleSheet } from 'react-native'
import backGround from "../assets/img/splash1.jpg";
import { globalStyles } from "../styles/global";
import COLORS from "../constant/colors";
const SplashScreen =  ({ navigation }) => {
    setTimeout(() => {
        navigation.replace("Welcome");
    },3000);
    const { height , width } = useWindowDimensions();
  return (
    // <ImageBackground style={{flex: 1}} source={require('../assets/img/back-ground.jpg')} />
  //   <Image
  //   source={backGround}
  //   style={[globalStyles.logo , {marginTop:"50%"}, {backgroundColor:COLORS.darkBlue},
  //        { height: height *0.4 }, { width : width * 1.0 }
  //   ]}
  //   resizeMode="stretch"
  // />

<View style={styles.centered}>
  <Text style={[
  globalStyles.title,
  { fontSize: 55, },]}>modern home</Text>
  <Text style={[
  globalStyles.title,
  { fontSize: 33, },
 
]}>F U R N I T U R E</Text>
</View>
     
  )
}


export default SplashScreen
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.light,
  },
 
});