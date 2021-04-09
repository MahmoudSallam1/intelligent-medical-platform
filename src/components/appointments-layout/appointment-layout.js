import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

import { Route } from "react-router-dom";

import OurGrid from "../grid/grid";

import AppBarAndDrawer from "../app-bar-drawer/app-bar-drawer";

import GeneralMedicalHistory from "./general-medical-history/general-medical-history";
import PatientData from "./patient-data/patient-data";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  breath: {
    padding: "2em",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginTop: "2em",
  },
}));

export default function AppointmentLayout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* appbar and drawer starts here */}
      <AppBarAndDrawer pageTitle={"Appointment"} />

      {/* appbar and drawer ends here */}

      {children}
      {/* <PatientData /> */}
    </div>
  );
}
