// import React, { useState, useEffect } from "react";
// import { Button, Image, View, Platform } from "react-native";
// import * as ImagePicker from "expo-image-picker";

// export default function ImagePickerExample() {
//   const [image, setImage] = useState(null);

//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {image && (
//         <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
//       )}
//     </View>
//   );
// }

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
  SafeAreaView,
  input,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { useState } from "react";
import profile from "../assets/profile.jpg";
import Loader from "../component/Loader";
import { collection, getDoc, doc, updateDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../firebase/firebase";
import { updateProfile } from "firebase/auth";
import Entypo from 'react-native-vector-icons/Entypo'
export default function EditProfile({ navigation }) {
  const [email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Phone, setPhone] = useState("");
  const [birthdate, setbirthdate] = useState("");
  const [checkValidPhone, setCheckValidPhone] = useState(false);
  const [checkValidFirstName, setCheckValidFirstName] = useState(false);
  const [CheckValidLastName, setCheckValidLastName] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(
    "https://www.bing.com/images/search?view=detailV2&ccid=eCrcK2Bi&id=8BBE3A54A26BEDFFE61006D334E8203E0343F7B0&thid=OIP.eCrcK2BiqwBGE1naWwK3UwHaHa&mediaurl=https%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fProfile-PNG-File.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.782adc2b6062ab00461359da5b02b753%3frik%3dsPdDAz4g6DTTBg%26pid%3dImgRaw%26r%3d0&exph=673&expw=673&q=profile+logo+png&simid=607996898040303146&FORM=IRPRST&ck=569FB476D066C1FB196C59F7C4A67893&selectedIndex=27"
  );

  const handleBack = () => {
    navigation.navigate("Profile");
  };
    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        const uploadedUrl=await uploadImage(result.assets[0].uri);
        updateUserPhotoUrl(uploadedUrl);
      }
    };
  const uploadImage = async (uri) => {
    //convert image to blob
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
    try {
      const storageRef = ref(storage, "images/" + auth.currentUser.uid);
      const result = await uploadBytes(storageRef, blob);
      // blob.close()
      return await getDownloadURL(storageRef);
      console.log("upload done")
    } catch (error) {
      alert(error)
    }
    // upload image

      };
const updateUserPhotoUrl = (url) => {
  updateProfile(auth.currentUser, {
            photoURL: url,
          })
};
  const handleSave = () => {
    updateUserData();
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      updateUserData()
        .then(() => {
          navigation.navigate("Profile");
          console.log("done");
        })
        .catch((error) => {
          window.alert(error.message);
        });
    }, 3000);
  };
  const updateUserData = async () => {
    const washingtonRef = doc(db, "users", auth.currentUser.uid);
    await updateDoc(washingtonRef, {
      FirstName: FirstName,
      LastName: LastName,
      Phone: Phone,
      birthdate: birthdate,
      url: url,
    });
  };

  const handleValidLastName = (text) => {
    const isNonWhiteSpace = /^\S*$/;
    const isValidLength = /^.{3,10}$/;
    if (isNonWhiteSpace.test(text) && isValidLength.test(text)) {
      return setCheckValidLastName(false);
    } else {
      return setCheckValidLastName(true);
    }
  };

  const handleValidFirstName = (text) => {
    const isNonWhiteSpace = /^\S*$/;
    const isValidLength = /^.{3,10}$/;
    if (isNonWhiteSpace.test(text) && isValidLength.test(text)) {
      return setCheckValidFirstName(false);
    } else {
      return setCheckValidFirstName(true);
    }
  };

  const handleValidPhone = (text) => {
    const isNonWhiteSpace = /^\S*$/;
    const isValidLength = /^.{11}$/;
    if (
      isNonWhiteSpace.test(text) &&
      isValidLength.test(text) &&
      text.match(/^\d+/)
    ) {
      return setCheckValidPhone(false);
    } else {
      return setCheckValidPhone(true);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
              <ScrollView showsVerticalScrollIndicator={false}>
      <Loader visible={loading} />
      <View style={styles.container}>
        <Text style={styles.title}>EditProfile </Text>

        <View style={styles.imagecontainer}>
          <Image
            source={
              image
                ? { uri: image }
                : auth.currentUser.photoURL
                ? { uri: auth.currentUser.photoURL }
                : profile
            }
            style={styles.image}
          />
          <TouchableOpacity style={styles.editImage} onPress={pickImage}>
            <Entypo name="pencil" size={20} color={"gray"} />
          </TouchableOpacity>
        </View>

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
                onChangeText={(text) => {
                  setFirstName(text);
                  handleValidFirstName(text);
                }}
              />
            </View>
          </View>
          {checkValidFirstName ? (
            <Text style={styles.textFailed}>
              FirstName must be 3-10 Characters without space
            </Text>
          ) : (
            <Text style={styles.textFailed}></Text>
          )}

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
            <Text style={styles.textFailed}>
              LastName must be 3-10 Characters without space
            </Text>
          ) : (
            <Text style={styles.textFailed}></Text>
          )}

          <View style={styles.textinputContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.labeltext}>Phone</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter Phone"
                onChangeText={(text) => {
                  setPhone(text);
                  handleValidPhone(text);
                }}
              />
            </View>
          </View>
          {checkValidPhone ? (
            <Text style={styles.textFailed}>
              Phone must be 11 digit without space
            </Text>
          ) : (
            <Text style={styles.textFailed}></Text>
          )}
          <View style={styles.textinputContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.labeltext}>Birthdate</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter Birthdate"
                onChangeText={setbirthdate}
              />
            </View>
          </View>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.SignOutbutton} onPress={handleBack}>
            <Text style={styles.SignOutbuttontext}>Back</Text>
          </TouchableOpacity>

          {Phone == "" ||
          FirstName == "" ||
          LastName == "" ||
          birthdate == "" ||
          checkValidPhone == true ||
          checkValidFirstName == true ||
          CheckValidLastName == true ? (
            <TouchableOpacity
              style={styles.buttonDisable}
              onPress={handleSave}
              disabled
            >
              <Text style={styles.SignOutbuttontext}>Save </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.SignOutbutton} onPress={handleSave}>
              <Text style={styles.SignOutbuttontext}>Save</Text>
            </TouchableOpacity>
          )}
        </View>
        <StatusBar style="auto" />
      </View>
      </ScrollView>
    </SafeAreaView>
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
    marginLeft: 10,
    alignItems: "flex-start",
    fontWeight: "bold",
  },

  buttonContainer: {
    // flexDirection: "coulmn",
    justifyContent: "space-between",
    width: "80%",
    marginTop: -5,
  },
  imagecontainer: {
    alignItems: "center",
    marginBottom: 5,
    width: "100%",
    height: "30%",
  },
  editImage: {
    alignItems:"flex-end",
    right:-60,
    top:-20
  },
  image: {
    width: "45%",
    height: "70%",
    // position: "absolute",
    alignContent: "center",
    //borderWidth: 1,
    borderRadius: 500,
    // top: 30,
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
    marginBottom: 1,
    width: "100%",
    marginTop: 1,
  },
  textinputContainer: {
    margin: 25,
    left: 10,
  },
  textFailed: {
    alignSelf: "center",
    color: "red",
    fontSize: 12,
  },
  buttonDisable: {
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 10,
    width: "35%",
    alignItems: "center",
    marginTop: 40,
    marginLeft: 35,
  },
  imgbutton: {
    backgroundColor: "#6c9cf9",
    padding: 5,
    borderRadius: 10,
    width: "20%",
    alignItems: "center",
    marginLeft: "95%",
    marginTop: "60%",
  },
});
