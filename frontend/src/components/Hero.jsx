import React from 'react'
import NavBar from "./NavBar";
import Home from "./Home";
import LogoCarousel from "./logoc";
import Features from "./Features";
import About from "./About";
import Pricing from "./Pricing";
import Footer from "./Footer";

const Hero = () => {
  return (
    <>
      <NavBar />
      <Home />
      <LogoCarousel />
      <Features />
      <About />
      <Pricing />
      <Footer />
    </>
  );
}

export default Hero