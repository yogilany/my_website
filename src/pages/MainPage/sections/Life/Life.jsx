import FilmStill from "../../../../assets/video.webp";
import ParachutePhoto from "../../../../assets/para.webp";
import ParachutePhotoTwo from "../../../../assets/para2.webp";
import ParamotorPhoto from "../../../../assets/paramotor.webp";
import SkydivingPhoto from "../../../../assets/skudivng.webp";
import TravelPhoto from "../../../../assets/travel.webp";
import Zoomable from "../../../../components/ImageLightbox/ImageLightbox";
import "./Life.css";

const Life = () => {
  return (
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
            <Zoomable src={FilmStill} alt="Filmmaking still from Yousef's work" />
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
            I love planning trips and then actually going. New streets, new
            food, a map I pretend I don’t need.
          </p>
          <Zoomable className="life-zoom" src={TravelPhoto} alt="Yousef traveling" />
        </article>
        <article className="life-card life-adrenaline">
          <span>Adrenaline</span>
          <h3>Skydiving. Parachuting. Paramotor. Yes, on purpose.</h3>
          <p>
            If it involves a harness, a countdown, and a slightly unwise grin, I
            am probably already in line.
          </p>
          <div className="life-adrenaline-photos">
            <figure>
              <Zoomable className="life-zoom" src={SkydivingPhoto} alt="Skydiving" />
            </figure>
            <figure>
              <Zoomable
                className="life-zoom"
                src={ParachutePhoto}
                alt="Parachuting"
              />
            </figure>
            <figure>
              <Zoomable
                className="life-zoom"
                src={ParachutePhotoTwo}
                alt="Parachuting"
              />
            </figure>
            <figure>
              <Zoomable className="life-zoom" src={ParamotorPhoto} alt="Paramotor" />
            </figure>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Life;
