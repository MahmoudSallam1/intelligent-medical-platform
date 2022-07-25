import React from "react";
import "./error.css";

import { Link } from "react-router-dom";


function ErrorPage() {
  return (
    <div className="error-container">
      {/* <img className="error" src="/images/error.png" alt="404" />{" "} */}
      <h1 className="error-h1">404</h1>
      <h2 className="error-h2">UH OH! You're lost.</h2>
      <p className="error-p">
        The page you are looking for does not exist. How you got here is a
        mystery. But you can click the button below to go back to the homepage.
      </p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default ErrorPage;
