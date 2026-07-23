import { useParams, Navigate } from "react-router-dom";
import { projects } from "../data/projects";
import Slider from "../components/Slider";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === Number(projectId));

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  // Function to split description into paragraphs if it's a string
  function projectDescription(description) {
    if (typeof description === "string") {
      return description.split(".").map((para, index) => (
        <p key={index} className="project-description">
          {para.trim() && para.trim() + "."}
        </p>
      ));
    }
    return description;
  }

  return (
    <div className="project-details-container">
      <h1 className="project-title">{project.name}</h1>

      <Slider images={project.images} />

      <h2 className="section-title">Project Info</h2>
      <p className="project-info">{project.info}</p>
      {project.demo && (
        <div className="project-demo">
          <h2 className="section-title">Demo</h2>
          <p>
            Customer Store:{" "}
            <a href={project.demo.CustomerStore} target="_blank">
              {project.demo.CustomerStore}
            </a>
          </p>
          <p>Admin Email: <span>{project.demo.Admin.email}</span></p>
          <p>Admin Password: <span>{project.demo.Admin.password}</span></p>
        </div>
      )}
      <h2 className="section-title">Description</h2>
      {projectDescription(project.description)}

      <div className="project-links">
        <a href={project.liveDemo} target="_blank" className="btn-demo">
          Live Demo
        </a>
        <a href={project.repoLink} target="_blank" className="btn-repo">
          Source Code
        </a>
      </div>
    </div>
  );
}
