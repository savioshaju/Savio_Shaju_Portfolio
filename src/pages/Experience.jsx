import React from "react";

const experiences = [
	{
		role: "AI Virtual Intern",
		company: "Infosys Springboard",
		period: "Sep 2025 - Nov 2025",
		desc: "Implemented YOLOv8 models for Personal Protective Equipment (PPE) detection to enhance compliance monitoring.",
	},
	{
		role: "Software Developer Intern",
		company: "Fourve Dimension",
		period: "Jul 2025 - Aug 2025",
		desc: "Developed and optimized backend services using Flask and Jinja2, improving application response times.",
	},
	{
		role: "Industrial Training",
		company: "NEST Digital",
		period: "Jun 2025 - Jul 2025",
		desc: "Focused on cybersecurity fundamentals, conducting vulnerability assessments and securing API endpoints.",
	},
];

const Experience = () => {
	return (
		<section id="experience" className="py-24 relative overflow-hidden">
			<div className="max-w-6xl mx-auto px-6">

				<div className="mb-20 text-center">
					<h2 className="section-title text-white">Experience</h2>
					<p className="text-gray-400 mt-4 max-w-2xl mx-auto">
						My professional journey and internships that have shaped my skills.
					</p>
				</div>

				<div className="relative">
					{/* Vertical Line */}
					<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent -translate-x-1/2" />

					<div className="space-y-12 md:space-y-20">
						{experiences.map((exp, idx) => (
							<div key={idx} className={`relative flex flex-col md:flex-row items-center md:justify-between ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>

								{/* Dot Indicator */}
								<div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#030014] border-2 border-cyan-500 z-10 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

								{/* Spacer for desktop layout */}
								<div className="hidden md:block w-[45%]" />

								{/* Content Card */}
								<div className="w-full md:w-[45%] pl-20 md:pl-0">
									<div className="glass-card p-6 md:p-8 border border-white/5 bg-white/5 rounded-2xl hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 group">
										<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
											<h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
												{exp.role}
											</h3>
											<span className="text-xs font-mono py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 w-fit">
												{exp.period}
											</span>
										</div>

										<p className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
											<span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
											{exp.company}
										</p>

										<p className="text-gray-400 text-sm leading-relaxed">
											{exp.desc}
										</p>
									</div>
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
