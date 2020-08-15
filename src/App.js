import React from "react";

import NavMenu from "./components/NavMenu/";
import Hero from "./components/Hero/";
import Blokes from "./components/Blokes/";
import Results from "./components/Results/";
import WhyItWorks from "./components/WhyItWorks/";
import FitnessPrograms from "./components/FitnessPrograms/";
import Benefits from "./components/Benefits/";
import SocialBanner from "./components/SocialBanner/";
import CallToAction from "./components/CallToAction/";
import Footer from "./components/Footer/";

function App() {
  return (
    <main>
      <NavMenu />
      <Hero />
      <Blokes />
      <Results />
      <WhyItWorks />
      <FitnessPrograms />
      <Benefits />
      <SocialBanner />
      <CallToAction />
      <Footer />
    </main>
  );
}

export default App;
