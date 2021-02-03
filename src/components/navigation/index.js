import React from "react";
import { Link as ReachRouterLink } from "react-router-dom";

import { List, Item, Container, ButtonLink } from "./styles/navigation";

export default function Navigation({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Navigation.List = function NavigationList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Navigation.Item = function NavigationItem({ to, children, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Item {...restProps}>{children}</Item>
    </ReachRouterLink>
  );
};

Navigation.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
