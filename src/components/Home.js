import React from "react";
import About from "./About";
import Contact from "./Contact";
import Main from "./Main";
import Projects from "./Projects";
import Summary from "./Summary";

const Home = () => {
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

export default Home;
