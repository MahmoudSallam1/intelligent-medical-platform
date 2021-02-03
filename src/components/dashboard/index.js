import React from "react";
import {
  Container,
  Session,
  SessionCard,
  SessionIcon,
  SessionInsights,
  Insight,
} from "./styles/dashboard";




export default function Dashboard({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

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
