import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyCoffeeHub from "../components/WhyCoffeeHub";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyCoffeeHub />
      <HowItWorks />
      <FAQ />
      <Footer />
    </>
  );
};

export default LandingPage;
