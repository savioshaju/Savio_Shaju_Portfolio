import React, { useState, useEffect } from "react";
import ThreeHero from "../components/ThreeHero";
import SketchText from "../components/SketchText";

const Home = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = ["Full-Stack Developer", "AI & ML Enthusiast", "UI/UX Designer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 border border-neutral-900 px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-24 before:content-[''] before:absolute before:inset-0 before:border before:border-neutral-900 before:translate-x-[1px] before:translate-y-[1px] before:pointer-events-none">
      <div className="absolute inset-0 z-0 hidden md:block">
        <ThreeHero />
      </div>

      <div className="relative z-10 w-full min-h-screen flex items-center pt-16 md:pt-0">
        <div className="max-w-2xl space-y-8 w-full">
          <div className="accent-line">
            <SketchText
              text="Savio Shaju"
              size={window.innerWidth < 640 ? 48 : window.innerWidth < 768 ? 56 : 64}
              weight={700}
              color="#111827"
            />
          </div>

          <p className="text-xl sm:text-2xl text-neutral-700">
            CS Undergrad | <span className="font-medium text-neutral-900">{titles[currentTitle]}</span>
          </p>

          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-xl">
            I build scalable applications and intelligent systems that solve real-world problems across full-stack development, AI, and design.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-6">
            <a href="https://drive.google.com" target="_blank" rel="noreferrer" className="btn text-center">
              View Resume
            </a>
            <a href="#contact" className="btn text-center">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
