import React, { useState, useEffect } from "react";
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

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import cookies from "js-cookie";

import MenuItem from "@material-ui/core/MenuItem";

import Select from "@material-ui/core/Select";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "sa",
  },
];

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "ar"],
    fallbackLng: "en",
    detection: {
      order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

// Message from ك.ض.ح

function App() {
  const [language, setLanguage] = useState(cookies.get("i18next") || "en");

  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  const handleChange = (event) => {
    setLanguage(event.target.value);
    i18next.changeLanguage(event.target.value);
  };
  const { t } = useTranslation();

  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
    // document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <Router>
      <Select
        labelId="language"
        id="language"
        value={language}
        onChange={handleChange}
      >
        {languages.map((lang) => (
          <MenuItem key={lang.code} value={lang.code}>
            {lang.name}
          </MenuItem>
        ))}
      </Select>
      <h2>{t("Welcome_to_react")}</h2>
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
        {/* Patients */}

        <Route path={ROUTES.ERROR}>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
