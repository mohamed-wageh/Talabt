import { StyleSheet, SafeAreaView,StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Forget from "../screens/forget";
import Profile from "../screens/profile";
import Home from "../screens/home";
import Details from "../screens/detailsScreen";
import MyCart from "../screens/MyCart";
import COLORS from "../constant/colors";
import tabNavigator from "./tabNavigator";
import EditProfile from "../screens/EditProfile";
import Start from "../screens/Start";
import CheckOut from"../screens/CheckOut"
import Test from "../screens/test";
import SplashScreen from "../screens/SplashScreen";




export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={tabNavigator} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="CheckOut" component={CheckOut} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
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

