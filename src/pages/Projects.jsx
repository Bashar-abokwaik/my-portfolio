
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="projects-page">
      <h1>All Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
