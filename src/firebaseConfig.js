import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAWWxTjGIrfpesbeg1tr22q-ri1FU_C7hY",
    authDomain: "ecommerce-coderhouse-demo.firebaseapp.com",
    projectId: "ecommerce-coderhouse-demo",
    storageBucket: "ecommerce-coderhouse-demo.appspot.com",
    messagingSenderId: "511759506668",
    appId: "1:511759506668:web:c68a0112ea011da5a519c9"
};

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)