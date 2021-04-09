import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";




const useStyles = makeStyles((theme) => ({


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

function OurGrid({ children }) {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {children}
        </Grid>
        {/* <Box pt={4}>
          <Copyrights />
        </Box> */}
      </Container>
    </main>
  );
}

export default OurGrid;
