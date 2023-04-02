// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8sHCLA7vq7dev_R6MwhhnuuIaFCNvAPU",
  authDomain: "project-6d05e.firebaseapp.com",
  projectId: "project-6d05e",
  storageBucket: "project-6d05e.appspot.com",
  messagingSenderId: "778213366946",
  appId: "1:778213366946:web:d6e8beee9f3fba07948bfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;