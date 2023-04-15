import { View, Text } from 'react-native'
import React from 'react';
import Index from './navigation';
import { useFonts } from "expo-font";

function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-Regular": require("./assets/font/Nunito-Regular.ttf"),
    "Nunito-Bold": require("./assets/font/Nunito-Bold.ttf"),
  });
  return (
    <Index/>
  );
}

export default App;
