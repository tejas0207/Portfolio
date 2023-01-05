import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {/* My Recent <strong className="purple">Works </strong> */}
          Work in <strong className="purple">Progress 🔨 </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="get-filter"
              description="A website featuring different filters applied on an image. get-filter website helps user to use different filters on different images and your favourite ones can be downloaded in the form of png/jpg/jfif."
              ghLink="https://github.com/tejas0207/Mlops_Proj"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="RTO-NOTIFIER"
              description="We have created RTO NOTIFIER Web Application to contact Vehicle's owner with just an image. This is cretaed using Flask framework and various computer vision libraries to detect car and extract the number plate. After retriving number, it checks the database and send a mail to the owner automatically."
              ghLink="https://github.com/tejas0207/RTO-NOTIFIER"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="chellam-search-kubernetes"
              description="Web Application to automate our Kubernetes task. Using this, you don't need to remember any commands of Kubernetes , Just type as per your convenience in human language and our app will interpret it and do the needful stuffs for you."
              ghLink="https://github.com/tejas0207/chellam-search-kubernetes"
            // demoLink="https://www.linkedin.com/posts/tejas-gupta-9b20731a5_connections-familyman2-chellamsir-activity-6814575594798379008-0r9H"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="DDoS-shield"
              description="Built a real-time DDOS attack detection and prevention script that on the fly check for malicious IP’s attacking the server on daily basis and blocking them if approved . It also shows total traffic on website(daily as well as overall)"
              ghLink="https://github.com/tejas0207/DDoS-shield"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="flask_diabetes_prediction"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/tejas0207/flask_diabetes_prediction"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Reader"
              description="It's a Web Application which deals with converting text to speech. Not only it is limited to text but also we can make it read from an image. It is well intergated with cloud services like Polly, textract, etc. to fulfil the requirements."
              ghLink="https://github.com/Rushikesh0125/Reader"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
