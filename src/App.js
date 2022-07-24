import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

import HomePage from "./pages/Home/HomePage";
import SignupPage from "./pages/SignUpPage";
import SigninPage from "./pages/SignInPage";
import GeneralMedicalHistoryPage from "./pages/general-medical-history";
import PatientDataPage from "./pages/patient-data";
import PrescriptionPage from "./pages/prescription";
import ProfilePage from "./pages/Profile/ProfilePage";
import AppointmentPage from "./pages/Appointment/AppointmentPage";
import CalenderPage from "./pages/CalenderPage";

import PatientsPage from "./pages/Patients/PatientsPage";

import DashboardPage from "./pages/Dashboard/DashboardPage";

import PatientDetailsPage from "./pages/Patients/components/PatientDetails/PatientDetails";

import ErrorPage from "./pages/ErrorPage";

// Message from ك.ض.ح

function App() {
  return (
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

        <Route exact path={ROUTES.MEDICAL_HISTORY}>
          <GeneralMedicalHistoryPage />
        </Route>
        <Route path={ROUTES.PATIENT_MEDICAL_HISTORY_DETAILS}>
          <GeneralMedicalHistoryPage />
        </Route>

        <Route exact path={ROUTES.PATIENT_DATA}>
          <PatientDataPage />
        </Route>
        <Route path={ROUTES.PATIENT_DATA_DETAILS}>
          {" "}
          <PatientDataPage />
        </Route>

        <Route exact path={ROUTES.PRESCRIPTION}>
          <PrescriptionPage />
        </Route>
        <Route path={ROUTES.PRESCRIPTION_DETAILS}>
          {" "}
          <PrescriptionPage />
        </Route>

        <Route path={ROUTES.ERROR}>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
