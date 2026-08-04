import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

type Field = 'name' | 'email' | 'message';
type FormState = Record<Field, string>;

const initialForm: FormState = { name: '', email: '', message: '' };

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
    setForm(initialForm);
    setTimeout(() => setSent(false), 4000);
  }

  const contactItems = [
    { icon: Mail, label: 'Email', value: 'japneetaries@gmail.com', href: 'mailto:japneetaries@gmail.com' },
    { icon: Phone, label: 'Phone', value: '7065558444', href: 'tel:7065558444' },
    { icon: MapPin, label: 'Location', value: 'New Delhi, India', href: null },
    { icon: Github, label: 'GitHub', value: 'github.com/Japneet2006', href: 'https://github.com/Japneet2006' },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/japneet-singh-084899375',
      href: 'https://linkedin.com/in/japneet-singh-084899375',
    },
  ];

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-teal-400/60 focus:ring-2 focus:ring-teal-400/20 transition-colors';

  return (
    <section id="contact" className="section-shell">
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-8 bg-teal-400/60" />
          Contact
        </span>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="heading mt-3">
          Let&apos;s <span className="text-gradient">connect</span>.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {/* Contact info */}
        <Reveal delay={120}>
          <div className="flex flex-col gap-4">
            {contactItems.map((item) => {
              const content = (
                <div className="card-surface flex items-center gap-4 p-4 hover:border-teal-400/30 transition-colors">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-400/10 text-teal-300">
                    <item.icon size={20} strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {item.label}
                    </p>
                    <p className="text-sm text-white break-words">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={200}>
          <form onSubmit={handleSubmit} className="card-surface flex flex-col gap-4 p-6">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className={inputClass}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className={`${inputClass} resize-none`}
                placeholder="Tell me about your project or opportunity"
              />
            </div>

            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-teal-400 px-5 py-3 text-sm font-semibold text-[#0a0f1c] hover:bg-teal-300 transition-colors"
            >
              <Send size={16} />
              Send Message
            </button>

            {sent && (
              <p className="flex items-center gap-2 text-sm text-teal-300">
                <CheckCircle2 size={16} />
                Thanks! Your message has been recorded.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
