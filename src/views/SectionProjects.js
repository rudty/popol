import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

const SectionProjects = () => {
  return (
    <>
      <div className="section section-dark" id="_project">
        <Container>
          <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Projects</h2>
                <p className="description">
                  개인 프로젝트
                </p>
          </Col>
          <Row className="example-page">
            <Col className="text-center" md="6">
              <a href="https://github.com/rudty/nodekell" target="_blank" rel="noopener noreferrer">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/nodekell.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="https://github.com/rudty/nodekell"
                target="_blank"
              >
                Landing Page
              </Button>
              <p className="description">
                개발기간: 2019-06 ~ <br />
                자바스크립트 함수형 프로그래밍 라이브러리입니다.<br />
                기존 npm의 함수형 라이브러리에서는 async / Promise 처리가 어려워<br />
                async / Promise 의 처리에 중점을 두었습니다.<br />
              </p>
            </Col>
            <Col className="text-center" md="6">
              <a href="https://github.com/rudty/MuteSpeakerOnHeadsetUnplugged" target="_blank" rel="noopener noreferrer">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/MuteSpeakerOnHeadsetUnplugged.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="https://github.com/rudty/MuteSpeakerOnHeadsetUnplugged"
                target="_blank"
              >
                Landing Page
              </Button>
              <p className="description">
                개발기간: 2019-03 ~ 2019-03<br />
                윈도우 태블릿에서 헤드셋/이어폰 제거 시 음소거 기능<br />
                윈도우에서는 Android / IOS와 다르게 이어폰 제거시<br />
                미디어 정지기능이 없어 대신 음소거 기능을 구현했습니다<br />
              </p>
            </Col>
            <Col className="text-center" md="6">
              <a href="https://github.com/rudty/bankingUsage" target="_blank" rel="noopener noreferrer">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/bankingUsage.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="https://github.com/rudty/bankingUsage"
                target="_blank"
              >
                Landing Page
              </Button>
              <p className="description">
                개발기간: 2019-09 ~ 2019-09<br />
                Kotlin - Spring을 활용한 간단 API 서버
              </p>
            </Col>
          </Row> 
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionProjects;
