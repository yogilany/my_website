import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Divider from "./Elements/Divider";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import MoreExp from "./components/MoreExp/MoreExp";
import Story from "./components/Story/Story";
import Feedback from "./components/Feedback/Feedback";
import CurrentWork from "./CurrentWork/CurrentWork";
import Projects from "./components/Projects/Projects";
import { HidingHeader } from "hiding-header-react";
import Contact from "./components/Contact/contact";
import AboutMe from "./components/AboutMe/AboutMe";

const MainPage = () => {
  return (
    <>
      <HidingHeader>
        <Header />
      </HidingHeader>
      <Hero />
      <AboutMe />
      <Experience />
      <Divider />
      <MoreExp />
      <Story />
      <Feedback />
      <CurrentWork />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default MainPage;
