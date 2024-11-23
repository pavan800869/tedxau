import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SpeakersSection from "../components/SpeakersSection";
import "../styles/home.css"
import "../styles/common.css"

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <SpeakersSection /> */}
    </>
  );
};

export default Home;
