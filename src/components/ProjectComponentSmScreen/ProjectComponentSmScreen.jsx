import React, { useEffect, useRef } from "react";
import "./ProjectComponentSmScreen.scss";
import card1 from "../../assets/card-1-bw.svg";
import card1hover from "../../assets/card-1.svg";
import card2 from "../../assets/card-2-bw.svg";
import card2hover from "../../assets/card-2.svg";
import card3 from "../../assets/card-3-bw.svg";
import card3hover from "../../assets/card-3.svg";
import card4 from "../../assets/card-4-bw.svg";
import card4hover from "../../assets/card-4.svg";
import ProjectDetailComponentSm from "./ProjectDetailComponentSm/ProjectDetailComponentSm";
import arrowDown from "../../assets/arrow-down.svg"
import arrowRight from "../../assets/arrow-right.svg";


// 2. Replace cardClasses with your actual project data
const projectData = [
  {
    badge: "UX/UI – Product Design – HealthTech",
    title: "Patient-First Healthcare",
    description:
      "A comprehensive digital healthcare platform that empowers patients to find specialists, book teleconsultations, and manage medical records seamlessly. By prioritizing an intuitive, accessible interface, the design minimizes user friction and unifies the fragmented healthcare journey into one unified app.",
    image: card1,
    hoverImage: card1hover,
    bgClassContent: "card-purple",
    bgClassImg: "card-purple",
    bgClasstag: "badge-purple",
  },
  {
    badge: "UX Design",
    title: "Streamlining the checkout process",
    description: "A comprehensive digital healthcare platform that empowers patients to find specialists, book teleconsultations, and manage medical records seamlessly. By prioritizing an intuitive, accessible interface, the design minimizes user friction and unifies the fragmented healthcare journey into one unified app.",
    image: card2,
    hoverImage: card2hover,
    bgClassContent: "card-orange",
    bgClasstag: "badge-orange",
    bgClassImg: "card-orange",
  },
  {
    badge: "Web Dev",
    title: "Building a scalable design system",
    description: "A comprehensive digital healthcare platform that empowers patients to find specialists, book teleconsultations, and manage medical records seamlessly. By prioritizing an intuitive, accessible interface, the design minimizes user friction and unifies the fragmented healthcare journey into one unified app.",
    image: card3,
    hoverImage: card3hover,
    bgClassContent: "card-green",
    bgClasstag: "badge-green",
    bgClassImg: "card-green",
  },
  {
    badge: "Branding",
    title: "Reimagining the corporate identity",
    description: "A comprehensive digital healthcare platform that empowers patients to find specialists, book teleconsultations, and manage medical records seamlessly. By prioritizing an intuitive, accessible interface, the design minimizes user friction and unifies the fragmented healthcare journey into one unified app.",
    image: card4,
    hoverImage: card4hover,
    bgClassContent: "card-grey",
    bgClassImg: "card-grey",
  },
];

const ProjectComponentSmScreen = () => {

  return (
    <div className="mb-5">
      <div className="container">
        <div className="text-sec">
         <p className="mb-0"> My <br /> <div className=" d-flex justify-content-space-between align-items-center"><span className="ms-5">Projects</span> 
        <img src={arrowDown} alt="arrow-down" className="ms-auto d-none d-md-block svg-black"/></div></p>
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
              />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="spacer"></div> */}
      <div className="container d-flex justify-content-center flex-column align-items-center">
        <h2 className="heading  mb-4 ">
          Are you Ready to see More ?</h2>
        <button className="action-btn">
          <span className="hover-content">View All Projects</span>
          <img src={arrowRight} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default ProjectComponentSmScreen;
