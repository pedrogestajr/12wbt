import React from "react";
import Carousel from "react-elastic-carousel";
import { Container, Row, Col } from "react-bootstrap";

import craig from "../assets/img/home/carousel/BA-Craig-5.jpeg";
import jenny from "../assets/img/home/carousel/BA-Jenny-2.jpeg";
import karissa from "../assets/img/home/carousel/BA-Karissa-4.jpeg";
import keith from "../assets/img/home/carousel/BA-Keith-7.jpeg";
import richelle from "../assets/img/home/carousel/BA-Richelle-3.jpeg";
import ryan from "../assets/img/home/carousel/BA-Ryan-6.jpeg";
import sue from "../assets/img/home/carousel/BA-Sue-1.jpeg";

const slides = [
  {
    image: craig,
    caption: "Craig lost 15kg",
  },
  {
    image: jenny,
    caption: "Jenny lost 5kg",
  },
  {
    image: karissa,
    caption: "Karissa lost 10kg",
  },
  {
    image: keith,
    caption: "Keith lost 11kg",
  },
  {
    image: richelle,
    caption: "Richelle lost 9kg",
  },
  {
    image: ryan,
    caption: "Ryan lost 14kg",
  },
  {
    image: sue,
    caption: "Sue lost 20kg",
  },
];

export const Results = () => {
  return (
    <section id="section-results">
      <Container fluid="sm">
        <h2 className="section-title">We've lost 1.5 million kilos</h2>
        <Row>
          <Col>
            <Carousel
              breakPoints={[
                { width: 1, itemsToShow: 1 },
                { width: 768, itemsToShow: 3 },
              ]}
              disableArrowsOnEnd={true}
              itemPadding={[5, 10, 5, 10]}
            >
              {slides.map((slide) => (
                <div key={slide.caption}>
                  <img
                    className="d-block w-100"
                    src={slide.image}
                    alt={slide.caption}
                  />
                  <h3 className="caption">{slide.caption}</h3>
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="text-center">
            <h2 className="section-title mb-0 pb-1">YOUR story is next!</h2>
            <p className="disclaimer mt-1">
              * Results may vary. Exercise and proper diet are necessary to
              achieve and maintain weight loss.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Results;
