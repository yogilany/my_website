import Zoomable from "../../../../components/ImageLightbox/ImageLightbox";
import { stats } from "../../../../data/home";
import "./Stats.css";

const SketchArrow = ({ markerId, path, viewBox = "0 0 72 48" }) => (
  <svg viewBox={viewBox} aria-hidden="true" focusable="false">
    <defs>
      <marker
        id={markerId}
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
      className="sketch-arrow-shaft"
      d={path}
      markerEnd={`url(#${markerId})`}
    />
  </svg>
);

const Stats = () => {
  return (
    <section className="section stats-section" aria-label="Quick facts">
      <div className="stats-track">
        {stats.map((stat, index) => (
          <div className="stat-card-wrap" key={stat.title}>
            {index === 0 ? (
              <div className="stats-scroll-hint" aria-hidden="true">
                <SketchArrow
                  markerId="scroll-arrow-head"
                  viewBox="0 0 120 36"
                  path="M6 20 C34 6 62 30 102 16"
                />
              </div>
            ) : null}
            {stat.tutorialUrl ? (
              <a
                className="ta-tutorial-arrow"
                href={stat.tutorialUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={stat.tutorialLabel}
              >
                <span>{stat.tutorialLabel}</span>
                <SketchArrow
                  markerId="ta-arrow-head"
                  path="M52 6 C62 18 50 34 16 40"
                />
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
      </div>
    </section>
  );
};

export default Stats;
