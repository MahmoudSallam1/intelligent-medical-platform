import React, { useContext } from "react";
import Header from "../components/header";
import * as ROUTES from "../constants/routes";
import { startLogout } from "../firebase/firebase";

import Dashboard from "../components/dashboard";

import Navigation from "../components/navigation";

export default function DashboardContainer({ children }) {
  return (
    <>
      <Header>
        <Header.Logo to={ROUTES.HOME} src="/images/logo.png" />
        Mahmoud Sallam
      </Header>

      <Navigation>
        <Navigation.List>
        <Navigation.ButtonLink>Start session</Navigation.ButtonLink>
          <Navigation.Item to={ROUTES.HOME}>Home</Navigation.Item>
          <Navigation.Item to={ROUTES.HOME}>Analytics</Navigation.Item>
          <Navigation.Item to={ROUTES.HOME}>Settings</Navigation.Item>
          <Navigation.Item onClick={startLogout}>Log out</Navigation.Item>
        </Navigation.List>
      </Navigation>

      <Dashboard>
        <Dashboard.Session>
          <Dashboard.SessionInsights>
            <Dashboard.Insight>Lorem ipsum</Dashboard.Insight>
            <Dashboard.Insight>Lorem ipsum</Dashboard.Insight>
            <Dashboard.Insight>Lorem ipsum</Dashboard.Insight>
            <Dashboard.Insight>Lorem ipsum</Dashboard.Insight>
          </Dashboard.SessionInsights>

          <Dashboard.SessionCard>
            <Dashboard.SessionIcon src="./images/session.png" />
          </Dashboard.SessionCard>
        </Dashboard.Session>
      </Dashboard>
    </>
  );
}
