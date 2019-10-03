import React from "react";

// reactstrap components

// core components ExamplesNavbar
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Footer from "components/Footers/Footer.js";
import SectionSkills from "views/SectionSkills";
import SectionProjects from "views/SectionProjects";
import SectionIAM from "views/SectionIAM";
import SectionContact from "views/SectionContact";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionSkills />
        <SectionProjects />
        <SectionIAM />
        <SectionContact />
        <Footer />
      </div>
    </>
  );
}

export default Index;
