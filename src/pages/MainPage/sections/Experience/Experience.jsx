import { useLayoutEffect, useRef, useState } from "react";
import Zoomable from "../../../../components/ImageLightbox/ImageLightbox";
import { cincinnatiPhotos, timeline } from "../../../../data/home";
import "./Experience.css";

const Experience = () => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
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

  return (
    <section className="section work-section" id="work">
      <div className="section-heading">
        <p className="section-kicker">Experience</p>
        <h2>What I do for a living.</h2>
      </div>
      <div className="timeline">
        {timeline.map((item) => (
          <article className="timeline-item" key={`${item.role}-${item.org}`}>
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
              July 11 to September 30, 2022. 480 hours. Full stack work across
              the whole software project life cycle, not the tourist version.
            </p>
            <p>
              I shipped enhancements to a Risk Assessment product that helps
              probation officers assess client risk — an applied research
              project with the University of Cincinnati Corrections Institute.
            </p>
            <p>
              Daily work with undergrads and grad students, plus cultural events
              at the university and around the city. Cincinnati was very real.
              So were the dashboards.
            </p>
          </div>
          <div className="cincinnati-photos">
            {cincinnatiPhotos.map((photo) => (
              <figure key={photo.alt}>
                <Zoomable src={photo.image} alt={photo.alt} />
              </figure>
            ))}
          </div>
        </div>
        <div className={`cincinnati-quote${feedbackOpen ? " is-open" : ""}`}>
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
          <div className="cincinnati-quote-panel" aria-hidden={!feedbackOpen}>
            <div className="cincinnati-quote-panel-inner">
              <blockquote>
                <p>
                  Yousef went above and beyond during his internship period by
                  not only tackling the specific requirements set before him,
                  but also by using his extensive experience in design to
                  elevate the rest of the application in the process. He showed
                  a high level of responsibility and ability to manage his own
                  workload, fulfilling his goals/objectives several weeks before
                  they were expected to be completed while simultaneously
                  implementing additions that went far beyond the scope of the
                  original idea. We are grateful to have had Yousef's work
                  ethic, talent, and imaginative mind—if only for a short time.
                  I'm sad to see him go because the dashboards he built,
                  improvements he made, and tools he gave the users are a vast
                  upgrade over the original.
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
  );
};

export default Experience;
