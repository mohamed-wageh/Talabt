import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Index from './navigation/index'
export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Index />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'white',
  },
});
