import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import SignUp2 from "../screens/SignUp2";
import Forget from "../screens/forget";
import Profile from "../screens/Profile";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.root}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Welcome"
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp2" component={SignUp2} />
          <Stack.Screen name="Forget" component={Forget} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
});
