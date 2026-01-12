import React from "react";

const About = () => {
  const technicalSkills = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Redux Toolkit", "Framer Motion"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL", "Authentication"],
    },
    {
      category: "AI & Tools",
      skills: ["Python", "PyTorch", "OpenCV", "YOLO", "Git & GitHub", "VS Code"],
    },
  ];

  return (
    <section id="about" className="section relative py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">
          <h2 className="section-title text-white">About Me</h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            I'm a computer science undergrad passionate about building full-stack applications and exploring applied AI.
            My focus is on writing clean, efficient code and solving real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {technicalSkills.map((section, idx) => (
            <div key={idx} className="glass-card p-6">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
                {section.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {section.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300 hover:text-white hover:border-cyan-500 transition-colors">
                    {skill}
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

export default About;
