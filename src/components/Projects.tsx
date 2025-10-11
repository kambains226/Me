import { ExternalLink, Github, Code2, Sparkles, Shield } from "lucide-react";

export default function Projects() {
  const featuredProject = {
    title: "StepUp Gamified Fitness App",
    description:
      "A cross-platform fitness app built to motivate users to stay active through XP levels, streaks, and gamified progress rings.",
    longDescription: [
      "Developed with TypeScript and React Native, integrated Firebase for authentication, Firestore for user data, and Expo for deployment.",
      "Connected with Google Fit and Apple HealthKit APIs to track real-time steps and calories.",
      "Followed agile methodology using iterative sprints and user-centred design principles.",
    ],
    technologies: ["TypeScript", "React Native", "Firebase", "Expo", "Google Fit API", "Apple HealthKit"],
    github: "https://github.com/kambains226", 
    status: "Active Development",
  };

  const otherProjects = [
    {
      title: "CLI AI Agent",
      description:
        "A Python-based command-line AI assistant using the Gemini API to automate tasks, parse commands, and respond to natural language prompts.",
      technologies: ["Python", "Gemini API", "Command Parsing", "Automation"],
      github: "https://github.com/kambains226",
    },
    {
      title: "Password Manager CLI",
      description:
        "A secure local password manager built in Python using Fernet encryption and PBKDF2 hashing for key derivation. Stores credentials safely in a local JSON vault.",
      technologies: ["Python", "Fernet", "PBKDF2", "JSON"],
      github: "https://github.com/kambains226/Password_Manager",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "This website  built using React, TypeScript, and Tailwind CSS. Hosted on AWS S3 for scalable static hosting, showcasing projects and experience interactively.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "AWS S3"],
      github: "https://github.com/kambains226/Me",
    },
  ];

  return (
    <section id="projects" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="font-mono text-emerald-400 mb-2 flex items-center gap-2">
            <span className="text-slate-500">//</span> 03. Projects
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            <span className="text-emerald-400">&lt;</span>
            Projects
            <span className="text-emerald-400">/&gt;</span>
          </h2>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <h3 className="text-2xl font-bold text-white">Featured Project</h3>
          </div>

          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-emerald-500/30 rounded-xl p-8 shadow-2xl shadow-emerald-500/10">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Project info */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-3xl font-bold text-white">
                    {featuredProject.title}
                  </h4>
                  <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/50 rounded-full text-xs font-mono text-emerald-400">
                    {featuredProject.status}
                  </span>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {featuredProject.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {featuredProject.longDescription.map((point, i) => (
                    <li key={i} className="flex gap-2 text-slate-300">
                      <Code2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs font-mono text-emerald-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg transition-all group"
                  >
                    <Github className="w-4 h-4 group-hover:text-emerald-400" />
                    <span>Code</span>
                  </a>
                </div>
              </div>

              {/* Visual side / Code snippet */}
              <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-sm text-slate-400 space-y-2">
                  <div>
                    <span className="text-cyan-400">class</span>{" "}
                    <span className="text-yellow-400">StepUpApp</span> {"{"}
                  </div>
                  <div className="ml-4">
                    <span className="text-purple-400">constructor</span>() {"{"}
                  </div>
                  <div className="ml-8 text-slate-500">// tracking steps...</div>
                  <div className="ml-8">
                    <span className="text-cyan-400">this</span>.goal =
                    <span className="text-orange-400"> 'Stay Active'</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-cyan-400">this</span>.platforms =
                    <span className="text-orange-400"> ['iOS', 'Android']</span>
                  </div>
                  <div className="ml-4">{"}"}</div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="text-emerald-400">{'{'}</span>
            Other Notable Projects
            <span className="text-emerald-400">{'}'}</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h4>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    aria-label="View code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-800/50 border border-slate-700 rounded text-xs font-mono text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

