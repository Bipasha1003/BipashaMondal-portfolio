import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="yellow"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                Hi, my name is <span className="yellow">Bipasha Mondal </span>
                and I'm from <span className="yellow"> West Bengal, India.</span>
                <br />
                <br />
                I recently graduated with a <span className="yellow">Bachelor's degree in Computer Science </span>in 2024.
                <br />
                <br />
                Currently, I am pursuing my <span className="yellow">M.Sc. in Computer Science </span>
                at <span className="yellow">University of Calcutta</span>.
                <br />
                <br />
                As a
                <b className="yellow"> Full-Stack </b>developer,
                I enjoy tackling new challenges and continuously expanding my skillset.
                <br />
                <br />I am proficient in
                <b className="yellow"> Javascript, </b>
                as well as have knowledge in programming languages such as
                <b className="yellow"> C, Java, Python.</b>
                <br />
                <br />
                I have a passion for working
                with <b className="yellow">Node.js, MongoDB,</b> and
                <i>
                  <b className="yellow">
                    {" "}
                    modern Javascript libraries and frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="yellow"> React.js</b>
                </i>
                <br />
                <br />
                I am also interested in building new
                <i>
                  <b className="yellow"> Web Technologies and Products, </b>
                  as well as exploring areas related to
                  <b className="yellow"> Artificial Intelligence.</b>
                </i>
                <br />
              </p>
            </Col>
            
            <Col md={4} className="myAvtar">
              <Tilt>
                <img
                  src={LaptopImg}
                  className="img-fluid"
                  alt="avatar"
                />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/Bipasha1003"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    aria-label="github"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://x.com/Bipasha51258342"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    aria-label="twitter"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/bipasha-mondal-59aa60244/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    aria-label="linkedin"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://leetcode.com/u/Bipasha_Mondal/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="instagram"
                  >
                    <SiLeetcode />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default About;