import React from "react";

import "../index.css";
import MishAndTodd from "../assets/img/home/mishandtodd-hp.jpg";

export const Blokes = () => {
  return (
    <section id="section-blokes">
      <div className="section-content">
        <div className="section-text">
          <p className="title">
            NEW <strong>BLOKES ONLY PROGRAM</strong>
            <br />
            HAS LAUNCHED!
          </p>
          <p>
            I’ve partnered with master strength &amp; conditioning expert, Todd
            Liubinskas, to develop an online program like no other - created
            <strong> for</strong> blokes,
            <strong> by</strong> blokes.
          </p>
          <a href="https://www.12wbt.com/blokes-only">
            <div className="section-button">Check it out NOW</div>
          </a>
        </div>
      </div>
      <div className="section-image">
        <img src={MishAndTodd} alt="Mish and Todd - Blokes Only" />
      </div>
    </section>
  );
};

export default Blokes;
