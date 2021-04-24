import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  breath: {
    padding: "2em",
  },
  marginBot: {
    marginBottom: "1em",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // overflow: "auto",
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

function PaperWrapper({ children }) {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={classes.breath}>{children}</Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default PaperWrapper;
