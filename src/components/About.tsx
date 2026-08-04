import { GraduationCap, MapPin, Award } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-8 bg-teal-400/60" />
          About
        </span>
      </Reveal>

      <div className="mt-8 grid gap-12 md:grid-cols-5 md:items-start">
        {/* Text */}
        <Reveal className="md:col-span-3" delay={100}>
          <h2 className="heading">
            Turning ideas into <span className="text-gradient">shippable apps</span>.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-400">
            <p>
              Flutter and Android developer with production experience shipping AI-integrated,
              real-time mobile platforms using Firebase and the Gemini API. Built{' '}
              <span className="font-semibold text-teal-300">ReliefNet</span>, an AI-powered disaster
              relief platform that ranked{' '}
              <span className="font-semibold text-teal-300">
                Top 106 out of 85,000+ teams nationally
              </span>{' '}
              at the Google Solution Challenge 2026.
            </p>
            <p>
              Currently pursuing a B.Tech in Computer Science &amp; Engineering (CGPA 8+) at Guru
              Tegh Bahadur Institute of Technology (GTBIT), GGSIPU, New Delhi (2024–2028).
            </p>
          </div>

          {/* Quick facts */}
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-400/10 text-teal-300">
                <GraduationCap size={18} />
              </span>
              B.Tech CSE · GTBIT, GGSIPU
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-400/10 text-teal-300">
                <Award size={18} />
              </span>
              CGPA 8+ · 2024–2028
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-400/10 text-teal-300">
                <MapPin size={18} />
              </span>
              New Delhi, India
            </li>
          </ul>
        </Reveal>

        {/* Image */}
        <Reveal className="md:col-span-2" delay={200}>
          <div className="card-surface overflow-hidden">
            <div
              className="h-64 w-full bg-cover bg-center sm:h-72"
              style={{
                backgroundImage:
                  'url(https://images.pexels.com/photos/20694602/pexels-photo-20694602.png?auto=compress&cs=tinysrgb&h=650&w=940)',
              }}
              role="img"
              aria-label="Smartphone showing code on the display"
            />
            <div className="p-5">
              <p className="text-sm font-semibold text-white">Mobile-first engineering</p>
              <p className="mt-1 text-xs text-slate-400">
                Flutter · Firebase · Gemini AI · native Android
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
