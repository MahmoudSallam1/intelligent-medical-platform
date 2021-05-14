import authReducer from "./authReducer";
import patientGeneralMedicalHistoryReducer from "./patientGeneralMedicalHistoryReducer";
import patientDataReducer from "./patientDataReducer";
import prescriptionReducer from "./prescriptionReducer";
import userProfileReducer from "./userProfileReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  patientGeneralMedicalHistory: patientGeneralMedicalHistoryReducer,
  patientData: patientDataReducer,
  prescription: prescriptionReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  userProfile: userProfileReducer,
});

export default rootReducer;

// the key name will be the data property on the state object
