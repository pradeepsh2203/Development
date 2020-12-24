import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";
import Img1 from "../images/caousrel/first.jpg";
import Img2 from "../images/caousrel/second.jpg";
import Img3 from "../images/caousrel/third.jpg";
import Img4 from "../images/caousrel/coder.jpg";
import Img5 from "../images/caousrel/coffee-mug.jpg";
import Img6 from "../images/caousrel/messy_code.jpg";
import Img7 from "../images/caousrel/typer.jpg";
import Img8 from "../images/caousrel/nightTheme.jpg";

const Caoursel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src={Img1}
          className="d-block w-100 rounded p-4 "
          alt="First-slide"
          style={{ height: "85vh", objectFit: "cover" }}
        ></img>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Img2}
          className="d-block w-100 rounded p-4 "
          alt="Second-slide"
          style={{ height: "85vh", objectFit: "cover" }}
        ></img>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Img3}
          className="d-block w-100 rounded p-4 "
          alt="Third-slide"
          style={{ height: "85vh", objectFit: "cover" }}
        ></img>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Img4}
          className="d-block w-100 rounded p-4 "
          alt="Third-slide"
          style={{ height: "85vh", objectFit: "cover" }}
        ></img>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Img5}
          className="d-block w-100 rounded p-4 "
          alt="Third-slide"
          style={{ height: "85vh", objectFit: "cover" }}
        ></img>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Img6}
          className="d-block w-100 rounded p-4 "
          alt="Third-slide"
          style={{ height: "85vh", objectFit: "cover" }}
        ></img>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Img7}
          className="d-block w-100 rounded p-4 "
          alt="Third-slide"
          style={{ height: "85vh", objectFit: "cover" }}
        ></img>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Img8}
          className="d-block w-100 rounded p-4 "
          alt="Third-slide"
          style={{ height: "85vh", objectFit: "cover" }}
        ></img>
      </Carousel.Item>
    </Carousel>
  );
};

export default Caoursel;
