import React from "react";
import Header from "../components/header";
import * as ROUTES from "../constants/routes";


export default function HeaderContainer({ children }) {
  return (
    <>
      <Header>
        <Header.Logo to={ROUTES.HOME} src="/images/logo.png" />
        <Header.ButtonLink to={ROUTES.SIGN_UP}>Join now</Header.ButtonLink>
      </Header>
    </>
  );
}
