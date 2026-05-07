import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import project from "../assets/projects/Dog-Emotion.jpg";
import lift from "../assets/projects/Banner-image.png";
import medtrack from "../assets/projects/MedTrack.jpeg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Cravory Restaurant"
              description="Cravory connects food lovers to local flavors through an intuitive, user-friendly web interface."
              ghLink="https://github.com/Bipasha1003/CRAVORY-Restaurant.git"
              demoLink="https://cravory-restaurant-bm.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Dog Emotion Detection App"
              description="PawFeel helps pet owners understand their dogs better by translating facial expressions into readable emotions."
              ghLink="https://github.com/Bipasha1003/PawFeel.git"
              demoLink="https://pawfeel-bm.netlify.app/"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medtrack}
              isBlog={false}
              title="MedTrack - AI Medicine Tracker"
              description="A full-stack application that prevents medication waste using Gemini AI label scanning, a multilingual chat assistant, and automated daily expiry email alerts."
              ghLink="https://github.com/Bipasha1003/MedTrack"
              demoLink="https://medtrack-bm.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects