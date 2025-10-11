import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/95 backdrop-blur-sm shadow-lg shadow-slate-900/20' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-xl hover:text-emerald-300 transition-colors"
          >
            <Terminal className="w-6 h-6" />
            <span className="hidden sm:inline">&lt;dev/&gt;</span>
          </button>

          <div className="flex gap-6 font-mono text-sm">
            {[
              { id: 'about', label: 'about()' },
              { id: 'experience', label: 'experience()' },
              { id: 'projects', label: 'projects()' },
              { id: 'contact', label: 'contact()' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-emerald-400 transition-colors hidden sm:block"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
