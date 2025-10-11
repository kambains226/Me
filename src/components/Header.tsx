export default function Header() {
  const links = [
    { name: "CV", href: "/cv.pdf" },
    { name: "GitHub", href: "https://github.com/yourusername" },
    { name: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
  ];

  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-black/40 border-b border-slate-800 z-50">
      <nav className="max-w-4xl mx-auto flex justify-center space-x-8 py-4 text-slate-200 font-medium tracking-wide">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition-all duration-200 hover:drop-shadow-[0_0_10px_#ef4444]"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}

