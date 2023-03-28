// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfffCI0pRFiiVl0AnL2lphIjYtmeH91Ow",
  authDomain: "talabt-4ca50.firebaseapp.com",
  projectId: "talabt-4ca50",
  storageBucket: "talabt-4ca50.appspot.com",
  messagingSenderId: "484575034577",
  appId: "1:484575034577:web:fdb246bdefbf9d01d619f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;