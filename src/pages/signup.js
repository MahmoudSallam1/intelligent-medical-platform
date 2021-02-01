import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
import * as ROUTES from "../constants/routes";

import { auth, createUserProfileDocument } from "../firebase/firebase";

export default function SignupPage() {
  const history = useHistory();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const isInvalid =
    displayName === "" || password === "" || email === "";

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, displayName);
      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      history.push(ROUTES.HOME)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <HeaderContainer />
      <Form bgColor="#1DB5E4">
        <Form.Title>Sign Up</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}

        <Form.Base onSubmit={handleSubmit} method="POST">
          <Form.Input
            placeholder="First Name"
            value={displayName}
            onChange={({ target }) => setDisplayName(target.value)}
          />
          <Form.Input
            placeholder="Email Address"
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
          <Form.Input
            type="password"
            value={confirmPassword}
            autoComplete="off"
            placeholder="Confirm Password"
            onChange={({ target }) => setConfirmPassword(target.value)}
          />

          <Form.Submit disabled={isInvalid} type="submit">
            Sign Up
          </Form.Submit>

          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
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
