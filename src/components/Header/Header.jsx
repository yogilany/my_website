import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Resume from "../../assets/Yousef_Gilany_Resume.pdf";
import "./Header.css";

const COMPACT_AFTER = 48;
const DIRECTION_THRESHOLD = 24;
const MOBILE_QUERY = "(max-width: 860px)";

const Header = ({ variant = "home" }) => {
  const [isCompact, setIsCompact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const projectsHref = variant === "project" ? "/#projects" : "#projects";

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    let lastY = window.scrollY;
    let accumulated = 0;
    setIsMobile(media.matches);

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;

      if (!media.matches) {
        setIsCompact(false);
        setIsMenuOpen(false);
        accumulated = 0;
        return;
      }

      if (y <= COMPACT_AFTER) {
        setIsCompact(false);
        accumulated = 0;
        return;
      }

      if ((accumulated > 0 && delta < 0) || (accumulated < 0 && delta > 0)) {
        accumulated = 0;
      }
      accumulated += delta;

      if (accumulated > DIRECTION_THRESHOLD) {
        setIsCompact(true);
        accumulated = 0;
      } else if (accumulated < -DIRECTION_THRESHOLD) {
        setIsCompact(false);
        accumulated = 0;
      }
    };

    const onMediaChange = () => {
      lastY = window.scrollY;
      accumulated = 0;
      setIsMobile(media.matches);
      if (!media.matches) {
        setIsCompact(false);
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    media.addEventListener("change", onMediaChange);
    return () => {
      window.removeEventListener("scroll", onScroll);
      media.removeEventListener("change", onMediaChange);
    };
  }, []);

  const headerClass = [
    "site-header",
    isCompact ? "is-compact" : "",
    isMenuOpen ? "is-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass}>
      <div className="site-header-inner">
        <Link className="brand-mark" to="/" aria-label="Yousef Gilany home">
          YG
        </Link>
        <nav
          id="site-nav"
          aria-label="Primary navigation"
          aria-hidden={isMobile && !isMenuOpen}
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="nav-panel">
            <Link to="/#about">About</Link>
            <Link to="/#work">Experience</Link>
            <Link to={projectsHref}>Projects</Link>
            <Link to="/#campus">Campus</Link>
            <Link to="/#life">Life</Link>
            <Link to="/#contact">Contact</Link>
          </div>
        </nav>
        <div className="header-actions">
          <a
            className="resume-link"
            href={Resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="site-nav"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
