import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View ,Image,TouchableOpacity } from 'react-native';
import { useState } from 'react'; 
import profile from '../assets/profile.jpg';
import auth from '../firebase/firebase';
import { signOut } from "firebase/auth";

export default function EditProfile({navigation}) {
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');
    const handleBack = () => {
      
            navigation.navigate("Profile");
}
     return (
      <View style={styles.container}>

        <Text style={styles.title}>EditProfile </Text>

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
        <TextInput placeholder="Enter Birthdate" />
        </View>
         </View>

        </View>

        <Image source={profile} style={styles.image} />
        <View style={styles.buttons}>
        <TouchableOpacity style={styles.SignOutbutton}  onPress={handleBack}>
        <Text style={styles.SignOutbuttontext}>Back</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.SignOutbutton} >
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
        SignOutbuttontext:{
            color:'#eee',
          },
        SignOutbutton:{
            backgroundColor: '#6c9cf9',
            padding: 10,
            borderRadius: 10,
            width:'30%',
            alignItems:'center',
            marginTop:90,
            marginLeft:40,
        },
        buttons:{
            flexDirection:'row',
            width:'90%',
        },
          labelContainer: {
            backgroundColor: 'white', // Same color as background
            alignSelf: 'flex-start', // Have View be same width as Text inside
            paddingHorizontal: 3, // Amount of spacing between border and first/last letter
            marginStart: 10, // How far right do you want the label to start
            position: 'relative', // Needed to be able to precisely overlap label with border
            top: -15,
           // shadowColor: 'white',
            zIndex:1,
          
        },
        labeltext: {
          color:'grey',
        },
        inputContainer: {
            borderRadius: 12, // Not needed. Just make it look nicer.
            padding: 8, // Also used to make it look nicer
            borderWidth:3,
            borderColor: '#6c9cf9',
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