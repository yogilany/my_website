import { useState } from "react";
import TeaCup from "../../../../assets/tea.svg";
import "./Contact.css";

const Contact = () => {
  const [teaHot, setTeaHot] = useState(false);
  const [teaPour, setTeaPour] = useState(false);

  return (
    <section
      className={`contact-section${teaHot ? " is-hot" : ""}${teaPour ? " is-pouring" : ""}`}
      id="contact"
      onMouseMove={(event) => {
        const box = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width - 0.5;
        const y = (event.clientY - box.top) / box.height - 0.5;
        event.currentTarget.style.setProperty("--mx", x.toFixed(3));
        event.currentTarget.style.setProperty("--my", y.toFixed(3));
      }}
      onMouseEnter={() => setTeaHot(true)}
      onMouseLeave={(event) => {
        setTeaHot(false);
        setTeaPour(false);
        event.currentTarget.style.setProperty("--mx", "0");
        event.currentTarget.style.setProperty("--my", "0");
      }}
    >
      <p className="contact-label">Contact me</p>
      <h2>Let’s drink tea and talk.</h2>
      <p className="contact-line">
        Looking to hire, or need something built? The tea is ready.
      </p>

      <button
        type="button"
        className="tea-cup"
        aria-label="Pour the tea, then say hi"
        onMouseEnter={() => setTeaPour(true)}
        onClick={() => setTeaPour((open) => !open)}
      >
        <span className="tea-steam" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </span>
        <img src={TeaCup} alt="" />
        <span className="tea-splash" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </span>
      </button>

      <div className="contact-actions">
        <a href="mailto:yogilany@gmail.com">yogilany@gmail.com</a>
        <a href="tel:+201159746101">+2011 597 46 101</a>
        <a
          className="whatsapp-action"
          href="https://wa.me/201159746101"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
        <a
          className="linkedin-action"
          href="https://www.linkedin.com/in/yousefgilany/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="instagram-action"
          href="https://www.instagram.com/theyousefgilany/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
    </section>
  );
};

export default Contact;
