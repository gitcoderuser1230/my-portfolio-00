
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  projectId: "studio-7872096341-c450f",
  appId: "1:612732896176:web:da43c1efd4d6a09f698c75",
  storageBucket: "studio-7872096341-c450f.firebasestorage.app",
  apiKey: "AIzaSyCDnoWKdzyVVTTP_cwoq_SUUXUVoRys_a0",
  authDomain: "studio-7872096341-c450f.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "612732896176",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
