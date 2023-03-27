// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSKRrQi5b-g3hRlbTu3Zt3WGvc7jWMIPY",
  authDomain: "test-731c6.firebaseapp.com",
  projectId: "test-731c6",
  storageBucket: "test-731c6.appspot.com",
  messagingSenderId: "498575433052",
  appId: "1:498575433052:web:93ee785980478288b73599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);

export default auth;