import Zoomable from "../../../../components/ImageLightbox/ImageLightbox";
import { campusPhotos, campusStats } from "../../../../data/home";
import "./Campus.css";

const Campus = () => {
  return (
    <section className="section campus-section" id="campus">
      <div className="section-heading">
        <p className="section-kicker">Campus life</p>
        <h2>The part school didn’t grade.</h2>
      </div>
      <p className="campus-lede">
        As a student I was deeply involved in campus life: organizing events,
        volunteering, joining clubs, and treating student activities like a
        second full-time job. Five years as class representative taught me how
        to listen, escalate, and close the loop. These photos are the receipts.
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
  );
};

export default Campus;
