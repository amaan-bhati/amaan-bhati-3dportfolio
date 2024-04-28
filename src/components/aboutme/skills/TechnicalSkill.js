import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tada from "react-reveal/Tada";

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
              <h1
                style={{ fontSize: "100px", color: "#cb70ff", fontWeight: 700 }}
              >
                80%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"com"}
                    aria-valuenow={"85"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#fbd9ad",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  JAVASCRIPT
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#cb70ff", fontWeight: 700 }}
              >
                70%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"pm"}
                    aria-valuenow={"85"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#fbd9ad",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  TYPESCRIPT
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#cb70ff", fontWeight: 700 }}
              >
                90%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"cr"}
                    aria-valuenow={"90"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "90%" }}
                  ></div>
                </div>
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
                90%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"aa"}
                    aria-valuenow={"81"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "81%" }}
                  ></div>
                </div>
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
                80%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"org"}
                    aria-valuenow={"88"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "88%" }}
                  ></div>
                </div>
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
                85%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"ps"}
                    aria-valuenow={"86"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "86%" }}
                  ></div>
                </div>
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
                95%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"react"}
                    aria-valuenow={"86"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "86%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#fbd9ad",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  HTML & CSS
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#cb70ff", fontWeight: 700 }}
              >
                55%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"com"}
                    aria-valuenow={"85"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "85%" }}
                  ></div>
                </div>
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
                90%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"org"}
                    aria-valuenow={"88"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "88%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#fbd9ad",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  GIT & GIT BASH
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#cb70ff", fontWeight: 700 }}
              >
                90%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"org"}
                    aria-valuenow={"88"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "88%" }}
                  ></div>
                </div>
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
                95%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"org"}
                    aria-valuenow={"88"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "88%" }}
                  ></div>
                </div>
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
                50%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"org"}
                    aria-valuenow={"88"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "88%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#fbd9ad",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  WORDPRESS/WEBFLOW
                </h2>
              </div>
            </Col>

            
            


          </Row>
        </Container>
      </div>
    </div>
  );
}
