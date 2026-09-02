import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      <NavBar />
      <main id="main" className="app-main">
        <section id="home" className="section home-section">
          <Home />
        </section>
        <section id="about" className="section about-section">
          <About />
        </section>
        <section id="skills" className="section skills-section">
          <Skills />
        </section>
        <section id="works" className="section works-section">
          <Works />
        </section>
        <section id="contact" className="section contact-section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
