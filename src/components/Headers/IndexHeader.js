/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        id="_rudtyz"
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/backgroundcode.png") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">포트폴리오</h1>
            </div>
            <h2 className="presentation-subtitle text-center">
              개발자 석경우
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
      </div>
    </>
  );
}

export default IndexHeader;
