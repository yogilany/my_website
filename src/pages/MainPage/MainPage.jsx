import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ActTeamPhoto from "../../assets/act1.webp";
import ActWorkshopPhoto from "../../assets/act2.webp";
import ActStagePhoto from "../../assets/act3.webp";
import StatYearsImage from "../../assets/card1.webp";
import StatTaImage from "../../assets/card3.webp";
import StatStackImage from "../../assets/image2.webp";
import InternshipTeamPhoto from "../../assets/int1.webp";
import InternshipOfficePhoto from "../../assets/int2.webp";
import ItscPhoto from "../../assets/ITSC.webp";
import LinkPhoto from "../../assets/link.webp";
import StudioPicture from "../../assets/me.webp";
import ParachutePhoto from "../../assets/para.webp";
import ParachutePhotoTwo from "../../assets/para2.webp";
import ParamotorPhoto from "../../assets/paramotor.webp";
import SupportFinityPhoto from "../../assets/sf.webp";
import SkydivingPhoto from "../../assets/skudivng.webp";
import TaPhoto from "../../assets/ta.webp";
import TeaCup from "../../assets/tea.svg";
import TravelPhoto from "../../assets/travel.webp";
import FilmStill from "../../assets/video.webp";
import ProfilePicture from "../../assets/yousef_gilany.webp";
import Resume from "../../assets/Yousef_Gilany_Resume.pdf";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Zoomable from "../../components/ImageLightbox";
import { projects } from "../../data/projects";

const stats = [
  {
    title: "+2 years",
    copy: "of experience as a software engineer, plus 2 years of internships across 3 companies",
    image: StatYearsImage,
    alt: "Reaction still for years of software engineering",
  },
  {
    title: "Full stack",
    copy: "React, Node, Express, Angular, Spring Boot, Flutter · C/C++, Python · SQL, MySQL, MongoDB, PostgreSQL · GCP",
    image: StatStackImage,
    alt: "Split still of full-stack work, left and right",
    imageCaptions: ["Backend engineer", "Frontend engineer"],
  },
  {
    title: "TA mode",
    copy: "Taught Languages & Compilers, Programming Techniques, and Software Engineering",
    image: StatTaImage,
    alt: "Reaction still for teaching assistant work",
    tutorialUrl: "https://youtu.be/Ddg59fk_Pfs?si=yFwqKHfB9ajJbtz3",
    tutorialLabel: "Watch a tutorial",
  },
];

const stack = [
  "C/C++",
  "JavaScript",
  "Python",
  "Java",
  "Dart",
  "HTML",
  "CSS",
  "SASS",
  "React.js",
  "Node.js",
  "Express.js",
  "Angular",
  "Spring Boot",
  "Flutter",
  "SQL",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "GCP",
  "Azure",
];

const timeline = [
  {
    role: "Software Engineer",
    org: "SupportFinity",
    time: "July 2023 - Present",
    copy: "Two years of production work: building and maintaining product features, keeping front-end and back-end conversations civil, and making performance problems explain themselves.",
    image: SupportFinityPhoto,
    alt: "SupportFinity",
  },
  {
    role: "Teaching Assistant",
    org: "Cairo University, Faculty of Engineering",
    time: "Oct 2024 - Jan 2025",
    copy: "Helped students survive Languages, Compilers, Programming Techniques, and Software Engineering. This is where patience, debugging, and drawing weird diagrams became an actual job requirement.",
    image: TaPhoto,
    alt: "Teaching assistant work",
  },
  {
    role: "Frontend Developer Intern",
    org: "Link Development",
    time: "July 2023 - Aug 2023",
    copy: "Built, tested, and integrated UI work with APIs during a very compressed internship sprint. Coffee was involved. Naturally.",
    image: LinkPhoto,
    alt: "Link Development internship",
  },
  {
    role: "Full Stack Developer Intern",
    org: "Information Technology Solutions Center",
    time: "July 2022 - Oct 2022",
    copy: "Worked on risk assessment software, refreshed dashboards, improved responsiveness, and squeezed around 10% more performance out of a key dashboard page.",
    image: ItscPhoto,
    alt: "ITSC internship",
  },
];

const campusPhotos = [
  {
    image: ActTeamPhoto,
    alt: "Honoring the Energia Powered team",
    caption: "Honoring my Energia team",
  },
  {
    image: ActWorkshopPhoto,
    alt: "Onboarding the CUFE Magazine Club team",
    caption: "Magazine Club onboarding",
  },
  {
    image: ActStagePhoto,
    alt: "Last day speech at Energia Powered",
    caption: "Energia farewell speech",
  },
];

const campusStats = [
  {
    value: "6",
    label: "NGOs & student orgs",
    copy: "IEEE WIE, IEEE CUSB, CURT, CUFE Student Club, Energia Powered, Teens Club.",
  },
  {
    value: "5 yrs",
    label: "Class representative",
    copy: "Listen, escalate, close the loop. Repeat until graduation.",
  },
  {
    value: "President",
    label: "CUFE Magazine Club",
    copy: "Ran the club, onboarded the team, and kept the magazine from becoming a group chat.",
  },
];

const principles = [
  "I like clean interfaces, but I like honest interfaces more.",
  "I will refactor a confusing function and then emotionally recover.",
  "I can explain a bug to a rubber duck, a teammate, or a classroom.",
  "I care about the boring details because users always find them first.",
  "Five years as class representative taught me how to listen, escalate, and close the loop.",
];

const MainPage = () => {
  const location = useLocation();
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [teaHot, setTeaHot] = useState(false);
  const [teaPour, setTeaPour] = useState(false);
  const quoteToggleRef = useRef(null);
  const quoteLockY = useRef(null);

  useLayoutEffect(() => {
    if (quoteLockY.current == null || !quoteToggleRef.current) return;
    const target = quoteLockY.current;
    const button = quoteToggleRef.current;
    quoteLockY.current = null;

    const keepDown = () => {
      const next = button.getBoundingClientRect().top;
      if (Math.abs(next - target) > 0.5) {
        window.scrollBy(0, next - target);
      }
    };

    keepDown();
    const frame = requestAnimationFrame(keepDown);
    const timers = [80, 200, 420].map((ms) => setTimeout(keepDown, ms));
    return () => {
      cancelAnimationFrame(frame);
      timers.forEach(clearTimeout);
    };
  }, [feedbackOpen]);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <div className="portfolio-shell">
      <Header />

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineer. Cairo.</p>
            <h1>
              I build software that works. Then I clean it so nobody tags me at
              1am.
            </h1>
            <p className="hero-lede">
              I'm Yousef Gilany, a software engineer with two years at{" "}
              <a
                className="text-link"
                href="https://www.linkedin.com/company/supportfinity"
                target="_blank"
                rel="noreferrer"
              >
                SupportFinity
              </a>
              , a computer engineering background, and the kind of personality
              that names side projects{" "}
              <Link className="text-link" to="/projects/mesfar">
                Mesfar
              </Link>
              ,{" "}
              <Link className="text-link" to="/projects/ewsali">
                Ewsali
              </Link>
              , and{" "}
              <Link className="text-link" to="/projects/maazim">
                Maazim
              </Link>{" "}
              because I like building things that don’t come from a Jira ticket.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#work">
                See the grown-up experience
              </a>
              <a
                className="secondary-action"
                href={Resume}
                target="_blank"
                rel="noreferrer"
              >
                Resume, but PDF
              </a>
            </div>
          </div>

          <div className="hero-card" aria-label="Yousef profile snapshot">
            <img src={ProfilePicture} alt="Yousef Gilany" />
            <div className="status-note">
              <span>Current status</span>
              <strong>
                Software Engineer, with an actual life outside work
              </strong>
            </div>
          </div>
        </section>

        <section className="section intro-section" id="about">
          <div>
            <p className="section-kicker">About</p>
            <h2>Production by day. Side projects after.</h2>
          </div>
          <div className="intro-grid">
            <p>
              I graduated from Cairo University's Faculty of Engineering in
              Computer and Communications Engineering, then went into full-time
              software engineering at{" "}
              <a
                className="text-link"
                href="https://www.linkedin.com/company/supportfinity"
                target="_blank"
                rel="noreferrer"
              >
                SupportFinity
              </a>
              . I work across product features, front-end polish, back-end
              integration, performance, and the occasional "why is this null?"
              investigation.
            </p>
            <p>
              Outside work, I still like building side projects, teaching, and
              making videos. The vibe is simple: serious about the craft,
              unserious about pretending software is more glamorous than a
              well-named variable and a passing build.
            </p>
          </div>
        </section>

        <section className="section stats-section" aria-label="Quick facts">
          {stats.map((stat) => (
            <div className="stat-card-wrap" key={stat.title}>
              {stat.tutorialUrl ? (
                <a
                  className="ta-tutorial-arrow"
                  href={stat.tutorialUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={stat.tutorialLabel}
                >
                  <span>{stat.tutorialLabel}</span>
                  <svg viewBox="0 0 72 48" aria-hidden="true" focusable="false">
                    <defs>
                      <marker
                        id="ta-arrow-head"
                        markerWidth="7"
                        markerHeight="7"
                        refX="5.2"
                        refY="3.5"
                        orient="auto"
                      >
                        <path d="M0 0 L7 3.5 L0 7 Z" />
                      </marker>
                    </defs>
                    <path
                      className="ta-arrow-shaft"
                      d="M52 6 C62 18 50 34 16 40"
                      markerEnd="url(#ta-arrow-head)"
                    />
                  </svg>
                </a>
              ) : null}
              <article className="stat-card">
                <div className="stat-card-copy">
                  <strong>{stat.title}</strong>
                  <span>{stat.copy}</span>
                </div>
                <div className="stat-card-media">
                  <Zoomable src={stat.image} alt={stat.alt} />
                  {stat.imageCaptions ? (
                    <div className="stat-split-captions">
                      {stat.imageCaptions.map((caption) => (
                        <p className="stat-split-caption" key={caption}>
                          {caption}
                        </p>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            </div>
          ))}
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading">
            <p className="section-kicker">Experience</p>
            <h2>Professional arc, now with fewer internship disclaimers.</h2>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article
                className="timeline-item"
                key={`${item.role}-${item.org}`}
              >
                <div>
                  <p>{item.time}</p>
                  <h3>{item.role}</h3>
                  <span>{item.org}</span>
                </div>
                <p>{item.copy}</p>
                <Zoomable
                  className="timeline-photo"
                  src={item.image}
                  alt={item.alt}
                />
              </article>
            ))}
          </div>

          <div className="cincinnati-section">
            <div className="section-heading">
              <p className="section-kicker">United States</p>
              <h2>
                My first internship was at{" "}
                <a
                  className="text-link"
                  href="https://cech.uc.edu/schools/it/centers/itsolutionscenter.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  ITSC
                </a>
                , in Cincinnati.
              </h2>
            </div>
            <div className="cincinnati-grid">
              <div className="cincinnati-copy">
                <p>
                  July 11 to September 30, 2022. 480 hours. Full stack work
                  across the whole software project life cycle, not the tourist
                  version.
                </p>
                <p>
                  I shipped enhancements to a Risk Assessment product that helps
                  probation officers assess client risk — an applied research
                  project with the University of Cincinnati Corrections
                  Institute.
                </p>
                <p>
                  Daily work with undergrads and grad students, plus cultural
                  events at the university and around the city. Cincinnati was
                  very real. So were the dashboards.
                </p>
              </div>
              <div className="cincinnati-photos">
                <figure>
                  <Zoomable
                    src={InternshipOfficePhoto}
                    alt="ITSC team in the Cincinnati office"
                  />
                </figure>
                <figure>
                  <Zoomable
                    src={InternshipTeamPhoto}
                    alt="ITSC intern group photo outdoors"
                  />
                </figure>
              </div>
            </div>
            <div
              className={`cincinnati-quote${feedbackOpen ? " is-open" : ""}`}
            >
              <button
                type="button"
                className="cincinnati-quote-toggle"
                aria-expanded={feedbackOpen}
                ref={quoteToggleRef}
                onClick={() => {
                  if (quoteToggleRef.current) {
                    quoteLockY.current =
                      quoteToggleRef.current.getBoundingClientRect().top;
                  }
                  setFeedbackOpen((open) => !open);
                }}
              >
                <p className="cincinnati-quote-flag">Read this first</p>
                <h3>This was my supervisor evaluation.</h3>
                <span className="cincinnati-quote-meta">
                  Paul Wilson · Software Applications Developer
                </span>
                <span className="cincinnati-quote-cta">
                  <span className="cta-open">Open to read it →</span>
                  <span className="cta-close">Hide evaluation ↑</span>
                </span>
              </button>
              <div
                className="cincinnati-quote-panel"
                aria-hidden={!feedbackOpen}
              >
                <div className="cincinnati-quote-panel-inner">
                  <blockquote>
                    <p>
                      Yousef went above and beyond during his internship period
                      by not only tackling the specific requirements set before
                      him, but also by using his extensive experience in design
                      to elevate the rest of the application in the process. He
                      showed a high level of responsibility and ability to
                      manage his own workload, fulfilling his goals/objectives
                      several weeks before they were expected to be completed
                      while simultaneously implementing additions that went far
                      beyond the scope of the original idea. We are grateful to
                      have had Yousef's work ethic, talent, and imaginative
                      mind—if only for a short time. I'm sad to see him go
                      because the dashboards he built, improvements he made, and
                      tools he gave the users are a vast upgrade over the
                      original.
                    </p>
                    <footer>
                      <strong>Paul Wilson</strong>
                      <span>Software Applications Developer</span>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="section-kicker">Projects</p>
            <h2>
              Personal projects, academic experiments, and other evidence that I
              do this voluntarily.
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

        <section className="section stack-section" id="stack">
          <div>
            <p className="section-kicker">Stack</p>
            <h2>Tools I use when the problem refuses to solve itself.</h2>
          </div>
          <div className="stack-list">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section campus-section" id="campus">
          <div className="section-heading">
            <p className="section-kicker">Campus life</p>
            <h2>
              Extra-curricular activities: the unofficial major nobody puts on
              the diploma.
            </h2>
          </div>
          <p className="campus-lede">
            As a student I was deeply involved in campus life: organizing
            events, volunteering, joining clubs, and treating student activities
            like a second full-time job. Five years as class representative
            taught me how to listen, escalate, and close the loop. These photos
            are the receipts.
          </p>
          <div className="campus-photos">
            {campusPhotos.map((photo) => (
              <figure key={photo.caption}>
                <Zoomable src={photo.image} alt={photo.alt} />
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="campus-stats">
            {campusStats.map((stat) => (
              <article className="campus-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <p>{stat.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section life-section" id="life">
          <div className="section-heading">
            <p className="section-kicker">Off the clock</p>
            <h2>
              I love filmmaking, traveling, and hobbies that make gravity feel
              optional.
            </h2>
          </div>
          <div className="life-grid">
            <article className="life-film">
              <div className="life-film-media">
                <Zoomable
                  src={FilmStill}
                  alt="Filmmaking still from Yousef's work"
                />
                <a
                  className="life-play"
                  href="https://www.youtube.com/watch?v=9W1t6_ICNZc"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Watch the film"
                  onClick={(event) => event.stopPropagation()}
                >
                  ▶
                </a>
              </div>
              <div className="life-film-copy">
                <span>Filmmaking</span>
                <h3>I shoot and cut with a camera.</h3>
                <p>Tap the still to zoom, or hit play to watch.</p>
              </div>
            </article>
            <article className="life-card life-travel">
              <span>Traveling</span>
              <h3>New cities, new food, same suitcase panic.</h3>
              <p>
                I like being somewhere I have to look up. Maps, trains, bad
                translations, the good kind of lost.
              </p>
              <Zoomable
                className="life-zoom"
                src={TravelPhoto}
                alt="Yousef traveling"
              />
            </article>
            <article className="life-card life-adrenaline">
              <span>Adrenaline</span>
              <h3>Skydiving. Parachuting. Paramotor. Yes, on purpose.</h3>
              <p>
                If it involves a harness, a countdown, and a slightly unwise
                grin, I am probably already in line.
              </p>
              <div className="life-adrenaline-photos">
                <figure>
                  <Zoomable
                    className="life-zoom"
                    src={SkydivingPhoto}
                    alt="Skydiving"
                  />
                  <figcaption>Skydiving</figcaption>
                </figure>
                <figure>
                  <Zoomable
                    className="life-zoom"
                    src={ParachutePhoto}
                    alt="Parachuting"
                  />
                  <figcaption>Parachuting</figcaption>
                </figure>
                <figure>
                  <Zoomable
                    className="life-zoom"
                    src={ParachutePhotoTwo}
                    alt="Parachuting"
                  />
                  <figcaption>Parachuting</figcaption>
                </figure>
                <figure>
                  <Zoomable
                    className="life-zoom"
                    src={ParamotorPhoto}
                    alt="Paramotor"
                  />
                  <figcaption>Paramotor</figcaption>
                </figure>
              </div>
            </article>
          </div>
        </section>

        <section className="section character-section">
          <Zoomable
            src={StudioPicture}
            alt="Yousef working on creative projects"
          />
          <div>
            <p className="section-kicker">Character</p>
            <h2>Engineer brain, campus-leader stamina, camera-roll problem.</h2>
            <div className="principles">
              {principles.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`contact-section${teaHot ? " is-hot" : ""}${teaPour ? " is-pouring" : ""}`}
          id="contact"
          onMouseMove={(event) => {
            const box = event.currentTarget.getBoundingClientRect();
            const x = (event.clientX - box.left) / box.width - 0.5;
            const y = (event.clientY - box.top) / box.height - 0.5;
            event.currentTarget.style.setProperty("--mx", x.toFixed(3));
            event.currentTarget.style.setProperty("--my", y.toFixed(3));
          }}
          onMouseEnter={() => setTeaHot(true)}
          onMouseLeave={(event) => {
            setTeaHot(false);
            setTeaPour(false);
            event.currentTarget.style.setProperty("--mx", "0");
            event.currentTarget.style.setProperty("--my", "0");
          }}
        >
          <p className="contact-label">Contact me</p>
          <h2>Let’s drink tea and talk.</h2>
          <p className="contact-line">
            Looking to hire, or need something built? The tea is ready.
          </p>

          <button
            type="button"
            className="tea-cup"
            aria-label="Pour the tea, then say hi"
            onMouseEnter={() => setTeaPour(true)}
            onClick={() => setTeaPour((open) => !open)}
          >
            <span className="tea-steam" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>
            <img src={TeaCup} alt="" />
            <span className="tea-splash" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>
          </button>

          <div className="contact-actions">
            <a href="mailto:yogilany@gmail.com">yogilany@gmail.com</a>
            <a href="tel:+201159746101">+2011 597 46 101</a>
            <a
              className="whatsapp-action"
              href="https://wa.me/201159746101"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              className="linkedin-action"
              href="https://www.linkedin.com/in/yousefgilany/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="instagram-action"
              href="https://www.instagram.com/theyousefgilany/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MainPage;
