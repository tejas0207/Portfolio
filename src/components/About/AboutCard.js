import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tejas Gupta </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />I am a cloud enthusiast, following DevOps practices. Apart from that I am engaged in various freelancing, training, and community works.
            <br />
            <br />
            My Technical Certifications include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> AWS Solution Architect Associate
            </li>
            <li className="about-activity">
              <ImPointRight /> Red Hat Certified System Administrator
            </li>
            <li className="about-activity">
              <ImPointRight /> Red Hat Certified Specialist in Containers and Kuberenets
            </li>
            <li className="about-activity">
              <ImPointRight /> Microsoft Azure Fundamentals
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
