import React from "react";
import Course from "./Course/Course";
import Footer from "./Footer/footer";
import Land from "./LandPage/Land";
import Nav from "./Navbar/Nav";
import Team from "./Team/Team";

const HomeComp = () => {
  return (
    <>
      <Nav />
      <Land />
      <Course />
      <Team />
      <Footer />
    </>
  );
};

export default HomeComp;
