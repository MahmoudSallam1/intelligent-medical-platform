import React from "react";
import { Link as ReachRouterLink } from "react-router-dom";
import { Container, Logo, ButtonLink } from "./styles/button-link";

export default function ButtonLinks({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ButtonLinks.Logo = function ButtonLinksLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

ButtonLinks.ButtonLink = function ButtonLinksButtonLink({
  children,
  ...restProps
}) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
