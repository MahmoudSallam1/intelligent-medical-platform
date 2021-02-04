import React, { useContext, useState } from "react";
import Header from "../components/header";
import * as ROUTES from "../constants/routes";

import Dashboard from "../components/dashboard";

import Menu from "../components/menu";
import Burger from "../components/burger";

export default function DashboardContainer({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header>
        <Header.Logo to={ROUTES.HOME} src="/images/logo.png" />
        Mahmoud Sallam
      </Header>


      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>

      <Dashboard>
        <Dashboard.Session>
          <Dashboard.Content>
            <Dashboard.SessionInsights>
              <Dashboard.Insight>Lorem ipsum</Dashboard.Insight>
              <Dashboard.Insight>Lorem ipsum</Dashboard.Insight>
              <Dashboard.Insight>Lorem ipsum</Dashboard.Insight>
              <Dashboard.Insight>Lorem ipsum</Dashboard.Insight>
            </Dashboard.SessionInsights>

            <Dashboard.SessionCard>
              <Dashboard.SessionIcon src="./images/session.png" />
            </Dashboard.SessionCard>
          </Dashboard.Content>
        </Dashboard.Session>
      </Dashboard>
    </>
  );
}
