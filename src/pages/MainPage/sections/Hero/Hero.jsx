import { Link } from "react-router-dom";
import ProfilePicture from "../../../../assets/yousef_gilany.webp";
import Resume from "../../../../assets/Yousef_Gilany_Resume.pdf";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Software Engineer. Cairo.</p>
        <h1>
          I build software that works. Then I clean it so nobody tags me at 1am.
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
          , a computer engineering background, and the kind of personality that
          names side projects{" "}
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
            See the work
          </a>
          <a
            className="secondary-action"
            href={Resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="hero-card" aria-label="Yousef profile snapshot">
        <img src={ProfilePicture} alt="Yousef Gilany" />
        <div className="status-note">
          <span>Current status</span>
          <strong>Software Engineer, with an actual life outside work</strong>
        </div>
      </div>
    </section>
  );
};

export default Hero;
