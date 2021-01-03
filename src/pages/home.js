import React from "react";
import HeaderContainer from "../containers/header";
import BackgroundContainer from "../containers/background";
import FeaturesContainer from "../containers/features";
import FooterContainer from "../containers/footer";

export default function HomePage() {
  return (
    <>
      <HeaderContainer />
      <BackgroundContainer />
      <FeaturesContainer />
      <FooterContainer />
    </>
  );
}
