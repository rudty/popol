import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-transparent">
          <NavLink
                id="_rudtyz"
                href="#_main"
                onClick={e => {
                  e.preventDefault();
                  document
                    .getElementById("_main")
                    .scrollIntoView();
                }} 
              >
                <i className="nc-icon nc-book-bookmark" /> rudtyz
              </NavLink>
            <UncontrolledTooltip target="#_rudtyz">
              rudtyz. 2019.10.
            </UncontrolledTooltip>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#_iam"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("_iam")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons design_app"></i>
                  <p>iam</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#_project"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("_project")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons design_app"></i>
                  <p>project</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#_activity"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("_activity")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons design_app"></i>
                  <p>Activity</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#_skills"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("_skills")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons design_app"></i>
                  <p>skills</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
