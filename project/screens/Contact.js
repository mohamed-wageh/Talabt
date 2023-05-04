import { TextInput,View, Text, useWindowDimensions, Image } from "react-native";
import React from "react";
import backGround from "../assets/meme.jpg";
import CustomButton from "../component/CustomButton";
import { useState } from "react";
import Input from '../component/Input';
import COLORS from '../constant/colors';
import { globalStyles } from "../styles/global";
const Contact = () => {
    const[Email,setEmail]=useState('')
const[CheckValidEmail,setCheckValidEmail]=useState(false)
const handleCheckEmail=(Text)=>{
let re = /\S+@\S +\.\S+/;
let regex = re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 setEmail(Text);
 if(re.test(Text)|| regex.test(Text)){
  setCheckValidEmail(false);
 }else{
  setCheckValidEmail(true);
 }
};

  const { height } = useWindowDimensions();
  return (
    <View style={globalStyles.main}>
      <Image
        source={backGround}
        style={[globalStyles.logo, { height: height * 0.4 }]}
        resizeMode="stretch"
      />
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Contact Us</Text>
        <Text style={globalStyles.text}>
          we will help you to solve your problem
        </Text>
        <Input
  iconName="email-outline"
  placeholder="Enter your email address"
  style={{txColor:COLORS.light}}
  onChangeText={Text => handleCheckEmail(Text)}
  />

   <TextInput
   multiline={true}
   numberOfLines={4}
   style={{height: 60,
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.9,
    borderRadius:10}}
  placeholder="Enter your problem"
  />
  {CheckValidEmail ? (<Text style={globalStyles.Textfailed} txColor={COLORS.red}>invild Email</Text>) : (
  <Text style={globalStyles.Textfailed}></Text>)}
   <CustomButton text="Send Problem" bgColor={COLORS.hex} />
      </View>
    </View>
  );
};

export default Contact;
