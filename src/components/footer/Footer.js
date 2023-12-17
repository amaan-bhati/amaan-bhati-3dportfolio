import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const caffeineSvgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Koffein_-_Caffeine.svg/2489px-Koffein_-_Caffeine.svg.png';
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
        <h3>
        Designed and Developed with {'\u2764'} and{' '}
        <img
          src={caffeineSvgUrl}
          alt="Caffeine"
          title="Caffeine"
          style={{ width: '90px', height: '90px', verticalAlign: 'middle', filter: 'invert(1)' }}
        />{' '}
        by Amaan
      </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3></h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/amaan-bhati"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/amaan-bhati/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/amaanbhatiii/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.twitter.com/front_end_er"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:amaanbhati49@gmail.com/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGoogle />
              </a>
            </li> 
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
