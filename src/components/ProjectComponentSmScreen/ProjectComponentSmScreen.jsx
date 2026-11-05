import React, { useEffect, useRef } from "react";
import "./ProjectComponentSmScreen.scss";
import { projectData } from "../../data/projectData.js";
import ProjectDetailComponentSm from "./ProjectDetailComponentSm/ProjectDetailComponentSm";
import arrowDown from "../../assets/arrow-down.svg";
import arrowRight from "../../assets/arrow-right.svg";


const ProjectComponentSmScreen = () => {
  return (
    <div className="mb-5">
      <div className="container">
        <div className="text-sec">
          <p className="mb-0">
            {" "}
            My <br />{" "}
            <div className=" d-flex justify-content-space-between align-items-center">
              <span className="ms-5">Projects</span>
              <img
                src={arrowDown}
                alt="arrow-down"
                className="ms-auto d-none d-md-block svg-black"
              />
            </div>
          </p>
        </div>
      </div>
      <div className="wrapper mb-5">
        <div className="cards">
          {/* 3. Map over projectData and pass the props to ProjectCard */}
          {projectData.map((project, index) => (
            <div className="card-wrapper" key={index}>
              <ProjectDetailComponentSm
                badge={project.badge}
                title={project.title}
                description={project.description}
                image={project.image}
                hoverImage={project.hoverImage}
                bgClassContent={project.bgClassContent}
                bgClassImg={project.bgClassImg}
                bgClasstag={project.bgClasstag}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="spacer"></div> */}
      <div className="container d-flex justify-content-center flex-column align-items-center">
        <h2 className="heading  mb-4 ">Are you Ready to see More ?</h2>
        <button className="action-btn">
          <span className="hover-content">View All Projects</span>
          <img src={arrowRight} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default ProjectComponentSmScreen;
