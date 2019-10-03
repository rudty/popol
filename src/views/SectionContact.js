
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionContact() {
  return (
    <>
      <div className="section section-dark" id="_contact">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Contact</h2>
              <p className="description">
                rudtyz@gmail.com
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionContact;
