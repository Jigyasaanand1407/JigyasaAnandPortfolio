import "./CaseStudyPage.scss";
import { useParams } from "react-router-dom";

import jivoDesktop from "../../assets/case-study/jivo-care.svg";
import jivoLaptop from "../../assets/case-study/jivo-care-laptop.svg";
import jivoTabletLg from "../../assets/case-study/jivo-care-ipad-pro.svg";
import jivoTablet from "../../assets/case-study/jivo-care-ipad-mini.svg";
import jivoMobileLg from "../../assets/case-study/jivo-care-iphone-lg.svg";
import jivoMobile from "../../assets/case-study/jivo-care-iphone-sm.svg";

import checkoutCaseStudy from "../../assets/case-study/checkout.svg";

const caseStudies = {
  healthcare: {
    title: "Patient-First Healthcare",
    desktop: jivoDesktop,
    laptop: jivoLaptop,
    tabletLg: jivoTabletLg,
    tablet: jivoTablet,
    mobileLg: jivoMobileLg,
    mobile: jivoMobile,
  },

  checkout: {
    title: "Checkout Experience",
    image: checkoutCaseStudy,
  },
};

const CaseStudyPage = () => {
  const { projectId } = useParams();
  const project = caseStudies[projectId];

  if (!project) {
    return <div className="container py-5">Project not found.</div>;
  }

  // Projects with only one image use it at every screen size.
  if (project.image) {
    return (
      <div className="case-study-page">
        <img
          src={project.image}
          alt={`${project.title} case study`}
          className="case-study-image"
        />
      </div>
    );
  }

  return (
    <div className="case-study-page">
      <picture>
        {/* Mobile: 390px and below */}
        <source
          media="(max-width: 390px)"
          srcSet={project.mobile}
        />

        {/* Larger mobile: 391px–440px */}
        <source
          media="(max-width: 440px)"
          srcSet={project.mobileLg}
        />

        {/* Small tablet: 441px–744px */}
        <source
          media="(max-width: 744px)"
          srcSet={project.tablet}
        />

        {/* Larger tablet: 745px–1024px */}
        <source
          media="(max-width: 1024px)"
          srcSet={project.tabletLg}
        />

        {/* Laptop: 1025px–1440px */}
        <source
          media="(max-width: 1440px)"
          srcSet={project.laptop}
        />

        {/* Desktop: above 1440px */}
        <img
          src={project.desktop}
          alt={`${project.title} case study`}
          className="case-study-image"
        />
      </picture>
    </div>
  );
};

export default CaseStudyPage;