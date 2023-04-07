import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";
import Profile from "../screens/profile";
import Signup from "../screens/SignUp";
import Forget from "../screens/forget";
import Welcome from "../screens/Welcome";
import Start from "../screens/Start";
import Test from '../screens/test';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Test"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default index