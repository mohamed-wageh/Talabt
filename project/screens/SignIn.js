import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut  } from 'firebase/auth';
import auth from '../firebase/firebase';
import backgroundImage from '../assets/test.jpg';

export default function SignInPage({navigation}) {
  const [isSignedIn, setIsSignedIn] =useState(false);
  const [email, setEmail] =useState('');
  const [password, setPassword] = useState('');
  const [message, setMsg] = useState('');
  const [errorMsg, seterrorMsg] = useState('');
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth,email, password)
      .then(() => {
        setIsSignedIn(true);
        navigation.navigate("Welcome");
      })
    .catch((error) => {
      seterrorMsg(error.message);
});
  };


  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth,email, password)
      .then(() => {
        setMsg('User account created');
      })
    .catch((error) => {
      seterrorMsg(error.message);
});
  };

  const handleSignOut = () => {
    signOut (auth)
      .then(() => {
        setIsSignedIn(false);
        setMsg('signOut Done');
      })
    .catch((error) => {
      seterrorMsg(error.message);
});
  
    setCounter2(counter2 + 1);
  };

  const handleForgotPassword = () => {
    navigation.navigate('Password');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sign In / Sign Up</Text>
        </View>
      </ImageBackground>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
        {message ? <Text style={styles.message}>{message}</Text> : <Text style={styles.errorMsg}>{errorMsg}</Text>}
        <View style={styles.buttonContainer}>
        {isSignedIn === true ? 
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        }
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
            <Text style={styles.buttonText}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.counterText}>Sign in attempts: {counter}</Text>
        <Text style={styles.counterText}>Sign up attempts: {counter2}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    marginBottom:80,
  },
  titleContainer: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    width: '80%',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    width: '30%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  errorMsg: {
    color: 'red',
    marginBottom: 10,
  },
  message: {
    color: 'blue',
    marginBottom: 10,
  },
  counterText: {
    marginTop: 20,
    fontSize: 16,
  },
});
