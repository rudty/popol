import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionProjects() {
  return (
    <>
      <div className="section section-examples" data-background-color="black" id="_project">
        <div className="ml-auto mr-auto text-center" md="8">
          <h2 className="title">Projects</h2>
          <p className="description">
            <h3>주요 성과</h3>
            <Container className="text-center">
              <Row>
                <Col className="text-left" md="8">
                  <div className="typography-line">
                    <span>2020.01 - 2020.xx</span>
                    <p className="blockquote blockquote-primary">
                      <b>인게임/아웃게임 신규 기능</b><br />
                      <br />
                      개발중<br />
                      C++ 게임 서버, nodejs 웹서버 사용<br />
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>2020.04 - 2020.04</span>
                    <p className="blockquote blockquote-primary">
                      <b>아웃게임 유저 추천 기능 개선</b><br />
                      <br />
                      유저가 기능 추가한 내용들을 로깅 하여 그를 바탕으로<br />
                      유저에게 보여지는 추천 내용 개선<br />
                      node js 웹 서버 사용<br />
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>2019.10 - 2019.12</span>
                    <p className="blockquote blockquote-primary">
                      <b>아웃게임 서버 번역 기능</b><br />
                      <br />
                      국가별 플레이 기능을 공유하기 위한 번역 기능 추가<br />
                      저장 데이터는 인게임, 아웃게임, 웹서버 모두 관리 가능<br />
                      C++ 게임 서버, golang 추가 기능 및 node js 웹 서버 사용<br />
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>2019.08 - 2019.9</span>
                    <p className="blockquote blockquote-primary">
                      <b>인게임 콘텐츠 저장 기능 구현</b><br />
                      <br />
                      인게임에서 유저가 플레이 한 내역을 저장 및 관리할수 있게 하는 기능을 구현 <br />
                      저장 데이터는 유저가 직접 선택 가능<br />
                      C++ 게임 서버 및 node js 웹 서버 사용<br />
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>2019.03. - 2019.06</span>
                    <p className="blockquote blockquote-primary">
                      <b>아웃 게임 유저 콘텐츠 로비 개편</b><br />
                      <br />
                      아웃 게임에서 유저들이 만든 맵들의 정렬방식 및 기능 개편<br />
                      검색 관련 서버 SQL 쿼리 리뉴얼 및 back-end 리뉴얼 <br />
                      인게임과 연관된 부분은 C++ 게임 서버, 관련없는 부분은 node js 웹 서버 사용<br />
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>2018.10 - 2018.12</span>
                    <p className="blockquote blockquote-primary">
                      <b>아웃 게임 웹 콘텐츠 개발</b><br />
                      <br />
                      인게임에서 유저들이 만든 콘텐츠들을 웹에서 볼 수 있게하는 back-end 서버 개발<br />
                      선택 시 해당 콘텐츠에 즉시 입장가능하게 구현<br />
                      인게임과 연관된 부분은 C++ 게임 서버, 관련없는 부분은 node js 웹 서버 사용<br />
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </p>
          <p className="description">
            <h3>개인 프로젝트</h3>
          </p>
        </div>
        <div className="space-50"></div>
        <Container className="text-center">
          <Row>
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
            <Col className="text-center" md="6">
              <a href="https://github.com/rudty/go-parallel" target="_blank" rel="noopener noreferrer">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/goparallel.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="https://github.com/rudty/go-parallel"
                target="_blank"
              >
                Landing Page
              </Button>
              <p className="description">
                개발기간: 2018-06 ~ 2018-09<br />
                go 언어 병렬 처리 라이브러리
              </p>
            </Col>
          </Row>

        </Container>
      </div>
    </>
  );
}

export default SectionProjects;
