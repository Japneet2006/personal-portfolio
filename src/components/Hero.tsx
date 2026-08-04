import { Github, Linkedin, ChevronDown } from 'lucide-react';
import { ParticleCanvas } from '@/components/ParticleCanvas';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)',
        }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0a0f1c]/85" aria-hidden="true" />

      {/* Aurora blobs */}
      <div
        className="aurora-blob absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-teal-500/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="aurora-blob-2 absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-sky-500/20 blur-[100px]"
        aria-hidden="true"
      />

      {/* Particle network */}
      <ParticleCanvas />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 sm:px-8">
        <div className="flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-teal-400" />
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-300">
            Available for opportunities
          </span>
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
          Japneet{' '}
          <span className="text-gradient">Singh</span>
        </h1>

        <p className="max-w-xl text-lg font-medium text-sky-200 sm:text-xl">
          Flutter &amp; Android Developer
          <span className="mx-2 text-slate-500">|</span>
          AI-Integrated Mobile Applications
        </p>

        <p className="max-w-2xl text-base leading-relaxed text-slate-400">
          Building production-grade, AI-powered mobile platforms with Flutter, Firebase, and Gemini AI
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/Japneet2006"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-colors"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/japneet-singh-084899375"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-teal-400/20 px-6 py-3 text-sm font-semibold text-teal-300 border border-teal-400/40 hover:bg-teal-400/30 transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs text-slate-500 hover:text-teal-300 transition-colors z-10"
        aria-label="Scroll to About"
      >
        <span className="uppercase tracking-widest">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
