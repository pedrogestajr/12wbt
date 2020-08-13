import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavMenu from "./components/NavMenu";
import Hero from "./components/Hero";
import Blokes from "./components/Blokes";

import "bootstrap/dist/css/bootstrap.css";
import WhyItWorks from "./components/WhyItWorks";
import FitnessPrograms from "./components/FitnessPrograms";

function App() {
  return (
    <Router>
      <NavMenu />
      <Hero />
      <Blokes />
      <WhyItWorks />
      <FitnessPrograms />
    </Router>
  );
}

export default App;
