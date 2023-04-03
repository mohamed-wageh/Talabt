import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInPage from './screens/SignIn';
import HomeScreen from './screens/homescreen';
import SignupPage from './screens/signup';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInPage"   screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}

        />
        <Stack.Screen name="SignInPage" component={SignInPage}  />
        {/* <Stack.Screen name="Welcome" component={Welcome} /> */}

       </Stack.Navigator>
        </NavigationContainer>
  );
}

export default App;
