import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Welcome from './screens/Welcome';
import SignIn from './screens/signin';
export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <SignIn />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'white',
  },
});
