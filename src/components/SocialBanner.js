import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import facebook from "../assets/img/home/social/facebook-icon.png";
import instagram from "../assets/img/home/social/instagram-icon.png";
import twitter from "../assets/img/home/social/twitter-icon.png";
import youtube from "../assets/img/home/social/youtube-icon.png";

export const SocialBanner = () => {
  return (
    <section id="section-social">
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} md={10}>
            <Row>
              <Col sm={12} md={6} className="align-self-center">
                <h2>Join the community</h2>
              </Col>
              <Col sm={12} md={6}>
                <Row>
                  <Col xs={3}>
                    <a
                      href="http://www.facebook.com/12WBT"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={facebook} alt="Facebook Icon" />
                      <span className="social-name">12wbt</span>
                    </a>
                  </Col>
                  <Col xs={3}>
                    <a
                      href="http://www.instagram.com/12wbt/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={instagram} alt="Instagram Icon" />
                      <span className="social-name">@12wbt</span>
                    </a>
                  </Col>
                  <Col xs={3}>
                    <a
                      href="http://www.youtube.com/12wbt/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={youtube} alt="Youtube Icon" />
                      <span className="social-name">12wbt</span>
                    </a>
                  </Col>
                  <Col xs={3}>
                    <a
                      href="http://twitter.com/12wbt"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={twitter} alt="Twitter Icon" />
                      <span className="social-name">@12wbt</span>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SocialBanner;
