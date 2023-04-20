import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Divider from "./components/Elements/Divider";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import MoreExp from "./components/MoreExp/MoreExp";
import Story from "./components/Story/Story";
import Tailblock from "./components/Tailblock/Tailblock";
import CurrentWork from "./CurrentWork/CurrentWork";
import Intrests from "./components/Intrests/Intrests";
import { HidingHeader } from "hiding-header-react";
import Contact from "./components/Contact/contact";
import AboutMe from "../AboutMe/AboutMe";

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
      <Tailblock />
      <CurrentWork />
      <Intrests />
      <Contact />
      <Footer />
    </>
  );
};

export default MainPage;
