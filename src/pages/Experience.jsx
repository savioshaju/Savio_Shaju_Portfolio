import React from "react";
import SketchText from "../components/SketchText";

const experiences = [
	{
		role: "AI Virtual Intern",
		company: "Infosys Springboard",
		period: "Sep 2025 – Nov 2025",
		description:
			"Developed a YOLOv8-based PPE detection system for workplace safety.",
	},
	{
		role: "Software Developer Intern",
		company: "Fourve Dimension",
		period: "Jul 2025 – Aug 2025",
		description:
			"Built and maintained the company website using Flask and Jinja.",
	},
	{
		role: "Industrial Training – Cybersecurity",
		company: "NEST Digital",
		period: "Jun 2025 – Jul 2025",
		description:
			"Gained hands-on exposure to cybersecurity fundamentals and secure API design.",
	},
];

const Experience = () => {
	return (
		<section id="experience" className="relative w-full min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50 border border-neutral-900 before:content-[''] before:absolute before:inset-0 before:border before:border-neutral-900 before:translate-x-[1px] before:translate-y-[1px] before:pointer-events-none px-4 sm:px-6 py-16 md:py-24">
			<div className="max-w-6xl mx-auto">
				<div className="accent-line mb-12 md:mb-20">
					<SketchText
						text="Experience"
						size={window.innerWidth < 640 ? 36 : 48}
						weight={700}
					/>
				</div>

				<div className="relative">
					<div className="absolute left-4 sm:left-1/2 top-0 h-full w-[2px] bg-neutral-300 sm:-translate-x-1/2" />

					<div className="flex flex-col gap-12 md:gap-24">
						{experiences.map((exp, idx) => (
							<div
								key={idx}
								className={`relative flex ${
									idx % 2 === 0 ? "justify-start" : "justify-end"
								}`}
							>
								<div className="absolute left-2 sm:left-1/2 top-6 w-3 h-3 rounded-full bg-neutral-700 -translate-x-1/2 border-2 border-white z-10" />
								<div
									className={`w-full sm:w-[45%] card ml-12 sm:ml-0 ${
										idx % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
									}`}
								>
									<p className="text-xs tracking-widest text-neutral-600 mb-2">
										{exp.period}
									</p>
									<h3 className="accent-underline text-base sm:text-xl font-medium text-neutral-900">
										{exp.role}
									</h3>
									<p className="text-xs sm:text-sm text-neutral-700 mt-3">
										{exp.company}
									</p>
									<p className="mt-4 text-xs sm:text-sm text-neutral-700 leading-relaxed">
										{exp.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
