import { StyleSheet, SafeAreaView,StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Forget from "../screens/forget";
// import Profile from "../screens/Profile";
import Home from "../screens/home";
import Details from "../screens/detailsScreen";
import COLORS from "../constant/colors";
import tabNavigator from "./tabNavigator";
import EditProfile from "../screens/EditProfile";
import Start from "../screens/Start";
// import Profile from "../screens/profile";
import Test from "../screens/test";



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={tabNavigator} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Forget" component={Forget} />
        {/* <Stack.Screen name="Profile" component={Profile} /> */}
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
});

// import { View, Text, ScrollView,SafeAreaView, StyleSheet } from "react-native";
// import React from 'react'
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import SignIn from "../screens/SignIn";
// import Profile from "../screens/profile";
// import Signup from "../screens/SignUp";
// import Forget from "../screens/forget";
// import Welcome from "../screens/Welcome";
// import Start from "../screens/Start";
// import Test from '../screens/test';
// import { Ionicons } from "@expo/vector-icons";
// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// function HomeTabs() {
//   return (
//     <ScrollView>
//       <Tab.Navigator
//         screenOptions={{
//           tabBarStyle: {
//             margin: 10,
//             borderRadius: 10,
//             backgroundColor: "#f6f7fb",
//           },
//           headerShown: false,
//         }}
//       >
//         <Tab.Screen
//           name="Welcome"
//           component={Welcome}
//           options={{
//             tabBarIcon: ({ color, size, focused }) => (
//               <Ionicons
//                 name={focused ? "home" : "home-outline"}
//                 color={color}
//                 size={size}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="SignIn"
//           component={SignIn}
//           options={{
//             tabBarIcon: ({ color, size, focused }) => (
//               <Ionicons
//                 name={focused ? "person" : "person-outline"}
//                 color={color}
//                 size={size}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Signup"
//           component={Signup}
//           options={{
//             tabBarIcon: ({ color, size, focused }) => (
//               <Ionicons
//                 name={focused ? "person-add" : "person-add-outline"}
//                 color={color}
//                 size={size}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Settings"
//           options={{ tabBarButton: () => null, tabBarVisible: false }}
//         >
//           {() => (
//             <Stack.Navigator>
//               <Stack.Screen name="Forget" component={Forget} />
//             </Stack.Navigator>
//           )}
//         </Tab.Screen>
//       </Tab.Navigator>
//     </ScrollView>
//   );
// }
// const index = () => {
//   return (
//     <SafeAreaView  style={styles.root}>
//       <ScrollView>
//       <NavigationContainer>
//         <Stack.Navigator
//           screenOptions={{ headerShown: true }}
//           initialRouteName="Welcome"
//         >
//           <Stack.Screen name="Home" component={HomeTabs} />
//           <Stack.Screen name="Forget" component={Forget} />
//           <Stack.Screen name="Profile" component={Profile} />
//         </Stack.Navigator>
//         {/* <Tab.Navigator
//         screenOptions={{
//           tabBarStyle: {
//             margin: 10,
//             borderRadius: 10,
//             backgroundColor: "#f6f7fb",

//           },
//           headerShown: false,
//         }}
//       >
//         <Tab.Screen
//           name="Welcome"
//           component={Welcome}
//           options={{
//             tabBarIcon: ({ color, size, focused }) => (
//               <Ionicons
//                 name={focused ? "home" : "home-outline"}
//                 color={color}
//                 size={size}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="SignIn"
//           component={SignIn}
//           options={{
//             tabBarIcon: ({ color, size, focused }) => (
//               <Ionicons
//                 name={focused ? "person" : "person-outline"}
//                 color={color}
//                 size={size}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Signup"
//           component={Signup}
//           options={{
//             tabBarIcon: ({ color, size, focused }) => (
//               <Ionicons
//                 name={focused ? "person-add" : "person-add-outline"}
//                 color={color}
//                 size={size}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Settings"
//           options={{ tabBarButton: () => null, tabBarVisible: false }}
//         >
//           {() => (
//             <Stack.Navigator>
//               <Stack.Screen name="Forget" component={Forget} />
//             </Stack.Navigator>
//           )}
//         </Tab.Screen>
//       </Tab.Navigator> */}
//       </NavigationContainer>
//       </ScrollView>
//     </SafeAreaView>

//   );
// }
// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: "white",
//   },
// });
// export default index
