import "./ProjectDetailPage.scss";
import ProjectCardComonent from "../../components/ProjectCardComonent/ProjectCardComonent";
import Healtthcare from "../../assets/project-images/Healthcare-web.svg"

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
    projectName: "JivoCare: Patient-First Healthcare.",
    imgUrl: Healtthcare,
    technology: "Web and Mobile, UI UX Design",
    description: "A comprehensive digital healthcare platform that empowers patients to find specialists, book teleconsultations, and manage medical records seamlessly. By prioritizing an intuitive, accessible interface, the design minimizes user friction and unifies the fragmented healthcare journey into one unified app.",
    openLink: "View Details",
  },
  {
    date: "Aug 31, 2026",
    projectName: "JivoCare: Patient-First Healthcare.",
    imgUrl: Healtthcare,
    technology: "Web and Mobile, UI UX Design",
    description: "A comprehensive digital healthcare platform that empowers patients to find specialists, book teleconsultations, and manage medical records seamlessly. By prioritizing an intuitive, accessible interface, the design minimizes user friction and unifies the fragmented healthcare journey into one unified app.",
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
