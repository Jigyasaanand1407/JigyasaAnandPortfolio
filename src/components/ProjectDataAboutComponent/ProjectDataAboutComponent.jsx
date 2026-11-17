import React from "react";
import "./ProjectDataAboutComponent.scss";
import ProjectDataAboutCardComponent from "./ProjectDataAboutCardComponent/ProjectDataAboutCardComponent";

const ProjectDataAboutComponent = ({}) => {
  return (
    <div className="container-fluid px-5">
      <div className="process-page d-block d-xl-flex flex-wrap justify-content-between align-items-center pb-5">
        <div>
          <div className="date mb-4">2021 — PRESENT</div>
          <div className="process-title">
            <span className="opacity-25"> Work that </span>
            <br />
            <span className="opacity-100">
              makes an impact.
            </span>{" "}
          </div>
        </div>
        <p className="mw-500px mb-0 mt-4 fs-24 fw-200 opacity-50">
          A selection of digital products and experiences I've contributed to —
          combining thoughtful user experiences, functional interfaces and
          front-end engineering to solve real-world problems.
        </p>
      </div>
      <ProjectDataAboutCardComponent />
    </div>
  );
};

export default ProjectDataAboutComponent;
