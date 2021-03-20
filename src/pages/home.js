import React from "react";
import MainNav from "../components/main-nav/main-nav";
import HeroArea from "../components/hero-area/hero-area";

import OurFeatures from "../components/our-features/our-features";

import Footer from '../components/footer/footer'



export default function HomePage() {
  return (
    <>
      <MainNav />
      <HeroArea />
      <OurFeatures />
      <Footer/>
    </>
  );
}
