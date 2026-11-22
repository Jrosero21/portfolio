'use client';

import { useState } from 'react';
import { ArrowUpRight, Check, Copy, FileText, Loader2, Mail, MessageCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '@/data/site';
import { sendEmail } from '@/lib/email';
import Reveal from '../Reveal';

type State = { status: 'idle' | 'sending' | 'sent' | 'error'; message?: string };

const field =
  'w-full rounded-xl border border-line bg-bg px-4 py-3 text-fg placeholder:text-faint transition-colors focus:border-accent focus:outline-none';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [state, setState] = useState<State>({ status: 'idle' });
  const [copied, setCopied] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ status: 'sending' });
    const res = await sendEmail(form);
    setState({ status: res.ok ? 'sent' : 'error', message: res.message });
    if (res.ok) setForm({ name: '', email: '', message: '' });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div className="glow pointer-events-none absolute inset-0 rotate-180" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent">Contact</div>
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">Let’s fix the process, then build the system.</h2>
          <p className="text-pretty mt-6 max-w-md text-lg leading-relaxed text-muted">
            Need a reporting platform, a Power BI rollout, or an operations problem an agent should be handling? I take consulting work
            through Rose Analytics and I’m happy to walk through any of the private projects live.
          </p>

          <div className="mt-10 space-y-3">
            {process.env.NEXT_PUBLIC_TWIN_API_URL && (
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event('open-twin'))}
                className="flex w-full items-center justify-between rounded-xl border border-accent/40 bg-accent-soft px-4 py-3.5 text-left transition-colors hover:border-accent"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle size={18} className="text-accent" />
                  Ask my AI twin. It answers instantly.
                </span>
                <ArrowUpRight size={15} className="text-accent" />
              </button>
            )}
            <button
              type="button"
              onClick={copyEmail}
              className="group flex w-full items-center justify-between rounded-xl border border-line bg-surface px-4 py-3.5 text-left transition-colors hover:border-line-strong"
            >
              <span className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                {profile.email}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-faint">
                {copied ? <Check size={14} className="text-ok" /> : <Copy size={14} />} {copied ? 'Copied' : 'Copy'}
              </span>
            </button>
            <div className="grid grid-cols-3 gap-3">
              {[
                { href: profile.linkedin, label: 'LinkedIn', icon: <FaLinkedin size={16} /> },
                { href: profile.github, label: 'GitHub', icon: <FaGithub size={16} /> },
                { href: profile.resume, label: 'Résumé', icon: <FileText size={16} /> },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-line bg-surface px-3 py-3 text-sm transition-colors hover:border-line-strong"
                >
                  {l.icon} {l.label} <ArrowUpRight size={13} className="hidden text-faint sm:block" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="card space-y-4 rounded-2xl p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-muted">Name</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={field}
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-muted">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={field}
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-sm text-muted">Message</span>
              <textarea
                required
                name="message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${field} resize-y`}
                placeholder="What are you working on?"
              />
            </label>
            <button
              type="submit"
              disabled={state.status === 'sending'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-accent-ink transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {state.status === 'sending' ? <Loader2 size={18} className="animate-spin" /> : null}
              {state.status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <p
              role="status"
              aria-live="polite"
              className={`min-h-5 text-center text-sm ${state.status === 'error' ? 'text-warn' : 'text-ok'}`}
            >
              {state.message}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
