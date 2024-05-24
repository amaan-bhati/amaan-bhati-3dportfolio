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
                      src="./profile.webp"
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
                  and I am a <b className="purple">4th year Computer Science and Engineering </b> 
                    undergrad at <b className="purple">KIIT University </b>
                      in Bhubaneswar, India.
                <br />
                <br />
                        I am proficient in various programming languages such as&nbsp;
                  <b className="purple">{""}HTML, CSS, JavaScript, Typescript, Python, C++, Java{" "}
                  </b>
                <br />
                <br />
                I also have experience working with frameworks and libraries such as&nbsp;
                  <b className="purple">
                    {""}
                    Reactjs, Nextjs, Nodejs, Expressjs, MongoDb, ,Tailwind CSS, ThreeJS, GenerativeAI, OpenAI, OpenCV.{" "}
                  </b>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products and software with&nbsp;
                  <b className="purple">
                    {""}
                    Modern Javascript Libraries and Frameworks.
                  </b>
                <br />
                <br />Also a tech enthusiast who loves to explore new technologies on a regular basis as a source of escapism. In my free time, I enjoy exploring, learning and trying hands on new technologies. Feel free to hit me up on socials if you wanna chat about modern web dev frameworks and libraries or anything about tech in general.&nbsp;
                  <b className="purple"> </b>
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
