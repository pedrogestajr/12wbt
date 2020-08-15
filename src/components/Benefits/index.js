import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Benefits.css";

function Benefits() {
  return (
    <section id="benefits">
      <Container>
        <Row>
          <Col sm={12} className="benefits-title">
            <h2>What do YOU get?</h2>
          </Col>
          <Col>
            <Row>
              <Col sm={12} md={6} className="benefits-list nutrition">
                <h3 className="hd">Nutrition</h3>
                <ul>
                  <li>
                    <span>Tailored weekly meal plans</span>
                  </li>
                  <li>
                    <span>Access to 1,000+ recipes</span>
                  </li>
                  <li>
                    <span>Time-saver and cooking for 1 plans</span>
                  </li>
                  <li>
                    <span>Options for 8 dietary preferences</span>
                  </li>
                </ul>
              </Col>
              <Col sm={12} md={6} className="benefits-list fitness">
                <h3 className="hd">Fitness</h3>
                <ul>
                  <li>
                    <span>Weekly workout plans</span>
                  </li>
                  <li>
                    <span>Express workouts</span>
                  </li>
                  <li>
                    <span>Workout videos</span>
                  </li>
                  <li>
                    <span>Gym, home and outdoor options</span>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6} className="benefits-list mindset">
                <h3 className="hd">Mindset</h3>
                <ul>
                  <li>
                    <span>Weekly life-changing mindset lessons</span>
                  </li>
                  <li>
                    <span>Support from me and my experts</span>
                  </li>
                  <li>
                    <span>Learn how to keep weight off for life</span>
                  </li>
                  <li>
                    <span>Reignite that mojo and passion!</span>
                  </li>
                </ul>
              </Col>
              <Col sm={12} md={6} className="benefits-list support">
                <h3 className="hd">Support</h3>
                <ul>
                  <li>
                    <span>24/7 access to dieticians and trainers</span>
                  </li>
                  <li>
                    <span>Join our 12WBT community</span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} md={10}>
            <section className="free-sample">
              <a href="/">
                Curious about my 12WBT?
                <strong>&nbsp;Get a FREE sample today &gt;</strong>
              </a>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Benefits;
