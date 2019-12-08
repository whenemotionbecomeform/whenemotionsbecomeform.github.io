import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ResponsiveEmbed, Container, Col } from "react-bootstrap";

export default function Video() {
  return (
    <div>
      <Container>
        <div style={{ height: "auto" }}>
          <ResponsiveEmbed aspectRatio="16by9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Hx0IIAdu3hc"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </ResponsiveEmbed>
        </div>
      </Container>
    </div>
  );
}
