import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDQ3r6vr5n3r2ldXSYWhxK708Mzzw4U5l4",
    authDomain: "smieciarka-7d9de.firebaseapp.com",
    projectId: "smieciarka-7d9de",
    storageBucket: "smieciarka-7d9de.appspot.com",
    messagingSenderId: "1029826969044",
    appId: "1:1029826969044:web:6afac6bd882d335e9dea41",
    measurementId: "G-S5VMT7NLZW"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let db = firebaseApp.firestore();

const storage = firebase.storage();

export { storage, db, firebase };
export const auth = firebase.auth;
export const providerGoogle = new firebase.auth.GoogleAuthProvider;
export const provider = new firebase.auth.FacebookAuthProvider();
export default firebase;
