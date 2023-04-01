import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInPage from './screens/signin';
import HomeScreen from './screens/homescreen';
import SignupPage from './screens/signup';
import Welcome from './screens/Welcome';
import Start from './screens/Start';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Welcome1"
          component={Welcome}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Start1"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignInPage" component={SignInPage} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Start" component={Start} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
