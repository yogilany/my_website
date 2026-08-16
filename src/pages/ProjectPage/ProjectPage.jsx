import React, { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Zoomable from "../../components/ImageLightbox/ImageLightbox";
import "./ProjectPage.css";
import {
  getAdjacentProjects,
  getProjectBySlug,
  projects,
} from "../../data/projects";

const baseChapters = [
  { id: "brief", label: "Brief" },
  { id: "built", label: "Built" },
  { id: "hard", label: "Hard part" },
  { id: "evidence", label: "Evidence" },
  { id: "status", label: "Status" },
];

const ProjectPage = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const { prev, next } = getAdjacentProjects(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const cover = project.media?.cover;
  const shots = project.media?.shots?.filter(Boolean) ?? [];
  const extraSections = project.sections ?? [];
  const briefCopy = Array.isArray(project.brief)
    ? project.brief
    : [project.brief];
  const chapters = [
    baseChapters[0],
    ...extraSections.map((section) => ({
      id: section.id,
      label: section.label,
    })),
    ...baseChapters.slice(1),
  ];

  return (
    <div className={`portfolio-shell dossier-shell accent-${project.accent}`}>
      <Header variant="project" />

      <main className="dossier">
        <header className="dossier-masthead">
          <div className="dossier-masthead-copy">
            <p className="section-kicker">Project dossier</p>
            <p className="dossier-index">
              File {String(projects.findIndex((p) => p.slug === slug) + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </p>
            <h1>
              {project.name}
              {project.nameAr ? (
                <span className="project-name-ar" lang="ar">
                  {project.nameAr}
                </span>
              ) : null}
            </h1>
            <p className="dossier-lede">{project.oneLiner}</p>
            <div className="dossier-meta">
              <span>{project.tag}</span>
              <span>{project.status}</span>
              <span>{project.role}</span>
              <span>{project.timeframe}</span>
            </div>
            <div className="dossier-stack">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="dossier-cover" aria-label={`${project.name} cover`}>
            {project.video ? (
              <a
                className="dossier-video"
                href={project.video.href}
                target="_blank"
                rel="noreferrer"
              >
                <img src={cover || project.media?.cardImage} alt="" />
                <span className="dossier-video-overlay">
                  <span className="project-card-play" />
                  <strong>{project.video.label}</strong>
                  <p>Demo of the automated kitchen on Facebook.</p>
                </span>
              </a>
            ) : cover ? (
              <Zoomable src={cover} alt={`${project.name} cover`} />
            ) : (
              <div className="media-slot">
                <strong>Cover media</strong>
                <p>Drop a hero shot here — UI, diagram, or annotated result.</p>
              </div>
            )}
          </div>
        </header>

        <div className="dossier-body">
          <nav className="dossier-rail" aria-label="Dossier chapters">
            {chapters.map((chapter, index) => (
              <a key={chapter.id} href={`#${chapter.id}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {chapter.label}
              </a>
            ))}
          </nav>

          <div className="dossier-chapters">
            <section className="dossier-chapter" id="brief">
              <p className="dossier-chapter-label">01 · The brief</p>
              <h2>What this is trying to fix.</h2>
              {briefCopy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            {extraSections.map((section, index) => (
              <section
                className="dossier-chapter"
                id={section.id}
                key={section.id}
              >
                <p className="dossier-chapter-label">
                  {String(index + 2).padStart(2, "0")} · {section.label}
                </p>
                <h2>{section.heading}</h2>
                {(section.copy || []).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.items?.length ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="dossier-chapter" id="built">
              <p className="dossier-chapter-label">
                {String(2 + extraSections.length).padStart(2, "0")} · What I built
              </p>
              <h2>Short beats, not a novel.</h2>
              <ul>
                {project.built.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="dossier-chapter" id="hard">
              <p className="dossier-chapter-label">
                {String(3 + extraSections.length).padStart(2, "0")} · The hard part
              </p>
              <h2>Where it got interesting.</h2>
              <p className="dossier-pull">{project.hardPart}</p>
            </section>

            <section className="dossier-chapter" id="evidence">
              <p className="dossier-chapter-label">
                {String(4 + extraSections.length).padStart(2, "0")} · Evidence
              </p>
              <h2>Proof, not vibes.</h2>

              <div className="evidence-grid">
                {shots.length > 0 ? (
                  shots.map((shot) => (
                    <figure key={shot.src || shot}>
                      <Zoomable
                        src={shot.src || shot}
                        alt={shot.alt || `${project.name} evidence`}
                      />
                    </figure>
                  ))
                ) : (
                  (project.mediaWishlist || []).slice(0, 3).map((item) => (
                    <div className="media-slot" key={item}>
                      <strong>Media slot</strong>
                      <p>{item}</p>
                    </div>
                  ))
                )}
              </div>
            </section>

            <section className="dossier-chapter" id="status">
              <p className="dossier-chapter-label">
                {String(5 + extraSections.length).padStart(2, "0")} · Status
              </p>
              <h2>Where it stands now.</h2>
              <p>{project.result}</p>
              {project.links?.length > 0 ? (
                <div className="dossier-links">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      className="text-link"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </section>
          </div>
        </div>

        <nav className="dossier-pager" aria-label="Other projects">
          <Link to={`/projects/${prev.slug}`} className="dossier-pager-link">
            <span>Previous</span>
            <strong>
              {prev.name}
              {prev.nameAr ? ` · ${prev.nameAr}` : ""}
            </strong>
          </Link>
          <Link to="/#projects" className="dossier-pager-home">
            All projects
          </Link>
          <Link to={`/projects/${next.slug}`} className="dossier-pager-link next">
            <span>Next</span>
            <strong>
              {next.name}
              {next.nameAr ? ` · ${next.nameAr}` : ""}
            </strong>
          </Link>
        </nav>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectPage;
