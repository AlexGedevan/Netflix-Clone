// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB03uV2GLus9X3VSX6n32K1Y84AVG1YGaE",
  authDomain: "netflix-clone-2c3b8.firebaseapp.com",
  projectId: "netflix-clone-2c3b8",
  storageBucket: "netflix-clone-2c3b8.appspot.com",
  messagingSenderId: "351683546422",
  appId: "1:351683546422:web:824326c23f49c5f36df797",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
