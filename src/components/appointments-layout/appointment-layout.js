import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import AppBarAndDrawer from "../app-bar-drawer/app-bar-drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background:"#F5F6FA"
  },

}));

export default function AppointmentLayout({ children ,pageTitle }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarAndDrawer pageTitle={pageTitle} />
      {children}
    </div>
  );
}
