import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) => {
  return (
    <Card
      className="project-card-view"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "space-between",
      }}
    >
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          height: "300px",
          objectFit: "contain",
          alignSelf: "flex-start",
          borderRadius: "10%",
        }}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignContent: "space-between",
        }}
      >
        {/* --- START OF TITLE BOX CHANGE --- */}
        <div
          style={{
            border: "2px solid #000000ff", // Purple border to match theme
            //backgroundColor: "rgba(222, 67, 67, 0.1)", // Slight transparent purple fill
            borderRadius: "10px", // Rounded corners
            padding: "10px", // Space inside the box
            marginBottom: "20px", // Push the description down
            textAlign: "center", // Center the title text
            boxShadow: "0px 0px 10px 1px rgba(255, 255, 255, 0.4)", // Optional: Glow effect
          }}
        >
          <Card.Title style={{ fontWeight: "bold", margin: "0" }}>
            {props.title}
          </Card.Title>
        </div>
        {/* --- END OF TITLE BOX CHANGE --- */}

        <Card.Text style={{ textAlign: "justify", fontSize: "20px" }}>
          {props.description}
        </Card.Text>

        <div style={{ marginTop: "auto" }}> {/* Wrapper to push buttons to bottom */}
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "flex-end",
              textAlign: "center",
              position: "relative",
              bottom: "0px",
            }}
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
                alignContent: "flex-end",
                alignItems: "center",
                textAlign: "center",
                position: "static",
                bottom: "0px",
              }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
export default ProjectCard;