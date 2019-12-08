import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Image, Carousel } from "react-bootstrap";
import "./ImageContainer.scss";

export default function ImageContainer() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  return (
    <div>
      {/* <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
        interval={"3000"}
      >
        <Carousel.Item> */}
      <Image
        className="image_box"
        src={process.env.PUBLIC_URL + "/Images/lee2.png"}
        fluid
      />
      {/* </Carousel.Item>
        <Carousel.Item>
          <Image
            className="image_box"
            src={process.env.PUBLIC_URL + "/Images/lee2.png"}
            fluid
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="image_box"
            src={process.env.PUBLIC_URL + "/Images/lonely_result.jpg"}
            fluid
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="image_box"
            src={process.env.PUBLIC_URL + "/Images/nigtmare_result (1).jpg"}
            fluid
          />
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
}
