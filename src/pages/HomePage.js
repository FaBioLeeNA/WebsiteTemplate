import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Summary from "../components/Summary";

const HomePage = () => {
  return (
    <>
      <Main></Main>
      <About></About>
      <Summary></Summary>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
};

export default HomePage;
