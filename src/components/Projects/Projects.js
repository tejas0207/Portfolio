import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import getfilter from "../../Assets/Projects/getfilter.png";
import rto from "../../Assets/Projects/RTO.png";
import chellam from "../../Assets/Projects/chellam.png";
import reader from "../../Assets/Projects/reader.png";
import diabetes from "../../Assets/Projects/diabetes.png";
import ddos from "../../Assets/Projects/ddos.png";

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
              imgPath={getfilter}
              isBlog={false}
              title="get-filter"
              description="A website featuring different filters applied on an image. get-filter website helps user to use different filters on different images and your favourite ones can be downloaded in the form of png/jpg/jfif."
              ghLink="https://github.com/tejas0207/Mlops_Proj"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rto}
              isBlog={false}
              title="RTO-NOTIFIER"
              description="Created RTO NOTIFIER Web Application to contact Vehicle's owner with just an image. This is cretaed using Flask framework and various computer vision libraries to detect car and extract the number plate. After retriving number, it checks the database and send a mail to the owner automatically."
              ghLink="https://github.com/tejas0207/RTO-NOTIFIER"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chellam}
              isBlog={false}
              title="chellam-search-kubernetes"
              description="Web Application to automate our Kubernetes task. Using this, you don't need to remember any commands of Kubernetes , Just type as per your convenience in human language and our app will interpret it and do the needful stuffs for you."
              ghLink="https://github.com/tejas0207/chellam-search-kubernetes"
            // demoLink="https://www.linkedin.com/posts/tejas-gupta-9b20731a5_connections-familyman2-chellamsir-activity-6814575594798379008-0r9H"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ddos}
              isBlog={false}
              title="DDoS-shield"
              description="Built a real-time DDOS attack detection and prevention script that on the fly check for malicious IP’s attacking the server on daily basis and blocking them if approved . It also shows total traffic on website(daily as well as overall)"
              ghLink="https://github.com/tejas0207/DDoS-shield"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diabetes}
              isBlog={false}
              title="flask_diabetes_prediction"
              description="It's a Web Application that works to detect if the person has diabetes or not, based on some inputs from user which is then inserted in the machine learning model to predict the outcome."
              ghLink="https://github.com/tejas0207/flask_diabetes_prediction"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reader}
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
