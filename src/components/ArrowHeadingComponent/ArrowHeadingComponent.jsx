import React from 'react'
import arrowDown from "../../assets/arrow-down.svg"

const ArrowHeadingComponent = ({title1, title2}) => {
  return (
    <div className="container">
        <div className="text-sec">
         <p className="mb-0"> {title1} <br /> <div className=" d-flex justify-content-space-between align-items-center"><span className="ms-5">{title2}</span> 
        <img src={arrowDown} alt="arrow-down" className="ms-auto d-none d-md-block"/></div></p>
        </div>
      </div>
  )
}

export default ArrowHeadingComponent
