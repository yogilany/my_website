import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Divider from "./components/Elements/Divider";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import MoreExp from "./components/MoreExp/MoreExp";
import Story from "./components/Story/Story";
import Tailblock from "./components/Tailblock/Tailblock";

const MainPage = () => {
  return (
    <>
      <Header />
      <Hero />

      <Experience />
      <Divider />
      <MoreExp />
      <Story />
      <Tailblock />
      <Footer />
    </>
  );
};

export default MainPage;
