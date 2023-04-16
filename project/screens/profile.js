import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View ,Image,TouchableOpacity } from 'react-native';
import { useState } from 'react'; 
import profile from '../assets/profile.jpg';
import auth from '../firebase/firebase';
import { signOut } from "firebase/auth";

export default function Profile ({navigation}) {
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');
    const handleSignOut = () => {
        signOut (auth)
          .then(() => {
            navigation.navigate("SignIn");
            console.log(auth.currentUser.displayName)
        console.log(auth.currentUser.email)
        console.log(auth.currentUser.phoneNumber)
          })
        .catch((error) => {
          console.log(error.message);
    });
}

const handleEditProfile = () => {
      navigation.navigate("EditProfile");
}
     return (
      <View style={styles.container}>

        <Text style={styles.title}> My Profile </Text>

        <View style={styles.buttonContainer}>
            
        <View style={styles.textinputContainer}>
        <View style={styles.labelContainer}>
                <Text style={styles.labeltext}>User Name</Text>
         </View>
        <View style={styles.inputContainer}>
        <TextInput placeholder="Enter User Name" /*value={auth.currentUser.displayName}*/ />
            </View>
           </View>
         

         <View style={styles.textinputContainer}>
        <View style={styles.labelContainer}>
                <Text style={styles.labeltext}>Email Address</Text>
            </View>
        <View style={styles.inputContainer}>
        <TextInput placeholder="Enter email address"
         keyboardType="email-address"
         onChangeText={setEmail}
        /* value={auth.currentUser.email} */ />
        </View>
         </View>
         
         <View style={styles.textinputContainer}>
        <View style={styles.labelContainer}>
                <Text style={styles.labeltext}>Mobile Number</Text>
            </View>
        <View style={styles.inputContainer}>
        <TextInput placeholder="Enter Mobile Number" keyboardType="phone-pad" />
        </View>
         </View>

         <View style={styles.textinputContainer}>
        <View style={styles.labelContainer}>
                <Text style={styles.labeltext}>Birthdate</Text>
            </View>
        <View style={styles.inputContainer}>
        <TextInput placeholder="Enter birthdate" />
        </View>
         </View>

        </View>

        <Image source={profile} style={styles.image} />
        <View style={styles.buttons}>
        <TouchableOpacity style={styles.SignOutbutton}  onPress={handleSignOut}>
        <Text style={styles.SignOutbuttontext}>Sign Out </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.SignOutbutton}  onPress={handleEditProfile}>
        <Text style={styles.SignOutbuttontext}>Edit Profile </Text>
        </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
       alignItems: 'center',
     
    },
    title: {
        fontSize: 30,
        color:'#6c9cf9',
        marginBottom: 20,
        position:'relative',
        marginTop:30,
    
      },
   
      buttonContainer:{
            flexDirection:'coulmn',
            justifyContent:'space-between',
            width:'80%',
            marginTop:130,
            
          },

     image:{
          width:100,
          height:100,
          top:100,
          position:'absolute',
        },
        buttons:{
          flexDirection:'row',
          width:'90%',
      },
        SignOutbuttontext:{
            color:'#eee',
          },
        SignOutbutton:{
            backgroundColor: '#6c9cf9',
            padding: 10,
            borderRadius: 10,
            width:'30%',
            alignItems:'center',
            marginTop:40,
            marginLeft:40,
        },
       
          labelContainer: {
            backgroundColor: 'white', // Same color as background
            alignSelf: 'flex-start', // Have View be same width as Text inside
            paddingHorizontal: 3, // Amount of spacing between border and first/last letter
            marginStart: 5, // How far right do you want the label to start
            position: 'relative', // Needed to be able to precisely overlap label with border
            top: -15,
            marginBottom:8,
           // shadowColor: 'white',
            zIndex:1,
          
        },
        labeltext: {
          color:'grey',
          marginBottom:5,
        },
        inputContainer: {
            borderRadius: 5, // Not needed. Just make it look nicer.
            padding: 8, // Also used to make it look nicer
            borderBottomWidth:3,
            borderBottomColor: '#6c9cf9',
           position:'absolute',
           zIndex:0,
           marginBottom:15,
           width:'100%',
        },
        textinputContainer:{
            margin:25,
            left:10,
        },  
});
