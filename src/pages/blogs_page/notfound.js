import React from "react";
import Particle from "../../Particle";
import { Container } from "react-bootstrap";

export default function Notfound() {
  return (
    <section className="home-section">
    <Container fluid id="home">
    <Particle />

    <Container className="home-content d-flex flex-column justify-content-center align-items-center comingsoonclass">
      <h1 style={{ marginBottom: "20px" }}>
        Stay tuned, this page will be updated soon.
      </h1>
      <lottie-player
        src="https://assets6.lottiefiles.com/packages/lf20_zkzzfkke.json"
        background="transparent"
        speed="1"
        style={{ width: "40%", height: "100%" }}
        loop
        autoplay
      ></lottie-player>
    </Container>
  </Container>
    </section>
  );
}
