import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIZjI2vGmh47pHMZCLhKDP8BXPwAH7x3Q",
  authDomain: "video-37048.firebaseapp.com",
  projectId: "video-37048",
  storageBucket: "video-37048.appspot.com",
  messagingSenderId: "384213583244",
  appId: "1:384213583244:web:f5d6a2e34dc9b37fc042a9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
