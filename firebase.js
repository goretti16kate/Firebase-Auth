// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPgvvdZSGtOPJZj9IQcy5PmidKigDlTwk",
    authDomain: "auth-begins.firebaseapp.com",
    projectId: "auth-begins",
    storageBucket: "auth-begins.appspot.com",
    messagingSenderId: "953987140212",
    appId: "1:953987140212:web:ac9306b44c5a510f639f21"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };