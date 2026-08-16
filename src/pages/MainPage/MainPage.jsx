import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import About from "./sections/About/About";
import Campus from "./sections/Campus/Campus";
import Character from "./sections/Character/Character";
import Contact from "./sections/Contact/Contact";
import Experience from "./sections/Experience/Experience";
import Hero from "./sections/Hero/Hero";
import Life from "./sections/Life/Life";
import Projects from "./sections/Projects/Projects";
import Stack from "./sections/Stack/Stack";
import Stats from "./sections/Stats/Stats";

const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <div className="portfolio-shell">
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Experience />
        <Projects />
        <Stack />
        <Campus />
        <Life />
        <Character />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
