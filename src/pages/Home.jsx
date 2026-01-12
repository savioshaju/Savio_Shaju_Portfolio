import React, { useState, useEffect } from "react";
import ThreeHero from "../components/ThreeHero";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const titles = ["Full-Stack Developer", "AI Enthusiast", "UI/UX Designer"];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    let currentText = "";
    let isDeleting = false;
    let charIndex = 0;
    let timeout;

    const type = () => {
      const fullText = titles[titleIndex];

      if (isDeleting) {
        currentText = fullText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentText = fullText.substring(0, charIndex + 1);
        charIndex++;
      }

      setTypedText(currentText);

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === fullText.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        setTitleIndex((prev) => (prev + 1) % titles.length);
        typeSpeed = 500;
      }

      timeout = setTimeout(type, typeSpeed);
    };

    timeout = setTimeout(type, 100);
    return () => clearTimeout(timeout);
  }, [titleIndex]);

  return (
    <section id="home" className="relative w-full h-screen flex items-center pt-20 overflow-hidden">

    

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030014] via-[#030014]/60 to-transparent z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">

          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <span className="text-cyan-400 text-sm font-medium tracking-wide">Available for Work</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Savio Shaju
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 font-light h-10">
              I am a <span className="text-gradient font-medium">{typedText}</span><span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            Building scalable applications and intelligent systems. I merge robust engineering with thoughtful design to create meaningful digital experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Work
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Home;
