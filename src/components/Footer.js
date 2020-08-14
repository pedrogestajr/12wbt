import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faYoutubeSquare,
  faTwitterSquare,
  faPinterestSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../assets/img/home/logo-footer.png";

export const Footer = () => {
  return (
    <footer>
      <Container fluid="sm">
        <Row>
          <Col xs={12} md={2}>
            <img src={logo} className="logo" alt="12WBT logo" />
          </Col>

          <Col xs={12} md={7} className="text-left mt-3 mt-md-0">
            <p className="grey-text">
              <span>
                Consult your healthcare professional before beginning any diet
                or fitness regime.
              </span>
              <br />
              Copyright © 2020 12WBT Trading Pty Ltd.
            </p>
            <div className="grey-text">
              <a href="/">12WBT Blog</a>|<a href="/">Support Crew</a>|
              <a href="/">Careers</a>|<a href="/">Contact Us</a>|
              <a href="/terms">Terms</a>|<a href="/">Privacy</a>
            </div>
            <div className="disclaimer">
              <p>
                * Results may vary. Exercise and proper diet are necessary to
                achieve and maintain weight loss.
              </p>
              <p>
                <a href="/">
                  ** View full competition terms and conditions here.
                </a>
              </p>
            </div>
          </Col>

          <Col xs={12} md={3}>
            <div className="fa-social-grey">
              <Row>
                <Col>
                  <span>share. connect. follow</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <a
                    href="http://www.facebook.com/12WBT"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="full-size"
                      icon={faFacebookSquare}
                    />
                  </a>
                  <a
                    href="http://www.instagram.com/12wbt/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="full-size"
                      icon={faInstagramSquare}
                    />
                  </a>
                  <a
                    href="http://www.youtube.com/12wbt/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="full-size"
                      icon={faYoutubeSquare}
                    />
                  </a>
                  <a
                    href="http://twitter.com/12wbt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="full-size"
                      icon={faTwitterSquare}
                    />
                  </a>
                  <a
                    href="http://www.pinterest.com/12wbt/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="full-size"
                      icon={faPinterestSquare}
                    />
                  </a>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
