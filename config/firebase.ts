// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFjVLDirmDfAEB7m9x89MpniiwPIZk-YY",
  authDomain: "fir-clone-7aa9f.firebaseapp.com",
  projectId: "fir-clone-7aa9f",
  storageBucket: "fir-clone-7aa9f.appspot.com",
  messagingSenderId: "478046362862",
  appId: "1:478046362862:web:29365cea2f1409373327ff",
};

// Initialize Firebase
const app = getApps().length ? getApps() : initializeApp(firebaseConfig);

const db = getFirestore(app as any);

const auth = getAuth(app as any);

const provider = new GoogleAuthProvider();

export { db, auth, provider };
