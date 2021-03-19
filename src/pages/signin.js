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
import Container from "@material-ui/core/Container";

import { useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";

import {Link} from 'react-router-dom'

import { auth, signInWithGoogle } from "../firebase/firebase";

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "90vh",
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const history = useHistory();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isInvalid = (password === "") | (email === "");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email,password)

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
      history.push(ROUTES.DASHBOARD);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isInvalid}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to={ROUTES.SIGN_UP} >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

// export default function SigninPage() {
//   const history = useHistory();
//   const [error, setError] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const isInvalid = (password === "") | (email === "");

//   async function handleSubmit(e) {
//     e.preventDefault();

//     try {
//       await auth.signInWithEmailAndPassword(email, password);
//       setEmail("");
//       setPassword("");
//       history.push(ROUTES.DASHBOARD);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   return (
//     <>
//       <HeaderContainer />
//       <Form bgColor="#1DB5E4">
//         <Form.Title>Sign In</Form.Title>
//         {error && <Form.Error>{error}</Form.Error>}

//         <Form.Base onSubmit={handleSubmit} method="POST">
//           <Form.Input
//             placeholder="Email address"
//             value={email}
//             onChange={({ target }) => setEmail(target.value)}
//           />
//           <Form.Input
//             type="password"
//             value={password}
//             autoComplete="off"
//             placeholder="Password"
//             onChange={({ target }) => setPassword(target.value)}
//           />

//           <Form.Submit disabled={isInvalid} type="submit">
//             Sign In
//           </Form.Submit>

//           <Form.Submit googleColor onClick={signInWithGoogle}>
//             Sign in with Google
//           </Form.Submit>

//           <Form.Text>
//             New to gradProject? <Form.Link to="/signup">Sign up now.</Form.Link>
//           </Form.Text>
//           <Form.TextSmall>
//             This page is protected by Google reCAPTCHA.
//           </Form.TextSmall>
//         </Form.Base>
//       </Form>
//       <FooterContainer />
//     </>
//   );
// }
