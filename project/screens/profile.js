import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { collection, getDoc, doc, updateDoc, setDoc } from "firebase/firestore";

import profile from "../assets/profile.jpg";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
export default function Profile({ navigation }) {
  const [email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
useEffect(() => {
  const unsubscribe = navigation.addListener("focus", () => {
    getUserData();
  });
  return unsubscribe;
}, [navigation]);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("SignIn");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const getUserData = async () => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      setFirstName(data.FirstName);
      setLastName(data.LastName);
      setEmail(data.Email);
      setPhone(data.Phone);
      setBirthdate(data.birthdate);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  const handleEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> MyProfile </Text>
        </View>
        <View style={styles.imagecontainer}>
          <Image
            source={
              auth.currentUser.photoURL ? {uri:auth.currentUser.photoURL} : profile
            }
            style={styles.image}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.textinputContainer}>
              <View style={styles.labelContainer}>
                <Text style={styles.labeltext}>Email Address</Text>
              </View>
              <View style={styles.inputContainer}>
                <Text>{auth.currentUser.email}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.textinputContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labeltext}>FirstName</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text>{FirstName}</Text>
          </View>
        </View>
        <View style={styles.textinputContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labeltext}>LastName</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text>{LastName}</Text>
          </View>
        </View>
        <View style={styles.textinputContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labeltext}>Phone</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text>{Phone}</Text>
          </View>
        </View>
        <View style={styles.textinputContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labeltext}>Birthdate</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text>{birthdate}</Text>
          </View>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.SignOutbutton}
            onPress={handleSignOut}
          >
            <Text style={styles.SignOutbuttontext}>Sign Out </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.SignOutbutton}
            onPress={handleEditProfile}
          >
            <Text style={styles.SignOutbuttontext}>Edit Profile </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
{/* <Text style={styles.title}> MyProfile </Text>
      <View style={styles.imagecontainer}>
      <Image source={profile} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.textinputContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labeltext}>Email Address</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text>{auth.currentUser.email}</Text>
          </View>
        </View>

        <View style={styles.textinputContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labeltext}>FirstName</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text>{FirstName}</Text>
          </View>
        </View>

        <View style={styles.textinputContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labeltext}>LastName</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text>{LastName}</Text>
          </View>
        </View>

        <View style={styles.textinputContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labeltext}>Phone</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text>{Phone}</Text>
          </View>
        </View>

        <View style={styles.textinputContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labeltext}>Birthdate</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text>{birthdate}</Text>
          </View>
        </View>
      </View>

  
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.SignOutbutton} onPress={handleSignOut}>
          <Text style={styles.SignOutbuttontext}>Sign Out </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.SignOutbutton}
          onPress={handleEditProfile}
        >
          <Text style={styles.SignOutbuttontext}>Edit Profile </Text>
        </TouchableOpacity>
      </View> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height:'100%'
    // alignItems: "center",
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "#6c9cf9",
    marginBottom: 20,
    position: "relative",
    marginTop: 30,
    fontWeight: "bold",
    alignItems: "center",
  },

  buttonContainer: {
    // flexDirection: "coulmn",
    justifyContent: "center",
    width: "100%",
    marginTop: 1,
  },

  imagecontainer: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    alignContent: "center",
    //borderWidth: 1,
    borderRadius: 500,
    // marginBottom:50
  },
  buttons: {
    flexDirection: "row",
    width: "90%",
  },
  SignOutbuttontext: {
    color: "#eee",
  },
  SignOutbutton: {
    backgroundColor: "#6c9cf9",
    padding: 10,
    borderRadius: 10,
    width: "35%",
    alignItems: "center",
    marginTop: 40,
    marginLeft: 35,
  },

  labelContainer: {
    backgroundColor: "white", // Same color as background
    alignSelf: "flex-start", // Have View be same width as Text inside
    paddingHorizontal: 3, // Amount of spacing between border and first/last letter
    marginStart: 5, // How far right do you want the label to start
    position: "relative", // Needed to be able to precisely overlap label with border
    top: -15,
    marginBottom: 8,
    // shadowColor: 'white',
    zIndex: 1,
  },
  labeltext: {
    color: "grey",
    marginBottom: 5,
  },
  inputContainer: {
    borderRadius: 5, // Not needed. Just make it look nicer.
    padding: 8, // Also used to make it look nicer
    borderBottomWidth: 3,
    borderBottomColor: "#6c9cf9",
    position: "absolute",
    zIndex: 0,
    marginBottom: 15,
    width: "100%",
  },
  textinputContainer: {
    margin: 25,
    left: 10,
  },
});
