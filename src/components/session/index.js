import React from "react";
import {
  Container,
  Card,
  SessionIcon,
  Buttons,
  Content,
  Button,
} from "./styles/session";

import { Link as ReachRouterLink } from "react-router-dom";

export default function Session({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Session.Content = function SessionContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Session.Buttons = function SessionButtons({
  children,
  ...restProps
}) {
  return <Buttons {...restProps}>{children}</Buttons>;
};

Session.Button = function SessionButton({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Button {...restProps} />
    </ReachRouterLink>
  );
};

Session.Card = function SessionCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

// Session.SessionIcon = function DashboardSessionIcon({ ...restProps }) {
//   return <SessionIcon {...restProps} />;
// };
