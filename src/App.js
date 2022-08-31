import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

import HomePage from "./pages/Home/HomePage";
import SignupPage from "./pages/SignUpPage";
import SigninPage from "./pages/SignInPage";

import ProfilePage from "./pages/Profile/ProfilePage";
import AppointmentPage from "./pages/Appointment/AppointmentPage";
import CalenderPage from "./pages/Calender/CalenderPage";

import PatientsPage from "./pages/Patients/PatientsPage";

import DashboardPage from "./pages/Dashboard/DashboardPage";

import PatientDetailsPage from "./pages/Patients/components/PatientDetails/PatientDetails";

import ErrorPage from "./pages/Error/ErrorPage";

import PatientGeneralInformation from "./pages/Appointment/PatientGeneralInformation/PatientGeneralInformation";
import PatientMedicalData from "./pages/Appointment/PatientMedicalData/PatientMedicalData";
import PatientIntelligentPrescription from "./pages/Appointment/PatientIntellignetPrescription/PatientIntelligentPrescription";
// Message from ك.ض.ح

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <HomePage />
          </Route>
          <Route path={ROUTES.SIGN_UP}>
            <SignupPage />
          </Route>
          <Route path={ROUTES.SIGN_IN}>
            <SigninPage />
          </Route>

          {/* Dashboard Main Route */}
          <Route exact path={ROUTES.DASHBOARD}>
            <DashboardPage />
          </Route>

          <Route path={ROUTES.PROFILE}>
            <ProfilePage />
          </Route>

          {/* Patients */}

          <Route exact path={ROUTES.PATIENTS}>
            <PatientsPage />
          </Route>

          <Route path={ROUTES.PATIENT_ID}>
            <PatientDetailsPage />
          </Route>

          {/* Calender */}

          <Route path={ROUTES.CALENDER}>
            <CalenderPage />
          </Route>

          {/* Appointment */}

          <Route exact path={ROUTES.APPOINTMENT}>
            <AppointmentPage />
          </Route>

          <Route path={ROUTES.PATIENT_MEDICAL_HISTORY_DETAILS}>
            <PatientGeneralInformation />
          </Route>

          <Route path={ROUTES.PATIENT_DATA_DETAILS}>
            <PatientMedicalData />
          </Route>

          <Route path={ROUTES.PRESCRIPTION_DETAILS}>
            <PatientIntelligentPrescription />
          </Route>


          

          {/* Patients */}

          <Route path={ROUTES.ERROR}>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
