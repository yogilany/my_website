import "./About.css";

const About = () => {
  return (
    <section className="section intro-section" id="about">
      <div>
        <p className="section-kicker">About</p>
        <h2>Production by day. Side projects after.</h2>
      </div>
      <div className="intro-grid">
        <p>
          I graduated from Cairo University's Faculty of Engineering in Computer
          and Communications Engineering, then went into full-time software
          engineering at{" "}
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
          making videos. The vibe is simple: serious about the craft, unserious
          about pretending software is more glamorous than a well-named variable
          and a passing build.
        </p>
      </div>
    </section>
  );
};

export default About;
