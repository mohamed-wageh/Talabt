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
import React from "react";
import { useState } from "react";
import profile from "../assets/profile.jpg";
import Loader from "../component/Loader";
import { collection, getDoc, doc, updateDoc, setDoc } from "firebase/firestore";
import { auth,db } from "../firebase/firebase";
import { ref ,uploadBytes ,getDownloadURL } from "firebase/storage";
import {storage}from"../firebase/firebase";

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
    const [image,setImage]=useState("https://www.bing.com/images/search?view=detailV2&ccid=eCrcK2Bi&id=8BBE3A54A26BEDFFE61006D334E8203E0343F7B0&thid=OIP.eCrcK2BiqwBGE1naWwK3UwHaHa&mediaurl=https%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fProfile-PNG-File.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.782adc2b6062ab00461359da5b02b753%3frik%3dsPdDAz4g6DTTBg%26pid%3dImgRaw%26r%3d0&exph=673&expw=673&q=profile+logo+png&simid=607996898040303146&FORM=IRPRST&ck=569FB476D066C1FB196C59F7C4A67893&selectedIndex=27");
    const [url,setUrl]=useState(null);

  const handleBack = () => {
    navigation.navigate("Profile");
  };

  const handleSave = () => {
    updateUserData();
    handleSubmit();
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      updateUserData()
      .then(() => {
        navigation.navigate("Profile");
        console.log("done")
        
      })
      .catch((error) => {
        window.alert(error.message);
      });

    }, 3000);
  };
const updateUserData = async() => {
    const washingtonRef = doc(db, "users", auth.currentUser.uid);
await updateDoc(washingtonRef, {

  FirstName: FirstName,
  LastName: LastName,
  Phone: Phone,
  birthdate: birthdate,
  url:url,
});
};

const handleValidLastName = (text) => {
  const isNonWhiteSpace = /^\S*$/;
  const isValidLength = /^.{3,10}$/;
  if (isNonWhiteSpace.test(text) && isValidLength.test(text)) {
    return  setCheckValidLastName(false);
  }
  else{
    return setCheckValidLastName(true);
  }
};

const handleValidFirstName = (text) => {
  const isNonWhiteSpace = /^\S*$/;
  const isValidLength = /^.{3,10}$/;
  if (isNonWhiteSpace.test(text) && isValidLength.test(text)) {
    return setCheckValidFirstName(false);
  }
  else{
    return setCheckValidFirstName(true);
  }
};

  const handleValidPhone = (text) => {
    const isNonWhiteSpace = /^\S*$/;
    const isValidLength = /^.{11}$/;
    if (isNonWhiteSpace.test(text) && isValidLength.test(text)&& text.match(/^\d+/)) {
      return setCheckValidPhone(false); 
    }
    else{
      return setCheckValidPhone(true);
    }
};

  const handleSubmit= () => {
    const storageRef = ref(storage, 'some-child');
    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, image)
    .then((snapshot) => {
    console.log('Uploaded a blob or file!');
    getDownloadURL(storageRef).then((url)=>{
      setUrl(url);
    })
    .catch((error) => {
      window.alert(error.message ,"error in url");
    });
    })
    .catch((error) => {
      window.alert(error.message);
    });

};

   const handleImagChande= (e) => {
    if(e.target.files[0]){
      setImage(e.target.files[0])
    }
};

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex:'1'}}>
       <Loader visible={loading} />
    <View style={styles.container}>
      <Text style={styles.title}>EditProfile </Text>
     
      <View style={styles.imagecontainer}>
       <input type="file"
        onChange={(e) => {
          setUrl(e);
          handleImagChande(e);
        }}
      />
      <Image source={url} alt='No img' style={styles.image} onChange={setUrl}/>
       <TouchableOpacity style={styles.imgbutton} onPress={handleSubmit}>
          <Text style={styles.SignOutbuttontext}>submit</Text>
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

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.SignOutbutton} onPress={handleBack}>
          <Text style={styles.SignOutbuttontext}>Back</Text>
        </TouchableOpacity>

        {Phone == '' || FirstName == '' ||LastName == '' ||birthdate == '' ||checkValidPhone == true ||checkValidFirstName == true ||CheckValidLastName == true ? (
        <TouchableOpacity style={styles.buttonDisable} 
        onPress={handleSave}
        disabled>
          <Text style={styles.SignOutbuttontext}>Save </Text>
        </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.SignOutbutton} 
          onPress={handleSave}>
            <Text style={styles.SignOutbuttontext}>Save</Text>

        
        </TouchableOpacity>
        )}
      </View>
  <StatusBar style="auto" />
  </View>
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
    marginLeft:10,
    alignItems: "flex-start",
    fontWeight:'bold',

  },

  buttonContainer: {
    // flexDirection: "coulmn",
    justifyContent: "space-between",
    width: "80%",
    marginTop:-5,
  },
  imagecontainer:{
    alignItems:'center',
    marginBottom:5,
  },
  image: {
    width:'45%',
    height:'55%' ,
    position: "absolute",
    color:"black",
    alignContent:"center",
    //borderWidth: 1,
    borderRadius:500,
    top:30,
    
    
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
    marginTop:1,
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
  buttonDisable: {
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 10,
    width: "35%",
    alignItems: "center",
    marginTop: 40,
    marginLeft: 35,
  },
  imgbutton:{
    backgroundColor: "#6c9cf9",
    padding: 5,
    borderRadius: 10,
    width: "20%",
    alignItems: "center",
    marginLeft:'95%',
    marginTop:'60%',
  },
});
