import React from "react";
import HowToRegIcon from "@material-ui/icons/HowToReg";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
 
  gray: {
    color: "#616161",
    fontWeight: "400",
    fontSize: "1rem",
    width:"60%",
    textAlign:"center",
    margin:"0 auto"
  },
  card: {
    padding: "2em",
    background: "#EEF9FE",
  },


}));

function Done() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <HowToRegIcon style={{ fontSize: "14rem" }} color="primary" />
          <Typography className={classes.gray} variant="body2" gutterBottom>
            Have you or your blood relatives had any of the following (include
            grandparents, aunts and uncles, but exclude cousins, relatives by
            marriage and half-relatives)?
          </Typography>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
    </Container>
  );
}

export default Done;
