import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Slider from "react-slick";
import Categories from "../Categories";
import { Row, Col } from "antd";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function index() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 0,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <>
      <Row className="content">
        <Col span={10}>
          <h1>Lorem ipsum dolor sit amet</h1>Consectetur adipiscing elit. Mauris
          sodales consectetur dui at finibus. Fusce nulla nisl, efficitur vel
          mattis quis, vulputate vitae enim. Curabitur ullamcorper nisi tellus,
          in interdum ipsum dapibus ut. Suspendisse molestie convallis sapien.
          Integer varius pulvinar nulla, laoreet ultrices ex tincidunt at. Duis
          nunc urna, gravida venenatis porta id, facilisis quis arcu. Proin quis
          orci tempus, feugiat sapien vitae, hendrerit risus. Vivamus magna
          elit, porta gravida fermentum in, lacinia non lectus. Donec et dapibus
          purus.
        </Col>
        <Col span={14}>
          <Slider {...settings} className="carousel">
            <div>
              <img src="https://i.ibb.co/KFc4RYg/1.jpg" alt="1" border="0" />
            </div>
            <div>
              <img src="https://i.ibb.co/WWj2zQg/2.jpg" alt="2" border="0" />
            </div>
            <div>
              <img src="https://i.ibb.co/2SxRt7q/3.jpg" alt="3" border="0" />
            </div>
            <div>
              <img src="https://i.ibb.co/FVvcGqn/4.jpg" alt="4" border="0" />
            </div>
          </Slider>
        </Col>
      </Row>
        <Categories />
    </>
  );
}

export default index;
