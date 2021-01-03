import React from "react";
import { Container, Title, Row, Column, Text, Icon } from "./styles/features";

export default function Features({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Features.Title = function FeaturesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Features.Row = function FeaturesRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Features.Column = function FeaturesColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Features.Text = function FeaturesText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Features.Icon = function FeaturesIcon({ children, ...restProps }) {
  return <Icon {...restProps} />;
};


