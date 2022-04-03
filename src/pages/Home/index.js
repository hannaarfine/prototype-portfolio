import React, { useEffect, useState, useRef } from "react";
import { HomeLayout, Feed, ProjectImage, Title, Materials } from "./styles";
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import { projects } from "../../data/projects.js";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";

export const Home = () => {
  const [hover, setHover] = useState(null);

  return (
    <HomeLayout>
      <Container fluid>
        <Feed>
          <Row>
            <Col sm={4} />
            <Col sm={4}>
              <Fade bottom distance="100px" cascade>
                {projects.map((project) => {
                  const { title, images, materials, id } = project;
                  const settings = {
                    arrows: false,
                    dots: true,
                    fade: true,
                    autoplay: true,
                    speed: 1,
                    autoplaySpeed: Math.random() * (2500 - 1200) + 1200,
                    pauseOnHover: true,
                  };

                  return (
                    <ProjectImage
                      onMouseEnter={() => {
                        setHover(id);
                      }}
                      onMouseLeave={() => {
                        setHover(null);
                      }}
                    >
                      <Slider {...settings}>
                        {images.map((image) => (
                          <img src={image} alt={title} />
                        ))}
                      </Slider>
                      <Title>{title}</Title>
                      <Materials>{materials}</Materials>
                    </ProjectImage>
                  );
                })}
              </Fade>
            </Col>
          </Row>
        </Feed>
      </Container>
    </HomeLayout>
  );
};
