import React, { useContext, useState, useEffect } from "react";
import Header from "../components/header";
import * as ROUTES from "../constants/routes";

import Session from "../components/session";

import Menu from "../components/menu";
import Burger from "../components/burger";

import { startLogout } from "../firebase/firebase";

export default function SessionContainer({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header>
        <Header.Logo to={ROUTES.HOME} src="/images/logo.png" />
        Mahmoud Sallam
      </Header>

      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen}>
          <Menu.List>
            <Menu.ButtonLink>Start new session</Menu.ButtonLink>
            <Menu.Item to={ROUTES.HOME}>Home</Menu.Item>
            <Menu.Item to={ROUTES.HOME}>Analytics</Menu.Item>
            <Menu.Item to={ROUTES.HOME}>Settings</Menu.Item>
            <Menu.Item onClick={startLogout}>Log out</Menu.Item>
          </Menu.List>
        </Menu>
      </div>

      <Session>

      <Session.Content>


      <Session.Buttons>

          <Session.Button src="/images/icons/session/play.png"/>
          <Session.Button src="/images/icons/session/pause.png"/>
          <Session.Button src="/images/icons/session/upload.png"/>
          <Session.Button src="/images/icons/session/download.png"/>
      </Session.Buttons>



      <Session.Card>
          details of card here
      </Session.Card>




      </Session.Content>


      </Session>


    </>
  );
}
