import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Alert from "@material-ui/lab/Alert";
import Box from "@material-ui/core/Box";

import * as ROUTES from "../constants/routes";

import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { signIn } from "../store/actions/authActions";

// import MainNav from "./Home/components/MainNav/MainNav";
import CustomButton from "../components/custom-button/custom-button";
// import Footer from "./Home/components/footer/footer";


const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
    justifyContent: "center",
    alignItems: "center",
    background:"#F5F6FA"
  },
  image: {
    backgroundImage: "url(/images/sign-in.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#fff",
    padding: "3em",
    borderRadius: "8px",
    border: "1px solid #E0E0E0",
    boxShadow: "0 10px 20px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .06)"


  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  error: {
    marginTop: theme.spacing(2),
  },
}));

function SignIn(props) {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const isInvalid = (password === "") | (email === "");

  function handleSubmit(e) {
    e.preventDefault();
    props.signIn({ email, password });
  }

  const { authError, auth } = props;

  if (auth.uid) return <Redirect to={ROUTES.DASHBOARD} />;

  return (
    <div className={classes.section}>
      {/* <MainNav /> */}

      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        {/* <Grid item xs={false} sm={4} md={8} className={classes.image} /> */}

        <Grid item xs={12} sm={6} md={4} className={classes.container}>
          <Box className={classes.paper}  >
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <div className="">
              {authError ? (
                <Alert className={classes.error} severity="error">
                  {authError}
                </Alert>
              ) : null}
            </div>
            <form
              className={classes.form}
              onSubmit={handleSubmit}
              method="POST"
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={({ target }) => setEmail(target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={({ target }) => setPassword(target.value)}
              />

              <CustomButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: "1em" }}
                // className={classes.submit}
                // disabled={isInvalid}
              >
                Sign In
              </CustomButton>

              <Grid container style={{ marginTop: "2.5em" }}>
              
                <Grid item>
                  <Link to={ROUTES.SIGN_UP}>
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
