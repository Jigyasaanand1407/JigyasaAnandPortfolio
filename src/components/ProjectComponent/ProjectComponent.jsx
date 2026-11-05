import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProjectComponent.scss";
import ProjectDetailComponent from "./ProjectDetailComponent/ProjectDetailComponent";
import arrowDown from "../../assets/arrow-down.svg";
import { projectData } from "../../data/projectData.js";
import arrowRight from "../../assets/arrow-right.svg";

gsap.registerPlugin(ScrollTrigger);


const ProjectComponent = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cardsWrappers = gsap.utils.toArray(".card-wrapper");
      const cards = gsap.utils.toArray(".card");

      cardsWrappers.forEach((wrapper, i) => {
        const card = cards[i];
        let scale = 1;
        let rotation = 0;

        if (i !== cards.length - 1) {
          scale = 0.9 + 0.025 * i;
          rotation = -10;
        }

        gsap.to(card, {
          scale: scale,
          rotationX: rotation,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top " + (60 + 10 * i),
            end: "bottom 550",
            endTrigger: ".wrapper",
            scrub: true,
            pin: wrapper,
            pinSpacing: i === cards.length - 1 ? true : false,
            id: String(i + 1),
          },
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="mb-5">
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
              <ProjectDetailComponent
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

export default ProjectComponent;
