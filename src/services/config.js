import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fdiproyecto1.firebaseapp.com",
  projectId: "fdiproyecto1",
  storageBucket: "fdiproyecto1.appspot.com",
  messagingSenderId: "623053572299",
  appId: "1:623053572299:web:f69942974ec636c3c5b34e",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
