import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { globalStyles } from "../styles/global";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Loader from "../component/Loader";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { auth, db } from "../firebase/firebase";
import CustomButton from "../component/CustomButton";
import React from "react";
import COLORS from "../constant/colors";
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import Input from "../component/Input";
const provider = new GoogleAuthProvider();

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [FirstNameError, setFirstNameError] = useState("");
  const [LastNameError, setLastNameError] = useState("");
  const [PhoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [ConfirmPasswordError, setConfirmPasswordError] = useState("");

  const [loading, setLoading] = React.useState(false);
  const handleRegister = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      createUserWithEmailAndPassword(auth, email, Password)
        .then((userCredential) => {
          const user = userCredential.user;
          window.alert("account created");
          navigation.navigate("SignIn");
          addUserToDatabase();
        })
        .catch((error) => {
          window.alert(error.message);
        });
    }, 3000);
  };
  const addUserToDatabase = async() => {
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      Email: email,
      FirstName: FirstName,
      LastName: LastName,
      Phone: Phone,
      birthdate:""
    });
  };
  const onChangeEmail = (text) => {
    handleChange(text);
  };
  const handleOnSignInPress = () => {
    navigation.navigate("SignIn");
  };
  const handleSubmit = () => {
    // validate user input
    let isValid = true;

    if (FirstName.trim() === "") {
      setFirstName("Please enter your First name");
      isValid = false;
    }

    if (email.trim() === "") {
      setEmailError("Please enter your email");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (Password.trim() === "") {
      setPasswordError("Please enter your password");
      isValid = false;
    } else if (Password.trim().length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    }

    // submit form if input is valid
    if (isValid) {
      // submit form data to backend or perform other actions
      handleSignUp();
    }
  };
  const handleSignInWithGoogle = () => {
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        window.alert("account created");
        navigation.navigate("Home");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        window.alert(errorMessage);
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  // const SignInValidation = yup.object().shape({
  //   email: yup
  //     .string()
  //     .email("please enter valid email")
  //     .required("Email address is required"),
  //   firstName: yup
  //     .string()
  //     .min(2, ({ min }) => "Too Short!")
  //     .max(50, ({ max }) => "Too Long!")
  //     .required("firstName is required"),
  //   lastName: yup
  //     .string()
  //     .min(2, ({ min }) => "Too Short!")
  //     .max(50, ({ max }) => "Too Long!")
  //     .required("lastName is required"),
  //   password: yup
  //     .string()
  //     .min(6, ({ min }) => "password must be at least 6 characters")
  //     .required("password is required"),
  //   ConfirmPassword: yup
  //     .string()
  //     .min(6, ({ min }) => "password must be at least 6 characters")
  //     .oneOf([yup.ref("password")], "your password do not match")
  //     .required("confirmPassword is required"),
  //   mobile: yup
  //     .string()
  //     .min(11, ({ min }) => "mobile number must be exactly 11 digit")
  //     .max(11, ({ max }) => "mobile number must be exactly 11 digit")
  //     .matches(/^[0-9]+$/, "mobile number must be only digit")
  //     .required("mobile is required"),
  // });
  return (
    // <Formik
    //   initialValues={{
    //     email: "",
    //     password: "",
    //     ConfirmPassword: "",
    //     firstName: "",
    //     lastName: "",
    //     mobile: "",
    //   }}
    //   validateOnMount={true}
    //   onSubmit={(values) => handleRegister(values.email, values.password)}
    //   validationSchema={SignInValidation}
    // >
    //   {({
    //     handleChange,
    //     handleBlur,
    //     handleSubmit,
    //     values,
    //     touched,
    //     errors,
    //     setFieldTouched,
    //     isValid,
    //   }) => (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Loader visible={loading} />
        <View style={globalStyles.container}>
          <Text style={globalStyles.title}>Create An Account</Text>
          <Text style={globalStyles.text}>Enter Your Details to Register</Text>
          <View
            style={[
              { flexDirection: "row" },
              { marginTop: 50 },
              { marginBottom: 10 },
            ]}
          >
            <Icon
              name="sofa-single"
              size={32}
              color={COLORS.blue}
              style={{ marginTop: 5 }}
            />
            <Text style={[globalStyles.title, { marginHorizontal: 10 }]}>
              Cabinup
            </Text>
          </View>
          <View style={{ width: "100%" }}>
            <Input
              onChangeText={(text) => {
                setEmail(text);
                setEmailError("");
              }}
              // onBlur={handleBlur("email")}
              value={email}
              // onFocus={() => handleError(null, 'email')}
              iconName="email-outline"
              // label="Email"
              placeholder="Enter your email address"
              // error={errors.email}
              // onChangeText={text => handleOnchange(text, 'email')}
            />
            {emailError ? (
              <Text style={styles.errors}>{passwordError}</Text>
            ) : null}
            <Input
              iconName="account-outline"
              placeholder="Enter your first name"
              value={FirstName}
              // onChangeText={handleChange("firstName")}
              onChangeText={(text) => {
                setFirstName(text);
                setFirstNameError("");
              }}
              // onBlur={() => setFieldTouched("firstName")}
            />
            {FirstNameError ? (
              <Text style={styles.errors}>{passwordError}</Text>
            ) : null}
            <Input
              iconName="account-outline"
              placeholder="Enter your last name"
              value={LastName}
              // onChangeText={setlastName}
              onChangeText={(text) => {
                // handleChange("lastName");
                setLastName(text);
                setLastNameError("");
              }}
              // onBlur={() => setFieldTouched("lastName")}
            />
            {LastNameError ? (
              <Text style={styles.errors}>{passwordError}</Text>
            ) : null}
            <Input
              iconName="phone-outline"
              placeholder="Enter your phone number"
              value={Phone}
              // onChangeText={setmobile}
              onChangeText={(text) => {
                // handleChange("mobile");
                setPhone(text);
                setPhoneError("");
              }}
              // onBlur={() => setFieldTouched("mobile")}
            />
            {PhoneError ? (
              <Text style={styles.errors}>{passwordError}</Text>
            ) : null}
            <Input
              onChangeText={(text) => {
                // handleChange("password");
                setPassword(text);
                setPasswordError("");
              }}
              // onBlur={handleBlur("password")}
              value={Password}
              // onFocus={() => handleError(null, 'password')}
              iconName="lock-outline"
              // label="Password"
              placeholder="Enter your password"
              // error={errors.password}
              // onChangeText={text => handleOnchange(text, 'password')}
              password
            />
            {passwordError ? (
              <Text style={styles.errors}>{passwordError}</Text>
            ) : null}
            <Input
              onChangeText={(text) => {
                // handleChange("ConfirmPassword");
                setConfirmPassword(text);
                setConfirmPasswordError("");
              }}
              // onBlur={handleBlur("ConfirmPassword")}
              value={ConfirmPassword}
              // onFocus={() => handleError(null, 'password')}
              iconName="lock-outline"
              // label="Password"
              placeholder="Enter your confirm password"
              // error={errors.password}
              // onChangeText={text => handleOnchange(text, 'password')}
              password
            />
            {ConfirmPasswordError ? (
              <Text style={styles.errors}>{passwordError}</Text>
            ) : null}
          </View>
          {/* <TouchableOpacity onPress={handleForgetPasswordPress}>
            <Text style={[styles.buttonText2,{right:0}]}>Forget Password ?</Text>
          </TouchableOpacity> */}
          <CustomButton
            // disabled={!isValid}
            text={"Create Account"}
            onPress={handleRegister}
          />
          <TouchableOpacity
            onPress={handleSignInWithGoogle}
            style={[
              styles.button1,
              { marginTop: 20 },
              { flexDirection: "row" },
              { borderRadius: 10 },
              { backgroundColor: "#DB4437" },
            ]}
          >
            {/* <Icon
          name={"google"}
          style={[{ fontSize: 22},{color:COLORS.blue},{marginLeft:10}]}
        /> */}
            <Text style={[styles.buttonText]}> Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOnSignInPress}>
            <Text style={[styles.buttonText2, { marginTop: "0%" }]}>
              Already have account ?
              <Text style={{ color: COLORS.blue }}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );}
    // </Formik>
  // );
// };
export default SignUp;

const styles = StyleSheet.create({
  button: {
    height: 55,
    width: "100%",
    backgroundColor: "#B57EDC",
    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    activeOpacity: 0.7,
  },
  button1: {
    height: 65,
    width: "100%",
    backgroundColor: "#458ae7",
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    activeOpacity: 0.7,
  },
  button2: {
    height: 55,
    width: "100%",
    backgroundColor: "#DB4437",
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    activeOpacity: 0.7,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  buttonText2: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    marginBottom: 15,
    marginTop: 15,
  },
  errors: {
    color: COLORS.red,
    fontSize: 12,
  },
  // roundButton1: {
  //   width: 50,
  //   height: 50,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: 10,
  //   borderRadius: 100,
  //   backgroundColor: 'white',
  // },
});
