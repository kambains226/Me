
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Python Student Support",
      company: "The University of Northampton",
      location: "Northampton, UK",
      period: "Oct 2025 – Present",
      description: [
        "Delivered one-to-one and group tutoring sessions to help students debug and understand Python programming concepts, improving their coding confidence and problem-solving ability.",
        "Explained logic structures, functions, and algorithms using clear, practical examples to strengthen students’ foundational programming skills.",
        "Resolved issues independently and supported students in developing self-sufficiency in debugging and testing.",
      ],
      technologies: ["Python", "Linux", "Education", "Mentorship"],
    },
    {
      title: "Software Engineering Intern",
      company: "BT Group",
      location: "Birmingham, UK",
      period: "April 14–18, 2025",
      description: [
        "Developed a QR code ticket validation system using Raspberry Pi, Linux, and JSON, improving event entry efficiency and reliability within an agile team environment.",
        "Engineered modular system components using microservices and TOML configuration to enhance flexibility.",
        "Collaborated in sprint meetings to plan features, track progress, and communicate concise technical updates.",
        "Utilized Git for version control, improving maintainability and scalability of internal systems.",
      ],
      technologies: ["Raspberry Pi", "Linux", "TOML", "Git", "Agile"],
    },
    {
      title: "Hackathons & Challenges",
      company: "The University of Northampton",
      location: "Northampton, UK",
      period: "2025",
      description: [
        "🏆 Triad Challenge: Designed and implemented a GP booking system in PHP during an agile two-day sprint, presenting to industry professionals and securing 1st place.",
        "Access Group Challenge: Built a supplier data platform integrating PHP and REST APIs, applying agile methodologies to deliver a data-driven solution with positive industry feedback.",
        "Toru Challenge: Developed an e-commerce engagement ring browsing website using PHP, collaborating in an agile team to deliver a polished prototype and win 1st place.",
      ],
      technologies: ["PHP", "REST API", "MySQL", "Agile"],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="font-mono text-emerald-400 mb-2 flex items-center gap-2">
            <span className="text-slate-500">//</span> 02. Experience
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            <span className="text-emerald-400">&lt;</span>
            Experience
            <span className="text-emerald-400">/&gt;</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-cyan-500 to-blue-500"></div>

          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 sm:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-8 top-6 w-4 h-4 -translate-x-1/2 rounded-full bg-emerald-500 border-4 border-slate-950 shadow-lg shadow-emerald-500/50"></div>

                {/* Card */}
                <div className="group bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {exp.title}
                      </h3>
                      <Briefcase className="w-5 h-5 text-emerald-400 hidden sm:block" />
                    </div>
                    <div className="text-emerald-400 font-semibold text-lg mb-3">
                      {exp.company}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-slate-300 leading-relaxed"
                      >
                        <ChevronRight className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs font-mono text-emerald-400 hover:border-emerald-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="text-emerald-400">{'{'}</span>
            Education
            <span className="text-emerald-400">{'}'}</span>
          </h3>
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-emerald-500/50 transition-all">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-xl font-bold text-white">
                Bachelor of Software Engineering
              </h4>
              <div className="text-emerald-400 font-mono text-sm hidden sm:block">
                2023 - 2026
              </div>
            </div>
            <div className="text-emerald-400 font-semibold mb-3">
              The University of Northampton
            </div>
            <p className="text-slate-300 mb-3">
              Final-year Software Engineering student focusing on full-stack
              development, software architecture, and AI-driven solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Full Stack Development",
                "Cloud Computing",
                "AI & Machine Learning",
                "Software Design",
                "Agile Development",
              ].map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs text-slate-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

