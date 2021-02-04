import React from "react";
import { StyledMenu, Item, List, ButtonLink } from "./styles/menu";

import { Link as ReachRouterLink } from "react-router-dom";

import { startLogout } from "../../firebase/firebase";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <List>
        <ButtonLink>Start session</ButtonLink>{" "}
        <ReachRouterLink to="/">
          <Item>Home</Item>
        </ReachRouterLink>
        <ReachRouterLink to="/">
          <Item>Analytics</Item>
        </ReachRouterLink>
        <ReachRouterLink to="/">
          <Item>Settings</Item>
        </ReachRouterLink>
        <ReachRouterLink to="/">
          <Item onClick={startLogout}>Log out</Item>
        </ReachRouterLink>
      </List>
    </StyledMenu>
  );
};
export default Menu;
