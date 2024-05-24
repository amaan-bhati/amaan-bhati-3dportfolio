import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/nyc.png";
import gc from "../../images/githubclone.png";
import hd from "../../images/hd.png";
import pp from "../../images/portfolio.png";
import Tilt from "react-parallax-tilt";

import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid", 
                  }}
                ><tilt>
                  <div className="projectContent">
                    <h2 id={"first"} style={{ color: "#fbd9ad" }}>
                      <a
                        href="https://mlsakiit.com"
                        target="_blank"
                        style={{ color: "#fbd9ad" }}
                      >
                        MLSA KIIT WEBSITE
                      </a>
                    </h2>
                  </div>

                  <h6>
                    {/*<p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                    
                    </p>*/}
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    NextJS, TypeScript, TailwindCSS, Framer Motion.
                  </div></tilt>
                </div>
              </Fade>
            </Col>

            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h2 id={"first"} style={{ color: "#fbd9ad" }}>
                      <a
                        href="https://git.kiitians.com/explore/repos"
                        target="_blank"
                        style={{ color: "#fbd9ad" }}
                      >
                        KIIT VERSION CONTROL
                      </a>
                    </h2>
                  </div>

                  <h6>
                    {/*<p
                    className="project--desc"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                  
                  </p>*/}
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    GOLang, Vuejs, GSAP
                  </div>
                </div>
              </Fade>
            </Col>

            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h2 id={"first"} style={{ color: "#fbd9ad" }}>
                      <a
                        href="https://tnlc2024.kiit.ac.in"
                        target="_blank"
                        style={{ color: "#fbd9ad" }}
                      >
                        TNLC WEBSITE
                      </a>
                    </h2>
                  </div>

                  <h6>
                    {/*<p
                  className="project--desc"
                  style={{
                    background: "#fbd9ad",
                    color: "#b061df",
                    fontWeight: 600,
                  }}
                >
                
                </p>*/}
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    Reactjs+Vite, SCSS, EmailJS, Framer Motion
                  </div>
                </div>
              </Fade>
            </Col>

            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h2 id={"first"} style={{ color: "#fbd9ad" }}>
                      <a
                        href="https://kiitfest.org"
                        target="_blank"
                        style={{ color: "#fbd9ad" }}
                      >
                        KIITFEST WEBSITE
                      </a>
                    </h2>
                  </div>

                  <h6>
                    {/*<p
                className="project--desc"
                style={{
                  background: "#fbd9ad",
                  color: "#b061df",
                  fontWeight: 600,
                }}
              >
              
              </p>*/}
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    NextJS, Javascript, TailwindCSS, Framer Motion.
                  </div>
                </div>
              </Fade>
            </Col>
          </Row><tilt>
          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div></tilt>
        </Container>
      </Container>
    </div>
  );
}
