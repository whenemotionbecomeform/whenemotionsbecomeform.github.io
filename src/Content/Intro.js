import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./Intro.scss";
import ImageContainer from "./ImageContainer";
import Description from "./Description";
import Video from "./Video";

export default function Intro() {
  return (
    <div className="content">
      <h1 className="title">
        A generative approach to Korean abstract painting Dansaekhwa
      </h1>
      <div className="section">
        <div className="Img_box">
          <ImageContainer></ImageContainer>
        </div>
        <h2 className="small_title">Description</h2>
        <div className="description">
          <Description></Description>
        </div>
        <h2 className="small_title">Video</h2>
        <div className="vido_box">
          <Video></Video>
        </div>
        <h2 className="small_title">author</h2>
        <Container>
          <Row>
            <Col className="flex_box">
              TaeJae Han<br></br>
              MODULABS<br></br>
              hantaejae@gmail.com
            </Col>
            <Col className="flex_box">
              Jinho Bae<br></br>MODULABS<br></br>silverbjin@gmail.com
            </Col>
            <Col className="flex_box">
              EunJeong Kang<br></br>Sogang University<br></br>eunxkang@gmail.com
            </Col>
            <Col className="flex_box">
              Junghyun Park<br></br>Samsung Electronics<br></br>
              ana.park@samsung.com
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
