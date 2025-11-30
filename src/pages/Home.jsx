import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from '../assets/about1.png';
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content" style={{ position: "relative", zIndex: 100 }}>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M <strong className="main-name">Bipasha Mondal</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

              {/* Hire Me Button */}
              <div style={{ paddingLeft: 50, textAlign: "left" }}>
                <Button
                  className="hire-btn"
                  variant="primary"
                  href="https://www.linkedin.com/in/bipasha-mondal-59aa60244/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    background: "linear-gradient(90deg, #a855f7 0%, #3b82f6 100%)",
                    color: "white",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    padding: "16px 40px",
                    borderRadius: "50px",
                    boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.5)",
                  }}
                >
                  Hire Me
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", position: "relative", zIndex: 100 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <About />
    </section>
  );
};

export default Home;
