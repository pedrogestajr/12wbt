import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const WhyItWorks = () => {
  return (
    <section id="section-why">
      <Container fluid>
        <Row className="section-header">
          <Col>
            <h2 className="section-title">
              Why 12WBT will work for <u>YOU</u>
            </h2>
          </Col>
        </Row>
        <Row className="bg-grey-lighter section-content">
          <Col sm={12} md={4}>
            <h3>Simple.</h3>
            <p>
              Never think about what's for dinner again! Every week you'll get
              tailored meal &amp; workout plans, plus access to 1,000+ recipes.
            </p>
          </Col>
          <Col sm={12} md={4}>
            <h3>Convenient.</h3>
            <p>
              Designed to fit into YOUR life, my 12WBT is 100% customisable.
              Choose from 8 dietary preferences, express workouts &amp; 15min
              meals.
            </p>
          </Col>
          <Col sm={12} md={4}>
            <h3>Proven.</h3>
            <p>
              Drawing on 25+ years experience - I know what works. 100,000's of
              Australians have reached their weight loss and fitness goals with
              12WBT.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyItWorks;
