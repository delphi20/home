import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";

const Leadership = ({ heading, message, img, imageSize }) => {
  
  return (
    <Jumbotron
      id="leadership"
      className="m-0"
      style={{ backgroundColor: "#3E4F52" }}
    >
      <h2 className="display-4 pb-5 text-center text-white">{heading}</h2>
      <div className="row">
        <div className="col-md-5">
          <p className="lead text-white">{message}<a href="https://www.figma.com/file/KxTURxAfuKZWWSwxb1FnkQ/Untitled?type=design&node-id=0%3A1&mode=design&t=puuFp8Y9tKZAB7yB-1" target="_blank" rel="noopener noreferrer"> link</a></p>
          
        </div>
        <div className="col-md-7">
          <Carousel fade variant="dark">
            {img.map((value, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block mx-auto"
                    src={value.img}
                    alt="First slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                  <Carousel.Caption>
                    <h3>{value.label}</h3>
                    <p>{value.paragraph}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Leadership;
