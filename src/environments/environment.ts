import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration object
export const environment = {
  production: false,

  firebaseConfig: {
    apiKey: "AIzaSyB1KGkE7lY3LzWaJdcj4hLMI3tGPV09Hxs",
    authDomain: "pruebaapp-95425.firebaseapp.com",
    projectId: "pruebaapp-95425",
    storageBucket: "pruebaapp-95425.appspot.com",
    messagingSenderId: "218587875883",
    appId: "1:218587875883:web:62d7cf58d1a53beeff386e",
    measurementId: "G-N62WY3W6N4"
  }
};

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);
