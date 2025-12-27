import React from "react";
import Home from "./Home";
import About from "./About";
import Intrests from "./Intrests";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const Profile = () => {
  return (
    <main className="w-full scroll-smooth">
      <section id="home" className="min-h-screen">
        <Home />
      </section>

      <section id="about" className="min-h-screen">
        <About />
      </section>

      <section id="intrests" className="min-h-screen">
        <Intrests />
      </section>

      <section id="experience" className="min-h-screen">
        <Experience />
      </section>

      <section id="projects" className="min-h-screen">
        <Projects />
      </section>

      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </main>
  );
};

export default Profile;
