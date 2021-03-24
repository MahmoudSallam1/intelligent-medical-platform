import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import AppBarAndDrawer from "../app-bar-drawer/app-bar-drawer";

import GeneralMedicalHistory from "./general-medical-history/general-medical-history";
import PatientData from "./patient-data/patient-data";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function AppointmentLayout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* appbar and drawer starts here */}
      <AppBarAndDrawer pageTitle={"Appointment"} />
      {/* appbar and drawer ends here */}

      {/* <GeneralMedicalHistory /> */}
      <PatientData />
      

    </div>
  );
}
