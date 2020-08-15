import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./CallToAction.css";

function CallToAction() {
  return (
    <section id="section-cta">
      <div className="gray-overlay"></div>
      <Container>
        <Row className="justify-content-center">
          <Col sm={10}>
            <Row className="align-items-center">
              <Col sm={12} md={8}>
                <h3 className="section-title">
                  Our members have lost over <br />
                  1.5 million kilograms with our exercises, meal plans &amp;
                  mindset lessons*
                </h3>
              </Col>
              <Col sm={12} md={4}>
                <div className="cta-join">
                  <h3>Your success story is next!</h3>
                  <a href="https://go.12wbt.com/sign-up?billing_option=single-payment">
                    Join Now &gt;
                  </a>
                  <p className="cta-text">Payment plans available</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CallToAction;
