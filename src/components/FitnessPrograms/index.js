import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./FitnessPrograms.css";

function FitnessPrograms() {
  return (
    <section id="fitness-programs">
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <h3 className="section-title">
              No matter your fitness level, I've got a program for YOU
            </h3>
            <div className="fitness-programs-cta">
              <h3>Your success story is next!</h3>
              <a
                className="btn"
                href="https://go.12wbt.com/sign-up?billing_option=single-payment"
              >
                Join Now &gt;
              </a>
              <p>Payment plans available</p>
            </div>
          </Col>
          <Col sm={12} md={8}>
            <Row className="card-collection">
              <Col sm={12} md={6}>
                <a
                  className="card weight-loss"
                  href="https://www.12wbt.com/12wbt-programs/weight-loss"
                >
                  <span className="card-title">Weight Loss &gt;</span>
                  <div className="gray-overlay"></div>
                </a>
              </Col>
              <Col sm={12} md={6}>
                <a
                  className="card strength"
                  href="https://www.12wbt.com/12wbt-programs/lean-and-strong"
                >
                  <span className="card-title">Strength &gt;</span>
                  <div className="gray-overlay"></div>
                </a>
              </Col>
            </Row>
            <Row className="card-collection">
              <Col sm={12} md={6}>
                <a
                  className="card running"
                  href="https://www.12wbt.com/12wbt-programs/running"
                >
                  <span className="card-title">Running &gt;</span>
                  <div className="gray-overlay"></div>
                </a>
              </Col>
              <Col sm={12} md={6}>
                <a
                  className="card post-baby"
                  href="https://www.12wbt.com/12wbt-programs/post-baby"
                >
                  <span className="card-title">
                    Pregnancy
                    <br />
                    &amp; Post Baby &gt;
                  </span>
                  <div className="gray-overlay"></div>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FitnessPrograms;
