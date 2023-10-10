import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD5V1HlfdHzzNkZbEEL1pSoKFfm6hea6p4",
  authDomain: "moviedb-app-106a0.firebaseapp.com",
  projectId: "moviedb-app-106a0",
  storageBucket: "moviedb-app-106a0.appspot.com",
  messagingSenderId: "844609124839",
  appId: "1:844609124839:web:0d9f49504a2c50cf99e542",
  measurementId: "G-LDDZZNVG3Z",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
