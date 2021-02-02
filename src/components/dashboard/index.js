import React from "react";
import {
  Container,
  Navigation,
  List,
  Item,
  Session,
  SessionCard,
  SessionIcon,
  SessionInsights,
  Insight,
} from "./styles/dashboard";
import { Link as ReachRouterLink } from "react-router-dom";

export default function Dashboard({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Dashboard.Navigation = function DashboardNavigation({
  children,
  ...restProps
}) {
  return <Navigation {...restProps}>{children}</Navigation>;
};

Dashboard.List = function DashboardList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Dashboard.Item = function DashboardItem({ to, children, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Item {...restProps}>{children}</Item>
    </ReachRouterLink>
  );
};

Dashboard.Session = function DashboardSession({ children, ...restProps }) {
  return <Session {...restProps}>{children}</Session>;
};

Dashboard.SessionInsights = function DashboardSessionInsights({
  children,
  ...restProps
}) {
  return <SessionInsights {...restProps}>{children}</SessionInsights>;
};

Dashboard.Insight = function DashboardInsight({ children, ...restProps }) {
  return <Insight {...restProps}>{children}</Insight>;
};

Dashboard.SessionCard = function DashboardSessionCard({
  children,
  ...restProps
}) {
  return <SessionCard {...restProps}>{children}</SessionCard>;
};

Dashboard.SessionIcon = function DashboardSessionIcon({ ...restProps }) {
  return <SessionIcon {...restProps} />;
};
