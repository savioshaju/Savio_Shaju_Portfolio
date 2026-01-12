import React from "react";

const Interests = () => {
  const interests = [
    {
      title: "Full-Stack Web",
      description: "Building scalable web ecosystems with modern frameworks like React, Node.js, and cloud/serverless architectures.",
    },
    {
      title: "AI & Machine Learning",
      description: "Developing intelligent agents and computer vision systems using PyTorch and OpenCV.",
    },
    {
      title: "UI/UX Engineering",
      description: "Designing fluid, accessible, and aesthetic user interfaces that delight users.",
    },
  ];

  return (
    <section id="interests" className="section py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">
          <h2 className="section-title text-white">Areas of Focus</h2>
          <p className="text-gray-400">Where I spend most of my time innovating.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {interests.map((item, index) => (
            <div key={index} className="glass-card p-8 hover:bg-white/5 transition-colors group">
              <span className="text-4xl font-bold text-white/5 group-hover:text-cyan-500/10 transition-colors mb-4 block">0{index + 1}</span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
