import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import HeaderContainer from "../containers/header";
import Form from "../components/form";
import FooterContainer from "../containers/footer";
import * as ROUTES from "../constants/routes";

export default function SigninPage() {
  const history = useHistory();
  const [error, setError] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const isInvalid = (password === "") | (emailAddress === "");

  // function handleSignin(event) {
  //   event.preventDefault();
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(emailAddress, password)
  //     .then(() => {
  //       setEmailAddress("");
  //       setPassword("");
  //       setError("");
  //       history.push(ROUTES.BROWSE);
  //     })
  //     .catch((error) => setError(error.message));
  // }

  return (
    <>
      <HeaderContainer />
      <Form bgColor="#1DB5E4">
        <Form.Title>Sign In</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}

        <Form.Base onSubmit={{}} method="POST">
          <Form.Input
            placeholder="Email address"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <Form.Input
            type="password"
            value={password}
            autoComplete="off"
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
          />

          <Form.Submit disabled={isInvalid} type="submit">
            Sign In
          </Form.Submit>

          <Form.Text>
            New to gradProject? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA.
          </Form.TextSmall>
        </Form.Base>
      </Form>
      <FooterContainer />
    </>
  );
}
