import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDoqhXFivZj1w__73WIe-3jTQkcyXNybmE",
    authDomain: "tercertiempo-9c883.firebaseapp.com",
    projectId: "tercertiempo-9c883",
    storageBucket: "tercertiempo-9c883.appspot.com",
    messagingSenderId: "305220666766",
    appId: "1:305220666766:web:7ef2aaaa393b4ad96ad0df"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const firestoreDb = getFirestore(app)