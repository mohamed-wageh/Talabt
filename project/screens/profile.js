import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View ,Image,TouchableOpacity } from 'react-native';
import { useState } from 'react'; 
import profile from '../assets/profile.jpg';
import auth from '../firebase/firebase';
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
            <TextInput
           style={styles.input}
           placeholder="User Name"
           value='Maryoma'
         />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
          <TextInput
         style={styles.input}
         placeholder="Mobile Number"
         value={"01100297301"}
       />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
        />

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

      
});