import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// getting env variable 
const apiKey = import.meta.env.VITE_api
const authDomain = import.meta.VITE_authDomain
const projectId = import.meta.VITE_projectId
const storageBucket = import.meta.VITE_storageBucket
const messagingSenderId = import.meta.VITE_messagingSenderId
const appId = import.meta.VITE_appId
const measurementId = import.meta.VITE_measurementId


const firebaseConfig = {
    apiKey: apiKey,

    authDomain: authDomain,

    projectId: projectId,

    storageBucket: storageBucket,

    messagingSenderId: messagingSenderId,

    appId: appId,

    measurementId: measurementId

};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
