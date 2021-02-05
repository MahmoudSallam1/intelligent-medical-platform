import React from "react";
import { StyledMenu, Item, List, ButtonLink } from "./styles/menu";

import { Link as ReachRouterLink } from "react-router-dom";


export default function Menu({ open, children }) {
  return <StyledMenu open={open}>{children}</StyledMenu>;
}

Menu.Item = function MenuItem({ to, children, ...restProp }) {
  return (
    <ReachRouterLink to={to} {...restProp}>
      {" "}
      <Item>{children}</Item>{" "}
    </ReachRouterLink>
  );
};

Menu.List = function MenuList({ children, ...restProp }) {
  return <List {...restProp}>{children}</List>;
};

Menu.ButtonLink = function MenuButtonLink({ children, ...restProp }) {
  return <ButtonLink {...restProp}>{children}</ButtonLink>;
};
