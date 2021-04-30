import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  breath: {
    padding: "2em",
    background: "#ffffff",
    /* box-shadow: 0 3px 10px rgba(0, 0, 0, .06), 0 0 3px rgba(0, 0, 0, .04); */
    transition:
      ".3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12)",
    borderRadius: "10px",
    border: "1px solid #E0E0E0",
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
            <Paper elevation={0} className={classes.breath}>{children}</Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default PaperWrapper;
