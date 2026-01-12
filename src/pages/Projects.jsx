import React, { useState } from "react";

const projects = [
	{
		title: "EduVerse AI",
		role: "Frontend Architect",
		description: "Offline-first AI education platform. Ensures learning continuity in low-connectivity areas using PWA technologies.",
		stack: ["React", "Vite", "Tailwind", "Redux", "Node"],
		live: "https://eduverse-a60j.onrender.com/",
		github: "https://github.com/rishikesh-babu/EduVerse.git",
		category: "Group",
	},
	{
		title: "PlanIt",
		role: "System Integration",
		description: "Automated event management system handling registration, attendance, and instant certificate generation.",
		stack: ["React", "Express", "MySQL", "Node"],
		live: "https://planit-adir.onrender.com/",
		github: "https://github.com/rishikesh-babu/PlanIt.git",
		category: "Group",

	},
	{
		title: "Turf Booking",
		role: "Full Stack",
		description: "A complete sports venue booking solution with user authentication, slot management, and admin controls.",
		stack: ["React", "Redux", "Node", "MongoDB"],
		live: "https://turf-booking-website-vmb4.vercel.app/",
		github: "https://github.com/savioshaju/Turf-Booking-Website.git",
		category: "Personal",

	},
	{
		title: "Task Manager",
		role: "Full Stack",
		description: "Secure task management API and interface with JWT authentication and CRUD capabilities.",
		stack: ["React", "Node", "MongoDB", "JWT"],
		github: "https://github.com/savioshaju/TASK-MANAGER.git",
		category: "Personal",
	},
	{
		title: "Blogivea",
		role: "Frontend",
		description: "Clean blogging platform with dynamic content rendering and responsive design.",
		stack: ["HTML/JS", "Node", "Bootstrap"],
		live: "https://savioshaju.github.io/Blogivea/",
		github: "https://github.com/savioshaju/Blogivea.git",
		category: "Personal",
	},
	{
		title: "Food Order",
		role: "Frontend",
		description: "Responsive commerce interface with cart logic.",
		stack: ["React", "Tailwind"],
		live: "https://food-order-website-swart.vercel.app/",
		github: "https://github.com/savioshaju/Food_order_website.git",
		category: "Frontend",
	},
	{
		title: "Gallery App",
		role: "Full Stack",
		description: "Persistent media storage solution with MongoDB backing.",
		stack: ["React", "Vite", "Express", "MongoDB"],
		github: "https://github.com/savioshaju/Gallery-Fourve-Internship.git",
		category: "Full Stack",
	},
	{
		title: "Safety Eye",
		role: "AI / ML",
		description: "Computer vision system using YOLOv8 to detect PPE compliance in real-time video feeds.",
		stack: ["Python", "YOLOv8", "OpenCV", "Flask"],
		category: "AI",
	},
	{
		title: "Accent ID",
		role: "Audio ML",
		description: "Native language identification via audio embeddings (HuBERT/MFCC).",
		stack: ["Python", "PyTorch", "HuBERT", "Flask"],
		category: "AI",
		github: "https://github.com/savioshaju/IIIT-H-.git"
	},
];

const Projects = () => {
	return (
		<section id="projects" className="py-24 relative">
			<div className="max-w-7xl mx-auto px-6">

				<div className="mb-16">
					<h2 className="section-title text-white">Featured Projects</h2>
					<p className="text-gray-400">A selection of my work in web development and AI.</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, i) => (
						<div key={i} className="glass-card flex flex-col h-full p-6 group">
							<div className="flex justify-between items-start mb-4">
								<div>
									<h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
									<span className="text-xs font-medium text-cyan-500">{project.role}</span>
								</div>
								<span className={`text-[10px] px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-400`}>
									{project.category}
								</span>
							</div>

							<p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
								{project.description}
							</p>

							<div className="mt-auto space-y-4">
								<div className="flex flex-wrap gap-2">
									{project.stack.map((tech, idx) => (
										<span key={idx} className="text-xs text-gray-500 bg-black/30 px-2 py-1 rounded">
											{tech}
										</span>
									))}
								</div>

								<div className="flex gap-4 pt-4 border-t border-white/5">
									{project.live && (
										<a href={project.live} target="_blank" rel="noreferrer" className="text-sm font-medium text-white hover:text-cyan-400 transition-colors">
											Live Demo ↗
										</a>
									)}
									{project.github && (
										<a href={project.github} target="_blank" rel="noreferrer" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
											GitHub ↗
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>

			</div>
		</section>
	);
};

export default Projects;
