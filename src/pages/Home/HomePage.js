import React from "react";
import MainNav from "./components/MainNav/MainNav";
import HeroArea from "./components/HeroArea/HeroArea";

import OurFeatures from "./components/OurFeatures/OurFeatures";
import WhyUs from "./components/WhyUs/WhyUs";
import FAQ from "./components/FAQs/FAQ";
import OurTeam from "./components/OurTeam/OurTeam";
import Footer from "./components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <MainNav />
      <HeroArea />
      <WhyUs />
      <OurFeatures />
      <OurTeam/>
      <FAQ/>
      <Footer />
    </>
  );
}
