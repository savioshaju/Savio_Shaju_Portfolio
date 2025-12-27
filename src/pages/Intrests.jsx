import React from "react";
import SketchText from "../components/SketchText";

const Interests = () => {
  const interests = [
    {
      title: "Full-Stack Development",
      description:
        "Designing and building end-to-end web applications with clean architecture and scalable systems.",
      tech: ["React", "Node.js", "MongoDB", "REST APIs"],
    },
    {
      title: "AI & Machine Learning",
      description:
        "Exploring applied AI with a focus on computer vision and intelligent systems.",
      tech: ["PyTorch", "OpenCV", "YOLO", "Computer Vision"],
    },
    {
      title: "UI / UX Design",
      description:
        "Creating intuitive interfaces and cohesive design systems for better usability.",
      tech: ["Figma", "Tailwind CSS", "Bootstrap"],
    },
  ];

  return (
    <section
      id="interests"
      className="relative w-full min-h-screen bg-gradient-to-br from-white via-pink-50 to-purple-50 border border-neutral-900 before:content-[''] before:absolute before:inset-0 before:border before:border-neutral-900 before:translate-x-[1px] before:translate-y-[1px] before:pointer-events-none px-4 sm:px-6 py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-20">
        {/* HEADER */}
        <div className="text-start space-y-4 md:space-y-6">
          <div className="accent-line inline-block">
            <SketchText text="Areas of Focus" size={window.innerWidth < 640 ? 36 : 48} />
          </div>
          <p className="text-neutral-700 max-w-2xl text-base sm:text-lg font-normal">
            Domains and technologies I actively explore and build with.
          </p>
        </div>

        {/* INTEREST CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {interests.map((item, index) => (
            <div
              key={index}
              className="relative bg-white border border-neutral-900 before:content-[''] before:absolute before:inset-0 before:border before:border-neutral-900 before:translate-x-[1px] before:translate-y-[1px] before:pointer-events-none p-5 sm:p-6 space-y-4 hover:border-l-4 hover:border-l-neutral-700 transition-all"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
                boxShadow: '2px 2px 0 rgba(17, 24, 39, 0.06), 0 1px 2px rgba(17, 24, 39, 0.03)'
              }}
            >
              <h3 className="text-base sm:text-lg font-normal text-neutral-900 accent-underline">
                {item.title}
              </h3>

              <p className="text-neutral-700 text-sm font-normal leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {item.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 text-xs font-normal border border-neutral-900 bg-white hover:bg-neutral-50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
