import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import profile from "../assets/profile.jpg";
import Loader from "../component/Loader";

// import { auth, db } from "firebase/auth";
import { collection, getDoc, doc, updateDoc, setDoc } from "firebase/firestore";
import { auth,db } from "../firebase/firebase";

export default function EditProfile({ navigation }) {
    const [email, setEmail] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Phone, setPhone] = useState("");
    const [birthdate, setbirthdate] = useState("");
    const [checkValidPhone, setCheckValidPhone] = useState(false);
    const [checkValidFirstName, setCheckValidFirstName] = useState(false);
    const [CheckValidLastName, setCheckValidLastName] = useState(false);
  const handleBack = () => {
    navigation.navigate("Profile");
  };
  const handleSave = () => {
    updateUserData();
    navigation.navigate("Profile");
  };
const updateUserData = async() => {
    const washingtonRef = doc(db, "users", auth.currentUser.uid);
await updateDoc(washingtonRef, {

  FirstName: FirstName,
  LastName: LastName,
  Phone: Phone,
  birthdate: birthdate,
});
}
const handleValidLastName = (text) => {
  const isNonWhiteSpace = /^\S*$/;
  const isValidLength = /^.{3,10}$/;
  if (isNonWhiteSpace.test(text) && isValidLength.test(text)) {
    return  setCheckValidLastName(false);
    
  }
  else{
    return setCheckValidLastName(true);
  }
  
}

const handleValidFirstName = (text) => {
  const isNonWhiteSpace = /^\S*$/;
  const isValidLength = /^.{3,10}$/;
  if (isNonWhiteSpace.test(text) && isValidLength.test(text)) {
    return setCheckValidFirstName(false);
    
  }
 
  else{
    return setCheckValidFirstName(true);
  }
}

  const handleValidPhone = (text) => {
    const isNonWhiteSpace = /^\S*$/;
    const isValidLength = /^.{11}$/;
    if (isNonWhiteSpace.test(text) && isValidLength.test(text)&& text.match(/^\d+/)) {
      return setCheckValidPhone(false); 
    }
    else{
      return setCheckValidPhone(true);
    }
}



  return (
    <View style={styles.container}>
      <Text style={styles.title}>EditProfile </Text>

      <View style={styles.buttonContainer}>
        <View style={styles.textinputContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labeltext}>Email</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput value={auth.currentUser.email} editable={false} />
          </View>
        </View>

        <View style={styles.textinputContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labeltext}>FirstName</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter FirstName"
              keyboardType="email-address"
              onChangeText={(text) => {
                setFirstName(text);
                handleValidFirstName(text);
              }}
            />
          </View>
        </View>
            {checkValidFirstName ? (
              <Text style={styles.textFailed}>FirstName must be 3-10 Characters without space</Text>
            ):(
              <Text style={styles.textFailed}></Text>

            ) }


        <View style={styles.textinputContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labeltext}>LastName</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
                placeholder="Enter LastName"
                onChangeText={(text) => {
                setLastName(text);
                handleValidLastName(text);
              }}
            />
          </View>
        </View>
        {CheckValidLastName ? (
              <Text style={styles.textFailed}>LastName must be 3-10 Characters without space</Text>
            ):(
              <Text style={styles.textFailed}></Text>

            ) }

        <View style={styles.textinputContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labeltext}>Phone</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Phone"
              keyboardType="phone-pad"
              onChangeText={(text) => {
                setPhone(text);
                handleValidPhone(text);
              }}
            />
          </View>
        </View>
        {checkValidPhone ? (
              <Text style={styles.textFailed}>Phone must be 11 digit without space</Text>
            ):(
              <Text style={styles.textFailed}></Text>

            ) }
        <View style={styles.textinputContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labeltext}>Birthdate</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Birthdate"
              onChangeText={setbirthdate}
              keyboardType="date"
            />
          </View>
        </View>
      </View>

      <Image source={profile} style={styles.image} />
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.SignOutbutton} onPress={handleBack}>
          <Text style={styles.SignOutbuttontext}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.SignOutbutton} onPress={handleSave}>
          <Text style={styles.SignOutbuttontext}>Save </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "#6c9cf9",
    marginBottom: 20,
    position: "relative",
    marginTop: 30,
  },

  buttonContainer: {
    // flexDirection: "coulmn",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 130,
  },

  image: {
    width: 100,
    height: 100,
    top: 100,
    position: "absolute",
  },
  SignOutbuttontext: {
    color: "#eee",
  },
  SignOutbutton: {
    backgroundColor: "#6c9cf9",
    padding: 10,
    borderRadius: 10,
    width: "30%",
    alignItems: "center",
    marginTop: 90,
    marginLeft: 40,
  },
  buttons: {
    flexDirection: "row",
    width: "90%",
  },
  labelContainer: {
    backgroundColor: "white", // Same color as background
    alignSelf: "flex-start", // Have View be same width as Text inside
    paddingHorizontal: 3, // Amount of spacing between border and first/last letter
    marginStart: 10, // How far right do you want the label to start
    position: "relative", // Needed to be able to precisely overlap label with border
    top: -15,
    // shadowColor: 'white',
    zIndex: 1,
  },
  labeltext: {
    color: "grey",
  },
  inputContainer: {
    borderRadius: 12, // Not needed. Just make it look nicer.
    padding: 8, // Also used to make it look nicer
    borderWidth: 3,
    borderColor: "#6c9cf9",
    position: "absolute",
    zIndex: 0,
    marginBottom: 15,
    width: "100%",
  },
  textinputContainer: {
    margin: 25,
    left: 10,
  },
  textFailed: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 12,
  },
});
