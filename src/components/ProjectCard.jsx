import { Link } from "react-router-dom";
export default function ProjectCard({ project }) {
  return (
    <div className="project-card ">
      <Link to={`/projects/${project.id}`} className="project-link">
        <img
          src={project.coverImage}
          alt={project.name}
          className="project-cover"
        />
        <h3 className="project-name">{project.name}</h3>
        <p className="project-info">
          {project.info.split(" ").slice(0, 15).join(" ") + "..."}
        </p>
      </Link>
      <div className="project-links">
        {project.liveDemo && (
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
        {project.repoLink && (
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        )}
      </div>
    </div>
  );
}
