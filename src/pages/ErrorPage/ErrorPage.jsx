import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="portfolio-shell error-page">
      <section className="error-card">
        <p className="section-kicker">404</p>
        <h1>This page wandered off.</h1>
        <p>The URL is wrong, stale, or I deleted it on purpose.</p>
        <Link className="primary-action" to="/">
          Back to the homepage
        </Link>
      </section>
    </div>
  );
};

export default ErrorPage;
