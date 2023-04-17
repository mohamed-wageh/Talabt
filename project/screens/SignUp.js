import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import Loader from "../component/Loader";
import { collection, addDoc, doc, setDoc } from "firebase/firestore"; 
import { auth ,db} from "../firebase/firebase";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
  DatePickerIOS,
} from "react-native";
import Input from "../component/Input";

const SignUp = ({ navigation }) => {
  const [Email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = React.useState(false);

  // const [Phone, setPhone] = useState("");

  const provider = new GoogleAuthProvider();
  const handleRegister = () => {
    if (Password === PasswordConfirm) {
      setLoading(true);
      setTimeout(async () => {
        setLoading(false);
        createUserWithEmailAndPassword(auth, Email, Password)
          .then((userCredential) => {
            const user = userCredential.user;
            window.alert("Account created");
            addUserToDatabase(user.uid);
          })
          .catch((error) => {
            window.alert(error.message);
          });
      }, 3000);
    } else {
      window.alert("Not Same Password");
    }
  };
  const handleOnSignInPress = () => {
    navigation.navigate("SignIn");
  };
  const handleSignInWithGoogle = () => {
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        console.log(errorMessage);
        const email = error.customData.email;
        // The AuthCredential type that was used.
        console.log(email);
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(credential);
      });
  };
  const handleSignInWithFacebook = () => {
    console.log("handleSignInWithFacebook");
  };
  const handleForgetPassword = () => {
    navigation.navigate("Forget");
  };
  const addUserToDatabase = async (uid) => {
    try {
      const docRef = await setDoc(doc(db, "users", uid), {
        email:Email,
        FirstName:FirstName,
        LastName:LastName,
        Phone:Phone,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <Loader visible={loading} />
      <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Text style={{ color: "#000", fontSize: 30, fontWeight: "bold" }}>
          Create An Account
        </Text>
        <Text
          style={{
            color: "#BABBC3",
            fontSize: 18,
            marginVertical: 10,
            marginHorizontal: 15,
          }}
        >
          Enter Your Details to Register
        </Text>
        <View style={{ marginVertical: 55 }}>
          <Input
            iconName="email-outline"
            placeholder="Enter your email address"
            value={Email}
            onChangeText={setEmail}
          />
          <Input
            iconName="account-outline"
            placeholder="Enter your first name"
            value={FirstName}
            onChangeText={setFirstName}
          />
          <Input
            iconName="account-outline"
            placeholder="Enter your LastName"
            value={LastName}
            onChangeText={setLastName}
          />

          <Input
            iconName="phone-outline"
            placeholder="Enter your phone number"
            value={Phone}
            onChangeText={setPhone}
          />
          <Input
            iconName="lock-outline"
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={setPassword}
            Password
          />
          <Input
            iconName="lock-outline"
            placeholder="Confirm your password "
            secureTextEntry={true}
            onChangeText={setPasswordConfirm}
            Password
          />

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleOnSignInPress}>
            <Text style={styles.buttonText2}>Already have account ? Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  button: {
    height: 55,
    width: "100%",
    backgroundColor: "#6c9cf9",
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    activeOpacity: 0.7,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  buttonText2: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
