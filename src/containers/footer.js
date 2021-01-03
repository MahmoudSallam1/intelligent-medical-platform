import React from "react";
import Footer from "../components/footer";

export default function FooterContainer({ children }) {
  return (
    <Footer>
      <Footer.Title>gradProject.</Footer.Title>
      <Footer.Content>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </Footer.Content>

      <Footer.Content>
        All copyrights reserved to gradproject 2020.
      </Footer.Content>
    </Footer>
  );
}
