import { skillCategories } from '@/data';
import { Reveal } from '@/components/Reveal';

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden">
      {/* Subtle bg stripe */}
      <div className="absolute inset-0 bg-white/[0.02]" aria-hidden="true" />

      <div className="section-shell relative">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-8 bg-teal-400/60" />
            Skills
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="heading mt-3">
            The <span className="text-gradient">stack</span> I use.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 60}>
              <div className="card-surface group flex h-full flex-col gap-4 p-5 hover:border-teal-400/30 transition-colors duration-200">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-400/10 text-teal-300 group-hover:bg-teal-400/20 transition-colors">
                    <cat.icon size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="text-sm font-semibold text-white">{cat.title}</h3>
                </div>

                {/* Skill chips */}
                <ul className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 hover:border-teal-400/40 hover:text-teal-300 transition-colors"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
