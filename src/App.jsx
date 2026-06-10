import React, { useState } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import videoBackground from "../public/assets/background.mp4";
import Footer from "./components/Footer";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const sectionStyle = {
    position: "relative",
    overflow: "hidden",
  };

  const videoStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
  };

  return (
    <div className="font-montserrat">
      <Nav menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <main
        className={`mt-[64px] relative ${menuOpen && "opacity-80"}`}
        style={sectionStyle}
      >
        <video autoPlay loop muted playsInline style={videoStyle}>
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Home />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
