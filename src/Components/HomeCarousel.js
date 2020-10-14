import React from "react";
import { Carousel } from "antd";

function HomeCarousel() {
  const contentStyle = {
    height: "350px",
    color: "#fff",
    lineHeight: "350px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <Carousel effect="fade">
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
}

export default HomeCarousel;
