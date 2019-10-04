/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, NavLink, NavItem, UncontrolledTooltip } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue" id="_main">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/backgroundcode.png") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand text-right">
            {/* <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img> */}
            <h1 className="h1-seo">석경우</h1>
            <h5>Backend developer</h5>
            <h5>넥슨 코리아 재직중 2017.02 ~</h5>
            <h5>---</h5>
            <h5>C++ 게임 서버 개발 경험</h5>
            <h5>nodejs 웹 서버 개발 경험</h5>
            <h5>10000+ 동시 접속 서버 운영 경험</h5>
            <h5>rudtyz@gmail.com</h5>
            <NavLink
              data-placement="bottom"
              href="https://github.com/rudty"
              target="_blank"
            >
              <img
                id="_github_link"
                alt="github"
                className="rounded-circle"
                src={require("assets/img/github.png")}
              ></img>
            </NavLink>
            <UncontrolledTooltip target="#_github_link">
              GitHub 방문
            </UncontrolledTooltip>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
