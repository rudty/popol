import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionActivity() {
  return (
    <>
      <div className="section" id="_activity" data-background-color="black">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">Activity</h2>
              <h5 className="description text-left">
                2015.01 - 2016.12 삼성 소프트웨어 멤버십 활동
              </h5>
              <h5 className="description text-left">
                2016.12 한전 KDN 2016 에너지 분야 SW작품 경진대회 대상
              </h5>
              <h5 className="description text-left">
                2016.10 K - K-Hackathon 대회 우수상
              </h5>
              <h5 className="description text-left">
                2015.06 2015 웨어러블 컴퓨터 경진대회 우수상
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionActivity;
