import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Intro.scss";
import ImageContainer from "./ImageContainer";
import Description from "./Description";
import Video from "./Video";
import People from "./People";
import ExampleContainer from "./ExampleContainer";

export default function Intro() {
  let imgUrl = process.env.PUBLIC_URL + "/Images/bg.jpg";
  return (
    <div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundPosition: "center",
        // backgroundSize: "cover",
        backgroundRepeat: "repeat"
      }}
      className="content"
    >
      <div className="content_sm">
        <i class="fab fa-github-square"></i>
        {/* <Image
        className="background_img"
        src={process.env.PUBLIC_URL + "/Images/bg.jpg"}
        fluid
      /> */}
        NeurIPS 2019 Creative and Design Workshop ArtGallery
        <h1 className="title">
          When Emotions Become Form <br></br>
          <h2 className="title_sm">
            {" "}
            (Human Emotion - Color and Plain Geometry Condition - Machine
            Learning Processes - Formation)
          </h2>
        </h1>
        <div className="menu">
          <br></br>

          <a className="menu_button" href="#description">
            Project
          </a>
          <br></br>
          <a className="menu_button" href="#author">
            Author
          </a>
        </div>
        <div className="section">
          {/* <div className="Img_box">
          <ImageContainer></ImageContainer>
        </div> */}
          <div className="container_">
            <h2 className="small_title" id="description">
              Description
            </h2>
            <div className="description">
              <Description></Description>
            </div>
          </div>
          <div className="container_">
            <h2 className="small_title" id="description">
              Example
            </h2>
            {/* <Image src={process.env.PUBLIC_URL + "/Images/pic1.png"} fluid /> */}
            {/* <ExampleContainer></ExampleContainer> */}
          </div>
          <div className="container_">
            <h2 className="small_title">Video</h2>
            <div className="video_box">
              <Video></Video>
            </div>
          </div>
          <div className="container_">
            <h2 className="small_title" id="author">
              Poster
            </h2>
            <Image
              className="poster"
              src={process.env.PUBLIC_URL + "/Images/poster.png"}
              fluid
            />
          </div>
          <a href="https://drive.google.com/file/d/1sYVjzp1gqMCrcWvSz0Fx9XU21HPMmMZk/view?usp=sharing">
            {" "}
            [Paper]{" "}
          </a>
          <div className="container_">
            <h2 className="small_title" id="author">
              About T-25
            </h2>
            <People></People>
          </div>
        </div>
      </div>
      <p className="cp-text">© Copyright 2019 T-25. All rights reserved.</p>
    </div>
  );
}
