import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Chart from "./chart";
import Insights from "./insights";
import Appointments from "./appointments";

import AppBarAndDrawer from "../app-bar-drawer/app-bar-drawer";


import * as ROUTES from "../../constants/routes";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

import ModernCard from "../modern-card/modern-card";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "#F5F6FA",
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

function Dashboard(props) {
  const { auth } = props;

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  if (!auth.uid) return <Redirect to={ROUTES.SIGN_IN} />;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBarAndDrawer pageTitle={"Dashboard"} />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* <Box pt={4}>
          <Copyrights />
        </Box> */}

            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <ModernCard className={fixedHeightPaper}>
                <Chart />
              </ModernCard>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <ModernCard className={fixedHeightPaper}>
                <Insights />
              </ModernCard>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <ModernCard className={classes.paper}>
                <Appointments />
              </ModernCard>
            </Grid>
          </Grid>
        </Container>
      </main>
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

export default connect(mapStateToProps)(Dashboard);
