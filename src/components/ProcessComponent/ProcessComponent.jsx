import React from "react";
import "./ProcessComponent.scss";
import ProcessCardComponent from "./ProcessCardComponent/ProcessCardComponent";

const ProcessComponent = ({}) => {
  return (
    <div className="container-fluid px-5">
      <div className="process-page text-center d-flex align-items-center flex-column pb-5">
        {/* <div className="row align-items-center">
        <div className="col-12 col-lg-6 process-title">
          From <span className="text-gradient">Insights </span> to Impact
        </div>
        <p className="col-12 col-lg-6  mb-0 display-6 fw-200">
          A peek behind the curtain at how I research, iterate, and build
          digital products.
        </p>
      </div> */}
        <div className="process-title">
          <span className="opacity-25"> From </span>{" "}
          <span className="text-gradient opacity-100">Insights</span>{" "}
          <span className="opacity-25">to </span>
          <span className="text-gradient-pink opacity-100">Impact</span>
        </div>
        <p className="col-12 col-lg-6 mb-0 mt-4 fs-24 fw-200 opacity-50">
          A peek behind the curtain at how I research, iterate, and build
          digital products.
        </p>
      </div>
      <ProcessCardComponent />
    </div>
  );
};

export default ProcessComponent;
