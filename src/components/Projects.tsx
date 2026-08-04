import { projects } from '@/data';
import { Reveal } from '@/components/Reveal';
import { ArrowUpRight } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-8 bg-teal-400/60" />
          Projects
        </span>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="heading mt-3">
          Things I&apos;ve <span className="text-gradient">built</span>.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 120} as="article">
            <div className="card-surface group flex h-full flex-col overflow-hidden hover:border-teal-400/30 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${p.image})` }}
                  role="img"
                  aria-label={p.alt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{p.title}</h3>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col gap-3 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                  {p.stack}
                </p>
                <p className="text-sm leading-relaxed text-slate-400">{p.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
