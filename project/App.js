import React from 'react';
import Index from './navigation';
function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-Regular": require("./assets/font/Nunito-Regular.ttf"),
    "Nunito-Bold": require("./assets/font/Nunito-Bold.ttf"),
  });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUpPage"   screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={SignUpPage}

        />
        <Stack.Screen name="SignUpPage" component={SignUpPage}  />
        {/* <Stack.Screen name="Welcome" component={Welcome} /> */}

       </Stack.Navigator>
        </NavigationContainer>
  );
}

export default App;