import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import agg from "../../Assets/Projects/agg.png";
import tun from "../../Assets/Tennis.png";
import editor from "../../Assets/Projects/taquin.png";
import chatify from "../../Assets/Projects/RL.jpeg";
import rub from "../../Assets/rubiks.png";
import bitsOfCode from "../../Assets/Projects/seg.png";
import Poster from "./Posterresearch" // change
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Reinforcement-learning-Supermario"
              description="Building an agent that can get through the Super Mario Bros (NES) environment."
              ghLink="https://github.com/ichrakhamdi/Reinforcement-learning-Supermario"
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Segmentation of medical image-Breast Cancer"
              description="web application to do a comparative study of Machine Learning algorithms for medical image segmentation in order to perform breast cancer screening."
              ghLink="https://github.com/ichrakhamdi/mammogram_segmentation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Taquin_game"
              description="Development of the game Taquin with resolution using Artificial Intelligence algorithms (A*,BFS,DFS)."
              ghLink="https://github.com/ichrakhamdi/Taquin_game"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rub}
              isBlog={false}
              title="Rubik-s-cube"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/ichrakhamdi/rubik-s-cube"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tun}
              isBlog={false}
              title="Tennis-Game"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/ichrakhamdi/Tennis-Game"
      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agg}
              isBlog={false}
              title="E-consulting app"
              description="A mobile e-consulting application allowing the customers of Aggricus (located in Technopole Manouba) to enjoy the service on their cell phone."
              ghLink="https://github.com/ichrakhamdi/e-consulting-app"
            />
          </Col>
        </Row>
      </Container>
      <h1 className="project-heading">
          My <strong className="purple">Research Poster</strong>
        </h1>
        <p style={{ color: "white" }}>
          My research poster is about doing a comparative study of Machine Learning algorithms for medical image <br/>segmentation in order to perform breast cancer screening.
         I was one of <span className="purple">the Indaba poster prize winners</span>
        </p>
      <Poster />
    </Container>
  );
  
}

export default Projects;

