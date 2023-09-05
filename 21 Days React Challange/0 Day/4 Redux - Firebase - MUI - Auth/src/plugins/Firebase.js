// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjXC3sZwesecbrzRc0sTCGorLAvaD-He4",
  authDomain: "hello-store-ahsan.firebaseapp.com",
  projectId: "hello-store-ahsan",
  storageBucket: "hello-store-ahsan.appspot.com",
  messagingSenderId: "475219855521",
  appId: "1:475219855521:web:857c181ad671f72b03c8e0",
  measurementId: "G-GPW9744GPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


const logout = () => {
  try{
    signOut(auth)
    .then(() => 
      localStorage.removeItem('accessToken')
    )
  }
  catch (err) {
    console.error(err);
  }
  
};
export { auth, app, db, logout }