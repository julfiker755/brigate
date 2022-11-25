import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDVmKT41k1MUGXD2rwR3W6hC4VUAVSIy_4",
    authDomain: "newproject-firebase-ce0e7.firebaseapp.com",
    projectId: "newproject-firebase-ce0e7",
    storageBucket: "newproject-firebase-ce0e7.appspot.com",
    messagingSenderId: "63715905546",
    appId: "1:63715905546:web:ded32da15c30c864520ff3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;