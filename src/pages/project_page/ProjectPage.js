import React, { cloneElement } from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import mlsakiit from "../../images/mlsakiit.png";
import eco from "../../images/eco.png";
import zivri from "../../images/zivri.png";
import kiitfest from "../../images/kiitfest.png";
import tedxkiit from "../../images/tedxkiit.png";
import githubclone from "../../images/githubclone.png";

import meal from "../../images/meal.png";
import ac from "../../images/academic.png";
import age from "../../images/age.png";
import calculator from "../../images/calculator.png";
import calendar from "../../images/calendar.png";
import dc from "../../images/dc.png";
import sims from "../../images/sims.png";
import { FaCode } from "react-icons/fa";
export default function ProjectPage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176" }}>PROJECTS</h1>
            </Zoom>
          </div>
          <div>
          <Zoom left cascade>
          <h1 style={{ color: "rgb(134, 61, 176)", textAlign: "center" }}>
            Click on each project for live view/source code
          </h1>
        </Zoom>
            <div>
              <Container fluid className="certificate-section" id="about">
                <Container>
                  <Row>
                    <Col md={12} className="mt-5">
                      <Row className="g-5">
                        <Zoom left cascade>
                          <h1 style={{ color: "#fbd9ad" , textAlign: "center" }}>
                            Group Projects
                          </h1>
                        </Zoom>

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://mlsakiit.com"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    MLSA KIIT WEBSITE
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                NextJS, TypeScript, TailwindCSS.
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://kiitfest.org"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    KIITFEST WEBSITE
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
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

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://www.tedxkiituniversity.in/"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    TEDxKIITUNIVERSITY Website
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Reactjs, CSS, Javascript
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://git.kiitians.com/explore/repos"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    KIIT Version Control System
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Vuejs, Go, SCSS, Gitea
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://github.com/amaan-bhati/SIH_hackiit_leafify"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    Identification OF Medicinal Plants
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Reactjs, Pytorch, Matplotlib, Numpy, Nodejs
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Zoom left cascade>
                          <h1 style={{ color: "#fbd9ad" , textAlign: "center" }}>
                            Solo/Personal Projects
                          </h1>
                        </Zoom>

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://tnlc2024.kiit.ac.in"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    Tnlc Conference Website
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Reactjs, SCSS, Framer Motion, EmailJS
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://zivri.me"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    Zivri Website
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Reactjs, SCSS, Framer Motion, ThreeJS
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Col md={3} className="col-sm-12 col-md-4">
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
                              <a
                                href="https://github.com/amaan-bhati/search-engine-nextjs"
                                target="_blank"
                                style={{ color: "#fbd9ad" }}
                              >
                                {" "}
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Search Engine Nextjs
                                </h5>{" "}
                              </a>
                            </div>
                            <h6>
                              <p
                                className="project--desc"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              ></p>
                            </h6>
                            <div
                              className="project--lang"
                              style={{
                                background: "#fbd9ad",
                                color: "#b061df",
                                fontWeight: 600,
                              }}
                            >
                              Nextjs, TailwindCSS, Postgres, Shadcn
                            </div>
                          </div>
                        </Fade>
                      </Col>

                      <Col md={3} className="col-sm-12 col-md-4">
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
                            <a
                              href="https://github.com/amaan-bhati/voting-app-nextjs"
                              target="_blank"
                              style={{ color: "#fbd9ad" }}
                            >
                              {" "}
                              <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                Real Time voting System
                              </h5>{" "}
                            </a>
                          </div>
                          <h6>
                            <p
                              className="project--desc"
                              style={{
                                background: "#fbd9ad",
                                color: "#b061df",
                                fontWeight: 600,
                              }}
                            ></p>
                          </h6>
                          <div
                            className="project--lang"
                            style={{
                              background: "#fbd9ad",
                              color: "#b061df",
                              fontWeight: 600,
                            }}
                          >
                            Nextjs, Tailwindcss, ShadCN
                          </div>
                        </div>
                      </Fade>
                    </Col>



                    <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://github-clone-by-amaan.vercel.app/"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    Github Landing Page Clone
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Nextjs/Reactjs, Nodejs, TailwindCSS
                              </div>
                            </div>
                          </Fade>
                        </Col>




                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://github.com/amaan-bhati/emotion-detection-using-python/tree/main/EmoTune-main"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    Emotion Detection System
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Python, Deepface, Kivy, OpenCV
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://resume.amaanbhati.tech"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    Resume Builder
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Next/reactjs. javascript/typescript, nodejs,
                                tailwindcss
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://hexcode-opacity-generator.vercel.app/"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    HEX Code Opacity Generator
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Reactjs, Nodejs, Css
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://zeroth-ai.vercel.app/"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    Article Summarizer AI
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Nextjs, TailwindCSS
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://solarsystem-dun.vercel.app/"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    Solar System Minimal Animation
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, Javascript, GSAP
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://stopwatchjs-seven.vercel.app/"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    Stopwatch JS
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, Javascript
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://dice-roller-blond.vercel.app/"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    3d Dice Roller
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, Javascript, Threejs
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://uber-eats-clone-nine.vercel.app/"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    Uber Eats Clone
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, Javascript
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://jpg-to-png-converter.vercel.app/"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    JPG to PNG Image Converter
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, Javascript
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://gsap-scroll-trigger-fawn.vercel.app/"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    Horizontal Scroll GSAP
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, Javascript, GSAP
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://gsap-animation-scroll.vercel.app/"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    Scroll Animation Gallery
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, Javascript, GSAP
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://reveal-gallery.vercel.app/"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    Animated Grid Reveal Gallery
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, Javascript, Animejs
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://split-karo-three.vercel.app/"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    Split Karo
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, Javascript
                              </div>
                            </div>
                          </Fade>
                        </Col>

                                

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://uber-eats-clone-nine.vercel.app/"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    Parallax Image Gallery Nextjs
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Nextjs, Nodejs, Lenis, TailwindCSS, GSAP
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://simple-javascript-game-liard.vercel.app/"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    Chrome Dragon Game
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, Javascript
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://hover-scale-gallery.vercel.app/"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    Hover Scale Gallery NEXTJS
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Nextjs/Reactjs, Nodejs, Tailwindcss, gsap
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://wedding-agency-website.vercel.app/"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    Wedding Agency Website
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, Javascript
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://todo-app-angular-three.vercel.app/"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    Todo List app angularjs
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Angular JS
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <a
                                  href="https://gym-website-alpha-blue.vercel.app/"
                                  target="_blank"
                                  style={{ color: "#fbd9ad" }}
                                >
                                  {" "}
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    Gym Website
                                  </h5>{" "}
                                </a>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, Javascript
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}
