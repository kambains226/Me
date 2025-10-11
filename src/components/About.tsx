
import { Code2, Cpu, Brain, Zap } from "lucide-react";

export default function About() {
  const skills = [
    'Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'Kotlin',
    'React', 'React Native', 'Node.js', 'Flask', 'Laravel',
    'Git', 'Docker', 'AWS', 'Firebase', 'Google Cloud Platform', 'Linux', 'Neovim',
    'NumPy', 'pandas', 'PyTorch'
  ];

  const interests = [
    { icon: Code2, text: 'Backend Development' },
    { icon: Brain, text: 'Artificial Intelligence' },
    { icon: Zap, text: 'Clean Code Principles' },
    { icon: Cpu, text: 'System Design & Scalability' },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="font-mono text-emerald-400 mb-2 flex items-center gap-2">
            <span className="text-slate-500">//</span> 01. About
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            <span className="text-emerald-400">&lt;</span>
            About Me
            <span className="text-emerald-400">/&gt;</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main content */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 backdrop-blur-sm">
              <div className="font-mono text-sm text-slate-500 mb-3">{'{'} introduction {'}'}</div>
              <p className="text-slate-300 leading-relaxed mb-4">
                I'm a final-year Software Engineering student at the University of Northampton,
                passionate about coding, problem-solving, and building meaningful projects.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                I take pride in hard work and discipline  constantly striving to learn new
                technologies and improve my craft. In my spare time, I enjoy keeping up to date
                with the latest advancements in software development, AI, and tech innovation.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Outside of tech, I’m dedicated to my fitness journey and enjoy gaming as a creative
                outlet and a way to unwind after coding. </p>
            </div>

            {/* Interests */}
            <div className="grid grid-cols-2 gap-4">
              {interests.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 hover:border-emerald-500/50 transition-colors"
                >
                  <Icon className="w-6 h-6 text-emerald-400 mb-2" />
                  <p className="text-sm text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills section */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 font-mono text-sm text-slate-500">skills.ts</span>
              </div>

              <div className="font-mono text-sm space-y-2">
                <div className="text-slate-500">
                  <span className="text-cyan-400">const</span>{' '}
                  <span className="text-white">skills</span> ={' '}
                  <span className="text-emerald-400">{'{'}</span>
                </div>

                <div className="ml-4 text-slate-300">
                  <span className="text-purple-400">languages</span>: [
                </div>
                <div className="ml-8 flex flex-wrap gap-2">
                  {skills.slice(0, 8).map((skill, index) => (
                    <span key={skill} className="text-orange-400">
                      '{skill}'{index < 7 ? ',' : ''}
                    </span>
                  ))}
                </div>
                <div className="ml-4 text-slate-300">],</div>

                <div className="ml-4 text-slate-300">
                  <span className="text-purple-400">frameworks</span>: [
                </div>
                <div className="ml-8 flex flex-wrap gap-2">
                  {skills.slice(8, 12).map((skill, index) => (
                    <span key={skill} className="text-orange-400">
                      '{skill}'{index < 3 ? ',' : ''}
                    </span>
                  ))}
                </div>
                <div className="ml-4 text-slate-300">],</div>

                <div className="ml-4 text-slate-300">
                  <span className="text-purple-400">tools</span>: [
                </div>
                <div className="ml-8 flex flex-wrap gap-2">
                  {skills.slice(12).map((skill, index) => (
                    <span key={skill} className="text-orange-400">
                      '{skill}'{index < skills.slice(12).length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
                <div className="ml-4 text-slate-300">]</div>
                <div className="text-emerald-400">{'}'}</div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Years Coding', value: '3+' },
                { label: 'GPA', value: '4.0' },
                { label: 'Cups of Coffee', value: '∞' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-center hover:border-emerald-500/50 transition-colors"
                >
                  <div className="text-2xl font-bold text-emerald-400 mb-1">{value}</div>
                  <div className="text-xs text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

