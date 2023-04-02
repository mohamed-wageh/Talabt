import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../component/CustomButton";
import auth from "../firebase/firebase";
import { signOut } from "firebase/auth";

const Profile = ({ navigation }) => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.navigate("SignIn");
      })
      .catch((error) => {
        console.warn(error.message);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {auth.currentUser.displayName}</Text>
      <CustomButton text="Sign Out" onPress={handleSignOut} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    marginBottom: 10,
    color: "#1e1f26",
  },
});
export default Profile;