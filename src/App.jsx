import React from "react";
import HeroSection from "./components/HeroSection";
import HeroFooter from "./components/HeroFooter";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <HeroFooter />
    </>
  );
};

export default App;
