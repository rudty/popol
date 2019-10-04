import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionIAM() {
  return (
    <>
      <div className="section" id="_iam" data-background-color="black">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">I am</h2>
              <h5 className="description  text-left">
                C++ 기반의 게임 서버와 nodejs 웹 서버 및 유틸리티를 제작하는 개발자 역할을 수행했습니다.
                사람들이 제가 개발한 프로젝트로 좀 더 재밌고 편리한 생활을 할 수 있으면 좋겠습니다.
                시간이 날 때는 Spring 기반의 웹서버와 Javascript 의 라이브러리를 제작하고 있습니다.
                <br />
                개발 패러다임은 계속 변화하고 있고 새로운 방식에 맞추지 못한다면 뒤쳐진다고 생각하고 있기에 끊임없이
                공부하고 있는 개발자입니다. 더 나아보이는 디자인 패턴이나 설계 방식이 나온다면 알아보고 좋다고 판단한다면 
                현재의 프로젝트에 부분적으로 적용 시켜보거나 새로운 프로젝트 시작 시에 적용해보고 있습니다.
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionIAM;
