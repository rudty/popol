import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionSkills() {
  return (
    <>
      <div className="section section-images" id="_skills" data-background-color="black">

        <Container className="text-center">
          <h2 className="title">Skills</h2>
          <Row>
            <Col className="mr-auto ml-auto" md="2" sm="3">
              <img
                alt="cpp"
                className="rounded img-raised"
                src={require("assets/img/cpp.jpg")}
              ></img>
              <h4>C++</h4>
            </Col>
            <Col className="mr-auto ml-auto" md="2" sm="3">
              <img
                alt="javascript"
                className="rounded img-raised"
                src={require("assets/img/javascript.png")}
              ></img>
              <h4>Javascript</h4>
            </Col>
            <Col className="mr-auto ml-auto" md="2" sm="3">
              <img
                alt="kotlin"
                className="rounded img-raised"
                src={require("assets/img/kotlin.jpg")}
              ></img>
              <h4>Kotlin</h4>
            </Col>
            <Col className="mr-auto ml-auto" md="2" sm="3">
              <img
                alt="java"
                className="rounded img-raised"
                src={require("assets/img/java.jpg")}
              ></img>
              <h4>Java</h4>
            </Col>
          </Row>
          <Row>
            <Col className="mr-auto ml-auto" md="2" sm="3"></Col>
            <Col className="mr-auto ml-auto" md="2" sm="3">
              <img
                alt="sqlserver"
                className="rounded img-raised"
                src={require("assets/img/sqlserver.jpg")}
              ></img>
              <h4>SQL Server</h4>
            </Col>
            <Col className="mr-auto ml-auto" md="2" sm="3">
              <img
                alt="mysql"
                className="rounded img-raised"
                src={require("assets/img/mysql.jpg")}
              ></img>
              <h4>My SQL</h4>
            </Col>
            <Col className="mr-auto ml-auto" md="2" sm="3"></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionSkills;
