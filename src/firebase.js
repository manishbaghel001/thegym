
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCCDgZ9DMwqIqBGNN796DBfGOkGzpntETw",
    authDomain: "thegym-f93c5.firebaseapp.com",
    projectId: "thegym-f93c5",
    storageBucket: "thegym-f93c5.appspot.com",
    messagingSenderId: "711467980647",
    appId: "1:711467980647:web:f5181cbec3124a322b41c2",
    measurementId: "G-3CYW2YXGQF"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();