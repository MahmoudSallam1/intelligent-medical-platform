import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import * as ROUTES from "../../constants/routes";

import AppBarAndDrawer from "../app-bar-drawer/app-bar-drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "#F5F6FA",
  },
}));

function DashboardLayout({ children, pageTitle, auth }) {
  const classes = useStyles();
  if (!auth.uid) return <Redirect to={ROUTES.SIGN_IN} />;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarAndDrawer pageTitle={pageTitle} />
      {children}
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(DashboardLayout);
