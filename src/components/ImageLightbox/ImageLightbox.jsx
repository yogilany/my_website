import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./ImageLightbox.css";

const MOBILE_QUERY = "(max-width: 860px)";
const ZOOM_MS = 420;

const Zoomable = ({ src, alt, className = "" }) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [overlayMounted, setOverlayMounted] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    const sync = () => setIsMobile(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setOverlayMounted(false);
      setOverlayOpen(false);
      return undefined;
    }

    if (open) {
      setOverlayMounted(true);
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setOverlayOpen(true));
      });
      return () => cancelAnimationFrame(frame);
    }

    setOverlayOpen(false);
    const timer = setTimeout(() => setOverlayMounted(false), ZOOM_MS);
    return () => clearTimeout(timer);
  }, [open, isMobile]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointer = (event) => {
      if (
        event.target.closest(".zoomable.is-open") ||
        event.target.closest(".zoomable-overlay")
      ) {
        return;
      }
      setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  useEffect(() => {
    if (!overlayMounted || !isMobile) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [overlayMounted, isMobile]);

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
      {isMobile
        ? overlayMounted
          ? createPortal(
              <span
                className={`zoomable-overlay${overlayOpen ? " is-open" : ""}`}
                onClick={toggle}
              >
                <img className="zoomable-full" src={src} alt="" />
              </span>,
              document.body
            )
          : null
        : (
          <img className="zoomable-full" src={src} alt="" />
        )}
    </span>
  );
};

export default Zoomable;
