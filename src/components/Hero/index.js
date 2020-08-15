import React from "react";
import { Col } from "react-bootstrap";

import "./Hero.css";

function Hero() {
  return (
    <section id="section-hero">
      <section className="hero-text">
        <div className="container-sm">
          <Col xs={12}>
            <h1 className="text-primary text-center">
              How long have you been waiting? <br />
              It's time to do something for YOU!
            </h1>
            <p className="text-center font-light mb-0">
              12 weeks will change your life.
            </p>
          </Col>
        </div>
      </section>
    </section>
  );
}

export default Hero;
