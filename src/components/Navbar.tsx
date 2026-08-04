import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { navLinks } from '@/data';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass =
    'text-sm font-medium text-slate-300 hover:text-teal-300 transition-colors duration-200';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0f1c]/90 shadow-lg shadow-black/40 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors"
        >
          <Terminal size={20} strokeWidth={2} />
          <span className="text-sm font-bold tracking-widest uppercase">Japneet</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={linkClass}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden rounded-full border border-teal-400/60 px-5 py-1.5 text-sm font-semibold text-teal-300 hover:bg-teal-400/10 transition-colors md:inline-flex"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="rounded-md p-2 text-slate-300 hover:text-white md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 border-t border-white/10 bg-[#0a0f1c]/95 px-6 pb-6 pt-4">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-base font-medium text-slate-300 hover:text-teal-300 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex rounded-full border border-teal-400/60 px-5 py-1.5 text-sm font-semibold text-teal-300 hover:bg-teal-400/10 transition-colors"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
