import React from "react";
import SketchText from "../components/SketchText";

const About = () => {
  const technicalSkills = [
    {
      category: "Frontend",
      items: [
        "React",
        "JavaScript",
        "HTML5 & CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Redux Toolkit",
        "React Router DOM",
        "Responsive Design",
      ],
    },
    {
      category: "Backend & Data",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication",
        "MongoDB",
        "MySQL",
        "CRUD Operations",
      ],
    },
    {
      category: "Tools, AI & Security",
      items: [
        "Git & GitHub",
        "VS Code",
        "Vite",
        "Postman",
        "Render / Vercel",
        "PyTorch",
        "OpenCV",
        "YOLO",
        "Flask",
        "Computer Vision",
        "Burp Suite",
      ],
    },
  ];

  const softSkills = [
    { name: "Problem Solving" },
    { name: "Adaptability" },
    { name: "Continuous Learning" },
    { name: "Time Management" },
    { name: "Team Collaboration" },
    { name: "Communication" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/savio-shaju-81058528a/",
    },
    { name: "GitHub", url: "https://github.com/savioshaju" },
    { name: "Instagram", url: "https://www.instagram.com/_savio_shaju_/" },
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-gradient-to-br from-white via-blue-50 to-pink-50 border border-neutral-900 before:content-[''] before:absolute before:inset-0 before:border before:border-neutral-900 before:translate-x-[1px] before:translate-y-[1px] before:pointer-events-none px-4 sm:px-6 py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-20">
        {/* HEADER */}
        <div className="text-start space-y-4 md:space-y-6">
          <div className="accent-line inline-block">
            <SketchText text="About Me" size={window.innerWidth < 640 ? 36 : 48} />
          </div>
          <p className="text-neutral-700 max-w-2xl text-base sm:text-lg font-normal">
            CS undergrad focused on building practical, scalable software systems.
          </p>
        </div>

        {/* BIO */}
        <div className="max-w-3xl space-y-4 text-neutral-700 leading-relaxed font-normal accent-line text-sm sm:text-base">
          <p>
            I am a Computer Science undergraduate with a strong interest in full-stack
            development and applied artificial intelligence.
          </p>
          <p>
            Through hands-on projects, I have worked with modern web technologies,
            backend APIs, and computer vision workflows.
          </p>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="px-3 sm:px-4 py-2 border border-neutral-900 bg-white text-xs sm:text-sm font-normal
              hover:bg-neutral-50 hover:border-l-4 hover:border-l-neutral-700 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* SKILLS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* TECH SKILLS */}
          <div className="space-y-6 md:space-y-8">
            <div className="accent-line inline-block">
              <SketchText text="Technical Skills" size={window.innerWidth < 640 ? 28 : 32} />
            </div>

            <div className="space-y-4 md:space-y-6">
              {technicalSkills.map((group, idx) => (
                <div
                  key={idx}
                  className="relative bg-white border border-neutral-900 p-4 sm:p-5
                  before:content-[''] before:absolute before:inset-0 before:border
                  before:border-neutral-900 before:translate-x-[1px]
                  before:translate-y-[1px] before:pointer-events-none hover:border-l-4 hover:border-l-neutral-700 transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
                    boxShadow: '2px 2px 0 rgba(17, 24, 39, 0.06), 0 1px 2px rgba(17, 24, 39, 0.03)'
                  }}
                >
                  <h4 className="text-neutral-900 font-normal mb-3 text-sm sm:text-base">
                    {group.category}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-normal
                        border border-neutral-900 bg-white hover:bg-neutral-50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SOFT SKILLS */}
          <div className="space-y-6 md:space-y-8">
            <div className="accent-line inline-block">
              <SketchText text="Soft Skills" size={window.innerWidth < 640 ? 28 : 32} />
            </div>

            <div className="space-y-2 sm:space-y-3">
              {softSkills.map((skill, i) => (
                <div
                  key={i}
                  className="card flex justify-between items-center p-4"
                >
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
