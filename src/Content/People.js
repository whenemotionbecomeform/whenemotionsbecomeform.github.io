import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./People.scss";

export default function People() {
  return (
    <div>
      T-25 team is comprised of ModuLABS(2019 Deep Learning College Art Lab)
      researchers who study the interface between art and technology with people
      from diverse backgrounds including developers, designers, and deep
      learning researchers. The AI recognition process still be somewhat
      unfamiliar to the public, but it is deeper
      <Container>
        <Row>
          <Col className="flex_box">
            TaeJae Han<br></br>
            <div className="flex_box_job">
              MODULABS<br></br>
              hantaejae@gmail.com
            </div>
            <br></br>
            <a href="https://github.com/taejaehan">
              <div className="icon">
                <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
              </div>
            </a>
            &nbsp;&nbsp;
            <a href="https://www.facebook.com/TaejaeHan">
              <div className="icon">
                <FontAwesomeIcon icon={faHome} />
              </div>
            </a>
            &nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/taejae-han-8b5b32ba/">
              <div className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </a>
          </Col>
          <Col className="flex_box">
            EunJeong Kang<br></br>
            <div className="flex_box_job">
              Sogang University<br></br>eunxkang@gmail.com
            </div>
            <br></br>
            <a href="https://github.com/ejjjjkang">
              <div className="icon">
                <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
              </div>
            </a>
            &nbsp;&nbsp;
            <a href="https://eunxkang.me/">
              <div className="icon">
                <FontAwesomeIcon icon={faHome} />
              </div>
            </a>
            &nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/ejeongkang/?locale=en_US">
              <div className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </a>
          </Col>
          <Col className="flex_box">
            Jinho Bae<br></br>
            <div className="flex_box_job">
              MODULABS<br></br>silverbjin@gmail.com
            </div>
            <br></br>
            <a href="https://github.com/silverbjin">
              <div className="icon">
                <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
              </div>
            </a>
            &nbsp;&nbsp;
            <a href="https://www.facebook.com/silverbjin">
              <div className="icon">
                <FontAwesomeIcon icon={faHome} />
              </div>
            </a>
            &nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/jinho14">
              <div className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </a>
          </Col>

          <Col className="flex_box">
            Junghyun Park<br></br>
            <div className="flex_box_job">
              Samsung Electronics<br></br>
              ana.park@samsung.com
            </div>
            <br></br>
            <a href="https://github.com/Junghyun-Anna-Park">
              <div className="icon">
                <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
              </div>
            </a>
            &nbsp;&nbsp;
            <a href="https://web.facebook.com/junghyun.anna.park">
              <div className="icon">
                <FontAwesomeIcon icon={faHome} />
              </div>
            </a>
            &nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/junghyun-park-b88a8649/">
              <div className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
