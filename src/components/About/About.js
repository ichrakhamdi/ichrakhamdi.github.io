import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import in1 from "../../Assets/Projects/Indaba/6.jpeg";
import in2 from "../../Assets/Projects/Indaba/9.jpg";
import in3 from "../../Assets/Projects/Indaba/8.jpg";
import in0 from "../../Assets/Projects/Indaba/10.png";
import in4 from "../../Assets/Projects/Indaba/5.jpeg";
import in5 from "../../Assets/Projects/Indaba/1.jpeg";
import in6 from "../../Assets/Projects/Indaba/4.jpeg";
import in7 from "../../Assets/Projects/Indaba/7.jpeg";
import t1 from "../../Assets/Projects/Talan/1.jpeg"
import t3 from "../../Assets/Projects/Talan/3.jpeg"
import t4 from "../../Assets/Projects/Talan/4.png"
import p1 from "../../Assets/Projects/PCD/1.jpeg"
import p2 from "../../Assets/Projects/PCD/2.jpeg"
import p3 from "../../Assets/Projects/PCD/3.jpeg"
import a1 from "../../Assets/Projects/ARE/1jpg.jpg"
import a2 from "../../Assets/Projects/ARE/2.jpg"
import a3 from "../../Assets/Projects/ARE/3.jpg"
import a4 from "../../Assets/Projects/ARE/4.jpg"
import c1 from "../../Assets/Projects/canada/1.jpg"
import c2 from "../../Assets/Projects/canada/2.jpg"
import c3 from "../../Assets/Projects/canada/3.jpg"
import c4 from "../../Assets/Projects/canada/4.jpg"
import c5 from "../../Assets/Projects/canada/5.jpg"
import g1 from "../../Assets/Projects/Graduation/1.jpg"
import g2 from "../../Assets/Projects/Graduation/2.jpg"
import g3 from "../../Assets/Projects/Graduation/3.jpg"
import g4 from "../../Assets/Projects/Graduation/4.jpg"
import Toolstack from "./Toolstack";
import Projects from "./Projects";

import Carousel from 'react-bootstrap/Carousel';

 
function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I Am</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>


        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          <strong className="purple">My Graduation</strong>
        </h1>

        <p style={{ textAlign: "center" }}>
        After six months in my research internship, I graduated as a <span className="purple"> Computer Science Engineer </span> specializing in Artificial Intelligence. <br/>In parallel, I completed a <span className="purple">Research Master's Degree</span> in Smart Systems with high honors.<br/> This dual achievement showcases my proficiency in both practical application and theoretical understanding within these fields.
        </p>

        <Carousel>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={g1}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={g2}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={g3}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={g4}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
        </Carousel>
        <br />

        <h1 className="project-heading">
          <strong className="purple">My Research Internship at University of Quebec in Abitibi-Témiscamingue(UQAT)</strong>  </h1>
        <p style={{ textAlign: "center" }}>
        During my research internship, I spearheaded a comprehensive initiative focused on optimizing winter maintenance practices, <br/> with a particular emphasis on <span className="purple"> improving sidewalk snow removal efficiency.</span>
        
<br/>This internship not only honed my technical skills but also exposed me to a new country, new people, <br/>and the natural beauty of <span className="purple"> Rouyn-Noranda and Canada.</span> It was a transformative experience that enriched both my professional and personal growth.
         
        </p>


        <Carousel>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={c1}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={c2}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={c3}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={c4}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={c5}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>



        </Carousel>
        <h1 className="project-heading">
          <strong className="purple">Deep Learning Indaba 2022</strong>
        </h1>

        <p style={{ textAlign: "center" }}>

          Around 400 researchers, scientists, developers, academics and startup founders from across 36 countries<br /> attended
          <span className="purple"> Deep Learning Indaba</span> ,Africa’s biggest AI and machine learning workshop and conference.
          <br />I have presented my research poster out of 120 other presentations and being one of <span className="purple">the Indaba poster prize winners</span> makes me feel extremely happy and honored.
          <br />Also our project was selected as one of <span className="purple">the Ideathon winning projects and I have recived a compute grant from Google.</span>
        </p>

        <Carousel>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block"
                src={in0}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block"
                src={in4}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block"
                src={in5}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={in1}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block"
                src={in2}
                alt="Second slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block"
                src={in3}
                alt="Third slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block"
                src={in6}
                alt="Third slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block"
                src={in7}
                alt="Third slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
        </Carousel>
        <br />
        <h1 className="project-heading">
          <strong className="purple">My summer Internship at Talan</strong>  </h1>
        <p style={{ textAlign: "center" }}>

          After a two-month internship at Talan Tunisia ,we conducted a decentralized infrastructure for an ongoing metaverse project.<br /> We have worked on NFTs, Decentralized Identities ,DAOs and motion detection and tracking algorithms.
          <br/> Even so, I had a great time experiencing <span className="purple"> the Hololens.</span>
          <br />Accordingly, we were chosen as <span className="purple"> the best team by the jury.</span>
        </p>


        <Carousel>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={t1}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={t3}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={t4}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>

        </Carousel>
        <br />
        <h1 className="project-heading">
          <strong className="purple">PCD Challenge</strong>
        </h1>

        <p style={{ textAlign: "center" }}>
          It was a terrific opportunity to meet specialists from various companies during <br />my participation in the 3rd edition of <span className="purple">the PCD Challenge</span> at <span className="purple">the National School of Computer Science - ENSI. </span>

        </p>

        <Carousel>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={p1}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={p2}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={p3}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
        </Carousel>
        <br />
        <h1 className="project-heading">
          <strong className="purple">Volunteer Experience</strong>
        </h1>
        <p style={{ textAlign: "center" }}>
          I was the <span className="purple"> General Secretary and Director of Human Resources</span> of <span className="purple"> ENSI Robotics Association</span> mandate 2021-2022 and now I'm a <span className="purple"> member of the advisory board</span>.
          <br />ARE established in 2006,currently has over 150 active members.Our association aims to improve its members' skills by providing the right guidance and the right climate to achieve some objectives and to win many competitions.
        </p>
        <Carousel>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={a1}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={a2}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block"
                src={a3}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={a4}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container>
  );
}

export default About;
