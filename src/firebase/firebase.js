import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCTnfQKl_CY754VgkHY8Clt_1Ns1wr9M48",
  authDomain: "grad-project-34ddf.firebaseapp.com",
  projectId: "grad-project-34ddf",
  storageBucket: "grad-project-34ddf.appspot.com",
  messagingSenderId: "438276642716",
  appId: "1:438276642716:web:60d116334959609316da59",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export const storage = firebase.storage();


export default firebase;
