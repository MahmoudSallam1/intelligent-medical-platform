import React from "react";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  bg: {
    background: "#1DB5E4",
    height: "350px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  white: {
    color: "#fff",
  },
}));

function HeroArea() {
  const classes = useStyles();

  return (
    <div className={classes.bg}>
      <Container>
        <Typography className={classes.white} variant="h3" gutterBottom>
          <Box fontWeight="fontWeightMedium" m={1}>
            It's time to digitize doctor's prescription.
          </Box>
        </Typography>
      </Container>
    </div>
  );
}

export default HeroArea;
