import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import HeaderContainer from "../containers/header";
import Form from "../components/form";
import FooterContainer from "../containers/footer";
import * as ROUTES from "../constants/routes";

import { auth, signInWithGoogle } from "../firebase/firebase";

export default function SigninPage() {
  const history = useHistory();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isInvalid = (password === "") | (email === "");

  async function handleSubmit(e) {
    e.preventDefault();

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
    <>
      <HeaderContainer />
      <Form bgColor="#1DB5E4">
        <Form.Title>Sign In</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}

        <Form.Base onSubmit={handleSubmit} method="POST">
          <Form.Input
            placeholder="Email address"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
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

          <Form.Submit googleColor onClick={signInWithGoogle}>
            Sign in with Google
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
