import { useEffect, useState } from "react";
import "./ImageLightbox.css";

const Zoomable = ({ src, alt, className = "" }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointer = (event) => {
      if (!event.target.closest(".zoomable.is-open")) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const toggle = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setOpen((value) => !value);
  };

  return (
    <span
      className={`zoomable${open ? " is-open" : ""}${className ? ` ${className}` : ""}`}
      onClick={toggle}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") toggle(event);
      }}
      role="button"
      tabIndex={0}
      aria-label={`Zoom ${alt}`}
      aria-pressed={open}
    >
      <span className="zoomable-clip">
        <img className="zoomable-thumb" src={src} alt={alt} />
      </span>
      <img className="zoomable-full" src={src} alt="" />
    </span>
  );
};

export default Zoomable;
