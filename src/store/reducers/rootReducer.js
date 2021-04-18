import authReducer from "./authReducer";
import patientGeneralInformationReducer from "./patientGeneralInformationReducer";
import patientDataReducer from "./patientDataReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  patientGeneralInformation: patientGeneralInformationReducer,
  patientData: patientDataReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;

// the key name will be the data property on the state object
