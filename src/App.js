import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavMenu from "./components/NavMenu";
import Hero from "./components/Hero";
import Blokes from "./components/Blokes";
import WhyItWorks from "./components/WhyItWorks";
import FitnessPrograms from "./components/FitnessPrograms";
import Benefits from "./components/Benefits";

import "bootstrap/dist/css/bootstrap.css";
import SocialBanner from "./components/SocialBanner";

function App() {
  return (
    <Router>
      <NavMenu />
      <Hero />
      <Blokes />
      <WhyItWorks />
      <FitnessPrograms />
      <Benefits />
      <SocialBanner />
    </Router>
  );
}

export default App;
