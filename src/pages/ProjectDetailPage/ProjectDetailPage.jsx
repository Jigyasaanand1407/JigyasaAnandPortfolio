import "./ProjectDetailPage.scss";
import ProjectCardComonent from "../../components/ProjectCardComonent/ProjectCardComonent";
import { ProjectDataInfo } from "../../data/pojectDataInfo.js";

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
