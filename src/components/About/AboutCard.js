import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ichrak Hamdi </span>
            from <span className="purple"> Tunisia</span>
            <br />I am a final year student in computer science engineering specialized in Artificial Intelligence and also a master's student in Smart Systems at the National School of Computer Science-ENSI.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Participation in voluntary work
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Take the risk or loose the chance"{" "}
          </p>
          <footer className="blockquote-footer">The best inspirational quote for me.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
