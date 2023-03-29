import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInPage from './screens/SignIn';
import HomeScreen from './screens/HomeScreen';
import SignupPage from './screens/SignUp';
import Profile from './screens/Profile';


const Stack = createNativeStackNavigator();

function App() {
  return (
<NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Home" component={HomeScreen} options = {{ headerShown:false}}/>
        <Stack.Screen name="SignInPage" component={SignInPage} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
