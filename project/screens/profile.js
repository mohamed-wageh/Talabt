import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View ,Image,TouchableOpacity } from 'react-native';
import { useState } from 'react'; 
import profile from '../assets/profile.jpg';
import auth from '../firebase.js/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Profile({navigation}) {
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');
    const handleSignOut = () => {
        navigation.navigate('Home');
        signOut (auth)
          .then(() => {
            setIsSignedIn(false);
            setMsg('signOut Done');
          })
        .catch((error) => {
          seterrorMsg(error.message);
    });
}
     return (
      <View style={styles.container}>

        <Text style={styles.title}> My Profile </Text>

        <View style={styles.buttonContainer}>
            
        <View style={styles.textinputContainer}>
        <View style={styles.labelContainer}>
                <Text>User Name</Text>
         </View>
        <View style={styles.inputContainer}>
        <TextInput placeholder="Enter User Name" />
            </View>
           </View>
         

         <View style={styles.textinputContainer}>
        <View style={styles.labelContainer}>
                <Text>Email Address</Text>
            </View>
        <View style={styles.inputContainer}>
        <TextInput placeholder="Enter email address"
         keyboardType="email-address"
         onChangeText={setEmail}
         value={email}/>
        </View>
         </View>
         
         <View style={styles.textinputContainer}>
        <View style={styles.labelContainer}>
                <Text>Mobile Number</Text>
            </View>
        <View style={styles.inputContainer}>
        <TextInput placeholder="Enter Mobile Number" keyboardType="phone-pad" />
        </View>
         </View>

         <View style={styles.textinputContainer}>
        <View style={styles.labelContainer}>
                <Text>Location</Text>
            </View>
        <View style={styles.inputContainer}>
        <TextInput placeholder="Enter Location"        
          />
        
         </View>
         </View>

        </View>

        <Image source={profile} style={styles.image} />
        <TouchableOpacity style={styles.SignOutbutton}  onPress={handleSignOut}>
        <Text style={styles.SignOutbuttontext}>Sign Out </Text>
        </TouchableOpacity>

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
        color:'black',
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
        SignOutbuttontext:{
            color:'#eee',
          },
        SignOutbutton:{
            backgroundColor: 'black',
            padding: 10,
            borderRadius: 10,
            width:'30%',
            alignItems:'center',
            marginTop:90,
        },
        input: {
            borderWidth: 2,
            borderColor: 'black',
            borderRadius: 8,
            padding: 10,
            width: '83%',
            marginBottom: 20,
           
          },
          labelContainer: {
            backgroundColor: 'white', // Same color as background
            alignSelf: 'flex-start', // Have View be same width as Text inside
            paddingHorizontal: 3, // Amount of spacing between border and first/last letter
            marginStart: 10, // How far right do you want the label to start
            position: 'relative', // Needed to be able to precisely overlap label with border
            top: -10,
            shadowColor: 'white',
            zIndex:1,
           
        },
        inputContainer: {
            borderWidth: 2, // Create border
            borderRadius: 10, // Not needed. Just make it look nicer.
            padding: 8, // Also used to make it look nicer
           position:'absolute',
           zIndex:0,
           marginBottom:10,
           width:'95%',
        },
        textinputContainer:{
            margin:20,
            left:10,
        },
      
});