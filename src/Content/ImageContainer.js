import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import "./ImageContainer.scss";

export default function ImageContainer() {
  return (
    <Container>
      <Image
        className="image_box"
        src={process.env.PUBLIC_URL + "/Images/lee2.png"}
        fluid
      />
    </Container>
  );
}
