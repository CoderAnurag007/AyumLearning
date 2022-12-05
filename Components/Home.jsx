import React from "react";
import Certificate from "./Certificate/Certificate";
import Course from "./Course/Course";
import Faq from "./Faqs/Faq";
import Footer from "./Footer/Footer";
import Land from "./LandPage/Land";
import Nav from "./Navbar/Nav";
import Team from "./Team/Team";

const HomeComp = () => {
  return (
    <>
      <Nav />
      <Land />
      <Course />
      <Certificate />
      <Faq />
      <Team />
      <Footer />
    </>
  );
};

export default HomeComp;
