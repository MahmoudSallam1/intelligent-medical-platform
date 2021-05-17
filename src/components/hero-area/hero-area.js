import React from "react";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import * as ROUTES from "../../constants/routes";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  bg: {
    background: "#fff",
    height: "85vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // backgroundImage:"url(/images/doc.png)",
    // backgroundRepeat:"no-repeat",
    // backgroundPosition: "center",
    // backgroundSize:"cover"
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  container: {
    margin: "0 auto",
    [theme.breakpoints.up("xs")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      // width: "60%",
    },
  },

  heading: {
    color: "#1DB5E4",
    lineHeight: "1.1",
    [theme.breakpoints.up("xs")]: {
      fontSize: "44px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "54px",
      textAlign: "left",
    },
  },
  content: {
    color: "#6B6C6F",
    marginTop: "25px",
    [theme.breakpoints.up("xs")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
      textAlign: "left",
    },
  },

  btnGroup: {
    marginTop: "2em",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      justifyContent: "flex-start",
      marginLeft: "2em",
    },
  },
  btn: {
    boxShadow: "none",
    height: "55px",
    marginRight: "1em",
    padding: "1em 2.5em",
  },

  heroImg: {
    maxWidth: "120%",
    objectFit: "cover",
  },
}));

function HeroArea() {
  const classes = useStyles();

  return (
    <div className={classes.bg}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            {" "}
            <div className={classes.container}>
              {" "}
              <Typography className={classes.heading} variant="h2">
                <Box fontWeight="fontWeightBold">
                  Easy and complete Medical Care Platform.
                </Box>
              </Typography>
              <Typography
                className={classes.content}
                variant="body1"
                gutterBottom
              >
                Doctors can effortlessly manage all major functions of their
                practice through one intuitive platform.
              </Typography>
            </div>
            <div className={classes.btnGroup}>
              {" "}
              <Button
                variant="contained"
                // size="large"
                color="primary"
                className={classes.btn}
                component={Link}
                to={ROUTES.SIGN_UP}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                // size="large"
                color="primary"
                className={classes.btn}
                component={Link}
                to={ROUTES.SIGN_IN}
              >
                Login
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              className={classes.heroImg}
              src="/images/land-hero.svg"
              alt="hero"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HeroArea;
