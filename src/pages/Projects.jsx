import React, { useState } from "react";
import SketchText from "../components/SketchText";

const projects = [
	{
		title: "EduVerse AI",
		role: "Group Project – Frontend Contribution",
		description:
			"Offline-first AI teacher focused on accessibility and resilient education. Contributed to frontend development, state management, UI integration, and offline-first architecture support.",
		stack: "React, Vite, Tailwind CSS, Redux Toolkit, Framer Motion, Node.js, Express.js, PWA",
		live: "https://eduverse-a60j.onrender.com/",
		github: "https://github.com/rishikesh-babu/EduVerse.git",
		category: "group",
	},
	{
		title: "PlanIt",
		role: "Group Project – Frontend Contribution",
		description:
			"Automated event management system with registration, attendance tracking, and certificate generation. Worked on frontend components, dashboard UI, API integration, and seat-limit logic.",
		stack: "React, Tailwind CSS, Node.js, Express.js, MySQL",
		live: "https://planit-adir.onrender.com/",
		github: "https://github.com/rishikesh-babu/PlanIt.git",
		category: "group",
	},
	{
		title: "Turf Booking Platform",
		role: "Full-Stack Development",
		description:
			"Platform for turf booking and player matching with secure authentication, role-based access, and media uploads.",
		stack: "React, Redux Toolkit, Node.js, Express.js, MongoDB",
		live: "https://turf-booking-website-vmb4.vercel.app/",
		github: "https://github.com/savioshaju/Turf-Booking-Website.git",
		category: "fullstack",
	},
	{
		title: "Personal Task Manager",
		role: "Full-Stack Development",
		description:
			"MERN-based task manager with secure authentication and full CRUD functionality for managing daily tasks.",
		stack: "React, Node.js, Express.js, MongoDB, JWT, bcrypt",
		github: "https://github.com/savioshaju/TASK-MANAGER.git",
		category: "fullstack",
	},
	{
		title: "Blogivea",
		role: "Full-Stack Development",
		description:
			"Blog platform with authentication, content management, dynamic rendering, and AI-based content summary.",
		stack: "HTML, CSS, JavaScript, Node.js, Bootstrap",
		live: "https://savioshaju.github.io/Blogivea/",
		github: "https://github.com/savioshaju/Blogivea.git",
		category: "fullstack",
	},
	{
		title: "Food Ordering Website",
		role: "Frontend Development",
		description:
			"Responsive food ordering application with interactive cart and menu management.",
		stack: "React, Tailwind CSS",
		live: "https://food-order-website-swart.vercel.app/",
		github: "https://github.com/savioshaju/Food_order_website.git",
		category: "frontend",
	},
	{
		title: "Gallery App",
		role: "Full-Stack Development",
		description:
			"Media gallery application supporting image and video uploads, grouping, and MongoDB-backed storage.",
		stack: "React, Vite, Tailwind CSS, Node.js, Express.js, MongoDB",
		github: "https://github.com/savioshaju/Gallery-Fourve-Internship.git",
		category: "fullstack",
	},
	{
		title: "Safety Eye",
		role: "AI / Computer Vision Project",
		description:
			"YOLOv8-based workplace safety monitoring system for detecting PPE violations in video streams.",
		stack: "Python, YOLOv8, OpenCV, Flask",
		category: "ai",
	},
	{
		title: "Accent-Based Native Language Identification",
		role: "AI / Machine Learning Project",
		description:
			"Accent classification system using MFCC and HuBERT embeddings with deep learning models.",
		stack: "Python, PyTorch, HuBERT, Flask",
		category: "ai",
	},
];

const categoryConfig = {
	all: { label: "All Projects" },
	fullstack: { label: "Full-Stack" },
	frontend: { label: "Frontend" },
	ai: { label: "AI/ML" },
};

const Projects = () => {
	const [activeFilter, setActiveFilter] = useState("all");
	const [showMore, setShowMore] = useState(false);

	const filteredProjects =
		activeFilter === "all"
			? projects
			: projects.filter((p) => p.category === activeFilter);

	const displayProjects = showMore
		? filteredProjects
		: filteredProjects.slice(0, 6);

	const getCategoryBadge = (category) => {
		const config = categoryConfig[category] || categoryConfig.all;
		return (
			<span className="px-3 py-1 text-xs border border-neutral-900 bg-white">
				{config.label}
			</span>
		);
	};

	const getTechStack = (stack) => {
		return stack.split(", ").map((tech, idx) => (
			<span
				key={idx}
				className="px-3 py-1 text-xs border border-neutral-300 text-neutral-700"
			>
				{tech}
			</span>
		));
	};

	const ProjectCard = ({ project }) => (
		<div className="card">
			<div className="accent-line mb-4">
				<h3 className="text-base sm:text-lg font-medium">{project.title}</h3>
			</div>
			<p className="text-xs sm:text-sm text-neutral-700 mb-4">
				{project.role}
			</p>
			<p className="text-xs sm:text-sm text-neutral-700 mb-4">
				{project.description}
			</p>

			<div className="mb-4">
				<p className="text-xs font-medium mb-2">Tech Stack</p>
				<div className="flex flex-wrap gap-2">{getTechStack(project.stack)}</div>
			</div>

			<div className="flex gap-2 pt-4 border-t border-neutral-200">
				{project.live && (
					<a
						href={project.live}
						target="_blank"
						rel="noopener noreferrer"
						className="btn text-xs p-2"
					>
						Live
					</a>
				)}
				{project.github && (
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						className="btn text-xs p-2"
					>
						Code
					</a>
				)}
			</div>
		</div>
	);

	return (
		<section
			id="projects"
			className="relative w-full min-h-screen bg-gradient-to-br from-white via-blue-50 to-orange-50 border border-neutral-900 before:content-[''] before:absolute before:inset-0 before:border before:border-neutral-900 before:translate-x-[1px] before:translate-y-[1px] before:pointer-events-none px-6 py-24"
		>
			<div className="max-w-7xl mx-auto">
				<div className="accent-line mb-12">
					<SketchText
						text="Projects"
						size={window.innerWidth < 640 ? 36 : 48}
					/>
				</div>

				<div className="flex flex-wrap justify-center gap-2 mb-12">
					{Object.entries(categoryConfig).map(([key, { label }]) => (
						<button
							key={key}
							onClick={() => setActiveFilter(key)}
							className={`btn ${
								activeFilter === key ? "bg-neutral-100" : ""
							}`}
						>
							{label}
						</button>
					))}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{displayProjects.map((project, i) => (
						<ProjectCard key={i} project={project} />
					))}
				</div>

				{filteredProjects.length > 6 && !showMore && (
					<div className="text-center mt-12">
						<button
							onClick={() => setShowMore(true)}
							className="btn"
						>
							View All ({filteredProjects.length})
						</button>
					</div>
				)}

				{showMore && (
					<div className="text-center mt-12">
						<button
							onClick={() => setShowMore(false)}
							className="btn"
						>
							Show Less
						</button>
					</div>
				)}

				<div className="mt-20 pt-12  text-center space-y-6">
					<div className="accent-line inline-block">
						<SketchText
							text="Want to see more?"
							size={window.innerWidth < 640 ? 28 : 32}
						/>
					</div>
					<p className="text-neutral-700">
						Check out my GitHub for more projects and contributions.
					</p>
					<a
						href="https://github.com/savioshaju"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block btn"
					>
						Explore GitHub
					</a>
				</div>
			</div>
		</section>
	);
};

export default Projects;