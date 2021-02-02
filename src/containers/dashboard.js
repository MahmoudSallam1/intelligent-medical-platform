import React from "react";
import Header from "../components/header";
import * as ROUTES from "../constants/routes";
import { startLogout } from "../firebase/firebase";

import Dashboard from "../components/dashboard";

export default function DashboardContainer({ children }) {
  return (
    <>
      <Header>
        <Header.Logo to={ROUTES.HOME} src="/images/logo.png" />
        Mahmoud Sallam
      </Header>

      <Dashboard>
        <Dashboard.Navigation>
          <Dashboard.List>
            <Dashboard.Item to={ROUTES.HOME}>Home</Dashboard.Item>
            <Dashboard.Item to={ROUTES.HOME}>Analytics</Dashboard.Item>
            <Dashboard.Item to={ROUTES.HOME}>Settings</Dashboard.Item>
            <Dashboard.Item onClick={startLogout}>Log out</Dashboard.Item>
          </Dashboard.List>
        </Dashboard.Navigation>

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
