import React from 'react';
import { Button, View, Text,StyleSheet,TextInput } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <Text>Home Screen</Text>
    <View style={styles.buttonContainer}>
      <Button
        title="Go to Sign in"
        onPress={() => navigation.navigate('SignInPage')}
        style={styles.button}
      />
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate('SignupPage')}
        style={styles.button}
      />
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    top:100,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    width: '30%',
    alignItems: 'center',
  },
});