import { Link } from "react-router-dom";
import { projects } from "../../../../data/projects";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <p className="section-kicker">Projects</p>
        <h2>
          Personal projects, academic experiments, and other evidence that I do
          this voluntarily.
        </h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <Link
            className="project-card"
            key={project.slug}
            to={`/projects/${project.slug}`}
          >
            {project.media?.cardImage ? (
              <img
                className="project-card-mark"
                src={project.media.cardImage}
                alt=""
              />
            ) : null}
            <span>{project.tag}</span>
            <h3>
              {project.name}
              {project.nameAr ? (
                <span className="project-name-ar" lang="ar">
                  {project.nameAr}
                </span>
              ) : null}
            </h3>
            <p>{project.oneLiner}</p>
            <span className="project-card-cta">Open dossier →</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
