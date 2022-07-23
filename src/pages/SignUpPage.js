import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";

import Box from "@material-ui/core/Box";

import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";

import { signUp } from "../store/actions/authActions";

// import MainNav from "./Home/components/MainNav/MainNav";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import CustomButton from "../components/custom-button/custom-button";
// import Footer from "./Home/components/footer/footer";

const useStyles = makeStyles((theme) => ({
  section: {
    // background: "#EEF9FE"
    background: "#F5F6FA",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2em",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "83vh",
    background: "#fff",
    padding: "2em",
    borderRadius: "8px",
    border: "1px solid #E0E0E0",
    boxShadow: "0 10px 20px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .06)",
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp(props) {
  const classes = useStyles();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isInvalid = displayName === "" || password === "" || email === "";

  async function handleSubmit(e) {
    e.preventDefault();
    props.signUp({ email, password, displayName });
  }

  const { auth, authError } = props;
  if (auth.uid) return <Redirect to={ROUTES.DASHBOARD} />;

  return (
    <div className={classes.section}>
      {/* <MainNav /> */}
      <Container className={classes.container} component="main" maxWidth="xs">
        <CssBaseline />

        <Box className={classes.paper} boxShadow={1}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
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
            //   noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="displayName"
              label="Display name"
              name="displayName"
              autoComplete="text"
              autoFocus
              onChange={({ target }) => setDisplayName(target.value)}
            />
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm password"
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
              onChange={({ target }) => setConfirmPassword(target.value)}
            />

            <CustomButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: "1em" }}
              // disabled={isInvalid}
            >
              Sign Up
            </CustomButton>
            <Grid container>
              <Grid item style={{ marginTop: "2.5em" }}>
                Already a user?
                <Link to={ROUTES.SIGN_IN}> Sign in now.</Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
