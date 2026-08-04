import { Github, Linkedin, Terminal } from 'lucide-react';
import { navLinks } from '@/data';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060a14]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between sm:px-8">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors">
          <Terminal size={18} />
          <span className="text-sm font-bold tracking-widest uppercase">Japneet Singh</span>
        </a>

        {/* Nav */}
        <ul className="flex flex-wrap justify-center gap-5">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-xs text-slate-500 hover:text-teal-300 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Japneet2006"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 hover:border-teal-400/40 hover:text-teal-300 transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/japneet-singh-084899375"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 hover:border-teal-400/40 hover:text-teal-300 transition-colors"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>

      <p className="pb-6 text-center text-xs text-slate-600">
        &copy; {new Date().getFullYear()} Japneet Singh. Built with Flutter-developer precision.
      </p>
    </footer>
  );
}
