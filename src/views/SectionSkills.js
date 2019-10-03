/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

const SectionSkills = () => {
  return (
    <>
      <div className="tim-container" id="_skill">
        <Container>
          <div id="typography">
            <div className="typography-line">
              <h1>Programming Skills</h1>
            </div>
          </div>
          <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Language</h2>
          </Col>
          <Row>
            <Col className="mr-auto ml-auto" md="2" sm="3">
                    <img
                      alt="cpp"
                      className="img-thumbnail img-no-padding img-responsive"
                      src={require("assets/img/cpp.png")}
                    />
                    <p className="text-center">CPP</p>
            </Col>
            <Col className="mr-auto ml-auto" md="2" sm="3">
                    <img
                      alt="java"
                      className="img-thumbnail img-no-padding img-responsive"
                      src={require("assets/img/javascript.png")}
                    />
                    <p className="text-center">Javascript</p>
            </Col>
            <Col className="mr-auto ml-auto" md="2" sm="3">
                    <img
                      alt="java"
                      className="img-thumbnail img-no-padding img-responsive"
                      src={require("assets/img/kotlin.png")}
                    />
                    <p className="text-center">Kotlin</p>
            </Col>
            <Col className="mr-auto ml-auto" md="2" sm="3">
                    <img
                      alt="java"
                      className="img-thumbnail img-no-padding img-responsive"
                      src={require("assets/img/java.png")}
                    />
                    <p className="text-center">Java</p>
            </Col>
          </Row>
          <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Database</h2>
          </Col>
          <Row>
            <Col className="mr-auto ml-auto" md="2" sm="3">
                    <img
                      alt="sqlserver"
                      className="img-thumbnail img-responsive"
                      src={require("assets/img/sqlserver.png")}
                    />
                    <p className="text-center">SQL Server</p>
            </Col>
            <Col className="mr-auto ml-auto" md="2" sm="3">
                    <img
                      alt="sqlserver"
                      className="img-thumbnail img-responsive"
                      src={require("assets/img/mysql.png")}
                    />
                    <p className="text-center">My SQL</p>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionSkills;
