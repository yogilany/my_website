import Zoomable from "../../../../components/ImageLightbox/ImageLightbox";
import { stats } from "../../../../data/home";
import "./Stats.css";

const Stats = () => {
  return (
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
  );
};

export default Stats;
