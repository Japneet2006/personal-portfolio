import { achievements } from '@/data';
import { Reveal } from '@/components/Reveal';
import { Trophy } from 'lucide-react';

export function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden">
      {/* Themed background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/9951077/pexels-photo-9951077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] via-[#0a0f1c]/90 to-[#0a0f1c]" aria-hidden="true" />

      <div className="section-shell relative">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-8 bg-teal-400/60" />
            Achievements
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="heading mt-3">
            Milestones worth <span className="text-gradient">celebrating</span>.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 120}>
              <div className="card-surface group flex h-full items-start gap-4 p-6 hover:border-teal-400/30 transition-colors">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300 group-hover:scale-110 transition-transform">
                  <Trophy size={22} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{a.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
