import React from "react";
import MainNav from "../components/main-nav/main-nav";
import HeroArea from "../components/hero-area/hero-area";

import OurFeatures from "../components/our-features/our-features";
import WhyUs from "../components/why-us/why-us";
import FAQ from "../components/faq/FAQ";
import OurTeam from "../components/our-team/our-team";
import Footer from "../components/footer/footer";

export default function HomePage() {
  return (
    <>
      <MainNav />
      <HeroArea />
      <WhyUs />
      <OurFeatures />
      {/* <OurTeam/> */}
      <FAQ/>
      <Footer />
    </>
  );
}
