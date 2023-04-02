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
      <Stack.Navigator initialRouteName="Forget">
        <Stack.Screen name="Home" component={HomeScreen} options = {{ headerShown:false}}/>
        <Stack.Screen name="Reset" component={Reset} options = {{ title:"Reset Password"}}/>
        <Stack.Screen name="Forget" component={Forget} options = {{ title:"Forget Password"}}/>
        <Stack.Screen name="SignInPage" component={SignInPage} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
