import React from "react";
import { Container, Col } from "react-bootstrap";

import "../index.css";

export const Hero = () => {
  return (
    <section id="section-hero">
      <section className="hero-text">
        <Container fuild="sm">
          <Col xs={12}>
            <h1>
              How long have you been waiting? <br />
              It's time to do something for YOU!
            </h1>
            <p>12 weeks will change your life.</p>
          </Col>
        </Container>
      </section>
    </section>
  );
};

export default Hero;
