import React, { useEffect, useState } from "react";
import "./ProjectDataAboutCardComponent.scss";
import { getProjects } from "../../../services/projectService";
//API URL
// const projectDataApi = "http://localhost:3001/projects";

const ProjectDataAboutCardComponent = () => {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // api calling
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        setLoading(true);

        const data = await getProjects();

        setProjectData(data || []);
      } catch (e) {
        console.error("Error fetching project data:", e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjectData();
  }, []);
  // Loading state
  if (loading) {
    return <p>Loading projects...</p>;
  }

  // Error state
  if (error) {
    return <p>Unable to load projects: {error}</p>;
  }
  return (
    <div className="process-list-container">
      {projectData.map((item, index) => {
        return (
          <div key={item.id || index} className={"process-card"}>
            <div className="d-flex justify-content-between">
              <div className="number">
                {item.num}-{}
              </div>
              <div className="category">{item.category}</div>
            </div>

            <div className=" align-items-center position-relative">
              <div className="process-name lh-none mb-5 mb-xl-0">
                {item.title}
              </div>

              <div className="process-des">{item.description}</div>
            </div>
            <div className="tags">
              <div className="tag">{item.tag}</div>
            </div>
            <div className="roles">Role: {item.role}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectDataAboutCardComponent;

// import React, { useEffect, useState } from "react";
// import "./ProjectDataAboutCardComponent.scss";

// //API URL
// const projectDataApi = "http://localhost:3001/projects";

// const ProjectDataAboutCardComponent = () => {
//   const [projectData, setProjectData] = useState([]);

//   // api calling
//   useEffect(() => {
//     const fetchProjectData = async (url) => {
//       try {
//         // fetching responce
//         const resp = await fetch(url);
//         // converting data into json
//         const data = await resp.json();
//         //condition of cheching if data is coming or not
//         if (data.length > 0) {
//           // if yes then data is passing into set variable
//           setProjectData(data);
//         }
//       } catch (e) {
//         console.error(e);
//       }
//     };
//     fetchProjectData(projectDataApi);
//   }, []);
//   return (
//     <div
//       className="process-list-container"
//     >
//       {projectData.map((item, index) => {

//         return (
//           <div
//             key={item.id || index}
//             className={"process-card"}
//           >
//             <div className="d-flex justify-content-between">
//               <div className="number">
//                 {item.num}-{}
//               </div>
//               <div className="category">{item.category}</div>
//             </div>

//             <div className=" align-items-center position-relative">
//               <div className="process-name lh-none mb-5 mb-xl-0">
//                 {item.title}
//               </div>

//               <div className="process-des">
//                 {item.description}
//               </div>

//             </div>
//             <div className="tags"><div className="tag">{item.tag}</div></div>
//             <div className="roles">Role: {item.role}</div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ProjectDataAboutCardComponent;
