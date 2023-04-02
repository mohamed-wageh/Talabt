import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInPage from './screens/signin';
import HomeScreen from './screens/HomeScreen';
import SignupPage from './screens/signup';
import Forget from './screens/forget';
import Reset from './screens/Reset';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignInPage" component={SignInPage} />
        <Stack.Screen name="Welcome" component={Welcome} />

  );
}

export default App;
