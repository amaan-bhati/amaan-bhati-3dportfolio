import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Typing from "./Typing";
import Tilt from "react-parallax-tilt";
import { Navbar, Nav, Button } from "react-bootstrap";
import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
import Fade from "react-reveal/Fade";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import {
  FaLinkedinIn,
  FaTwitterSquare,
  FaHackerrank,
  FaFileDownload,FaLink,
} from "react-icons/fa";
import Certification from "../../components/certificate/Certification";
import Projects from "../../components/projects/Projects";
import ProjectJourney from "../../components/aboutme/journey/ProjectJourney";
import Contactus from "../../components/contactus/Contactus";

export default function Home() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1
                style={{ paddingBottom: 15, fontSize: "175px" }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> AMAAN BHATI</strong>
                <h2>They call me "Jack of all trades, master at one"</h2>
              </h1>

              <div className="typing-homeclass">
                <Typing />
              </div>
              
              <div className="sociallink-home">
                <ul className="homeaboutsociallinks">
                  <li className="socialicons">
                    <a
                      href="https://github.com/amaan-bhati"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://www.linkedin.com/in/amaan-bhati/"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://www.instagram.com/amaanbhatiii/"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://www.twitter.com/front_end_er"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <FaTwitterSquare />
                    </a>
                  </li>

                  <li className="socialicons">
                    <a
                      href="https://www.hackerrank.com/profile/amaanbhati49"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <FaHackerrank />
                    </a>
                  </li>

                  <li className="socialicons">
                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <FaLink/>
                    </a>
                  </li>
                  <li className="socialicons">
                  <Button
                  href="https://drive.google.com/file/d/128_XIW6rg0oatlLk1J2ddv7G-VZzIBjq/view?usp=drive_open"
                  target="_blank"
                  className="resume-btn" 
                >Download Resume
                  {/*<CgGitFork style={{ fontSize: "1.2em" }} />{" "}
          <AiFillStar style={{ fontSize: "1.1em" }} />*/}
                </Button>
                  </li>
                </ul>
                
              </div>
            </Col>
            <Col md={4} style={{ paddingBottom: 20 }}>
              <div className="img-home-main">
                <Tilt>
                  <Fade cascade>
                    <lottie-player
                      src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                      background="transparent"
                      speed="1"
                      style={{ width: "100%", height: "90%" }}
                      loop
                      autoplay
                    ></lottie-player>
                  </Fade>
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <AboutmeContainer />
     
    </section>
  );
}
