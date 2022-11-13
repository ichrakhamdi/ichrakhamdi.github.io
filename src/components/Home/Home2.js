import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMail,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and with the art of AI. In fact,I believe that if we can make computers more intelligent–and I want to be careful of AI hype–and understand the world and the environment better, it can make life so much better for many of us
              <br />
              <br />I am passionate about 
              <i>
                <b className="purple">Deep Learning, Convolutional Neural Networks, knowledge extraction from data and image processing in general </b>
              </i>
              <br />
              <br />
               I’m currently learning more about   &nbsp;
              <i>
                <b className="purple">MLOps and Reinforcement Learning </b> 
              </i>
              <br />
              <br />
      


            </p>
          </Col>
          <Col md={4} className="myAvtar" >
            <Tilt>
              <img src={myImg} className="img-fluid" alt="me" />
              
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">contact </span>me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ichrakhamdi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/HamdiIchrak1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hamdi-ichrak-740bb81b9/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto: ichrak.hamdi@ensi-uma.tn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
