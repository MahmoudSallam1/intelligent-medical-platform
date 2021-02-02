import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCTnfQKl_CY754VgkHY8Clt_1Ns1wr9M48",
  authDomain: "grad-project-34ddf.firebaseapp.com",
  projectId: "grad-project-34ddf",
  storageBucket: "grad-project-34ddf.appspot.com",
  messagingSenderId: "438276642716",
  appId: "1:438276642716:web:60d116334959609316da59",
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/** To sign up using google
 * Link for developer documentation (https://firebase.google.com/docs/auth/web/google-signin)
 */

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  promt: "select_account",
});

// Check if user exists if not create a user
export const createUserProfileDocument = async (userAuth: any) => {
  if (!userAuth) return;

  const userReference = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userReference.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userReference.set({
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userReference;
};
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const startLogout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => console.log("User signed out!"));
};
