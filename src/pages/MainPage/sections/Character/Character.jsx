import StudioPicture from "../../../../assets/me.webp";
import Zoomable from "../../../../components/ImageLightbox/ImageLightbox";
import { principles } from "../../../../data/home";
import "./Character.css";

const Character = () => {
  return (
    <section className="section character-section">
      <Zoomable src={StudioPicture} alt="Yousef working on creative projects" />
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
  );
};

export default Character;
