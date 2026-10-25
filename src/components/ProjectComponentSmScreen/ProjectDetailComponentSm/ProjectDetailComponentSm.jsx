import React from 'react'
import "./ProjectDetailComponentSm.scss"
import arrow from "../../../assets/arrow-open.svg"; 
import arrowRight from "../../../assets/arrow-right.svg"; 
import { useNavigate } from "react-router-dom";

const ProjectDetailComponentSm = ({ badge, title, description, image , hoverImage, bgClassContent, bgClassImg, bgClasstag, link}) => {
  return (
    <div className="card card-sm-screen d-block d-lg-flex" data-cursor-image={arrow}>
      <div className={`card-content ${bgClassContent}`}>
        <h4 className="sm-title">Project Name</h4>
        <h2 className="title">{title}</h2>
        <h4 className="sm-title">Work</h4>
        <span className={`badge ${bgClasstag}`}>{badge}</span>
        <h4 className="sm-title">Brief</h4>
        <p className="description">{description}</p>
        <button className="action-btn"
  onClick={() => link && navigate(link)} >
          <span className="hover-content">View More</span><img src={arrowRight} alt="arrow" />
        </button>
      </div>
      <div className={`card-visual hover-img h-strech ${bgClassImg}`}>
        {/* Render both images with distinct classes */}
        <img src={image} alt={title} className="default-img" />
        {hoverImage && <img src={hoverImage} alt={`${title} hover`} className="hover-img" />}
      </div>
    </div>
  );
}

export default ProjectDetailComponentSm
