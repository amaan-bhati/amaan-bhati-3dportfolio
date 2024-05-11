import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tada from "react-reveal/Tada";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandNodejs } from "react-icons/tb";
import { TfiHtml5 } from "react-icons/tfi";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandThreejs } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { RiAiGenerate } from "react-icons/ri";

export default function TechnicalSkill() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        {/* 
<Link className="btn btn-primary me-3" to="/technicalSkill">
  Technical Skill
</Link>
<Link className="btn btn-primary me-3" to="/personalskill">
  Personal Skill
</Link>
<Link className="btn btn-primary " to="/toolkit">
  Toolkit
</Link>
*/}
      </div>
      <Tada>
        <h1 className="mt-4">Skills</h1>
        <h2>They call me "Jack of all trades, master at one"</h2>
      </Tada>
      <div className="mt-5">
        <Container>
          <Row className="g-5">
            <Col md={4}>
              <h1 style={{ fontSize: "100px", fontWeight: 700 }}>
                <TbBrandJavascript />
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <h2
                  style={{
                    color: "#cb70ff",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  Javascript
                </h2>
              </div>
            </Col>

            <Col md={4}>
              <h1 style={{ fontSize: "100px", fontWeight: 700 }}>
                <SiTypescript />
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <h2
                  style={{
                    color: "#cb70ff",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  Typescript
                </h2>
              </div>
            </Col>

            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#cb70ff", fontWeight: 700 }}
              >
                <FaReact />
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <h2
                  style={{
                    color: "#fbd9ad",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  REACTJS
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#cb70ff", fontWeight: 700 }}
              >
                <TbBrandTailwind />
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <h2
                  style={{
                    color: "#fbd9ad",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  TAILWINDCSS
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#cb70ff", fontWeight: 700 }}
              >
                <TbBrandNextjs />
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <h2
                  style={{
                    color: "#fbd9ad",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  NEXTJS
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#cb70ff", fontWeight: 700 }}
              >
                <TbBrandNodejs />
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <h2
                  style={{
                    color: "#fbd9ad",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  NODEJS
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#cb70ff", fontWeight: 700 }}
              >
                <TfiHtml5 />
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <h2
                  style={{
                    color: "#fbd9ad",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  HTML
                </h2>
              </div>
            </Col>

            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#cb70ff", fontWeight: 700 }}
              >
                <IoLogoCss3 />
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <h2
                  style={{
                    color: "#fbd9ad",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  CSS
                </h2>
              </div>
            </Col>

            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#cb70ff", fontWeight: 700 }}
              >
                <TbBrandThreejs />
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <h2
                  style={{
                    color: "#fbd9ad",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  THREEJS
                </h2>
              </div>
            </Col>

            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#cb70ff", fontWeight: 700 }}
              >
                <FaGitAlt />
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
               
                <h2
                  style={{
                    color: "#fbd9ad",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  GIT
                </h2>
              </div>
            </Col>

            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#cb70ff", fontWeight: 700 }}
              >
              <FaGitSquare />
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                
                <h2
                  style={{
                    color: "#fbd9ad",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  BASH
                </h2>
              </div>
            </Col>

            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#cb70ff", fontWeight: 700 }}
              >
              <FaGithubSquare />
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                
                <h2
                  style={{
                    color: "#fbd9ad",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  GITHUB
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#cb70ff", fontWeight: 700 }}
              >
              <TbBrandVscode />
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                
                <h2
                  style={{
                    color: "#fbd9ad",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  VS CODE
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#cb70ff", fontWeight: 700 }}
              >
              <RiAiGenerate />
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                
                <h2
                  style={{
                    color: "#fbd9ad",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  GENERATIVE AI
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
