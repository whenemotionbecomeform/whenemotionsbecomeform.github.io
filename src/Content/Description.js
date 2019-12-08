import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";

export default function Description() {
  return (
    <div>
      "When Emotions Become Form" is an hommage to Harald Szeemann's exhibition
      "When Attitudes Become Form (1969)". At that time, Szeemann pointed out
      the importance of the attitude of thinking and conceptualizing the meaning
      of art rather than of the work itself. It accentuated the role of curators
      as much of that of the artists as creators or exhibition makers in modern
      art. From this perspective, we attempted to set Machine as the creator. We
      also share the same notion by expanding such role to machines, proving
      that “(human) emotions” can be expressed in “AI-form”. <br></br>
    
      <br></br>We used generative adversarial networks (GANs) to learn human
      emotions. Using simple shapes and colors as basic elements of visul arts,
      our work seeks to obtain simple form of abstraction. We first consider the
      norms for positive and negative emotion-laden words and their color
      associations. And we used lines or circles on a virtual canvas and
      achieved different results for marks on a page under various conditions of
      emotions. Then the AI analyses various images labeled with human emotions
      and generates obscure shapes and colors in layers through installation to
      present the ability of machine learning in interpreting abstract images
      such like such as the Korean abstract painting Dansaekhwa.<br></br>{" "}
      <br></br>In this work, we can look into the basic emotions are suggested
      by P.Ekamn: happy, angry, sad, and neutral. In particular, it adds meaning
      by setting Machine as a multimodal interface that communicates with the
      audience through real-time images transmitted through a webcam.
      Particularly, “happy" was found to be the most consistent with “Dialog” by
      Lee Ufan in 2011.
    </div>
  );
}
