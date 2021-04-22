import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDemAOt2xTXJv4pa_s1LlimwV5Zy0_0aAQ",
  authDomain: "mudassir-firegram.firebaseapp.com",
  projectId: "mudassir-firegram",
  storageBucket: "mudassir-firegram.appspot.com",
  messagingSenderId: "327948692588",
  appId: "1:327948692588:web:cde83b771939789cd7bc49",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//initializing storage and firestore
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
//timstamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

//exporting them to use everywhere
export { projectStorage, projectFirestore, timestamp };
