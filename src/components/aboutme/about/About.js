import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Tilt from "react-parallax-tilt";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
            <div className="img-home-main">
                <Tilt>
                  <Fade cascade>
                    <img
                      src="./profile.png"
                      alt="home pic"
                      className="img-fluid"
                    />
                  </Fade>
                </Tilt>
              </div>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Amaan Bhati </b> 
                  and I am a <b className="purple">Computer Science and Engineering </b> 
                    student at <b className="purple">KIIT University </b>
                      in Bhubaneswar, India.
                <br />
                <br />
                        I am proficient in various programming languages such as &nbsp;
                  <b className="purple">
                    {" "}
                    HTML, CSS, JavaScript, Typescript, Python, C and Java .{" "}
                  </b>
                <br />
                <br />
                I also have experience working with frameworks and libraries such as &nbsp;

                  <b className="purple">
                    {" "}
                    NodeJS, ReactJS, OpenCV, NextJS, Tailwind CSS, ThreeJS.{" "}
                  </b>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with &nbsp;
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks.
                  </b>
                <br />
                <br />In my free time, I enjoy learning new technologies and &nbsp;
                  <b className="purple">building new web technologies and products. </b>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
