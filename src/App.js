import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

import HomePage from "./pages/home";
import SignupPage from "./pages/signup";
import SigninPage from "./pages/signin";

function App() {
  const [placeholder, setPlaceholder] = useState("Hi");

  useEffect(() => {
    fetch("/hello")
      .then((res) => res.json())
      .then((data) => {
        setPlaceholder(data.result);
      });
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <HomePage />
            {/* <p>Flask says {placeholder}</p> */}
          </Route>
          <Route path={ROUTES.SIGN_UP}>
            <SignupPage/>
          </Route>

          <Route path={ROUTES.SIGN_IN}>
            <SigninPage/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
