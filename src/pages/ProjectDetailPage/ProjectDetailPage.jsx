import "./ProjectDetailPage.scss";
import ProjectCardComonent from "../../components/ProjectCardComonent/ProjectCardComonent";
import Healtthcare from "../../assets/project-images/Healthcare-web.svg"
import Kph from "../../assets/project-images/Kph-web.svg"
import Pantasign from "../../assets/project-images/Pantasign.svg"
import Cheezoo from "../../assets/project-images/Cheezoo.svg"
import Denora from "../../assets/project-images/Denora.svg"
import Opus from "../../assets/project-images/Opus.svg"

const ProjectDataInfo = [
  {
    date: "Aug 31, 2026",
    projectName: "JivoCare: Patient-First Healthcare.",
    imgUrl: Healtthcare,
    technology: "Web and Mobile, UI UX Design",
    description: "A comprehensive digital healthcare platform that empowers patients to find specialists, book teleconsultations, and manage medical records seamlessly. By prioritizing an intuitive, accessible interface, the design minimizes user friction and unifies the fragmented healthcare journey into one unified app.",
    openLink: "/projects/healthcare",
  },
  {
    date: "Aug 31, 2026",
    projectName: "KPH: Task Management Modernization",
    imgUrl: Kph,
    technology: "Web UI UX Design",
    description: "An assessment and requirements definition project to modernize a legacy HR intranet and task management system. The initiative identifies critical functionality gaps in task scheduling, permissions management, resource organization, and communication to guide the implementation of a new, improved system.",
    openLink: "View Details",
  },
  {
    date: "Aug 31, 2026",
    projectName: "Cheezoo: Photographer Booking",
    imgUrl: Cheezoo,
    technology: "Web and Mobile, UI UX Design and Development with React",
    description: "A unified booking ecosystem that allows users to discover, schedule, and manage professional photographers seamlessly across web, mobile, and smartwatch platforms. The application delivers real-time availability, instant notifications, and a frictionless scheduling experience on any device.",
    openLink: "View Details",
  },
  {
    date: "Aug 31, 2026",
    projectName: "Pantsign: Digital Signature Flow Redesig",
    imgUrl: Pantasign,
    technology: "Web UI UX Design and Development with React",
    description: "A complete end-to-end redesign of the user journey for an India-based digital signature platform. The revamped workflow significantly reduces user friction, streamlines document processing, and ensures a secure, compliant, and intuitive signing experience for both individual and enterprise users.",
    openLink: "View Details",
  },
  {
    date: "Aug 31, 2026",
    projectName: "Pantsign: Digital Signature Flow Redesig",
    imgUrl: Denora,
    technology: "Web UI UX Design and Development with React",
    description: "A complete end-to-end redesign of the user journey for an India-based digital signature platform. The revamped workflow significantly reduces user friction, streamlines document processing, and ensures a secure, compliant, and intuitive signing experience for both individual and enterprise users.",
    openLink: "View Details",
  },
  {
    date: "Aug 31, 2026",
    projectName: "Pantsign: Digital Signature Flow Redesig",
    imgUrl: Opus,
    technology: "Web UI UX Design and Development with React",
    description: "A complete end-to-end redesign of the user journey for an India-based digital signature platform. The revamped workflow significantly reduces user friction, streamlines document processing, and ensures a secure, compliant, and intuitive signing experience for both individual and enterprise users.",
    openLink: "View Details",
  },
];
const ProjectDetailPage = () => {
  return (
    <div className="container-fluid px-5 mt-200">
        <div className="row">
      {ProjectDataInfo.map((project, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <ProjectCardComonent
              date={project.date}
              projectName={project.projectName}
              imgUrl={project.imgUrl}
              technology={project.technology}
              description={project.description}
              openLink={project.openLink}
            />
          </div>
      ))}
        </div>
    </div>
  );
};

export default ProjectDetailPage;
