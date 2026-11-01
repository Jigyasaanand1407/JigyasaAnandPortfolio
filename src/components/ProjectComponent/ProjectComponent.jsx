import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProjectComponent.scss";
import card1 from "../../assets/card-1-bw.svg";
import card1hover from "../../assets/card-1.svg";
import card2 from "../../assets/card-2-bw.svg";
import card2hover from "../../assets/card-2.svg";
import card3 from "../../assets/card-3-bw.svg";
import card3hover from "../../assets/card-3.svg";
import card4 from "../../assets/card-4-bw.svg";
import card4hover from "../../assets/card-4.svg";
import card5 from "../../assets/card-5-bw.svg";
import card5hover from "../../assets/card-5.svg";
import ProjectDetailComponent from "./ProjectDetailComponent/ProjectDetailComponent";
import arrowDown from "../../assets/arrow-down.svg";

import arrowRight from "../../assets/arrow-right.svg";

gsap.registerPlugin(ScrollTrigger);

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
    link: "/projects/healthcare",
  },
  {
    badge: "UX Design-Systems Assessment & Requirements Gathering",
    title: "Task Management Modernization",
    description:
      "An assessment and requirements definition project to modernize a legacy HR intranet and task management system. The initiative identifies critical functionality gaps in task scheduling, permissions management, resource organization, and communication to guide the implementation of a new, improved system.",
    image: card2,
    hoverImage: card2hover,
    bgClassContent: "card-orange",
    bgClasstag: "badge-orange",
    bgClassImg: "card-orange",
    link: "/projects/checkout",
  },
  {
    badge: "Web Dev",
    title: "Building a scalable design system",
    description:
      "A comprehensive component library and design system built to ensure visual consistency and accelerate development workflows. By standardizing UI elements and interaction patterns, it bridges the gap between design and engineering, empowering teams to build accessible, cohesive products at scale.",
    image: card5,
    hoverImage: card5hover,
    bgClassContent: "card-blue",
    bgClasstag: "badge-blue",
    bgClassImg: "card-blue",
    link: "/projects/design-system",
  },
  {
    badge: "Web, Mobile & Wearable Dev",
    title: "Cross-Platform Photographer Booking",
    description:
      "A unified booking ecosystem that allows users to discover, schedule, and manage professional photographers seamlessly across web, mobile, and smartwatch platforms. The application delivers real-time availability, instant notifications, and a frictionless scheduling experience on any device.",
    image: card4,
    hoverImage: card4hover,
    bgClassContent: "card-grey",
    bgClassImg: "card-grey",
    link: "/projects/branding",
  },
  {
    badge: "UI/UX Design / Workflow Optimization",
    title: "Digital Signature Flow Redesig",
    description:
      "A complete end-to-end redesign of the user journey for an India-based digital signature platform. The revamped workflow significantly reduces user friction, streamlines document processing, and ensures a secure, compliant, and intuitive signing experience for both individual and enterprise users.",
    image: card3,
    hoverImage: card3hover,
    bgClassContent: "card-green",
    bgClasstag: "badge-green",
    bgClassImg: "card-green",
    link: "/projects/digital-product",
  },
];

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
