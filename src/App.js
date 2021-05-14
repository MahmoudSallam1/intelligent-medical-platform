import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

import HomePage from "./pages/home";
import SignupPage from "./pages/signup";
import SigninPage from "./pages/signin";
import GeneralMedicalHistoryPage from "./pages/general-medical-history";
import PatientDataPage from "./pages/patient-data";
import PrescriptionPage from "./pages/prescription";
import ProfilePage from "./pages/profile";

import DashboardPage from "./pages/dashboard";

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
        <Route path={ROUTES.DASHBOARD}>
          <DashboardPage />
        </Route>

        <Route path={ROUTES.MEDICAL_HISTORY}>
          <GeneralMedicalHistoryPage />
        </Route>
        <Route path={ROUTES.PATIENT_DATA}>
          <PatientDataPage />
        </Route>
        <Route path={ROUTES.PRESCRIPTION}>
          <PrescriptionPage />
        </Route>
        <Route path={ROUTES.PROFILE}>
          <ProfilePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
