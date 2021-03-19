import React from "react";
import MainNav from "../components/main-nav/main-nav";
import HeroArea from "../components/hero-area/hero-area";
import FeaturesContainer from "../containers/features";
import FooterContainer from "../containers/footer";

export default function HomePage() {
  return (
    <>
      <MainNav />
      <HeroArea />
      <FeaturesContainer />
      <FooterContainer/>
    </>
  );
}
