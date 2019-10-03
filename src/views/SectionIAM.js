
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionIAM() {
  return (
    <>
      <div className="section" id="_IAM">
        <Container className="text-center">
        <Row className="text-center">
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">Experience</h2>
              <p className="description">
                - C++ 라이브 서비스 개발 경험<br />
                - nodejs 라이브 서비스 개발 경험<br />
                - 10000+ 동시 접속 서버 운영 경험<br />
              </p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">I am</h2>
              <p className="description">
                2017년부터 C++ 기반의 게임 서버와 nodejs 웹 서버 및 유틸리티를 제작하는 개발자 역할을 수행했습니다.<br />
                사람들이 제가 개발한 프로젝트로 좀 더 재밌고 편리한 생활을 할 수 있으면 좋겠습니다.<br />
                시간이 날 때는 Spring 기반의 웹서버와 Javascript 의 라이브러리를 제작하고 있습니다.<br />
                <br />
                개발 패러다임은 계속 변화하고 있고 새로운 방식에 맞추지 못한다면 뒤쳐진다고 생각하고 있기에 끊임없이
                공부하고 있는 개발자입니다. 더 나아보이는 디자인 패턴이나 설계 방식이 나온다면 알아보고 좋다고 판단한다면 
                현재의 프로젝트에 부분적으로 적용 시켜보거나 새로운 프로젝트 시작 시에 적용해보고 있습니다.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionIAM;
