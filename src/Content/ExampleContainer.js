import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Image, Carousel } from "react-bootstrap";
import "./ExampleContainer.scss";

export default function ExampleContainer() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <p className="img_name">Input</p>
          <Image
            className="example_img"
            src={process.env.PUBLIC_URL + "/Images/p1.png"}
            rounded
          />
        </Col>
        <Col xs={6} md={4}>
          <p className="img_name">Our result</p>
          <Image
            className="example_img"
            src={process.env.PUBLIC_URL + "/Images/lee2.png"}
            rounded
          />
        </Col>
        <Col xs={6} md={4}>
          <p className="img_name">Korea abstract painting</p>
          <Image
            className="example_img"
            src={process.env.PUBLIC_URL + "/Images/lee.png"}
            rounded
          />
        </Col>
        <Col xs={6} md={4}>
          <p className="img_name">Input</p>
          <Image
            className="example_img"
            src={process.env.PUBLIC_URL + "/Images/p1.png"}
            rounded
          />
        </Col>
        <Col xs={6} md={4}>
          <p className="img_name">Our result</p>
          <Image
            className="example_img"
            src={process.env.PUBLIC_URL + "/Images/lee2.png"}
            rounded
          />
        </Col>
        <Col xs={6} md={4}>
          <p className="img_name">Korea abstract painting</p>
          <Image
            className="example_img"
            src={process.env.PUBLIC_URL + "/Images/lee.png"}
            rounded
          />
        </Col>
        <Col xs={6} md={4}>
          <p className="img_name">Input</p>
          <Image
            className="example_img"
            src={process.env.PUBLIC_URL + "/Images/p1.png"}
            rounded
          />
        </Col>
        <Col xs={6} md={4}>
          <p className="img_name">Our result</p>
          <Image
            className="example_img"
            src={process.env.PUBLIC_URL + "/Images/lee2.png"}
            rounded
          />
        </Col>
        <Col xs={6} md={4}>
          <p className="img_name">Korea abstract painting</p>
          <Image
            className="example_img"
            src={process.env.PUBLIC_URL + "/Images/lee.png"}
            rounded
          />
        </Col>
      </Row>
    </Container>
  );
}
