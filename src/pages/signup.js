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

import Box from '@material-ui/core/Box';


import { useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";

import { auth, createUserProfileDocument } from "../firebase/firebase";

const useStyles = makeStyles((theme) => ({
  container:{
    display:"flex",
    height:"100vh",
    justifyContent:"center",
    alignItems:"center"


  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "90vh",
    background:"#fff",
    padding:"2em",
    borderRadius:"8px",
    
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

export default function SignUp() {
  const classes = useStyles();

  const history = useHistory();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const isInvalid = displayName === "" || password === "" || email === "";

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth
        .createUserWithEmailAndPassword(email, password)
        .then(function (result) {
          result.user.updateProfile({
            displayName: displayName,
          });
          createUserProfileDocument(user, displayName);
          setDisplayName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          history.push(ROUTES.HOME);
        });

      await createUserProfileDocument(user, displayName);
      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      history.push(ROUTES.HOME);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <CssBaseline />

      <Box className={classes.paper} boxShadow={1}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isInvalid}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              Already a user?
              <Link to={ROUTES.SIGN_IN}> Sign in now.</Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}

// import React, { useState, useContext } from "react";
// import { useHistory } from "react-router-dom";
// import HeaderContainer from "../containers/header";
// import FooterContainer from "../containers/footer";
// import Form from "../components/form";
// import * as ROUTES from "../constants/routes";

// import { auth, createUserProfileDocument } from "../firebase/firebase";

// export default function SignupPage() {
//   const history = useHistory();

//   const [displayName, setDisplayName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const [error, setError] = useState("");

//   const isInvalid = displayName === "" || password === "" || email === "";

//   async function handleSubmit(e) {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert("password don't match");
//       return;
//     }

//     try {
//       const { user } = await auth
//         .createUserWithEmailAndPassword(email, password)
//         .then(function (result) {
//           result.user.updateProfile({
//             displayName: displayName,
//           });
//           // createUserProfileDocument(user, displayName);
//           setDisplayName("");
//           setEmail("");
//           setPassword("");
//           setConfirmPassword("");
//           history.push(ROUTES.HOME);
//         });

//       // await createUserProfileDocument(user, displayName);
//       // setDisplayName("");
//       // setEmail("");
//       // setPassword("");
//       // setConfirmPassword("");
//       // history.push(ROUTES.HOME);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   return (
//     <>
//       <HeaderContainer />
//       <Form bgColor="#1DB5E4">
//         <Form.Title>Sign Up</Form.Title>
//         {error && <Form.Error>{error}</Form.Error>}

//         <Form.Base onSubmit={handleSubmit} method="POST">
//           <Form.Input
//             placeholder="First Name"
//             value={displayName}
//             onChange={({ target }) => setDisplayName(target.value)}
//           />
//           <Form.Input
//             placeholder="Email Address"
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
//           <Form.Input
//             type="password"
//             value={confirmPassword}
//             autoComplete="off"
//             placeholder="Confirm Password"
//             onChange={({ target }) => setConfirmPassword(target.value)}
//           />

//           <Form.Submit disabled={isInvalid} type="submit">
//             Sign Up
//           </Form.Submit>

//           <Form.Text>
//             Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
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
