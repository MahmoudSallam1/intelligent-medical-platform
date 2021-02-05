import React, { useContext, useState, useEffect } from "react";
import Header from "../components/header";
import * as ROUTES from "../constants/routes";

import Dashboard from "../components/dashboard";

import Menu from "../components/menu";
import Burger from "../components/burger";

import { startLogout } from '../firebase/firebase';

export default function DashboardContainer({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header>
        <Header.Logo to={ROUTES.HOME} src="/images/logo.png" />
      </Header>

      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen}>
          <Menu.List>
            <Menu.Item to={ROUTES.HOME}>Home</Menu.Item>
            <Menu.Item to={ROUTES.HOME}>Analytics</Menu.Item>
            <Menu.Item to={ROUTES.HOME}>Settings</Menu.Item>
            <Menu.ButtonLink onClick={startLogout}>Log out</Menu.ButtonLink>
          </Menu.List>
        </Menu>
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
