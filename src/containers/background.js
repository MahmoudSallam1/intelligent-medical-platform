import React from "react";
import Background from "../components/background";

export default function BackgroundContainer({ children }) {
  return (
    <Background>
      <Background.Title>
        It's time to digitize doctor's prescription.
      </Background.Title>
      <Background.Span></Background.Span>
    </Background>
  );
}
