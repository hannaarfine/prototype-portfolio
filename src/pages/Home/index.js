import React, { useEffect, useState, useRef } from "react";
import { HomeLayout, Feed, ProjectImage, Title, Materials } from "./styles";
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import { projects } from "../../data/projects.js";
import Slider from "react-slick";

export const Home = () => {
  const [hover, setHover] = useState(null);
  //   const [settings, setSettings] = useState({
  //     arrows: false,
  //     dots: true,
  //     fade: true,
  //     autoplay: false,
  //     speed: 1,
  //   });

  //   useEffect(() => {
  //     setSettings({
  //       arrows: false,
  //       dots: true,
  //       fade: true,
  //       autoplay: false,
  //       speed: 1,
  //     });
  //   }, [hover]);

  return (
    <HomeLayout>
      <Container fluid>
        <Feed>
          <Row>
            <Col sm={4} />
            <Col sm={4}>
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
                    {/* <img src={images[0]} alt={title} /> */}
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
            </Col>
          </Row>
        </Feed>
      </Container>
    </HomeLayout>
  );
};
