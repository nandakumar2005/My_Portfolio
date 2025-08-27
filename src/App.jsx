import React, { useRef } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Certificates from "./Components/Certificates";

const App = () => {
  // Create references for sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const certificatesRef = useRef(null);


  // Function to scroll to the selected section
  const handleScroll = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Pass handleScroll function and refs to Navbar */}
      <Navbar
        handleScroll={handleScroll}
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        resumeRef={resumeRef}
        projectsRef={projectsRef}
        certificatesRef = {certificatesRef}
      />

      {/* Attach refs inside the divs of each section */}
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={resumeRef}>
        <Resume />
      </div>
      <div ref={projectsRef}>
      <Projects />
      </div>
      <div ref={certificatesRef}>
      <Certificates />
      </div>
      <Footer handleScroll={handleScroll} homeRef={homeRef} />
      </>
  );
};

export default App;
