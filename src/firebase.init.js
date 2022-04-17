// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTLezevsoLGANX6i2oIDcNWtRzpG2JFqk",
  authDomain: "auth-mentalhealth.firebaseapp.com",
  projectId: "auth-mentalhealth",
  storageBucket: "auth-mentalhealth.appspot.com",
  messagingSenderId: "912126378545",
  appId: "1:912126378545:web:66a92a23e02dbc3a558b10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export default auth;