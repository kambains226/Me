import { Github, Linkedin, Mail, FileText, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Software Engineer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full text-center">
        {/* Terminal-style greeting */}
        <div className="font-mono text-emerald-400 text-sm sm:text-base mb-6 animate-pulse">
          <span className="opacity-50">kameron@portfolio:~$</span> ./introduce.sh
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Hello, I'm <span className="text-white">Kameron Bains</span>
        </h1>

        {/* Typing animation */}
        <div className="h-12 sm:h-16 mb-8">
          <p className="font-mono text-2xl sm:text-3xl text-slate-300">
            <span className="text-emerald-400">&lt;</span>
            {displayText}
            <span className="animate-pulse">|</span>
            <span className="text-emerald-400">/&gt;</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Final year Software Engineering student passionate about building elegant solutions to complex problems.
          Turning coffee into code since 2023.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/25"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
            className="px-8 py-3 border-2 border-slate-600 hover:border-emerald-400 hover:text-emerald-400 font-semibold rounded-lg transition-all"
          >
            View Projects
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center">
          {[
            { icon: Github, href: 'https://github.com/kambainss226', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/kameron-bains-b752b7226', label: 'LinkedIn' },
            { icon: FileText, href: '../../cv/Kameron_Bains CV.pdf', label: 'CV' },
            { icon: Mail, href: 'mailto:kambainss226', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all hover:scale-110"
              aria-label={label}
            >
              <Icon className="w-6 h-6 text-slate-400 group-hover:text-emerald-400 transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 hover:text-emerald-400 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
